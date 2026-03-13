import { setRequestLocale, getTranslations } from "next-intl/server"
import { Mic, BookOpen, Users, Briefcase } from "lucide-react"
import PageHero from "@/components/soy-nina/page-hero"
import { Link } from "@/src/i18n/navigation"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "SostenibilidadPage" })
  return { title: t("metaTitle"), description: t("metaDescription") }
}

export default async function SostenibilidadPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "SostenibilidadPage" })

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        image="/community-workshop-with-families.jpg"
      />

      {/* Charlas Temáticas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Mic size={40} className="text-[#4526c9]" />
              <h2 className="text-4xl font-black text-[#140b3f]">Charlas Temáticas</h2>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-[#4526c9] mb-8">
              <p className="text-gray-700 text-lg mb-6">
                Sesiones formativas en temas clave para niñas, adolescentes, familias y profesionales. Diseñadas para adquirir conceptos claros y acciones concretas aplicables en el aula, hogar o espacio de trabajo.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#4526c9]/10 to-transparent rounded-lg p-6 border border-[#4526c9]/20">
                  <h3 className="font-bold text-[#140b3f] mb-4">Temas Disponibles</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Salud mental e integral</li>
                    <li>• Prevención de violencia</li>
                    <li>• Educación menstrual</li>
                    <li>• Habilidades socioemocionales</li>
                    <li>• Liderazgo femenino</li>
                    <li>• Derechos y ciudadanía</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#fe35fe]/10 to-transparent rounded-lg p-6 border border-[#fe35fe]/20">
                  <h3 className="font-bold text-[#140b3f] mb-4">Características</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Duración: 45-90 minutos</li>
                    <li>• Modalidad: Presencial o virtual</li>
                    <li>• Adaptable a públicos específicos</li>
                    <li>• Materiales descargables</li>
                    <li>• Facilitadores especializados</li>
                    <li>• Participativo e interactivo</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#e0ff4f]/10 rounded-lg p-4 mt-6 border-l-4 border-[#e0ff4f]">
                <p className="text-sm text-gray-600">
                  <strong>Contacto:</strong> Stefanny Araya | stefanny@soynina.onmicrosoft.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creciendo Juntas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <BookOpen size={40} className="text-[#fe35fe]" />
              <h2 className="text-4xl font-black text-[#140b3f]">Creciendo Juntas</h2>
            </div>

            <div className="bg-gradient-to-br from-[#fe35fe]/5 to-[#4526c9]/5 rounded-xl p-8 border border-gray-200 mb-8">
              <p className="text-gray-700 text-lg mb-6 font-semibold">
                Programa especializado para colegios privados
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-[#140b3f] mb-3">Descripción</h3>
                  <p className="text-gray-700">
                    Espacios seguros y formativos para niñas y adolescentes (7-18 años) con actividades lúdicas y guiadas que fortalecen bienestar, autoestima, habilidades socioemocionales y liderazgo.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-[#140b3f] mb-3">Metodología</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Disciplina Positiva</li>
                    <li>✓ Enfoque de Derechos Humanos</li>
                    <li>✓ Juegos, desafíos, conversación guiada</li>
                    <li>✓ Proyectos breves STEAM</li>
                    <li>✓ Ejercicios de vida práctica</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-[#140b3f] mb-3">Temas Cubiertos</h3>
                  <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <li>✓ Autoconocimiento</li>
                    <li>✓ Gestión emocional</li>
                    <li>✓ Habilidades sociales</li>
                    <li>✓ Prevención de violencia</li>
                    <li>✓ Educación menstrual</li>
                    <li>✓ Hábitos de estudio</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-[#140b3f] mb-3">Frecuencia</h3>
                  <p className="text-gray-700 mb-3">Sesiones de 1.5-2 horas:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Semanal</li>
                    <li>• Quincenal</li>
                    <li>• Mensual (según conveniencia escolar)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-[#140b3f] mb-3">Participación Familiar</h3>
                  <p className="text-gray-700 mb-3">
                    Sesiones breves de capacitación para padres/tutores, alineadas con los temas abordados con las niñas para reforzar en el hogar.
                  </p>
                </div>

                <div className="bg-[#e0ff4f]/20 rounded-lg p-6 border border-[#e0ff4f]/30">
                  <h3 className="text-xl font-bold text-[#140b3f] mb-4">Resultados Documentados</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>600+ niñas</strong> participadas desde 2018</li>
                    <li><strong>Mejoras reportadas:</strong> Rendimiento académico, relaciones interpersonales, autopercepción</li>
                    <li><strong>800+ horas/año</strong> de acompañamiento individualizado</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-[#4526c9] to-[#fe35fe] text-white rounded-lg p-6">
                  <p className="text-sm">
                    <strong>Contacto:</strong> Stefanny Araya | stefanny@soynina.onmicrosoft.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultorías Estratégicas */}
      <section className="py-20 bg-gradient-to-br from-[#00c49a]/5 to-transparent">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Users size={40} className="text-[#00c49a]" />
              <h2 className="text-4xl font-black text-[#140b3f]">Consultorías Estratégicas</h2>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg mb-6">
                Para empresas, organizaciones e instituciones que buscan diseñar e implementar iniciativas de bienestar e igualdad de género.
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#00c49a]/10 to-transparent rounded-lg p-6 border border-[#00c49a]/20">
                  <h3 className="text-xl font-bold text-[#140b3f] mb-4">Alcance</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Diagnóstico organizacional</li>
                    <li>• Diseño de iniciativas de bienestar</li>
                    <li>• Implementación de políticas de género</li>
                    <li>• Integración de herramientas de medición</li>
                    <li>• Mejora continua basada en evidencia</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-[#140b3f] mb-4">Proceso Típico</h3>
                  <ol className="space-y-3 text-gray-700">
                    <li><strong>1. Reunión de Alcance:</strong> Definimos objetivos y plan de trabajo conjunto</li>
                    <li><strong>2. Sesiones de Co-diseño:</strong> Desarrollamos estrategia con participación de tu equipo</li>
                    <li><strong>3. Capacitación:</strong> Preparamos a tu personal para la implementación</li>
                    <li><strong>4. Implementación:</strong> Ejecutamos el plan con acompañamiento</li>
                    <li><strong>5. Evaluación:</strong> Medimos resultados y ajustamos</li>
                  </ol>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-[#140b3f] mb-4">Entregables</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Instrumentos de diagnóstico y medición</li>
                    <li>✓ Plan de acción detallado</li>
                    <li>✓ Guía de implementación</li>
                    <li>✓ Seguimiento y recomendaciones</li>
                  </ul>
                </div>

                <div className="bg-[#e0ff4f]/10 rounded-lg p-6 border-l-4 border-[#e0ff4f]">
                  <p className="text-sm text-gray-600">
                    <strong>Contacto:</strong> Stefanny Araya | stefanny@soynina.onmicrosoft.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultorías por Componentes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Briefcase size={40} className="text-[#e0ff4f]" />
              <h2 className="text-4xl font-black text-[#140b3f]">Consultorías por Componentes</h2>
            </div>

            <div className="bg-gradient-to-br from-[#e0ff4f]/10 to-transparent rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg mb-6">
                Ejecución de componentes específicos de tu proyecto con metodología ágil y materiales listos para usar.
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-[#140b3f] mb-4">¿Qué incluye?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Ciclos de talleres en temas específicos</li>
                    <li>✓ Sesiones familiares coordinadas</li>
                    <li>✓ Evaluaciones rápidas</li>
                    <li>✓ Materiales pre-desarrollados y adaptables</li>
                    <li>✓ Implementación profesional</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-[#140b3f] mb-4">Ventajas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Implementación ágil sin diseño prolongado</li>
                    <li>✓ Materiales y contenidos listos</li>
                    <li>✓ Evidencia básica para tomar decisiones</li>
                    <li>✓ Flexibilidad en alcance y timeline</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-[#140b3f] mb-4">Proceso de Definición</h3>
                  <ol className="space-y-3 text-gray-700">
                    <li><strong>1. Reunión Conjunta:</strong> Definimos objetivo, población, duración</li>
                    <li><strong>2. Plan de Implementación:</strong> Acordamos actividades y cronograma</li>
                    <li><strong>3. Ejecución:</strong> Implementamos según lo acordado</li>
                    <li><strong>4. Cierre:</strong> Reporte de hallazgos y recomendaciones</li>
                  </ol>
                </div>

                <div className="bg-gradient-to-r from-[#4526c9] to-[#fe35fe] text-white rounded-lg p-6">
                  <p className="text-sm mb-2">
                    <strong>Nota importante:</strong> NO proporcionamos tutorías académicas externas a través de este servicio.
                  </p>
                  <p className="text-sm">
                    <strong>Contacto:</strong> Stefanny Araya | stefanny@soynina.onmicrosoft.com
                  </p>
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
