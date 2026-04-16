import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface BlogPost {
  title: string
  date: string
  author: string
  category: string
  excerpt: string
  gradient: string
  slug: string
  content: string
}

const CONTENT_DIR = path.join(process.cwd(), "content", "blog")

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return []
  }

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"))

  const posts: BlogPost[] = files.map((file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8")
    const { data, content } = matter(raw)
    return {
      title: data.title || "",
      date: data.date || "",
      author: data.author || "",
      category: data.category || "",
      excerpt: data.excerpt || "",
      gradient: data.gradient || "from-[#4526c9] to-[#fe35fe]",
      slug: file.replace(/\.md$/, ""),
      content: content,
    }
  })

  // Sort by date (assuming ISO format or similar, but current ones are text)
  // For now, we'll just return them. In a real app, we'd want a proper date field.
  return posts
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) {
    return null
  }

  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)

  return {
    title: data.title || "",
    date: data.date || "",
    author: data.author || "",
    category: data.category || "",
    excerpt: data.excerpt || "",
    gradient: data.gradient || "from-[#4526c9] to-[#fe35fe]",
    slug: slug,
    content: parseSimpleMarkdown(content),
  }
}

/**
 * A very simple markdown to HTML parser since we can't install external libraries.
 * Handles headers, bold, lists, and paragraphs.
 */
function parseSimpleMarkdown(md: string): string {
  let html = md
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    .replace(/^\* (.*$)/gim, '<li>$1</li>')
    // Wrap consecutive <li> tags in <ul> (handling potential newlines between them)
    .replace(/((?:<li>.*?<\/li>\s*)+)/gs, (match) => `<ul>${match.trim()}</ul>`)
    // Handle double newlines as paragraphs
    .split(/\n\s*\n/)
    .map(para => {
        if (para.trim().startsWith('<h') || para.trim().startsWith('<ul')) {
            return para;
        }
        return `<p>${para.replace(/\n/g, '<br>')}</p>`;
    })
    .join('\n');

  return html;
}
