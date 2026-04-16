import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog"
import { notFound } from "next/navigation"

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  const t = await getTranslations("BlogPage")

  if (!post) {
    return (
      <div className="min-h-screen">
        <main className="py-40 bg-white">
          <div className="container mx-auto px-8 text-center">
            <h1 className="text-4xl font-black text-[#140b3f] mb-4">{t("postNotFound")}</h1>
            <Link href="/blog" className="text-[#4526c9] hover:text-[#fe35fe] font-bold">
              {t("backToBlog")}
            </Link>
          </div>
        </main>
      </div>
    )
  }

  const allPosts = getBlogPosts()
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className={`py-16 bg-gradient-to-br ${post.gradient}`}>
          <div className="container mx-auto px-8">
            <Link href="/blog" className="flex items-center gap-2 text-white hover:text-[#e0ff4f] mb-6">
              <ArrowLeft size={20} />
              {t("backToBlog")}
            </Link>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-200">
              <span className="inline-block px-3 py-1 bg-[#e0ff4f] text-[#140b3f] text-sm font-bold rounded-full">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>{t("by")} {post.author}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 max-w-3xl">
            <article className="prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="space-y-6 text-gray-700 blog-content"
              />
            </article>

            {/* Call to Action */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-r from-[#4526c9]/10 to-[#fe35fe]/10 p-8 rounded-lg">
                <h3 className="text-2xl font-black text-[#140b3f] mb-4">{t("ctaTitle")}</h3>
                <p className="text-gray-700 mb-6">
                  {t("ctaDescription")}
                </p>
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
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-8">
              <h2 className="text-3xl font-black text-[#140b3f] mb-12">{t("othersTitle")}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                    <article className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <span className="inline-block px-3 py-1 bg-[#e0ff4f] text-[#140b3f] text-xs font-bold rounded-full mb-3">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-black text-[#140b3f] mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-500">{relatedPost.date}</p>
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
