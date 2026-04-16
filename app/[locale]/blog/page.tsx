import Link from "next/link"
import { setRequestLocale, getTranslations } from "next-intl/server"
import PageHero from "@/components/soy-nina/page-hero"
import { getBlogPosts } from "@/lib/blog"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "BlogPage" })
  return { title: t("heroTitle") }
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "BlogPage" })
  const blogPosts = getBlogPosts(locale)

  return (
    <div className="min-h-screen">
      <main>
        <PageHero
          title={t("heroTitle")}
          subtitle={t("heroSubtitle")}
          image="/students-celebrating-academic-success.jpg"
        />

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col">
                    {/* Featured Image Gradient */}
                    <div className={`relative h-48 bg-gradient-to-br ${post.gradient} overflow-hidden`} />

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Category */}
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-[#e0ff4f] text-[#140b3f] text-xs font-bold rounded-full">
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-black text-[#140b3f] mb-3 line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                        <p className="text-xs font-semibold text-[#4526c9]">{t("by")} {post.author}</p>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-8 max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#140b3f] mb-4">
              {t("subscribeBlog")}
            </h2>
            <p className="text-gray-600 mb-8">
              {t("subscribeDescription")}
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#4526c9]"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-[#e0ff4f] to-[#00c49a] hover:shadow-lg text-[#140b3f] font-black rounded-full transition-shadow"
              >
                {t("subscribeButton")}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
