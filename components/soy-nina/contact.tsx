"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contacto" className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#140b3f]">
            <span className="bg-gradient-to-r from-[#4526c9] to-[#fe35fe] text-transparent bg-clip-text">Contacto</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ¿Tienes preguntas? ¿Quieres colaborar? Nos encantaría escucharte
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="rounded-3xl border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-[#140b3f]">Información de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4526c9] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#140b3f] mb-1">Correo electrónico</h3>
                    <a href="mailto:info@soynina.onmicrosoft.com" className="text-gray-600 hover:text-[#4526c9]">
                      info@soynina.onmicrosoft.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00c49a] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#140b3f] mb-1">Teléfono</h3>
                    <a href="tel:+50622334455" className="text-gray-600 hover:text-[#00c49a]">
                      +506 2233-4455
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#fe35fe] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#140b3f] mb-1">Ubicación</h3>
                    <p className="text-gray-600">
                      San José, Costa Rica
                      <br />
                      Avenida Central, Calle 5<br />
                      Edificio Torre Niña, Oficina 301
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-semibold text-[#140b3f] mb-4">Síguenos en redes sociales</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#4526c9] rounded-full flex items-center justify-center text-white hover:bg-[#5a38d1] transition-colors shadow-lg"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#fe35fe] rounded-full flex items-center justify-center text-white hover:bg-[#ea20ea] transition-colors shadow-lg"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#00c49a] rounded-full flex items-center justify-center text-white hover:bg-[#00af89] transition-colors shadow-lg"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="rounded-3xl border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-[#140b3f]">Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4526c9]"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4526c9]"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4526c9]"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4526c9]"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#fe35fe] hover:bg-[#ea20ea] text-white rounded-full shadow-lg"
                    size="lg"
                  >
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
