import { Mail } from "lucide-react"

export const metadata = {
  title: "¿Quiénes Somos? | Soy Niña",
  description: "Conoce nuestro equipo, junta directiva, aliados corporativos y partners universitarios de Soy Niña."
}

export default function QuienesSomosPage() {
  const team = [
    { name: "Stefany Araya", role: "Directora de Programa" },
    { name: "Hilda Rivera", role: "Asistente Administrativa" },
    { name: "Estefanía Rodríguez", role: "Asistente de Coordinación" },
    { name: "Paola Arce", role: "Media Manager" },
    { name: "Andrea Marín", role: "Coordinadora de Voluntariado" },
    { name: "Kelly Pacheco", role: "Coordinadora de Programas" },
    { name: "Melissa Lobo", role: "Facilitadora de Programas" },
    { name: "Kiara Corea", role: "Facilitadora de Programas" },
    { name: "Reychelle Mena", role: "Facilitadora de Programas" }
  ]

  const board = [
    { name: "Ana Laura Araya", role: "Presidenta" },
    { name: "Alejandro Ejea", role: "Secretario" },
    { name: "Arturo Pardo", role: "Vocal Uno" },
    { name: "Glenda Umaña", role: "Fiscal" },
    { name: "Karla Prendas", role: "Vocal" },
    { name: "Alejandra Meza", role: "Vocal" },
    { name: "Krizia Aguilar", role: "Vocal" }
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
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#140b3f] to-[#4526c9] text-white py-20">
        <div className="container mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-black mb-4">¿Quiénes Somos?</h1>
          <p className="text-xl text-gray-200">Conoce el equipo que impulsa el cambio en Soy Niña</p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 border-l-4 border-[#4526c9]">
            <h2 className="text-4xl font-black text-[#140b3f] mb-6">Nuestra Historia</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                En febrero de 2018, nace la convicción de acompañar a niñas y adolescentes en contextos de vulnerabilidad psicosocial. Comenzamos en Los Guido, Desamparados, trabajando desde la perspectiva de la educación respetuosa y los derechos humanos.
              </p>
              <p>
                Expandimos a Río Azul en 2019, y en 2021 llegamos a Pavas. En cada comunidad, trabajamos en contextos marcados por violencia urbana, embarazos tempranos, tráfico de drogas y desigualdad. Nuestro propósito es proporcionar espacios seguros donde las niñas puedan ser acompañadas en su desarrollo integral.
              </p>
              <p>
                Hoy, seguimos creciendo. En 2025 expandiremos a nuevas comunidades, siempre fieles a nuestra misión de educar con excelencia, equidad y sororidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Profesional */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-black text-[#140b3f] mb-12 text-center">Nuestro Equipo Profesional</h2>
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
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-black mb-12 text-center">Junta Directiva</h2>
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-black text-[#140b3f] mb-6 text-center">Aliados Corporativos</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Empresas comprometidas con nuestra misión</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {corporateAllies.map((ally, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-[#4526c9] hover:shadow-lg transition text-center"
              >
                <p className="font-semibold text-[#140b3f]">{ally}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Universitarios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-black text-[#140b3f] mb-6 text-center">Partners Universitarios</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Universidades que apoyan nuestra formación y prácticas</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {universityPartners.map((uni, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#4526c9] to-[#fe35fe] text-white rounded-lg p-6 border border-transparent hover:border-white/20 transition text-center"
              >
                <p className="font-semibold">{uni}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#4526c9] to-[#fe35fe] text-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-black mb-6">¿Quieres ser parte del equipo?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Únete a nuestro equipo de voluntarios o aliados corporativos.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/voluntariado" className="inline-block bg-white text-[#4526c9] px-8 py-4 rounded-full font-bold hover:bg-[#e0ff4f] transition">
              Volunteering
            </a>
            <a href="/#contacto" className="inline-block bg-[#e0ff4f] text-[#140b3f] px-8 py-4 rounded-full font-bold hover:bg-white transition">
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
