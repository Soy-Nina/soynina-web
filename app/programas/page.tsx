import { Users, BookOpen, Home, Zap } from "lucide-react"
import PageHero from "@/components/soy-nina/page-hero"

export const metadata = {
  title: "Nuestros Programas | Soy Niña",
  description: "Descubre los programas de Soy Niña: Club Niña, Club Cole, Club Familias y Tutorías Académicas."
}

export default function ProgramasPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Nuestros Programas"
        subtitle="Espacios de transformación y crecimiento integral"
        image="/girls-participating-in-stem-activities.jpg"
      />

      {/* Descripción General */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 border-l-4 border-[#00c49a]">
            <h2 className="text-3xl font-black text-[#140b3f] mb-6">Metodología de Trabajo</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Ofrecemos programación libre, continua durante el año lectivo con facilitadores profesionales en Ciencias Sociales y Educación. Cada club cuenta con 2-3 voluntarios capacitados que acompañan a las facilitadoras.
              </p>
              <p>
                Incluimos sesiones especiales en STEAM, salud, ambiente y liderazgo. Todo se realiza desde la perspectiva de educación respetuosa y derechos humanos, priorizando el bienestar socioemocional.
              </p>
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
            <p className="text-xl text-gray-600 mb-8">Primaria (Edades 6-12 años)</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-[#4526c9]/10 to-transparent rounded-xl p-8 border border-[#4526c9]/20">
                <h3 className="text-2xl font-bold text-[#140b3f] mb-4">Primer Ciclo</h3>
                <p className="text-gray-600 mb-4">Edades 6-8 años (Grados 1-3)</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#4526c9] font-bold mt-1">•</span>
                    <span><strong>Autoconocimiento:</strong> Identidad y autoestima</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4526c9] font-bold mt-1">•</span>
                    <span><strong>Gestión emocional:</strong> Reconocer y expresar emociones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4526c9] font-bold mt-1">•</span>
                    <span><strong>Habilidades sociales:</strong> Empatía y comunicación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4526c9] font-bold mt-1">•</span>
                    <span><strong>Autocuidado:</strong> Hábitos saludables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4526c9] font-bold mt-1">•</span>
                    <span><strong>Derechos de niñas:</strong> Valores y solidaridad</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#fe35fe]/10 to-transparent rounded-xl p-8 border border-[#fe35fe]/20">
                <h3 className="text-2xl font-bold text-[#140b3f] mb-4">Segundo Ciclo</h3>
                <p className="text-gray-600 mb-4">Edades 9-12 años (Grados 4-6)</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#fe35fe] font-bold mt-1">•</span>
                    <span><strong>Proyecto de vida:</strong> Exploración de intereses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fe35fe] font-bold mt-1">•</span>
                    <span><strong>Liderazgo:</strong> Toma de decisiones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fe35fe] font-bold mt-1">•</span>
                    <span><strong>Pensamiento crítico:</strong> Análisis y reflexión</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fe35fe] font-bold mt-1">•</span>
                    <span><strong>Hábitos de estudio:</strong> Técnicas de aprendizaje</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fe35fe] font-bold mt-1">•</span>
                    <span><strong>Prevención de violencia:</strong> Reconocer y denunciar</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#e0ff4f]/10 rounded-lg p-6 border-l-4 border-[#e0ff4f]">
              <p className="text-gray-700"><strong>Frecuencia:</strong> Sesiones semanales de 2 horas | <strong>Metodología:</strong> Lúdica, participativa e inclusiva</p>
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
            <p className="text-xl text-gray-600 mb-8">Secundaria (Edades 13-18 años)</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-[#4526c9]/10 to-transparent rounded-xl p-8 border border-[#4526c9]/20">
                <h3 className="text-2xl font-bold text-[#140b3f] mb-4">III Ciclo</h3>
                <p className="text-gray-600 mb-4">Edades 13-15 años (Grados 7-9)</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#4526c9] font-bold mt-1">•</span>
                    <span>Desarrollo personal y vida digna</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4526c9] font-bold mt-1">•</span>
                    <span>Proyecto de vida integral</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4526c9] font-bold mt-1">•</span>
                    <span>Educación sexual integral y respetuosa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4526c9] font-bold mt-1">•</span>
                    <span>Pensamiento crítico y ciudadanía</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4526c9] font-bold mt-1">•</span>
                    <span>Liderazgo participativo</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#00c49a]/10 to-transparent rounded-xl p-8 border border-[#00c49a]/20">
                <h3 className="text-2xl font-bold text-[#140b3f] mb-4">IV Ciclo</h3>
                <p className="text-gray-600 mb-4">Edades 16-18 años (Grados 10-12)</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00c49a] font-bold mt-1">•</span>
                    <span>1 sesión mensual socioemocional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00c49a] font-bold mt-1">•</span>
                    <span>2 clases semanales de inglés</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00c49a] font-bold mt-1">•</span>
                    <span>Preparación para universidad/trabajo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00c49a] font-bold mt-1">•</span>
                    <span>Consolidación de proyecto de vida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00c49a] font-bold mt-1">•</span>
                    <span>Acompañamiento personalizado</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#e0ff4f]/10 rounded-lg p-6 border-l-4 border-[#e0ff4f]">
              <p className="text-gray-700"><strong>Facilitadores:</strong> Profesionales en Ciencias Sociales/Educación + voluntarios capacitados | <strong>Apoyo:</strong> Acompañamiento integral y personalizado</p>
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
              <h3 className="text-2xl font-bold text-[#140b3f] mb-6">Espacios Formativos para Familias</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>Frecuencia:</strong> Sesiones virtuales mensuales</p>
                <p><strong>Público:</strong> Padres, madres, abuelos y cuidadores de nuestras beneficiarias</p>
                <p><strong>Metodología:</strong> Disciplina Positiva y enfoque de derechos humanos</p>
                <p><strong>Temas principales:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Comunicación afectiva y mutua comprensión</li>
                  <li>Empatía y resolución de conflictos</li>
                  <li>Disciplina basada en el amor</li>
                  <li>Fortalecimiento de vínculos familiares</li>
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
              <h2 className="text-4xl font-black text-[#140b3f]">Tutorías Académicas</h2>
            </div>

            <div className="bg-gradient-to-br from-[#e0ff4f]/20 to-transparent rounded-xl p-8 border border-[#e0ff4f]/30">
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-2xl font-bold text-[#140b3f] mb-3">Programa Integral de Apoyo Académico</h3>
                  <p>Todas las asignaturas: Español, Matemáticas, Ciencias, Inglés y más. Incluye programa especializado en hábitos de estudio.</p>
                </div>

                <div>
                  <h3 className="font-bold text-[#140b3f] mb-2">Modalidades</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Ciclos:</strong> 4-8 semanas con metas concretas de estudio</li>
                    <li><strong>Permanente:</strong> Casos especiales requieren acompañamiento continuo</li>
                    <li><strong>Virtual:</strong> Flexibilidad de horarios según disponibilidad</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-[#140b3f] mb-2">Organización</h3>
                  <p>Según demanda comunitaria. Priorizamos estudiantes con mayor vulnerabilidad académica y personal.</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-[#e0ff4f]">
                  <p className="text-sm text-gray-600"><strong>Nota:</strong> Las tutorías académicas se reconocen como herramienta fundamental para el desarrollo integral de la persona y acceso a oportunidades.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#4526c9] to-[#fe35fe] text-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-black mb-6">¿Quieres ser parte de un programa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Todos nuestros programas son completamente gratuitos para las beneficiarias.</p>
          <a href="/contacto" className="inline-block bg-white text-[#4526c9] px-8 py-4 rounded-full font-bold hover:bg-[#e0ff4f] transition">
            Solicitar Información
          </a>
        </div>
      </section>
    </div>
  )
}
