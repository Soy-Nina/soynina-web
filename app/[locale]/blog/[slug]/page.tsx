import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { setRequestLocale, getTranslations } from "next-intl/server"
import { getBlogPost, getBlogSlugs } from "@/lib/blog"
import { routing } from "@/src/i18n/routing"

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = []
  for (const locale of routing.locales) {
    const slugs = getBlogSlugs(locale)
    for (const slug of slugs) {
      params.push({ locale, slug })
    }
  }
  return params
}

export default async function BlogPost({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "BlogPost" })
  const post = getBlogPost(locale, slug)

  if (!post) {
    return (
      <div className="min-h-screen">
        <main className="py-40 bg-white">
          <div className="container mx-auto px-8 text-center">
            <h1 className="text-4xl font-black text-[#140b3f] mb-4">{t("notFound")}</h1>
            <Link href="/blog" className="text-[#4526c9] hover:text-[#fe35fe] font-bold">
              {t("notFoundBack")}
            </Link>
          </div>
        </main>
      </div>
    )
  }

  const allPosts = getBlogSlugs(locale)
    .filter((s) => s !== slug)
    .slice(0, 3)
    .map((s) => getBlogPost(locale, s))
    .filter(Boolean)

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#140b3f] via-[#4526c9] to-[#fe35fe]">
          {post.coverImage && (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover opacity-30"
              priority
            />
          )}
          <div className="relative container mx-auto px-6 lg:px-12 max-w-7xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/90 hover:text-[#e0ff4f] mb-8 transition-colors group">
              <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
              <span className="font-bold">{t("backToBlog")}</span>
            </Link>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-200">
              <span className="inline-block px-4 py-1.5 bg-[#e0ff4f] text-[#140b3f] text-sm font-bold rounded-full shadow-lg shadow-[#e0ff4f]/20">
                {post.category}
              </span>
              <span className="flex items-center gap-2 text-sm font-medium">
                <Calendar size={16} className="text-[#fe35fe]" />
                {post.date}
              </span>
              <span className="flex items-center gap-2 text-sm font-medium">
                <User size={16} className="text-[#00c49a]" />
                {t("by")} {post.author}
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="max-w-3xl">
              <article className="prose prose-lg max-w-none text-gray-700">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="space-y-6 text-gray-700"
              />
            </article>

            {/* Call to Action */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-r from-[#4526c9]/10 to-[#fe35fe]/10 p-8 rounded-lg">
                <h3 className="text-2xl font-black text-[#140b3f] mb-4">{t("ctaTitle")}</h3>
                <p className="text-gray-700 mb-6">{t("ctaDescription")}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#donar"
                    className="px-6 py-3 bg-gradient-to-r from-[#e0ff4f] to-[#00c49a] hover:shadow-lg text-[#140b3f] font-black rounded-full transition-shadow text-center"
                  >
                    {t("ctaDonate")}
                  </Link>
                  <Link
                    href="/#voluntariado"
                    className="px-6 py-3 bg-[#fe35fe] hover:shadow-lg text-white font-black rounded-full transition-shadow text-center"
                  >
                    {t("ctaVolunteer")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Related Posts */}
        {allPosts.length > 0 && (
          <section className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
              <h2 className="text-3xl font-black text-[#140b3f] mb-12">{t("relatedTitle")}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {allPosts.map((relatedPost) => (
                  <Link key={relatedPost!.slug} href={`/blog/${relatedPost!.slug}`}>
                    <article className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <span className="inline-block px-3 py-1 bg-[#e0ff4f] text-[#140b3f] text-xs font-bold rounded-full mb-3">
                        {relatedPost!.category}
                      </span>
                      <h3 className="text-lg font-black text-[#140b3f] mb-3 line-clamp-2">
                        {relatedPost!.title}
                      </h3>
                      <p className="text-sm text-gray-500">{relatedPost!.date}</p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
