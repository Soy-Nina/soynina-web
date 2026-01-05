import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, Heart, Users, Sparkles } from "lucide-react"

const donationLevels = [
  {
    amount: "$10",
    title: "Amiga",
    description: "Materiales educativos para una niña durante un mes",
    icon: Heart,
    color: "from-[#00c49a] to-[#1ad9b0]",
  },
  {
    amount: "$25",
    title: "Aliada",
    description: "Merienda saludable para 10 niñas durante una semana",
    icon: Users,
    color: "from-[#4526c9] to-[#6842d8]",
  },
  {
    amount: "$50",
    title: "Protectora",
    description: "Un taller completo para 15 niñas",
    icon: Sparkles,
    color: "from-[#fe35fe] to-[#ff5fff]",
  },
  {
    amount: "$100+",
    title: "Patrocinadora",
    description: "Apoyo integral a un programa completo durante un mes",
    icon: DollarSign,
    color: "from-[#e0ff4f] to-[#eeff7a]",
  },
]

const otherWays = [
  "Donación de materiales educativos",
  "Patrocinio de eventos",
  "Donación en especie (alimentos, ropa, útiles)",
  "Donación corporativa",
  "Donación recurrente mensual",
]

export default function Donate() {
  return (
    <section id="donar" className="w-full py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#140b3f]">
            Tu Donación <span className="bg-gradient-to-r from-[#e0ff4f] to-[#00c49a] text-transparent bg-clip-text">Transforma Vidas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cada aporte, sin importar su tamaño, hace la diferencia. Ayúdanos a seguir empoderando a niñas y
            adolescentes en Costa Rica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {donationLevels.map((level, index) => (
            <Card key={index} className="hover:shadow-xl transition-all hover:scale-105 rounded-3xl border-2">
              <CardHeader>
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${level.color} rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg`}
                >
                  <level.icon className={level.color.includes("e0ff4f") ? "text-[#140b3f]" : "text-white"} size={32} />
                </div>
                <CardTitle className="text-center text-3xl font-bold text-[#140b3f]">{level.amount}</CardTitle>
                <CardDescription className="text-center text-lg font-semibold text-[#4526c9]">
                  {level.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-700">{level.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-3xl shadow-lg p-8 border-2">
            <h3 className="text-2xl font-bold mb-6 text-[#140b3f]">Haz tu donación</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-[#140b3f]">Transferencia bancaria:</h4>
                <div className="bg-gray-50 p-4 rounded-2xl space-y-2 text-sm border-2">
                  <p>
                    <strong>Banco:</strong> Banco Nacional de Costa Rica
                  </p>
                  <p>
                    <strong>Cuenta IBAN:</strong> CR12345678901234567890
                  </p>
                  <p>
                    <strong>Titular:</strong> Fundación Soy Niña
                  </p>
                  <p>
                    <strong>Cédula jurídica:</strong> 3-101-123456
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-[#140b3f]">SINPE Móvil:</h4>
                <div className="bg-gray-50 p-4 rounded-2xl border-2">
                  <p className="text-2xl font-bold text-[#4526c9]">8888-8888</p>
                  <p className="text-sm text-gray-600 mt-2">Fundación Soy Niña</p>
                </div>
              </div>

              <Button
                className="w-full bg-[#e0ff4f] hover:bg-[#d4f53d] text-[#140b3f] rounded-full font-bold shadow-lg"
                size="lg"
              >
                Donar con tarjeta
              </Button>

              <p className="text-sm text-gray-600 text-center">
                Todas las donaciones son deducibles de impuestos según la legislación costarricense
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#140b3f]">Otras formas de apoyar</h3>
            <Card className="rounded-3xl border-2">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {otherWays.map((way, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#00c49a] mt-1">✓</span>
                      <span className="text-gray-700">{way}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-purple-50 rounded-2xl border-2">
                  <h4 className="font-semibold mb-2 text-[#140b3f]">¿Eres una empresa?</h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Contáctanos para conocer nuestros programas de responsabilidad social empresarial y alianzas
                    estratégicas
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-[#fe35fe] text-[#fe35fe] hover:bg-[#fe35fe] hover:text-white bg-transparent rounded-full font-semibold"
                  >
                    Contactar área corporativa
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 bg-[#140b3f] text-white rounded-3xl p-6">
              <h4 className="font-bold text-lg mb-3">Transparencia</h4>
              <p className="text-gray-300 text-sm">
                Publicamos informes financieros anuales y auditorías externas. El 85% de nuestros fondos se destinan
                directamente a programas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
