import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface Report {
    title: string
    month: number
    year: number
    description: string
    pdf: string
    slug: string
}

const CONTENT_DIR = path.join(process.cwd(), "content", "reports")

export function getReports(): Report[] {
    if (!fs.existsSync(CONTENT_DIR)) {
        return []
    }

    const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"))

    const reports: Report[] = files.map((file) => {
        const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8")
        const { data } = matter(raw)
        return {
            title: data.title || "",
            month: Number(data.month) || 1,
            year: Number(data.year) || 2025,
            description: data.description || "",
            pdf: data.pdf || "",
            slug: file.replace(/\.md$/, ""),
        }
    })

    // Sort newest first (year desc, then month desc)
    reports.sort((a, b) => b.year - a.year || b.month - a.month)

    return reports
}
