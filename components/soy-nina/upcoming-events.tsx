"use client"

import { useState, useEffect } from "react"
import { MapPin, Clock } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"
import { FALLBACK_EVENTS, CATEGORY_COLORS, MONTH_NAMES, type EventItem } from "@/lib/events-data"

// Static initial value (same on server and client) — show first 3 events sorted by date
const initialEvents = [...FALLBACK_EVENTS].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 3)

export default function UpcomingEvents() {
    const [upcoming, setUpcoming] = useState<EventItem[]>(initialEvents)
    const t = useTranslations("Events")

    useEffect(() => {
        fetch("/api/events")
            .then((res) => res.json())
            .then((data: EventItem[]) => {
                const now = new Date()
                const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`
                const filtered = data
                    .filter((e) => e.date >= todayStr)
                    .sort((a, b) => a.date.localeCompare(b.date))
                    .slice(0, 3)
                if (filtered.length > 0) {
                    setUpcoming(filtered)
                }
            })
            .catch(() => { /* Keep fallback events on error */ })
    }, [])

    if (upcoming.length === 0) return null

    return (
        <section className="w-full py-24 bg-[#fafafa]">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-16 mb-16 items-end">
                    <div>
                        <span className="text-[#4526c9] text-sm font-bold tracking-[0.2em] uppercase">{t("eyebrow")}</span>
                        <h2 className="text-5xl md:text-6xl font-black text-[#140b3f] leading-tight mt-3">
                            {t("title1")}<br />{t("title2")}
                        </h2>
                    </div>
                    <div className="max-w-xl lg:ml-auto">
                        <p className="text-lg text-gray-600 leading-relaxed">{t("description")}</p>
                        <Link href="/eventos" className="inline-flex items-center gap-2 mt-6 text-[#4526c9] font-bold hover:gap-4 transition-all">
                            {t("viewAll")}
                            <span className="text-xl">→</span>
                        </Link>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {upcoming.map((event, i) => {
                        const eventDate = new Date(event.date + "T00:00:00")
                        const dayNum = eventDate.getDate()
                        const monthAbbr = MONTH_NAMES[eventDate.getMonth()].substring(0, 3).toUpperCase()
                        const color = CATEGORY_COLORS[event.category] || "#4526c9"

                        return (
                            <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col" style={{ borderLeft: `4px solid ${color}` }}>
                                <div className="flex items-center gap-4 px-6 py-4" style={{ background: `linear-gradient(135deg, ${color}10, transparent)` }}>
                                    <div className="w-14 h-14 rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: color }}>
                                        <span className="text-xl font-black leading-none">{dayNum}</span>
                                        <span className="text-[9px] font-bold tracking-wider opacity-80">{monthAbbr}</span>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white uppercase tracking-wider" style={{ backgroundColor: color }}>{event.category}</span>
                                    </div>
                                </div>
                                <div className="px-6 pb-6 pt-2 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-[#140b3f] mb-2 group-hover:text-[#4526c9] transition-colors">{event.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{event.description}</p>
                                    <div className="flex flex-col gap-2 text-xs text-gray-500">
                                        <span className="flex items-center gap-1.5"><Clock size={13} className="text-gray-400" />{event.time}</span>
                                        <span className="flex items-center gap-1.5"><MapPin size={13} className="text-gray-400" />{event.location}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
