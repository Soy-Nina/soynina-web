import { setRequestLocale, getTranslations } from "next-intl/server"
import { getAlternates } from "@/lib/metadata"
import { marked } from "marked"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "TerminosPage" })
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/terminos-de-uso"),
  }
}

export default async function TerminosUso({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: "TerminosPage" })
  
  // Need to get the raw JSON to map over sections
  const messages = (await import(`@/messages/${locale}.json`)).default
  const sections = messages.TerminosPage.sections
  const contactInfo = messages.TerminosPage.contactInfo

  return (
    <div className="min-h-screen">
      <main className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black mb-8 text-[#140b3f]">
            {t("title")}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              {t("lastUpdated")}
            </p>

            {sections.map((section: any, index: number) => (
              <section key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-[#4526c9] mb-4">{section.title}</h2>
                <div 
                  className="text-gray-700 leading-relaxed markdown-content"
                  dangerouslySetInnerHTML={{ __html: marked(section.content) as string }}
                />
              </section>
            ))}

            <section className="mb-8">
              <div className="bg-purple-50 p-6 rounded-lg mt-4">
                <p className="text-gray-700 font-semibold">{contactInfo.organization}</p>
                <p className="text-gray-700">Email: {contactInfo.email}</p>
                <p className="text-gray-700">Teléfono: {contactInfo.phone}</p>
                <p className="text-gray-700">Dirección: {contactInfo.address}</p>
                <p className="text-gray-700">{contactInfo.legalId}</p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                {t("footerNote")}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
