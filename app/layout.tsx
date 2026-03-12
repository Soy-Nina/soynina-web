import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navigation from "@/components/soy-nina/navigation"
import Footer from "@/components/soy-nina/footer"
import "./globals.css"

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Soy Niña - Empoderando niñas y adolescentes en Costa Rica",
  description:
    "ONG costarricense dedicada al desarrollo integral de niñas, adolescentes y familias en situación de vulnerabilidad social mediante programas socioeducativos.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
