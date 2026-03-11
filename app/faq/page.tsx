"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import PageHero from "@/components/soy-nina/page-hero"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (idx: number) => {
    setOpenItems(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    )
  }

  const faqs = [
    {
      category: "Sobre Soy Niña",
      questions: [
        {
          q: "¿Qué es Soy Niña?",
          a: "Somos una organización sin fines de lucro que impulsa el bienestar, la educación y el liderazgo de niñas y adolescentes por medio de programas extracurriculares, tutorías y trabajo con familias y comunidades."
        },
        {
          q: "¿Quiénes van a los clubes?",
          a: "Asisten niñas y adolescentes (7–18 años) y a sus familias/cuidadores mediante clubes, tutorías y espacios formativos."
        },
        {
          q: "¿Dónde operan?",
          a: "Trabajamos en distintas comunidades del Gran Área Metropolitana. En este momento estamos en Los Guido, Río Azul, Desamparados, Pavas y Guararí."
        },
        {
          q: "¿Tiene costo participar?",
          a: "Nuestros clubes son completamente gratuitos para las beneficiarias."
        },
        {
          q: "¿Cómo miden impacto?",
          a: "Usamos indicadores de asistencia, permanencia, logros académicos y socioemocionales, además de encuestas a familias y facilitadoras. Publicamos resúmenes periódicos. Puedes ver nuestros resultados e informes en nuestra sección de Recursos."
        }
      ]
    },
    {
      category: "Programas (Clubes y Tutorías)",
      questions: [
        {
          q: "¿Qué son Club Niña y Club Cole?",
          a: "Son espacios semanales con metodologías lúdicas para fortalecer habilidades socioemocionales, hábitos de estudio y proyecto de vida."
        },
        {
          q: "¿Quiénes pueden participar en los clubes?",
          a: "Niñas y adolescentes que viven en comunidades cercanas al club. Los requisitos son: estar inscritas en escuela o colegio (según corresponda), vivir en la zona indicada y comprometerse a asistir semanalmente al club. Se da prioridad según situación de vulnerabilidad."
        },
        {
          q: "¿Cómo funcionan las tutorías académicas?",
          a: "Las tutorías se ofrecen en modalidad virtual por ciclos (4–8 semanas) con metas de estudio concretas. En casos particulares se dan tutorías de forma permanente."
        }
      ]
    },
    {
      category: "Voluntariado",
      questions: [
        {
          q: "¿Quién puede ser voluntaria/o?",
          a: "Personas mayores de 18 años comprometidas con la protección de la niñez. Pedimos disponibilidad mínima de 2–3 horas por semana (según rol)."
        },
        {
          q: "¿El voluntariado es para hombres y mujeres por igual?",
          a: "Sí. Todas las personas (hombres y mujeres) pueden ser voluntarias en la mayoría de los roles. El único rol exclusivo para mujeres es el acompañamiento en clubes, por lineamientos de protección y salvaguarda. En los demás espacios (tutorías, apoyo operativo, logística, comunicaciones, etc.) pueden participar hombres y mujeres por igual."
        },
        {
          q: "¿Qué roles existen?",
          a: "Acompañamiento en clubes, tutorías, apoyo operativo, redes sociales, logística de eventos y más. Puedes ver todos los roles disponibles en nuestra página de Voluntariado."
        },
        {
          q: "¿El voluntariado es virtual o presencial?",
          a: "Ambos. Según programa y sede. Tenemos opciones 100% virtuales y 100% presenciales, así como modalidades híbridas."
        },
        {
          q: "¿Qué requisitos piden?",
          a: "Completar el formulario, presentar copia de la hoja de delincuencia, firmar el acuerdo de confidencialidad y participar en la inducción."
        },
        {
          q: "¿Aceptan TCU/prácticas universitarias?",
          a: "Sí, según cupos y convenios activos. Puedes postular a través de nuestra página de Prácticas Profesionales."
        },
        {
          q: "¿Recibo constancia de horas?",
          a: "Sí, emitimos constancias según asistencia y cumplimiento de tareas."
        }
      ]
    },
    {
      category: "Donaciones y Alianzas",
      questions: [
        {
          q: "¿Cómo puedo donar?",
          a: "Puedes sumarte como donante mensual o hacer aportes puntuales por transferencia, SINPE Móvil y plataformas internacionales como GlobalGiving y Classy. Pulsa el botón 'Donar ahora' para conocer todas las opciones."
        },
        {
          q: "¿Cómo puedo hacerme donante mensual?",
          a: "Elige el monto y el método de cargo recurrente. Puedes pausarlo o modificarlo cuando lo necesites. Si donás desde Estados Unidos, hay opciones de deducibilidad fiscal."
        },
        {
          q: "¿Cómo se usa mi donación?",
          a: "Priorizamos la operación de clubes, la compra de materiales, las tutorías, la formación del voluntariado y el seguimiento a familias. Publicamos reportes de uso responsable regularmente."
        },
        {
          q: "¿Empresas pueden ser aliadas?",
          a: "Sí. Ofrecemos voluntariado corporativo, patrocinios, donación en especie y proyectos a medida. Contáctanos para crear una alianza personalizada."
        }
      ]
    }
  ]

  let itemIndex = 0

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Preguntas Frecuentes"
        subtitle="Resuelve tus dudas sobre Soy Niña"
        image="/community-families-learning-together.jpg"
      />

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="space-y-8">
            {faqs.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h2 className="text-3xl font-black text-[#140b3f] mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-[#4526c9] to-[#fe35fe] rounded-full"></span>
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.questions.map((item, questionIdx) => {
                    const idx = itemIndex
                    itemIndex++
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-[#4526c9] transition"
                      >
                        <button
                          onClick={() => toggleItem(idx)}
                          className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition"
                        >
                          <h3 className="text-lg font-bold text-[#140b3f] pr-4">{item.q}</h3>
                          <ChevronDown
                            size={24}
                            className={`text-[#4526c9] flex-shrink-0 transition-transform ${openItems.includes(idx) ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                        {openItems.includes(idx) && (
                          <div className="px-6 pb-6 bg-gray-50 border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">{item.a}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#4526c9] to-[#fe35fe] text-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-black mb-6">¿No encontraste tu respuesta?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Estamos aquí para ayudarte. Contáctanos directamente.</p>
          <a href="/#contacto" className="inline-block bg-white text-[#4526c9] px-8 py-4 rounded-full font-bold hover:bg-[#e0ff4f] transition">
            Contactar
          </a>
        </div>
      </section>
    </div>
  )
}
