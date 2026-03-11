"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // On homepage: transparent when at top, navy when scrolled. On other pages: always navy.
  const navBg = (!isHomePage || scrolled) ? "bg-[#140b3f] shadow-lg" : "bg-transparent"

  const navItems = [
    { href: "/quienes-somos", label: "¿Quiénes Somos?" },
    { href: "/programas", label: "Programas" },
    { href: "/voluntariado", label: "Voluntariado" },
    { href: "/blog", label: "Blog" },
    { href: "/eventos", label: "Eventos" },
    { href: "/informes", label: "Informes" },
    { href: "/#contacto", label: "Contacto" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/logo-1.png" alt="Soy Niña" className="h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-colors ${pathname === item.href
                  ? "text-[#e0ff4f]"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={isHomePage ? "#donar" : "/#donar"}
              className="bg-[#e0ff4f] hover:bg-[#d4f53d] text-[#140b3f] font-bold text-sm px-6 py-2.5 rounded-full transition-all hover:scale-105"
            >
              Donar Ahora
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
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-white/80 hover:text-white font-medium transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={isHomePage ? "#donar" : "/#donar"}
              onClick={() => setIsOpen(false)}
              className="block mt-4 bg-[#e0ff4f] text-[#140b3f] font-bold text-center px-6 py-3 rounded-full text-sm"
            >
              Donar Ahora
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
