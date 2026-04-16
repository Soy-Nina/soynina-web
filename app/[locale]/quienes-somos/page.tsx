import { setRequestLocale, getTranslations } from "next-intl/server"
import PageHero from "@/components/soy-nina/page-hero"
import { Link } from "@/src/i18n/navigation"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "QuienesSomos" })
  return { title: t("metaTitle"), description: t("metaDescription") }
}

export default async function QuienesSomosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "QuienesSomos" })

  const team = [
    { name: "Stefany Araya", role: locale === "en" ? "Program Director" : "Directora de Programa" },
    { name: "Hilda Rivera", role: locale === "en" ? "Administrative Assistant" : "Asistente Administrativa" },
    { name: "Estefanía Rodríguez", role: locale === "en" ? "Coordination Assistant" : "Asistente de Coordinación" },
    { name: "Paola Arce", role: "Media Manager" },
    { name: "Andrea Marín", role: locale === "en" ? "Volunteer Coordinator" : "Coordinadora de Voluntariado" },
    { name: "Kelly Pacheco", role: locale === "en" ? "Programs Coordinator" : "Coordinadora de Programas" },
    { name: "Melissa Lobo", role: locale === "en" ? "Programs Facilitator" : "Facilitadora de Programas" },
    { name: "Kiara Corea", role: locale === "en" ? "Programs Facilitator" : "Facilitadora de Programas" },
    { name: "Reychelle Mena", role: locale === "en" ? "Programs Facilitator" : "Facilitadora de Programas" }
  ]

  const board = [
    { name: "Ana Laura Araya", role: locale === "en" ? "President" : "Presidenta" },
    { name: "Alejandro Ejea", role: locale === "en" ? "Secretary" : "Secretario" },
    { name: "Arturo Pardo", role: locale === "en" ? "First Member" : "Vocal Uno" },
    { name: "Glenda Umaña", role: locale === "en" ? "Comptroller" : "Fiscal" },
    { name: "Karla Prendas", role: locale === "en" ? "Member" : "Vocal" },
    { name: "Alejandra Meza", role: locale === "en" ? "Member" : "Vocal" },
    { name: "Krizia Aguilar", role: locale === "en" ? "Member" : "Vocal" }
  ]

  const corporateAllies = [
    "UNFPA", "UNICEF", "Cummins", "World Hug Group",
    "Ministerio de Cultura y Juventud", "KMA", "OTSÍ", "P&G",
    "Nutri Snacks", "Blackbaud", "BAC Credomatic", "Coopeservidores",
    "FIFCO", "Voces Vitales Costa Rica", "Novohogar", "VMware"
  ]

  const universityPartners = [
    "Universidad de Costa Rica (UCR)",
    "Universidad Latinoamericana de Ciencia y Tecnología (ULACIT)",
    "Tecnológico de Costa Rica (TEC)",
    "Universidad de la Habra (UH)"
  ]

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        image="/diverse-group-of-girls-learning-together-in-costa-.jpg"
      />

      {/* Historia */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 border-l-4 border-[#4526c9] shadow-sm">
            <h2 className="text-4xl font-black text-[#140b3f] mb-6">{t("historyTitle")}</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>{t("historyP1")}</p>
              <p>{t("historyP2")}</p>
              <p>{t("historyP3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Profesional */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <h2 className="text-4xl font-black text-[#140b3f] mb-12 text-center">{t("teamTitle")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#4526c9]/10 to-[#fe35fe]/10 rounded-xl p-6 border border-gray-200 hover:border-[#4526c9] transition"
              >
                <h3 className="text-xl font-bold text-[#140b3f] mb-2">{member.name}</h3>
                <p className="text-[#4526c9] font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Junta Directiva */}
      <section className="py-20 bg-gradient-to-br from-[#140b3f] to-[#4526c9] text-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <h2 className="text-4xl font-black mb-12 text-center">{t("boardTitle")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {board.map((member, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-[#e0ff4f] font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aliados Corporativos */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <h2 className="text-4xl font-black text-[#140b3f] mb-6 text-center">{t("corporateTitle")}</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">{t("corporateSubtitle")}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {corporateAllies.map((ally, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-[#4526c9] hover:shadow-lg transition text-center">
                <p className="font-semibold text-[#140b3f]">{ally}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Universitarios */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <h2 className="text-4xl font-black text-[#140b3f] mb-6 text-center">{t("universityTitle")}</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">{t("universitySubtitle")}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {universityPartners.map((uni, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#4526c9] to-[#fe35fe] text-white rounded-lg p-6 border border-transparent hover:border-white/20 transition text-center">
                <p className="font-semibold">{uni}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#4526c9] to-[#fe35fe] text-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center">
          <h2 className="text-4xl font-black mb-6">{t("ctaTitle")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t("ctaDescription")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/voluntariado" className="inline-block bg-white text-[#4526c9] px-8 py-4 rounded-full font-bold hover:bg-[#e0ff4f] transition">
              {t("ctaVolunteering")}
            </Link>
            <Link href="/contacto" className="inline-block bg-[#e0ff4f] text-[#140b3f] px-8 py-4 rounded-full font-bold hover:bg-white transition">
              {t("ctaContact")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
