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
            <p className="text-xl text-gray-600 mb-8">{locale === "en" ? "Elementary (Ages 6-12)" : "Primaria (Edades 6-12 años)"}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-[#4526c9]/10 to-transparent rounded-xl p-8 border border-[#4526c9]/20">
                <h3 className="text-2xl font-bold text-[#140b3f] mb-4">{locale === "en" ? "First Cycle" : "Primer Ciclo"}</h3>
                <p className="text-gray-600 mb-4">{locale === "en" ? "Ages 6-8 (Grades 1-3)" : "Edades 6-8 años (Grados 1-3)"}</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span><strong>{locale === "en" ? "Self-awareness:" : "Autoconocimiento:"}</strong> {locale === "en" ? "Identity and self-esteem" : "Identidad y autoestima"}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span><strong>{locale === "en" ? "Emotional management:" : "Gestión emocional:"}</strong> {locale === "en" ? "Recognizing and expressing emotions" : "Reconocer y expresar emociones"}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span><strong>{locale === "en" ? "Social skills:" : "Habilidades sociales:"}</strong> {locale === "en" ? "Empathy and communication" : "Empatía y comunicación"}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span><strong>{locale === "en" ? "Self-care:" : "Autocuidado:"}</strong> {locale === "en" ? "Healthy habits" : "Hábitos saludables"}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span><strong>{locale === "en" ? "Girls' rights:" : "Derechos de niñas:"}</strong> {locale === "en" ? "Values and solidarity" : "Valores y solidaridad"}</span></li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#fe35fe]/10 to-transparent rounded-xl p-8 border border-[#fe35fe]/20">
                <h3 className="text-2xl font-bold text-[#140b3f] mb-4">{locale === "en" ? "Second Cycle" : "Segundo Ciclo"}</h3>
                <p className="text-gray-600 mb-4">{locale === "en" ? "Ages 9-12 (Grades 4-6)" : "Edades 9-12 años (Grados 4-6)"}</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><span className="text-[#fe35fe] font-bold mt-1">•</span><span><strong>{locale === "en" ? "Life project:" : "Proyecto de vida:"}</strong> {locale === "en" ? "Exploring interests" : "Exploración de intereses"}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#fe35fe] font-bold mt-1">•</span><span><strong>{locale === "en" ? "Leadership:" : "Liderazgo:"}</strong> {locale === "en" ? "Decision-making" : "Toma de decisiones"}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#fe35fe] font-bold mt-1">•</span><span><strong>{locale === "en" ? "Critical thinking:" : "Pensamiento crítico:"}</strong> {locale === "en" ? "Analysis and reflection" : "Análisis y reflexión"}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#fe35fe] font-bold mt-1">•</span><span><strong>{locale === "en" ? "Study habits:" : "Hábitos de estudio:"}</strong> {locale === "en" ? "Learning techniques" : "Técnicas de aprendizaje"}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#fe35fe] font-bold mt-1">•</span><span><strong>{locale === "en" ? "Violence prevention:" : "Prevención de violencia:"}</strong> {locale === "en" ? "Recognize and report" : "Reconocer y denunciar"}</span></li>
                </ul>
              </div>
            </div>

            <div className="bg-[#e0ff4f]/10 rounded-lg p-6 border-l-4 border-[#e0ff4f]">
              <p className="text-gray-700"><strong>{locale === "en" ? "Frequency:" : "Frecuencia:"}</strong> {locale === "en" ? "Weekly 2-hour sessions" : "Sesiones semanales de 2 horas"} | <strong>{locale === "en" ? "Methodology:" : "Metodología:"}</strong> {locale === "en" ? "Playful, participatory, and inclusive" : "Lúdica, participativa e inclusiva"}</p>
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
            <p className="text-xl text-gray-600 mb-8">{locale === "en" ? "Secondary (Ages 13-18)" : "Secundaria (Edades 13-18 años)"}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-[#4526c9]/10 to-transparent rounded-xl p-8 border border-[#4526c9]/20">
                <h3 className="text-2xl font-bold text-[#140b3f] mb-4">III {locale === "en" ? "Cycle" : "Ciclo"}</h3>
                <p className="text-gray-600 mb-4">{locale === "en" ? "Ages 13-15 (Grades 7-9)" : "Edades 13-15 años (Grados 7-9)"}</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span>{locale === "en" ? "Personal development and dignified life" : "Desarrollo personal y vida digna"}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span>{locale === "en" ? "Holistic life project" : "Proyecto de vida integral"}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span>{locale === "en" ? "Comprehensive and respectful sex education" : "Educación sexual integral y respetuosa"}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span>{locale === "en" ? "Critical thinking and citizenship" : "Pensamiento crítico y ciudadanía"}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#4526c9] font-bold mt-1">•</span><span>{locale === "en" ? "Participatory leadership" : "Liderazgo participativo"}</span></li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#00c49a]/10 to-transparent rounded-xl p-8 border border-[#00c49a]/20">
                <h3 className="text-2xl font-bold text-[#140b3f] mb-4">IV {locale === "en" ? "Cycle" : "Ciclo"}</h3>
                <p className="text-gray-600 mb-4">{locale === "en" ? "Ages 16-18 (Grades 10-12)" : "Edades 16-18 años (Grados 10-12)"}</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><span className="text-[#00c49a] font-bold mt-1">•</span><span>{locale === "en" ? "1 monthly socio-emotional session" : "1 sesión mensual socioemocional"}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#00c49a] font-bold mt-1">•</span><span>{locale === "en" ? "2 weekly English classes" : "2 clases semanales de inglés"}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#00c49a] font-bold mt-1">•</span><span>{locale === "en" ? "University/work preparation" : "Preparación para universidad/trabajo"}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#00c49a] font-bold mt-1">•</span><span>{locale === "en" ? "Life project consolidation" : "Consolidación de proyecto de vida"}</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#00c49a] font-bold mt-1">•</span><span>{locale === "en" ? "Personalized mentoring" : "Acompañamiento personalizado"}</span></li>
                </ul>
              </div>
            </div>

            <div className="bg-[#e0ff4f]/10 rounded-lg p-6 border-l-4 border-[#e0ff4f]">
              <p className="text-gray-700"><strong>{locale === "en" ? "Facilitators:" : "Facilitadores:"}</strong> {locale === "en" ? "Social Sciences/Education professionals + trained volunteers" : "Profesionales en Ciencias Sociales/Educación + voluntarios capacitados"} | <strong>{locale === "en" ? "Support:" : "Apoyo:"}</strong> {locale === "en" ? "Holistic and personalized mentoring" : "Acompañamiento integral y personalizado"}</p>
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
              <h3 className="text-2xl font-bold text-[#140b3f] mb-6">{locale === "en" ? "Training Spaces for Families" : "Espacios Formativos para Familias"}</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>{locale === "en" ? "Frequency:" : "Frecuencia:"}</strong> {locale === "en" ? "Monthly virtual sessions" : "Sesiones virtuales mensuales"}</p>
                <p><strong>{locale === "en" ? "Audience:" : "Público:"}</strong> {locale === "en" ? "Parents, grandparents, and caregivers of our beneficiaries" : "Padres, madres, abuelos y cuidadores de nuestras beneficiarias"}</p>
                <p><strong>{locale === "en" ? "Methodology:" : "Metodología:"}</strong> {locale === "en" ? "Positive Discipline and human rights approach" : "Disciplina Positiva y enfoque de derechos humanos"}</p>
                <p><strong>{locale === "en" ? "Main topics:" : "Temas principales:"}</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>{locale === "en" ? "Affective communication and mutual understanding" : "Comunicación afectiva y mutua comprensión"}</li>
                  <li>{locale === "en" ? "Empathy and conflict resolution" : "Empatía y resolución de conflictos"}</li>
                  <li>{locale === "en" ? "Love-based discipline" : "Disciplina basada en el amor"}</li>
                  <li>{locale === "en" ? "Strengthening family bonds" : "Fortalecimiento de vínculos familiares"}</li>
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
              <h2 className="text-4xl font-black text-[#140b3f]">{locale === "en" ? "Academic Tutoring" : "Tutorías Académicas"}</h2>
            </div>

            <div className="bg-gradient-to-br from-[#e0ff4f]/20 to-transparent rounded-xl p-8 border border-[#e0ff4f]/30">
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-2xl font-bold text-[#140b3f] mb-3">{locale === "en" ? "Comprehensive Academic Support Program" : "Programa Integral de Apoyo Académico"}</h3>
                  <p>{locale === "en" ? "All subjects: Spanish, Math, Science, English, and more. Includes a specialized study habits program." : "Todas las asignaturas: Español, Matemáticas, Ciencias, Inglés y más. Incluye programa especializado en hábitos de estudio."}</p>
                </div>

                <div>
                  <h3 className="font-bold text-[#140b3f] mb-2">{locale === "en" ? "Modalities" : "Modalidades"}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>{locale === "en" ? "Cycles:" : "Ciclos:"}</strong> {locale === "en" ? "4-8 weeks with concrete study goals" : "4-8 semanas con metas concretas de estudio"}</li>
                    <li><strong>{locale === "en" ? "Permanent:" : "Permanente:"}</strong> {locale === "en" ? "Special cases requiring ongoing support" : "Casos especiales requieren acompañamiento continuo"}</li>
                    <li><strong>{locale === "en" ? "Virtual:" : "Virtual:"}</strong> {locale === "en" ? "Flexible scheduling" : "Flexibilidad de horarios según disponibilidad"}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-[#140b3f] mb-2">{locale === "en" ? "Organization" : "Organización"}</h3>
                  <p>{locale === "en" ? "Based on community demand. We prioritize students with the greatest academic and personal vulnerability." : "Según demanda comunitaria. Priorizamos estudiantes con mayor vulnerabilidad académica y personal."}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-[#e0ff4f]">
                  <p className="text-sm text-gray-600"><strong>{locale === "en" ? "Note:" : "Nota:"}</strong> {locale === "en" ? "Academic tutoring is recognized as a fundamental tool for the holistic development of the individual and access to opportunities." : "Las tutorías académicas se reconocen como herramienta fundamental para el desarrollo integral de la persona y acceso a oportunidades."}</p>
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
