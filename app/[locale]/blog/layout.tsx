import { getAlternates } from "@/lib/metadata"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return {
    title: "Blog - Soy Niña",
    description: "Historias, noticias y artículos sobre empoderamiento de niñas y adolescentes",
    alternates: getAlternates(locale, "/blog"),
  }
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
