import { setRequestLocale, getTranslations } from "next-intl/server"
import PageHero from "@/components/soy-nina/page-hero"
import { Heart, Globe, BookOpen } from "lucide-react"
import { Link } from "@/src/i18n/navigation"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "VoluntariadoPage" })
  return { title: t("metaTitle"), description: t("metaDescription") }
}

export default async function VoluntariadoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "VoluntariadoPage" })

  const nationalTeams = [
    {
      name: locale === "en" ? "Weekly Clubs" : "Clubes Semanales",
      icon: "💜",
      description: locale === "en" ? "Facilitate educational and empowerment activities" : "Facilita actividades educativas y de empoderamiento",
      details: locale === "en" ? ["In-person, every week", "Women only (protection)", "Transportation required", "Full year"] : ["Presencial, todas las semanas", "Solo mujeres (protección)", "Requiere transporte", "Año completo"]
    },
    {
      name: locale === "en" ? "Academic Tutoring" : "Tutorías Académicas",
      icon: "📚",
      description: locale === "en" ? "Teach various subjects" : "Enseña diferentes asignaturas",
      details: locale === "en" ? ["Virtual, flexible hours", "Minimum 4 hours/week", "Creativity and organization", "Prepare materials and tracking sheets"] : ["Virtual, flexibilidad de horarios", "Mínimo 4 horas/semana", "Creatividad y organización", "Prepara materiales y hoja de seguimiento"]
    },
    {
      name: "Club Familias",
      icon: "👨‍👩‍👧‍👦",
      description: locale === "en" ? "Facilitate sessions with families" : "Facilita sesiones con familias",
      details: locale === "en" ? ["Virtual, last Sunday of month", "Student/professional in social sciences", "Positive Discipline training", "Promote family communication"] : ["Virtual, último domingo de mes", "Estudiante/profesional en ciencias sociales", "Capacitación en Disciplina Positiva", "Promociona comunicación familiar"]
    },
    {
      name: locale === "en" ? "Recurring Donors" : "Donantes Recurrentes",
      icon: "💝",
      description: locale === "en" ? "Recruit monthly donors" : "Recluta donantes mensuales",
      details: locale === "en" ? ["Virtual, 3-4 hours/week", "Social media campaigns", "Organization and communication", "Donor follow-up"] : ["Virtual, 3-4 horas/semana", "Campañas en redes sociales", "Organización y comunicación", "Seguimiento a donantes"]
    },
    {
      name: locale === "en" ? "Food Bank" : "Banco de Alimentos",
      icon: "🍎",
      description: locale === "en" ? "Manage and distribute food" : "Gestiona y distribuye alimentos",
      details: locale === "en" ? ["Last Saturday of month, 8am-1pm", "Physical teamwork", "Sorting and distribution", "Physical capacity required"] : ["Último sábado del mes, 8am-1pm", "Trabajo físico en equipo", "Clasificación y distribución", "Requiere capacidad física"]
    },
    {
      name: locale === "en" ? "Communications & Social Media" : "Comunicación y Redes",
      icon: "📱",
      description: locale === "en" ? "Create social media content" : "Crea contenido para redes sociales",
      details: locale === "en" ? ["Hybrid (virtual + in-person)", "Writing, design, photography, video", "Inspirational storytelling", "Creative flexibility"] : ["Híbrido (virtual + presencial)", "Redacción, diseño, fotografía, video", "Storytelling inspirador", "Flexibilidad creativa"]
    }
  ]

  const testimonials = [
    {
      name: "Eugenia",
      role: locale === "en" ? "Tutoring Volunteer" : "Voluntaria de Tutorías",
      quote: locale === "en" ? "It changed the way I see education. Watching the girls advance academically is transformative." : "Cambió mi forma de ver la educación. Ver cómo las niñas avanzan académicamente es transformador."
    },
    {
      name: "María",
      role: locale === "en" ? "Club Familias Volunteer" : "Voluntaria de Club Familias",
      quote: locale === "en" ? "It allowed me to put my education knowledge into practice in a tangible and meaningful way." : "Me permitió poner en práctica mis conocimientos en educación de una forma tangible y significativa."
    },
    {
      name: "Katherine",
      role: locale === "en" ? "Donor Volunteer" : "Voluntaria de Donantes",
      quote: locale === "en" ? "I found a community of women who believe in education with equity. It changed my perspective." : "Encontré una comunidad de mujeres que creen en educación con equidad. Cambió mi perspectiva."
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
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 border-l-4 border-[#4526c9]">
            <h2 className="text-3xl font-black text-[#140b3f] mb-6">{t("whyTitle")}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t("whyDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Voluntariado Nacional */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
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
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-black text-[#140b3f] mb-12 text-center">{t("testimoniesTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimony, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border-l-4 border-[#4526c9] shadow-md hover:shadow-lg transition">
                <p className="text-gray-700 italic mb-6">"{testimony.quote}"</p>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Heart size={40} className="text-[#fe35fe]" />
            <h2 className="text-4xl font-black text-[#140b3f]">{t("corporateTitle")}</h2>
          </div>
          <div className="bg-gradient-to-br from-[#fe35fe]/10 to-transparent rounded-xl p-8 border border-[#fe35fe]/20">
            <p className="text-gray-700 text-lg mb-6">
              ¿Tu empresa quiere hacer un impacto directo? Ofrecemos jornadas de voluntariado donde tus equipos interactúan con nuestras niñas en sesiones especiales, capacitaciones profesionales, mentoría y apoyo logístico.
            </p>
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#fe35fe]">
              <p className="text-sm text-gray-600">
                <strong>Contáctanos:</strong> info@soynina.onmicrosoft.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voluntariado Internacional */}
      <section className="py-20 bg-gradient-to-br from-[#00c49a]/5 to-transparent">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Globe size={40} className="text-[#00c49a]" />
            <h2 className="text-4xl font-black text-[#140b3f]">{t("internationalTitle")}</h2>
          </div>
          <div className="bg-gradient-to-br from-[#00c49a]/10 to-transparent rounded-xl p-8 border border-[#00c49a]/20 mb-8">
            <p className="text-gray-700 text-lg mb-6">
              Colaboramos con voluntarios internacionales que buscan intercambio cultural y aprendizaje mutuo. Apoya talleres, proyectos educativos, campañas de sensibilización o propicia perspectivas globales en nuestros espacios.
            </p>
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#00c49a]">
              <p className="text-sm text-gray-600">
                <strong>Contáctanos:</strong> info@soynina.onmicrosoft.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prácticas Profesionales */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <BookOpen size={40} className="text-[#e0ff4f]" />
            <h2 className="text-4xl font-black text-[#140b3f]">{t("internshipsTitle")}</h2>
          </div>
          <div className="bg-gradient-to-br from-[#e0ff4f]/10 to-transparent rounded-xl p-8 border border-[#e0ff4f]/20">
            <p className="text-gray-700 text-lg mb-6">
              Tenemos convenios activos con universidades públicas y privadas. Estudiantes de Educación, Psicología, Trabajo Social y Comunicación pueden realizar prácticas profesionales o TCU con nosotros.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-[#140b3f] mb-3">Modalidades de Práctica</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#e0ff4f] font-bold">•</span>
                    <span>Acompañamiento directo a niñas y adolescentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e0ff4f] font-bold">•</span>
                    <span>Áreas administrativas y comunicacionales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e0ff4f] font-bold">•</span>
                    <span>Diseño e implementación de proyectos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-[#140b3f] mb-3">Experiencia Internacional</h3>
                <p className="text-gray-700 mb-3">Máximo 2 semanas para estudiantes universitarios. Incluye:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Transporte local y comidas</li>
                  <li>✓ Hospedaje en la comunidad</li>
                  <li>✓ Capacitación y acompañamiento profesional</li>
                  <li>✗ No incluye: Pasajes aéreos ni gastos personales</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-[#e0ff4f]">
                <p className="text-sm text-gray-600">
                  <strong>Coordinadora de Prácticas:</strong> andrea@soynina.onmicrosoft.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 max-w-4xl">
          <h2 className="text-4xl font-black text-[#140b3f] mb-8 text-center">{t("requirementsTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-2 border-[#4526c9]">
              <h3 className="text-xl font-bold text-[#140b3f] mb-4">General</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Mayor de 18 años</li>
                <li>✓ Compromiso con protección de niñez</li>
                <li>✓ Mínimo 2-3 horas por semana (varía según rol)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-2 border-[#4526c9]">
              <h3 className="text-xl font-bold text-[#140b3f] mb-4">Proceso</h3>
              <ul className="space-y-3 text-gray-700">
                <li>1. Formulario de solicitud</li>
                <li>2. Copia de hoja de delincuencia</li>
                <li>3. Acuerdo de confidencialidad</li>
                <li>4. Inducción organizacional</li>
              </ul>
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
