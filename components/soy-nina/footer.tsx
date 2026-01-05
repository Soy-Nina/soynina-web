import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#140b3f] text-white py-12">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-1.png" alt="Soy Niña" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-sm">Empoderando a niñas y adolescentes en Costa Rica desde 2015</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/quienes-somos" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">
                  ¿Quiénes somos?
                </a>
              </li>
              <li>
                <a href="/programas" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">
                  Programas
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/voluntariado" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">
                  Voluntariado
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">
                  Noticias
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Apóyanos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#donar" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">
                  Hacer una donación
                </a>
              </li>
              <li>
                <a href="/voluntariado" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">
                  Ser voluntaria
                </a>
              </li>
              <li>
                <a href="/sostenibilidad" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">
                  Alianzas corporativas
                </a>
              </li>
              <li>
                <a href="/#contacto" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Información</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#impacto" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">
                  Nuestro Impacto
                </a>
              </li>
              <li>
                <a href="/#mision" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">
                  Misión y Visión
                </a>
              </li>
              <li>
                <a href="/sostenibilidad" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">
                  Sostenibilidad
                </a>
              </li>
              <li>
                <a href="/politica-de-privacidad" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="/terminos-de-uso" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">
                  Términos de uso
                </a>
              </li>
              <li className="text-gray-400 text-xs mt-4">Cédula jurídica: 3-101-123456</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Hecho con <Heart className="text-[#fe35fe]" size={16} /> en Costa Rica © 2025 Soy Niña
          </p>
        </div>
      </div>
    </footer>
  )
}
