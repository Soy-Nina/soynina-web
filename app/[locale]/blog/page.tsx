import Link from "next/link"
import { useTranslations } from "next-intl"
import PageHero from "@/components/soy-nina/page-hero"

const blogPosts = [
  {
    id: 1,
    slug: "empoderamiento-ninas-costa-rica",
    title: "Empoderamiento de Niñas: El Cambio que Costa Rica Necesita",
    excerpt: "Descubre cómo el empoderamiento de niñas y adolescentes es la clave para construir un Costa Rica más equitativo, justo y próspero.",
    date: "4 de enero, 2026",
    author: "Equipo Soy Niña",
    category: "Educación",
    gradient: "from-[#4526c9] to-[#fe35fe]",
  },
  {
    id: 2,
    slug: "historias-de-exito-nuestras-ninas",
    title: "Historias de Éxito: Transformando Vidas en Costa Rica",
    excerpt: "Conoce cómo nuestros programas han impactado la vida de cientos de niñas y adolescentes en Costa Rica. Historias reales de transformación y esperanza.",
    date: "15 de diciembre, 2025",
    author: "Equipo Soy Niña",
    category: "Historias",
    gradient: "from-[#fe35fe] to-[#e0ff4f]",
  },
  {
    id: 3,
    slug: "educacion-sexual-integral-importancia",
    title: "¿Por Qué la Educación Sexual Integral es Esencial?",
    excerpt: "Descubre por qué la educación sexual integral es fundamental para el bienestar y desarrollo de nuestras adolescentes. Datos, beneficios y perspectivas de expertos.",
    date: "8 de diciembre, 2025",
    author: "Dra. María González",
    category: "Educación",
    gradient: "from-[#e0ff4f] to-[#00c49a]",
  },
  {
    id: 4,
    slug: "voluntariado-oportunidad-cambio",
    title: "Voluntariado: Tu Oportunidad de Generar Cambio",
    excerpt: "¿Quieres hacer la diferencia? Descubre cómo puedes ser parte de nuestro equipo de voluntarias y contribuir al empoderamiento de niñas en Costa Rica.",
    date: "1 de diciembre, 2025",
    author: "Coordinadora de Voluntariado",
    category: "Voluntariado",
    gradient: "from-[#00c49a] to-[#4526c9]",
  },
  {
    id: 5,
    slug: "violencia-genero-prevencion",
    title: "Previniendo la Violencia de Género desde la Infancia",
    excerpt: "La prevención temprana es clave. Aprende cómo nuestros programas educativos enseñan a niñas y adolescentes a identificar y prevenir la violencia de género.",
    date: "24 de noviembre, 2025",
    author: "Equipo de Programas",
    category: "Prevención",
    gradient: "from-[#4526c9] to-[#00c49a]",
  },
  {
    id: 6,
    slug: "autoestima-adolescentes-identidad",
    title: "Construyendo Autoestima: Claves para la Identidad Positiva",
    excerpt: "La autoestima es fundamental en la adolescencia. Explora las estrategias que utilizamos en Club Niña para fortalecer la identidad y confianza de nuestras participantes.",
    date: "17 de noviembre, 2025",
    author: "Psicóloga Educativa",
    category: "Desarrollo",
    gradient: "from-[#fe35fe] to-[#4526c9]",
  },
]

export default function BlogPage() {
  const t = useTranslations("BlogPage")

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
                <Link key={post.id} href={`/blog/${post.slug}`}>
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
