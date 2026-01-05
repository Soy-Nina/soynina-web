import { Heart, Eye, Award } from "lucide-react"

export default function Mission() {
  return (
    <section id="mision" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative gradient shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#4526c9]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#fe35fe]/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-[#140b3f] mb-4">
            Nuestro <span className="bg-gradient-to-r from-[#4526c9] to-[#fe35fe] text-transparent bg-clip-text">Propósito</span>
          </h2>
          <div className="h-2 w-32 bg-gradient-to-r from-[#e0ff4f] to-[#00c49a] rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Misión */}
          <div className="group">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4526c9] to-[#6842d8] rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-24 h-24 bg-gradient-to-br from-[#4526c9] to-[#6842d8] rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                <Heart className="text-white" size={40} />
              </div>
            </div>
            <h3 className="text-3xl font-black mb-4 text-[#140b3f]">Misión</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Acompañar a niñas y adolescentes en contextos de vulnerabilidad psicosocial, promoviendo el autocuidado y la toma de decisiones informadas.
            </p>
          </div>

          {/* Visión */}
          <div className="group">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c49a] to-[#1ad9b0] rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-24 h-24 bg-gradient-to-br from-[#00c49a] to-[#1ad9b0] rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                <Eye className="text-white" size={40} />
              </div>
            </div>
            <h3 className="text-3xl font-black mb-4 text-[#140b3f]">Visión</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Convertirnos en un programa de referencia para Costa Rica y Centroamérica, reconocido por su calidad y continuidad, expandiéndonos a más comunidades.
            </p>
          </div>

          {/* Valores */}
          <div className="group">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fe35fe] to-[#ff5fff] rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-24 h-24 bg-gradient-to-br from-[#fe35fe] to-[#ff5fff] rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                <Award className="text-white" size={40} />
              </div>
            </div>
            <h3 className="text-3xl font-black mb-4 text-[#140b3f]">Valores</h3>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-center gap-3"><span className="text-[#e0ff4f] font-black text-2xl">✦</span> Excelencia</li>
              <li className="flex items-center gap-3"><span className="text-[#e0ff4f] font-black text-2xl">✦</span> Equidad</li>
              <li className="flex items-center gap-3"><span className="text-[#e0ff4f] font-black text-2xl">✦</span> Sororidad</li>
              <li className="flex items-center gap-3"><span className="text-[#e0ff4f] font-black text-2xl">✦</span> Educación Respetuosa</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
