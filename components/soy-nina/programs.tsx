const programs = [
  {
    image: "/girls-participating-in-stem-activities.jpg",
    title: "Club Niña",
    age: "6–12 años",
    description:
      "Desarrolla habilidades socioemocionales, pensamiento crítico y autocuidado en niñas de primaria.",
    activities: [
      "Talleres de autoestima y liderazgo",
      "Educación en derechos",
      "Arte y expresión creativa",
    ],
    accent: "#4526c9",
  },
  {
    image: "/girls-doing-art-activities.jpg",
    title: "Club Cole",
    age: "13–17 años",
    description:
      "Empodera a adolescentes fortaleciendo su autonomía, toma de decisiones y proyecto de vida.",
    activities: [
      "Educación sexual integral",
      "Prevención de violencia",
      "Orientación vocacional",
    ],
    accent: "#00c49a",
  },
  {
    image: "/community-workshop-with-families.jpg",
    title: "Club Familias",
    age: "Familias",
    description:
      "Acompañamiento integral para fortalecer vínculos, habilidades parentales y desarrollo comunitario.",
    activities: [
      "Talleres de crianza positiva",
      "Gestión emocional familiar",
      "Redes de apoyo comunitario",
    ],
    accent: "#fe35fe",
  },
  {
    image: "/community-families-learning-together.jpg",
    title: "Tutorías",
    age: "Apoyo académico",
    description:
      "Refuerzo educativo personalizado para mejorar el rendimiento académico y prevenir la deserción.",
    activities: [
      "Apoyo en matemáticas y español",
      "Técnicas de estudio",
      "Acompañamiento individualizado",
    ],
    accent: "#e0a800",
  },
]

export default function Programs() {
  return (
    <section id="programas" className="w-full py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section header — left-aligned editorial style */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 mb-16 items-end">
          <div>
            <span className="text-[#4526c9] text-sm font-bold tracking-[0.2em] uppercase">Programas</span>
            <h2 className="text-5xl md:text-6xl font-black text-[#140b3f] leading-tight mt-3">
              Lo que<br />hacemos.
            </h2>
          </div>
          <div className="max-w-xl lg:ml-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Cuatro programas complementarios que acompañan a niñas, adolescentes y sus familias —
              desde la primaria hasta la vida adulta temprana.
            </p>
            <a
              href="/programas"
              className="inline-flex items-center gap-2 mt-6 text-[#4526c9] font-bold hover:gap-4 transition-all"
            >
              Ver todos los programas
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>

        {/* Program cards — 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
              style={{ borderLeft: `4px solid ${program.accent}` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-black text-[#140b3f]">{program.title}</h3>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white ml-4 flex-shrink-0 mt-1"
                    style={{ backgroundColor: program.accent }}
                  >
                    {program.age}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-5 text-sm">{program.description}</p>

                <ul className="space-y-2 mt-auto">
                  {program.activities.map((activity, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: program.accent }}
                      />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
