import { Button } from "@/components/ui/button"

const programs = [
  {
    image: "/girls-participating-in-stem-activities.jpg",
    title: "Club Niña",
    age: "6-12 años",
    description:
      "Programa socioeducativo que desarrolla habilidades socioemocionales, pensamiento crítico y autocuidado en niñas de primaria.",
    activities: [
      "Talleres de autoestima y liderazgo",
      "Educación en derechos",
      "Actividades recreativas y deportivas",
      "Arte y expresión creativa",
    ],
    color: "from-[#4526c9] to-[#2d1a7a]",
  },
  {
    image: "/girls-participating-in-stem-activities.jpg",
    title: "Club Cole",
    age: "13-17 años",
    description:
      "Espacio de empoderamiento para adolescentes que fortalece su autonomía, toma de decisiones informadas y proyecto de vida.",
    activities: [
      "Educación sexual integral",
      "Prevención de violencia",
      "Orientación vocacional",
      "Participación ciudadana",
    ],
    color: "from-[#00a085] to-[#007a65]",
  },
  {
    image: "/girls-participating-in-stem-activities.jpg",
    title: "Club Familias",
    age: "Familias",
    description:
      "Acompañamiento integral a familias para fortalecer vínculos, habilidades parentales y desarrollo comunitario.",
    activities: [
      "Talleres de crianza positiva",
      "Gestión emocional familiar",
      "Economía del hogar",
      "Redes de apoyo comunitario",
    ],
    color: "from-[#d61e8a] to-[#9c0a5e]",
  },
  {
    image: "/girls-participating-in-stem-activities.jpg",
    title: "Tutorías",
    age: "Apoyo académico",
    description:
      "Refuerzo educativo personalizado para mejorar el rendimiento académico y prevenir la deserción escolar.",
    activities: [
      "Apoyo en matemáticas y español",
      "Técnicas de estudio",
      "Acompañamiento individualizado",
      "Seguimiento del progreso",
    ],
    color: "from-[#c4a800] to-[#8a7700]",
  },
]

export default function Programs() {
  return (
    <section id="programas" className="w-full py-20 bg-gradient-to-b from-white via-[#f8f4ff] to-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#e0ff4f]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#4526c9]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#140b3f] mb-4">
            Nuestros <span className="bg-gradient-to-r from-[#4526c9] via-[#fe35fe] to-[#00c49a] text-transparent bg-clip-text">Programas</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Programas integrales diseñados para cada etapa del desarrollo, fortaleciendo capacidades y construyendo futuros brillantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl transition-all duration-300 hover:shadow-2xl bg-white"
            >
              {/* Image section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay matching program color */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-60 group-hover:opacity-50 transition-opacity`} />
                
                {/* Title overlay on image */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-3xl font-black text-white mb-1">{program.title}</h3>
                  <p className="text-xs font-bold text-white/90 uppercase tracking-widest">{program.age}</p>
                </div>
              </div>
              
              {/* Content section */}
              <div className="p-6">
                <p className="text-sm leading-relaxed text-gray-700 mb-4">{program.description}</p>
                
                <div>
                  <h4 className="font-bold mb-3 text-xs uppercase tracking-widest text-gray-500">Actividades:</h4>
                  <ul className="space-y-1.5 mb-6">
                    {program.activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className={`font-black text-base leading-none mt-0.5 bg-gradient-to-r ${program.color} text-transparent bg-clip-text`}>→</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${program.color} text-white hover:shadow-lg font-bold text-sm rounded-full py-5 transition-all`}
                  >
                    <a href="#contacto">Conocer más</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="/programas" 
            className="inline-block bg-gradient-to-r from-[#fe35fe] to-[#ff5fff] text-white text-base px-8 py-3 rounded-full font-bold hover:shadow-xl transition transform hover:scale-105"
          >
            Ver detalles de todos los programas
          </a>
        </div>
      </div>
    </section>
  )
}
