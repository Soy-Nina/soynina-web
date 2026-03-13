import { Link } from "@/src/i18n/navigation"

export default function About() {
  return (
    <section id="quienes-somos" className="w-full py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#140b3f]">
            ¿Quiénes <span className="bg-gradient-to-r from-[#4526c9] to-[#fe35fe] text-transparent bg-clip-text">Somos</span>?
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-base">
                <strong className="text-[#4526c9]">Soy Niña</strong> es una organización no gubernamental costarricense
                fundada en 2015, dedicada al empoderamiento de niñas, adolescentes y familias en situación de
                vulnerabilidad social.
              </p>
              <p>
                Trabajamos en comunidades de San José, Heredia y Alajuela, donde implementamos programas socioeducativos
                que fortalecen habilidades para la vida, promueven la equidad de género y previenen situaciones de
                violencia y exclusión.
              </p>
              <p>
                Nuestro equipo está conformado por profesionales en trabajo social, psicología, educación y desarrollo
                comunitario, junto con una red de más de 200 voluntarias comprometidas con la transformación social.
              </p>

              <div className="pt-6">
                <Link 
                  href="/quienes-somos" 
                  className="inline-block bg-gradient-to-r from-[#4526c9] to-[#6842d8] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105 shadow-lg"
                >
                  Conocer más sobre nosotras
                </Link>
              </div>

              <div className="pt-10 border-t border-gray-200 space-y-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="group">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4526c9] to-[#6842d8] rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-[#4526c9] to-[#6842d8] rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-2xl">❤</span>
                      </div>
                    </div>
                    <h4 className="text-2xl font-black mb-3 text-[#140b3f]">Misión</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Acompañar a niñas y adolescentes en contextos de vulnerabilidad psicosocial, promoviendo el autocuidado y la toma de decisiones informadas.
                    </p>
                  </div>

                  <div className="group">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00c49a] to-[#1ad9b0] rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-[#00c49a] to-[#1ad9b0] rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-2xl">👁️</span>
                      </div>
                    </div>
                    <h4 className="text-2xl font-black mb-3 text-[#140b3f]">Visión</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Ser un programa de referencia para Costa Rica y Centroamérica por su calidad y continuidad, expandiéndonos a más comunidades.
                    </p>
                  </div>

                  <div className="group">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#fe35fe] to-[#ff5fff] rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-[#fe35fe] to-[#ff5fff] rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-2xl">✦</span>
                      </div>
                    </div>
                    <h4 className="text-2xl font-black mb-3 text-[#140b3f]">Valores</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>Excelencia</li>
                      <li>Equidad</li>
                      <li>Sororidad</li>
                      <li>Educación respetuosa</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <img
              src="/diverse-group-of-girls-learning-together-in-costa-.jpg"
              alt="Niñas participando en actividades"
              className="rounded-3xl shadow-xl w-full"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/girls-doing-art-activities.jpg"
                alt="Actividades artísticas"
                className="rounded-3xl shadow-lg w-full"
              />
              <img
                src="/community-workshop-with-families.jpg"
                alt="Talleres comunitarios"
                className="rounded-3xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
