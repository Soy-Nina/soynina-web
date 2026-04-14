import { setRequestLocale, getTranslations } from "next-intl/server"
import { Users, BookOpen, Home, Zap } from "lucide-react"
import PageHero from "@/components/soy-nina/page-hero"
import { Link } from "@/src/i18n/navigation"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "ProgramasPage" })
  return { title: t("metaTitle"), description: t("metaDescription") }
}

export default async function ProgramasPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "ProgramasPage" })

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        image="/girls-participating-in-stem-activities.jpg"
      />

      {/* Descripción General */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 border-l-4 border-[#00c49a]">
            <h2 className="text-3xl font-black text-[#140b3f] mb-6">{t("methodologyTitle")}</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>{t("methodologyP1")}</p>
              <p>{t("methodologyP2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Club Niña */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Users size={40} className="text-[#4526c9]" />
              <h2 className="text-4xl font-black text-[#140b3f]">Club Niña</h2>
            </div>
            <p className="text-xl text-gray-600 mb-8">{t("clubNinaAge")}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-[#4526c9]/10 to-transparent rounded-xl p-8 border border-[#4526c9]/20">
                <h3 className="text-2xl font-bold text-[#140b3f] mb-4">{t("clubNinaFirstCycleTitle")}</h3>
                <p className="text-gray-600 mb-4">{t("clubNinaFirstCycleAge")}</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span><strong>{t("clubNinaFirstCycle1Label")}</strong> {t("clubNinaFirstCycle1Value")}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span><strong>{t("clubNinaFirstCycle2Label")}</strong> {t("clubNinaFirstCycle2Value")}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span><strong>{t("clubNinaFirstCycle3Label")}</strong> {t("clubNinaFirstCycle3Value")}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span><strong>{t("clubNinaFirstCycle4Label")}</strong> {t("clubNinaFirstCycle4Value")}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span><strong>{t("clubNinaFirstCycle5Label")}</strong> {t("clubNinaFirstCycle5Value")}</span></li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#fe35fe]/10 to-transparent rounded-xl p-8 border border-[#fe35fe]/20">
                <h3 className="text-2xl font-bold text-[#140b3f] mb-4">{t("clubNinaSecondCycleTitle")}</h3>
                <p className="text-gray-600 mb-4">{t("clubNinaSecondCycleAge")}</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><span className="text-[#fe35fe] font-bold mt-1">•</span><span><strong>{t("clubNinaSecondCycle1Label")}</strong> {t("clubNinaSecondCycle1Value")}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#fe35fe] font-bold mt-1">•</span><span><strong>{t("clubNinaSecondCycle2Label")}</strong> {t("clubNinaSecondCycle2Value")}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#fe35fe] font-bold mt-1">•</span><span><strong>{t("clubNinaSecondCycle3Label")}</strong> {t("clubNinaSecondCycle3Value")}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#fe35fe] font-bold mt-1">•</span><span><strong>{t("clubNinaSecondCycle4Label")}</strong> {t("clubNinaSecondCycle4Value")}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#fe35fe] font-bold mt-1">•</span><span><strong>{t("clubNinaSecondCycle5Label")}</strong> {t("clubNinaSecondCycle5Value")}</span></li>
                </ul>
              </div>
            </div>

            <div className="bg-[#e0ff4f]/10 rounded-lg p-6 border-l-4 border-[#e0ff4f]">
              <p className="text-gray-700"><strong>{t("clubNinaFrequencyLabel")}</strong> {t("clubNinaFrequencyValue")} | <strong>{t("clubNinaMethodologyLabel")}</strong> {t("clubNinaMethodologyValue")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Club Cole */}
      <section className="py-20 bg-gradient-to-br from-[#fe35fe]/5 to-transparent">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <BookOpen size={40} className="text-[#fe35fe]" />
              <h2 className="text-4xl font-black text-[#140b3f]">Club Cole</h2>
            </div>
            <p className="text-xl text-gray-600 mb-8">{t("clubColeAge")}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-[#4526c9]/10 to-transparent rounded-xl p-8 border border-[#4526c9]/20">
                <h3 className="text-2xl font-bold text-[#140b3f] mb-4">{t("clubColeCycle3Title")}</h3>
                <p className="text-gray-600 mb-4">{t("clubColeCycle3Age")}</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span>{t("clubColeCycle3Item1")}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span>{t("clubColeCycle3Item2")}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span>{t("clubColeCycle3Item3")}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span>{t("clubColeCycle3Item4")}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span>{t("clubColeCycle3Item5")}</span></li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#00c49a]/10 to-transparent rounded-xl p-8 border border-[#00c49a]/20">
                <h3 className="text-2xl font-bold text-[#140b3f] mb-4">{t("clubColeCycle4Title")}</h3>
                <p className="text-gray-600 mb-4">{t("clubColeCycle4Age")}</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><span className="text-[#00c49a] font-bold mt-1">•</span><span>{t("clubColeCycle4Item1")}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#00c49a] font-bold mt-1">•</span><span>{t("clubColeCycle4Item2")}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#00c49a] font-bold mt-1">•</span><span>{t("clubColeCycle4Item3")}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#00c49a] font-bold mt-1">•</span><span>{t("clubColeCycle4Item4")}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#00c49a] font-bold mt-1">•</span><span>{t("clubColeCycle4Item5")}</span></li>
                </ul>
              </div>
            </div>

            <div className="bg-[#e0ff4f]/10 rounded-lg p-6 border-l-4 border-[#e0ff4f]">
              <p className="text-gray-700"><strong>{t("clubColeFacilitatorsLabel")}</strong> {t("clubColeFacilitatorsValue")} | <strong>{t("clubColeSupportLabel")}</strong> {t("clubColeSupportValue")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Club Familias */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Home size={40} className="text-[#00c49a]" />
              <h2 className="text-4xl font-black text-[#140b3f]">Club Familias</h2>
            </div>

            <div className="bg-gradient-to-br from-[#00c49a]/10 to-[#4526c9]/10 rounded-xl p-8 border border-gray-200 mb-8">
              <h3 className="text-2xl font-bold text-[#140b3f] mb-6">{t("clubFamiliasTrainingTitle")}</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>{t("clubFamiliasFrequencyLabel")}</strong> {t("clubFamiliasFrequencyValue")}</p>
                <p><strong>{t("clubFamiliasAudienceLabel")}</strong> {t("clubFamiliasAudienceValue")}</p>
                <p><strong>{t("clubFamiliasMethodologyLabel")}</strong> {t("clubFamiliasMethodologyValue")}</p>
                <p><strong>{t("clubFamiliasTopicsLabel")}</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>{t("clubFamiliasTopic1")}</li>
                  <li>{t("clubFamiliasTopic2")}</li>
                  <li>{t("clubFamiliasTopic3")}</li>
                  <li>{t("clubFamiliasTopic4")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorías Académicas */}
      <section className="py-20 bg-gradient-to-br from-[#e0ff4f]/5 to-transparent">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Zap size={40} className="text-[#e0ff4f]" />
              <h2 className="text-4xl font-black text-[#140b3f]">{t("tutoriasTitle")}</h2>
            </div>

            <div className="bg-gradient-to-br from-[#e0ff4f]/20 to-transparent rounded-xl p-8 border border-[#e0ff4f]/30">
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-2xl font-bold text-[#140b3f] mb-3">{t("tutoriasProgramTitle")}</h3>
                  <p>{t("tutoriasProgramDescription")}</p>
                </div>

                <div>
                  <h3 className="font-bold text-[#140b3f] mb-2">{t("tutoriasModalitiesTitle")}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>{t("tutoriasCyclesLabel")}</strong> {t("tutoriasCyclesValue")}</li>
                    <li><strong>{t("tutoriasPermanentLabel")}</strong> {t("tutoriasPermanentValue")}</li>
                    <li><strong>{t("tutoriasVirtualLabel")}</strong> {t("tutoriasVirtualValue")}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-[#140b3f] mb-2">{t("tutoriasOrganizationTitle")}</h3>
                  <p>{t("tutoriasOrganizationValue")}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-[#e0ff4f]">
                  <p className="text-sm text-gray-600"><strong>{t("tutoriasNoteLabel")}</strong> {t("tutoriasNoteValue")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#4526c9] to-[#fe35fe] text-white">
        <div className="container mx-auto px-8 text-center">
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
