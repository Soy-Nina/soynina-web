import { setRequestLocale, getTranslations } from "next-intl/server"
import { getAlternates } from "@/lib/metadata"
import PageHero from "@/components/soy-nina/page-hero"
import { Heart, Globe, BookOpen } from "lucide-react"
import { Link } from "@/src/i18n/navigation"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "VoluntariadoPage" })
  return { title: t("metaTitle"), description: t("metaDescription"), alternates: getAlternates(locale, "/voluntariado") }
}

export default async function VoluntariadoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "VoluntariadoPage" })

  const nationalTeams = [
    {
      name: t("team1Name"),
      icon: "💜",
      description: t("team1Description"),
      details: [t("team1Detail1"), t("team1Detail2"), t("team1Detail3"), t("team1Detail4")]
    },
    {
      name: t("team2Name"),
      icon: "📚",
      description: t("team2Description"),
      details: [t("team2Detail1"), t("team2Detail2"), t("team2Detail3"), t("team2Detail4")]
    },
    {
      name: t("team3Name"),
      icon: "👨‍👩‍👧‍👦",
      description: t("team3Description"),
      details: [t("team3Detail1"), t("team3Detail2"), t("team3Detail3"), t("team3Detail4")]
    },
    {
      name: t("team4Name"),
      icon: "💝",
      description: t("team4Description"),
      details: [t("team4Detail1"), t("team4Detail2"), t("team4Detail3"), t("team4Detail4")]
    },
    {
      name: t("team5Name"),
      icon: "🍎",
      description: t("team5Description"),
      details: [t("team5Detail1"), t("team5Detail2"), t("team5Detail3"), t("team5Detail4")]
    },
    {
      name: t("team6Name"),
      icon: "📱",
      description: t("team6Description"),
      details: [t("team6Detail1"), t("team6Detail2"), t("team6Detail3"), t("team6Detail4")]
    }
  ]

  const testimonials = [
    {
      name: t("testimony1Name"),
      role: t("testimony1Role"),
      quote: t("testimony1Quote")
    },
    {
      name: t("testimony2Name"),
      role: t("testimony2Role"),
      quote: t("testimony2Quote")
    },
    {
      name: t("testimony3Name"),
      role: t("testimony3Role"),
      quote: t("testimony3Quote")
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        image="/young-girls-in-educational-workshop-in-costa-rica.jpg"
      />

      {/* Intro */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 border-l-4 border-[#4526c9] shadow-sm">
            <h2 className="text-3xl font-black text-[#140b3f] mb-6">{t("whyTitle")}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t("whyDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Voluntariado Nacional */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <h2 className="text-4xl font-black text-[#140b3f] mb-12 text-center">{t("nationalTitle")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nationalTeams.map((team, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border-2 border-gray-200 hover:border-[#4526c9] hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{team.icon}</div>
                <h3 className="text-2xl font-bold text-[#140b3f] mb-2">{team.name}</h3>
                <p className="text-gray-600 mb-6">{team.description}</p>
                <ul className="space-y-2">
                  {team.details.map((detail, didx) => (
                    <li key={didx} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-[#4526c9] font-bold">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gradient-to-br from-[#4526c9]/5 to-[#fe35fe]/5">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <h2 className="text-4xl font-black text-[#140b3f] mb-12 text-center">{t("testimoniesTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimony, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border-l-4 border-[#4526c9] shadow-md hover:shadow-lg transition">
                <p className="text-gray-700 italic mb-6">&ldquo;{testimony.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-[#140b3f]">{testimony.name}</p>
                  <p className="text-sm text-[#4526c9]">{testimony.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voluntariado Corporativo */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Heart size={40} className="text-[#fe35fe]" />
            <h2 className="text-4xl font-black text-[#140b3f]">{t("corporateTitle")}</h2>
          </div>
          <div className="bg-gradient-to-br from-[#fe35fe]/10 to-transparent rounded-xl p-8 border border-[#fe35fe]/20">
            <p className="text-gray-700 text-lg mb-6">
              {t("corporateDescription")}
            </p>
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#fe35fe]">
              <p className="text-sm text-gray-600">
                <strong>{t("corporateContactLabel")}</strong> {t("corporateEmail")}
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Voluntariado Internacional */}
      <section className="py-20 bg-gradient-to-br from-[#00c49a]/5 to-transparent border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Globe size={40} className="text-[#00c49a]" />
            <h2 className="text-4xl font-black text-[#140b3f]">{t("internationalTitle")}</h2>
          </div>
          <div className="bg-gradient-to-br from-[#00c49a]/10 to-transparent rounded-xl p-8 border border-[#00c49a]/20 mb-8">
            <p className="text-gray-700 text-lg mb-6">
              {t("internationalDescription")}
            </p>
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#00c49a]">
              <p className="text-sm text-gray-600">
                <strong>{t("internationalContactLabel")}</strong> {t("internationalEmail")}
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Prácticas Profesionales */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <BookOpen size={40} className="text-[#e0ff4f]" />
            <h2 className="text-4xl font-black text-[#140b3f]">{t("internshipsTitle")}</h2>
          </div>
          <div className="bg-gradient-to-br from-[#e0ff4f]/10 to-transparent rounded-xl p-8 border border-[#e0ff4f]/20">
            <p className="text-gray-700 text-lg mb-6">
              {t("internshipsDescription")}
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-[#140b3f] mb-3">{t("internshipsModalitiesTitle")}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#e0ff4f] font-bold">•</span>
                    <span>{t("internshipsModality1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e0ff4f] font-bold">•</span>
                    <span>{t("internshipsModality2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e0ff4f] font-bold">•</span>
                    <span>{t("internshipsModality3")}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-[#140b3f] mb-3">{t("internshipsExperienceTitle")}</h3>
                <p className="text-gray-700 mb-3">{t("internshipsExperienceIntro")}</p>
                <ul className="space-y-2 text-gray-700">
                  <li>{t("internshipsExperience1")}</li>
                  <li>{t("internshipsExperience2")}</li>
                  <li>{t("internshipsExperience3")}</li>
                  <li>{t("internshipsExperience4")}</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-[#e0ff4f]">
                <p className="text-sm text-gray-600">
                  <strong>{t("internshipsCoordinatorLabel")}</strong> {t("internshipsCoordinatorEmail")}
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-[#140b3f] mb-8 text-center">{t("requirementsTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-2 border-[#4526c9]">
              <h3 className="text-xl font-bold text-[#140b3f] mb-4">{t("requirementsGeneralTitle")}</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ {t("requirementsGeneral1")}</li>
                <li>✓ {t("requirementsGeneral2")}</li>
                <li>✓ {t("requirementsGeneral3")}</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-2 border-[#4526c9]">
              <h3 className="text-xl font-bold text-[#140b3f] mb-4">{t("requirementsProcessTitle")}</h3>
              <ul className="space-y-3 text-gray-700">
                <li>{t("requirementsProcess1")}</li>
                <li>{t("requirementsProcess2")}</li>
                <li>{t("requirementsProcess3")}</li>
                <li>{t("requirementsProcess4")}</li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#4526c9] to-[#fe35fe] text-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center">
          <h2 className="text-4xl font-black mb-6">{t("ctaTitle")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t("ctaDescription")}</p>
          <Link href="/contacto" className="inline-block bg-white text-[#4526c9] px-8 py-4 rounded-full font-bold hover:bg-[#e0ff4f] transition">
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </div>
  )
}
