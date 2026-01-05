"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/quienes-somos", label: "¿Quiénes Somos?" },
    { href: "/programas", label: "Programas" },
    { href: "/voluntariado", label: "Voluntariado" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/sostenibilidad", label: "Sostenibilidad" },
    { href: "/#contacto", label: "Contacto" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-[#140b3f] shadow-lg">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src="/logo-1.png" alt="Soy Niña" className="h-16" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#e0ff4f] transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-[#fe35fe] hover:bg-[#e01fe0] text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all"
            >
              <a href={isHomePage ? "#donar" : "/#donar"}>Donar Ahora</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-white hover:text-[#e0ff4f] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="w-full mt-4 bg-[#fe35fe] hover:bg-[#e01fe0] text-white rounded-full">
              <a href={isHomePage ? "#donar" : "/#donar"} onClick={() => setIsOpen(false)}>
                Donar Ahora
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}

