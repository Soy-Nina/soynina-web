import { setRequestLocale, getTranslations } from "next-intl/server"
import { getAlternates } from "@/lib/metadata"

import Hero from "@/components/soy-nina/hero"
import Programs from "@/components/soy-nina/programs"
import Impact from "@/components/soy-nina/impact"
import Donate from "@/components/soy-nina/donate"
import Volunteer from "@/components/soy-nina/volunteer"
import Newsletter from "@/components/soy-nina/newsletter"
import UpcomingEvents from "@/components/soy-nina/upcoming-events"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Metadata" })
  return { title: t("title"), description: t("description"), alternates: getAlternates(locale, "") }
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Hero />
      <Programs />
      <Impact />
      <UpcomingEvents />
      <Donate />
      <Volunteer />
      <Newsletter />
    </>
  )
}
