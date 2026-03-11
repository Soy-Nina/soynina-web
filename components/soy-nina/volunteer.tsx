const roles = [
  { emoji: "💜", title: "Clubes Semanales", desc: "Facilita talleres educativos y de empoderamiento" },
  { emoji: "📚", title: "Tutorías Académicas", desc: "Enseña diferentes asignaturas de forma virtual" },
  { emoji: "👨‍👩‍👧‍👦", title: "Club Familias", desc: "Facilita sesiones virtuales con familias" },
  { emoji: "📱", title: "Comunicación", desc: "Crea contenido para redes sociales" },
  { emoji: "🍎", title: "Banco de Alimentos", desc: "Gestiona y distribuye alimentos mensualmente" },
  { emoji: "💝", title: "Donantes", desc: "Recluta donantes y da seguimiento a campañas" },
]

export default function Volunteer() {
  return (
    <section id="voluntariado" className="w-full py-24 bg-[#f8f4ff]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/young-girls-in-educational-workshop-in-costa-rica.jpg"
                alt="Voluntaria en taller educativo"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140b3f]/50 to-transparent" />
              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4">
                  <p className="text-xs font-bold text-[#4526c9] uppercase tracking-widest mb-1">Voluntarias dicen:</p>
                  <p className="text-[#140b3f] font-medium text-sm italic">
                    "Encontré una comunidad de mujeres que creen en educación con equidad."
                  </p>
                  <p className="text-gray-500 text-xs mt-1">— Katherine, Voluntaria de Donantes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="text-[#4526c9] text-sm font-bold tracking-[0.2em] uppercase">Voluntariado</span>
            <h2 className="text-5xl md:text-6xl font-black text-[#140b3f] leading-tight mt-3 mb-6">
              Sé parte<br />del cambio.
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Las voluntarias son el corazón de Soy Niña. Si creés en el poder de la educación para transformar
              vidas, tenemos un lugar para vos — desde facilitar clubes hasta crear contenido digital.
            </p>

            {/* Roles grid */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {roles.map((role, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 border border-gray-100 hover:border-[#4526c9]/30 hover:shadow-md transition-all"
                >
                  <div className="text-2xl mb-2">{role.emoji}</div>
                  <div className="font-bold text-[#140b3f] text-sm mb-1">{role.title}</div>
                  <div className="text-xs text-gray-500">{role.desc}</div>
                </div>
              ))}
            </div>

            {/* Requirements summary */}
            <div className="bg-white border border-gray-100 rounded-xl p-5 mb-8 text-sm text-gray-600 space-y-1">
              <p className="font-bold text-[#140b3f] mb-2">Requisitos básicos:</p>
              <p>✓ Mayor de 18 años · mín. 2–4 hrs/semana</p>
              <p>✓ Compromiso con protección de la niñez</p>
              <p>✓ Completar proceso de inducción (formulario → referencias → acuerdo)</p>
            </div>

            <a
              href="/voluntariado"
              className="inline-flex items-center justify-center bg-[#4526c9] hover:bg-[#3619b8] text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              Ver oportunidades de voluntariado →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
