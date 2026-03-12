import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#140b3f] text-white">
      {/* Donate CTA strip */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/80 text-sm font-medium">
              El 85% de nuestros fondos va directamente a programas. Publicamos informes anuales.
            </p>
            <a
              href="/#donar"
              className="bg-[#e0ff4f] hover:bg-[#d4f53d] text-[#140b3f] font-bold text-sm px-7 py-3 rounded-full transition-all hover:scale-105 flex-shrink-0"
            >
              Donar ahora
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <img src="/logo-1.png" alt="Soy Niña" className="h-12 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Empoderando a niñas y adolescentes en Costa Rica desde 2015.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-[#4526c9] rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-[#fe35fe] rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-[#0e76a8] rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Organización */}
          <div>
            <h3 className="font-bold text-sm mb-4">Organización</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/quienes-somos" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">¿Quiénes somos?</a></li>
              <li><a href="/programas" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">Programas</a></li>
              <li><a href="/sostenibilidad" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">Sostenibilidad</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">Blog</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">Preguntas frecuentes</a></li>
            </ul>
          </div>

          {/* Apóyanos */}
          <div>
            <h3 className="font-bold text-sm mb-4">Apóyanos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#donar" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">Hacer una donación</a></li>
              <li><a href="/voluntariado" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">Ser voluntaria</a></li>
              <li><a href="/sostenibilidad" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">Alianzas corporativas</a></li>
              <li><a href="/contacto" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-sm mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/politica-de-privacidad" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">Política de privacidad</a></li>
              <li><a href="/terminos-de-uso" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">Términos de uso</a></li>
              <li className="text-gray-600 text-xs pt-2">Cédula jurídica: 3-101-123456</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© 2025 Fundación Soy Niña. Todos los derechos reservados.</p>
          <p>Hecho con ♥ en Costa Rica</p>
        </div>
      </div>
    </footer>
  )
}
