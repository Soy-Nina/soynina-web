import { setRequestLocale } from "next-intl/server"
import { getAlternates } from "@/lib/metadata"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return {
    title: "Términos de Uso - Soy Niña",
    description: "Términos y condiciones de uso del sitio web de Fundación Soy Niña",
    alternates: getAlternates(locale, "/terminos-de-uso"),
  }
}


export default async function TerminosUso({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className="min-h-screen">

      <main className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black mb-8 text-[#140b3f]">
            Términos de Uso
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Última actualización: 3 de enero de 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4526c9] mb-4">1. Aceptación de los Términos</h2>
              <p className="text-gray-700 leading-relaxed">
                Al acceder y utilizar el sitio web de Fundación Soy Niña (www.soynina.org), usted acepta estar sujeto a estos 
                términos de uso, todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de 
                las leyes locales aplicables. Si no está de acuerdo con alguno de estos términos, tiene prohibido usar o 
                acceder a este sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4526c9] mb-4">2. Uso del Sitio Web</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Este sitio web está destinado a proporcionar información sobre los programas, actividades y misión de 
                Fundación Soy Niña. Usted acepta utilizar el sitio únicamente para:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Obtener información sobre nuestros programas y servicios</li>
                <li>Realizar donaciones a la organización</li>
                <li>Registrarse como voluntaria</li>
                <li>Contactar a la organización</li>
                <li>Cualquier otro propósito legítimo relacionado con nuestra misión</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4526c9] mb-4">3. Conducta Prohibida</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al utilizar este sitio, usted acepta NO:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Usar el sitio de manera que dañe, deshabilite, sobrecargue o deteriore el sitio</li>
                <li>Intentar obtener acceso no autorizado a cualquier parte del sitio</li>
                <li>Usar el sitio para transmitir virus, malware o código malicioso</li>
                <li>Recopilar información de otros usuarios sin su consentimiento</li>
                <li>Usar el sitio para actividades ilegales o fraudulentas</li>
                <li>Violar los derechos de propiedad intelectual de Fundación Soy Niña</li>
                <li>Hacerse pasar por otra persona u organización</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4526c9] mb-4">4. Propiedad Intelectual</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Todo el contenido de este sitio web, incluyendo textos, gráficos, logos, imágenes, videos, software y 
                compilaciones de datos, es propiedad de Fundación Soy Niña o de sus proveedores de contenido y está 
                protegido por las leyes de derechos de autor de Costa Rica e internacionales.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Puede ver y descargar material del sitio solo para uso personal y no comercial, siempre que mantenga 
                intactos todos los avisos de derechos de autor y otros avisos de propiedad.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4526c9] mb-4">5. Donaciones</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Las donaciones realizadas a través de este sitio web son procesadas de forma segura por proveedores de 
                pago de terceros. Al realizar una donación, usted acepta:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Proporcionar información de pago precisa y completa</li>
                <li>Que todas las donaciones son voluntarias y no reembolsables, excepto en casos de error de procesamiento</li>
                <li>Que Fundación Soy Niña utilizará las donaciones según su misión y objetivos organizacionales</li>
                <li>Recibir un recibo fiscal para fines de deducción de impuestos según la ley costarricense</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4526c9] mb-4">6. Enlaces a Sitios de Terceros</h2>
              <p className="text-gray-700 leading-relaxed">
                Este sitio puede contener enlaces a sitios web de terceros. Fundación Soy Niña no controla ni respalda 
                el contenido de estos sitios externos y no asume responsabilidad por ellos. El acceso a sitios de terceros 
                se realiza bajo su propio riesgo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4526c9] mb-4">7. Descargo de Responsabilidad</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El contenido de este sitio se proporciona "tal cual" sin garantías de ningún tipo, expresas o implícitas. 
                Fundación Soy Niña no garantiza que:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>El sitio estará disponible de forma ininterrumpida o libre de errores</li>
                <li>Los defectos serán corregidos</li>
                <li>El sitio o el servidor que lo aloja están libres de virus u otros componentes dañinos</li>
                <li>Los resultados obtenidos del uso del sitio serán precisos o confiables</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4526c9] mb-4">8. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 leading-relaxed">
                En ningún caso Fundación Soy Niña será responsable por daños directos, indirectos, incidentales, especiales, 
                consecuentes o ejemplares, incluyendo pérdida de beneficios, datos o uso, que resulten del uso o la 
                imposibilidad de usar este sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4526c9] mb-4">9. Modificaciones</h2>
              <p className="text-gray-700 leading-relaxed">
                Fundación Soy Niña se reserva el derecho de modificar estos términos de uso en cualquier momento. 
                Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio. Su uso continuado 
                del sitio después de dichos cambios constituye su aceptación de los nuevos términos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4526c9] mb-4">10. Ley Aplicable</h2>
              <p className="text-gray-700 leading-relaxed">
                Estos términos se rigen por las leyes de la República de Costa Rica. Cualquier disputa relacionada con 
                estos términos se resolverá en los tribunales competentes de San José, Costa Rica.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4526c9] mb-4">11. Terminación</h2>
              <p className="text-gray-700 leading-relaxed">
                Fundación Soy Niña se reserva el derecho de terminar o suspender el acceso al sitio inmediatamente, 
                sin previo aviso, por cualquier motivo, incluyendo la violación de estos términos de uso.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#4526c9] mb-4">12. Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Si tiene preguntas sobre estos términos de uso, contáctenos en:
              </p>
              <div className="bg-purple-50 p-6 rounded-lg mt-4">
                <p className="text-gray-700 font-semibold">Fundación Soy Niña</p>
                <p className="text-gray-700">Email: info@soynina.org</p>
                <p className="text-gray-700">Teléfono: +506 2222-3333</p>
                <p className="text-gray-700">Dirección: San José, Costa Rica</p>
                <p className="text-gray-700">Cédula Jurídica: 3-101-123456</p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Al utilizar este sitio web, usted reconoce que ha leído, comprendido y acepta estar sujeto a estos términos de uso.
              </p>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
