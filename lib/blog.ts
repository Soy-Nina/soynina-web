import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"

export interface BlogPost {
    title: string
    excerpt: string
    date: string
    author: string
    category: string
    gradient: string
    coverImage: string
    slug: string
    content: string
}

const CONTENT_DIR = path.join(process.cwd(), "content", "blog")

export function getBlogPosts(locale: string): BlogPost[] {
    const dir = path.join(CONTENT_DIR, locale)
    if (!fs.existsSync(dir)) return []

    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"))

    const posts = files.map((file) => {
        const raw = fs.readFileSync(path.join(dir, file), "utf-8")
        const { data } = matter(raw)
        return {
            title: data.title || "",
            excerpt: data.excerpt || "",
            date: data.date || "",
            author: data.author || "",
            category: data.category || "",
            gradient: data.gradient || "from-[#4526c9] to-[#fe35fe]",
            coverImage: data.coverImage || "",
            slug: file.replace(/\.md$/, ""),
            content: "",
        }
    })

    return posts
}

export function getBlogPost(locale: string, slug: string): BlogPost | null {
    const filePath = path.join(CONTENT_DIR, locale, `${slug}.md`)
    if (!fs.existsSync(filePath)) return null

    const raw = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(raw)

    return {
        title: data.title || "",
        excerpt: data.excerpt || "",
        date: data.date || "",
        author: data.author || "",
        category: data.category || "",
        gradient: data.gradient || "from-[#4526c9] to-[#fe35fe]",
        coverImage: data.coverImage || "",
        slug,
        content: marked(content) as string,
    }
}

export function getBlogSlugs(locale: string): string[] {
    const dir = path.join(CONTENT_DIR, locale)
    if (!fs.existsSync(dir)) return []
    return fs
        .readdirSync(dir)
        .filter((f) => f.endsWith(".md"))
        .map((f) => f.replace(/\.md$/, ""))
}
