import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Leaf, Building2, Users, Target } from "lucide-react"
import { Link } from "@/src/i18n/navigation"

const services = [
  {
    icon: Building2,
    title: "Consultoría en Responsabilidad Social",
    description:
      "Ayudamos a empresas a diseñar e implementar programas de RSE alineados con los Objetivos de Desarrollo Sostenible.",
    features: ["Diagnóstico de impacto social", "Diseño de programas", "Medición de resultados"],
  },
  {
    icon: Users,
    title: "Capacitación Corporativa",
    description:
      "Talleres y capacitaciones en equidad de género, prevención de violencia y desarrollo comunitario para equipos empresariales.",
    features: ["Talleres personalizados", "Certificación", "Seguimiento continuo"],
  },
  {
    icon: Target,
    title: "Alianzas Estratégicas",
    description: "Creamos alianzas duraderas entre empresas y comunidades para generar impacto social sostenible.",
    features: ["Voluntariado corporativo", "Patrocinios", "Programas conjuntos"],
  },
]

export default function Sustainability() {
  return (
    <section id="sostenibilidad" className="w-full py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#140b3f]">
            Servicios de <span className="bg-gradient-to-r from-[#00c49a] to-[#1ad9b0] text-transparent bg-clip-text">Sostenibilidad</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Generamos recursos propios a través de servicios especializados que fortalecen nuestra autonomía financiera
            y multiplican nuestro impacto social
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all hover:scale-105 rounded-3xl border-2">
              <CardHeader>
                <div className="w-14 h-14 bg-[#4526c9] rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <service.icon className="text-white" size={28} />
                </div>
                <CardTitle className="text-xl text-[#140b3f]">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#00c49a] mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-[#140b3f] text-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">¿Por qué trabajar con nosotras?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#e0ff4f] mt-1">✓</span>
                  <span>10 años de experiencia en desarrollo comunitario</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e0ff4f] mt-1">✓</span>
                  <span>Metodologías probadas y basadas en evidencia</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e0ff4f] mt-1">✓</span>
                  <span>Impacto medible y reportes transparentes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e0ff4f] mt-1">✓</span>
                  <span>Cada servicio financia directamente nuestros programas sociales</span>
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-lg mb-6">
                Conoce nuestros servicios de formación y consultoría
              </p>
              <Link 
                href="/sostenibilidad" 
                className="inline-block bg-gradient-to-r from-[#00c49a] to-[#1ad9b0] text-white text-lg px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105 shadow-lg"
              >
                Ver servicios de sostenibilidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
