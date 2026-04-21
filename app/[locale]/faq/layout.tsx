import type React from "react"
import { getAlternates } from "@/lib/metadata"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return {
    title: locale === "es" ? "Preguntas Frecuentes - Soy Niña" : "FAQ - Soy Niña",
    description:
      locale === "es"
        ? "Respuestas a las preguntas más frecuentes sobre Fundación Soy Niña y sus programas"
        : "Answers to frequently asked questions about Fundación Soy Niña and its programs",
    alternates: getAlternates(locale, "/faq"),
  }
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
