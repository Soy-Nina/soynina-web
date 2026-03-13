"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"
import LocaleSwitcher from "./locale-switcher"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const t = useTranslations("Navigation")

  // Check if on homepage (could be / or /en)
  const isHomePage = pathname === "/" || pathname === "/en" || pathname === "/es"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // On homepage: transparent when at top, navy when scrolled. On other pages: always navy.
  const navBg = (!isHomePage || scrolled) ? "bg-[#140b3f] shadow-lg" : "bg-transparent"

  const navItems = [
    { href: "/quienes-somos" as const, label: t("quienesSomos") },
    { href: "/programas" as const, label: t("programas") },
    { href: "/voluntariado" as const, label: t("voluntariado") },
    { href: "/blog" as const, label: t("blog") },
    { href: "/eventos" as const, label: t("eventos") },
    { href: "/informes" as const, label: t("informes") },
    { href: "/contacto" as const, label: t("contacto") },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo-1.png" alt="Soy Niña" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-colors ${pathname.includes(item.href)
                  ? "text-[#e0ff4f]"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <LocaleSwitcher />
            <a
              href={isHomePage ? "#donar" : "/#donar"}
              className="bg-[#e0ff4f] hover:bg-[#d4f53d] text-[#140b3f] font-bold text-sm px-6 py-2.5 rounded-full transition-all hover:scale-105"
            >
              {t("donarAhora")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/20 bg-[#140b3f]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-white/80 hover:text-white font-medium transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="py-3">
              <LocaleSwitcher />
            </div>
            <a
              href={isHomePage ? "#donar" : "/#donar"}
              onClick={() => setIsOpen(false)}
              className="block mt-4 bg-[#e0ff4f] text-[#140b3f] font-bold text-center px-6 py-3 rounded-full text-sm"
            >
              {t("donarAhora")}
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
