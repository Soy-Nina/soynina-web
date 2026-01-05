import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Clock, Users, Award } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Impacto Real",
    description: "Transforma vidas y contribuye al desarrollo de tu comunidad",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Forma parte de una red de personas comprometidas con el cambio social",
  },
  {
    icon: Award,
    title: "Desarrollo Personal",
    description: "Adquiere nuevas habilidades y experiencia en trabajo social",
  },
  {
    icon: Clock,
    title: "Flexibilidad",
    description: "Elige el programa y horario que mejor se adapte a tu disponibilidad",
  },
]

const roles = [
  "Facilitadora de talleres",
  "Tutora académica",
  "Apoyo en eventos",
  "Gestión administrativa",
  "Comunicación y redes sociales",
  "Profesional especializada (psicología, trabajo social, etc.)",
]

export default function Volunteer() {
  return (
    <section id="voluntariado" className="w-full py-20 bg-[#140b3f] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Únete como <span className="bg-gradient-to-r from-[#fe35fe] to-[#ff5fff] text-transparent bg-clip-text">Voluntaria</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Tu tiempo y talento pueden hacer la diferencia. Forma parte del cambio que quieres ver en el mundo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">¿Por qué ser voluntaria?</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 rounded-3xl hover:scale-105 transition-transform"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#fe35fe] rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <benefit.icon size={24} className="text-white" />
                    </div>
                    <CardTitle className="text-white text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Áreas de voluntariado</h3>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-3xl">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-6">
                  Tenemos diversas oportunidades para que puedas aportar según tus habilidades e intereses:
                </p>
                <ul className="space-y-3">
                  {roles.map((role, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#00c49a] mt-1">✓</span>
                      <span className="text-white">{role}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-white/5 rounded-2xl">
                  <h4 className="font-semibold mb-2 text-[#e0ff4f]">Requisitos:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Mayor de 18 años</li>
                    <li>• Compromiso mínimo de 3 meses</li>
                    <li>• Disponibilidad de al menos 4 horas semanales</li>
                    <li>• Completar proceso de inducción</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="/voluntariado" 
            className="inline-block bg-gradient-to-r from-[#fe35fe] to-[#ff5fff] text-white text-lg px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105 shadow-lg"
          >
            Ver oportunidades de voluntariado
          </a>
          <p className="text-gray-400 mt-4">Conoce los requisitos y roles disponibles</p>
        </div>
      </div>
    </section>
  )
}
