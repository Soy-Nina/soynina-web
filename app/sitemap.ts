import { MetadataRoute } from "next"
import { getBlogSlugs } from "@/lib/blog"

const BASE_URL = "https://www.soynina.org"

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["es", "en"] as const

  // Static routes — Spanish has no prefix, English uses /en/
  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/quienes-somos", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/programas", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/voluntariado", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/eventos", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/informes", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contacto", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/sostenibilidad", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/politica-de-privacidad", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terminos-de-uso", priority: 0.3, changeFrequency: "yearly" as const },
  ]

  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    const localePrefix = locale === "es" ? "" : `/${locale}`

    // Static pages
    for (const route of staticRoutes) {
      entries.push({
        url: `${BASE_URL}${localePrefix}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      })
    }

    // Blog posts
    const slugs = getBlogSlugs(locale)
    for (const slug of slugs) {
      entries.push({
        url: `${BASE_URL}${localePrefix}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      })
    }
  }

  return entries
}
