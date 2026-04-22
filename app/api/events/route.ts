import { NextResponse } from "next/server"
import { FALLBACK_EVENTS, type EventItem } from "@/lib/events-data"

// Revalidate every 5 minutes
export const revalidate = 300

function formatTime(date: Date): string {
    return date.toLocaleTimeString("es-CR", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    }).toUpperCase()
}

// ---------------------------------------------------------------------------
// Category detection
// ---------------------------------------------------------------------------
// Standard: add one of these hashtags anywhere in the event's description field
// in Microsoft 365 Calendar to set the category explicitly:
//   #Taller  #Festival  #Jornada  #Reunión  #Charla  #Evento
//
// If no hashtag is found, the function falls back to keyword detection in the
// event title (SUMMARY field).
// ---------------------------------------------------------------------------
const VALID_CATEGORIES = ["Taller", "Festival", "Jornada", "Reunión", "Charla", "Evento"] as const
type Category = typeof VALID_CATEGORIES[number]

function extractCategory(rawDescription: string, summary: string): Category {
    // 1. Check for explicit hashtag in raw description (before Teams boilerplate
    //    is stripped, so the tag can appear anywhere in the body).
    //    Matches: #Taller  #taller  #TALLER  #reunion  #Reunión  etc.
    const tagMatch = rawDescription.match(
        /#(taller|festival|jornada|reuni[oó]n|charla|evento)/i
    )
    if (tagMatch) {
        const tag = tagMatch[1].toLowerCase()
        if (tag === "taller")   return "Taller"
        if (tag === "festival") return "Festival"
        if (tag === "jornada")  return "Jornada"
        if (tag === "reunion" || tag === "reunión") return "Reunión"
        if (tag === "charla")   return "Charla"
        if (tag === "evento")   return "Evento"
    }

    // 2. Fallback: keyword match in the event title
    const lower = summary.toLowerCase()
    if (lower.includes("taller"))  return "Taller"
    if (lower.includes("festival")) return "Festival"
    if (lower.includes("jornada")) return "Jornada"
    if (lower.includes("reunión") || lower.includes("reunion")) return "Reunión"
    if (lower.includes("charla"))  return "Charla"
    return "Evento"
}

function unfoldICS(text: string): string {
    // ICS uses line folding: a CRLF followed by a space or tab means continuation.
    // Exchange Server emits \r\r\n instead of spec-compliant \r\n — handle both.
    return text.replace(/\r\r?\n[ \t]/g, "")
}

function parseICSDate(value: string): Date | null {
    // Handle formats: 20260315T090000Z, 20260315T090000, 20260315
    const clean = value.replace(/^.*[:;]/, "").trim()

    if (clean.length === 8) {
        // Date only: YYYYMMDD
        const y = parseInt(clean.substring(0, 4))
        const m = parseInt(clean.substring(4, 6)) - 1
        const d = parseInt(clean.substring(6, 8))
        return new Date(y, m, d)
    }

    if (clean.length >= 15) {
        // Date + time: YYYYMMDDTHHmmss or YYYYMMDDTHHmmssZ
        const y = parseInt(clean.substring(0, 4))
        const m = parseInt(clean.substring(4, 6)) - 1
        const d = parseInt(clean.substring(6, 8))
        const h = parseInt(clean.substring(9, 11))
        const min = parseInt(clean.substring(11, 13))
        const s = parseInt(clean.substring(13, 15))

        if (clean.endsWith("Z")) {
            return new Date(Date.UTC(y, m, d, h, min, s))
        }
        return new Date(y, m, d, h, min, s)
    }

    return null
}

function getPropertyValue(line: string): string {
    // Properties can have parameters: DTSTART;TZID=America/Costa_Rica:20260315T090000
    // We want everything after the first colon
    const colonIndex = line.indexOf(":")
    if (colonIndex === -1) return ""
    return line.substring(colonIndex + 1).trim()
}

