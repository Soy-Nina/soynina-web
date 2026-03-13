import { setRequestLocale, getTranslations } from "next-intl/server"
import PageHero from "@/components/soy-nina/page-hero"
import { getReports } from "@/lib/reports"
import Reports from "@/components/soy-nina/reports"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "InformesPage" })
    return { title: t("metaTitle"), description: t("metaDescription") }
}

export default async function InformesPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    setRequestLocale(locale)
    const t = await getTranslations({ locale, namespace: "InformesPage" })
    const reports = getReports()

    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title={t("heroTitle")}
                subtitle={t("heroSubtitle")}
                image="/community-workshop-with-families.jpg"
            />
            <Reports reports={reports} />
        </div>
    )
}
