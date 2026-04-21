import type React from "react"
import { getAlternates } from "@/lib/metadata"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return {
    title: locale === "es" ? "Contacto - Soy Niña" : "Contact - Soy Niña",
    description:
      locale === "es"
        ? "Ponete en contacto con Fundación Soy Niña"
        : "Get in touch with Fundación Soy Niña",
    alternates: getAlternates(locale, "/contacto"),
  }
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children
}
