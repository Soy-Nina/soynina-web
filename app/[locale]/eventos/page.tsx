import { setRequestLocale, getTranslations } from "next-intl/server"
import PageHero from "@/components/soy-nina/page-hero"
import EventsCalendar from "@/components/soy-nina/events-calendar"
import { Link } from "@/src/i18n/navigation"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "EventosPage" })
    return { title: t("metaTitle"), description: t("metaDescription") }
}

export default async function EventosPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    setRequestLocale(locale)
    const t = await getTranslations({ locale, namespace: "EventosPage" })

    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title={t("heroTitle")}
                subtitle={t("heroSubtitle")}
                image="/community-workshop-with-families.jpg"
            />

            {/* Intro */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-8 max-w-4xl">
                    <div className="bg-white rounded-2xl p-8 border-l-4 border-[#4526c9]">
                        <h2 className="text-3xl font-black text-[#140b3f] mb-4">{t("calendarTitle")}</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            {t("calendarDescription")}
                        </p>
                    </div>
                </div>
            </section>

            <EventsCalendar />

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-[#4526c9] to-[#6b3fdb] text-white">
                <div className="container mx-auto px-8 text-center">
                    <h2 className="text-4xl font-black mb-6">{t("ctaTitle")}</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
                        {t("ctaDescription")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/voluntariado"
                            className="inline-block bg-[#e0ff4f] text-[#140b3f] px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg"
                        >
                            {t("ctaVolunteer")}
                        </Link>
                        <Link
                            href="/contacto"
                            className="inline-block bg-transparent border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
                        >
                            {t("ctaContact")}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