// Strip Teams/Outlook auto-generated meeting boilerplate from descriptions.
// Teams appends long separator lines (underscores) and meeting join links
// that are not meaningful to display on the website.
function stripTeamsBoilerplate(text: string): string {
    // Common patterns that signal the start of Teams auto-generated content.
    // These are matched after ICS escape sequences have been decoded to real chars.
    const cutPatterns = [
        /_{5,}/,                           // 5+ underscores separator line
        /Microsoft Teams meeting/i,        // any form of Teams meeting header
        /Join Microsoft Teams/i,
        /Teams Meeting ID:/i,
        /Meeting ID:/i,
        /Need help\?/i,
    ]
    for (const pattern of cutPatterns) {
        const match = text.search(pattern)
        if (match !== -1) {
            text = text.substring(0, match).trim()
        }
    }
    // Collapse multiple newlines left over after stripping
    return text.replace(/\n{3,}/g, "\n\n").trim()
}

function parseICSText(icsText: string): EventItem[] {

    const unfolded = unfoldICS(icsText)
    // Split on \r\r\n (Exchange) or \r\n or \n
    const lines = unfolded.split(/\r\r?\n|\n/)
    const events: EventItem[] = []

    let inEvent = false
    let summary = ""
    let description = ""
    let location = ""
    let dtstart: Date | null = null
    let dtend: Date | null = null

    for (const line of lines) {
        if (line === "BEGIN:VEVENT") {
            inEvent = true
            summary = ""
            description = ""
            location = ""
            dtstart = null
            dtend = null
            continue
        }

        if (line === "END:VEVENT") {
            if (inEvent && dtstart) {
                const dateStr = `${dtstart.getFullYear()}-${String(dtstart.getMonth() + 1).padStart(2, "0")}-${String(dtstart.getDate()).padStart(2, "0")}`

                let time = formatTime(dtstart)
                if (dtend) {
                    time = `${formatTime(dtstart)} – ${formatTime(dtend)}`
                }

                // Unescape ICS text, then strip Teams/Outlook auto-generated boilerplate.
                // Also remove the category hashtag from the displayed description.
                const unescapedDesc = description
                    .replace(/\\n/g, "\n")
                    .replace(/\\,/g, ",")
                    .replace(/\\\\/g, "\\")
                    .replace(/\\;/g, ";")
                    .trim()

                const category = extractCategory(unescapedDesc, summary)

                const cleanDesc = stripTeamsBoilerplate(unescapedDesc)
                    // Remove the hashtag tag itself so it doesn't appear in the card
                    .replace(/#(taller|festival|jornada|reuni[oó]n|charla|evento)/gi, "")
                    .trim()

                const cleanLocation = location
                    .replace(/\\,/g, ",")
                    .replace(/\\\\/g, "\\")
                    .trim()

                events.push({
                    date: dateStr,
                    title: summary.replace(/\\,/g, ",").replace(/\\\\/g, "\\").trim() || "Evento",
                    description: cleanDesc,
                    location: cleanLocation,
                    time,
                    category,
                })
            }
            inEvent = false
            continue
        }

        if (!inEvent) continue

        if (line.startsWith("SUMMARY")) {
            summary = getPropertyValue(line)
        } else if (line.startsWith("DESCRIPTION")) {
            description = getPropertyValue(line)
        } else if (line.startsWith("LOCATION")) {
            location = getPropertyValue(line)
        } else if (line.startsWith("DTSTART")) {
            dtstart = parseICSDate(line)
        } else if (line.startsWith("DTEND")) {
            dtend = parseICSDate(line)
        }
    }

    return events.sort((a, b) => a.date.localeCompare(b.date))
}

export async function GET() {
    const icsUrl = process.env.CALENDAR_ICS_URL

    if (!icsUrl) {
        // No ICS URL configured — return fallback events
        return NextResponse.json(FALLBACK_EVENTS)
    }

    try {
        const response = await fetch(icsUrl, {
            next: { revalidate: 300 }, // Cache for 5 minutes
        })

        if (!response.ok) {
            console.error(`Failed to fetch ICS feed: ${response.status}`)
            return NextResponse.json(FALLBACK_EVENTS)
        }

        const icsText = await response.text()
        const events = parseICSText(icsText)

        if (events.length === 0) {
            // If parsing returned no events, use fallback
            return NextResponse.json(FALLBACK_EVENTS)
        }

        return NextResponse.json(events)
    } catch (error) {
        console.error("Failed to fetch ICS calendar:", error)
        // On error, return fallback events so the site doesn't break
        return NextResponse.json(FALLBACK_EVENTS)
    }
}
