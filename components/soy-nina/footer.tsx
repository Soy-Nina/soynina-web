import { Facebook, Instagram, Linkedin } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"

export default function Footer() {
  const t = useTranslations("Footer")

  return (
    <footer className="bg-[#140b3f] text-white">
      {/* Donate CTA strip */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/80 text-sm font-medium">
              {t("donateStrip")}
            </p>
            <a
              href="/#donar"
              className="bg-[#e0ff4f] hover:bg-[#d4f53d] text-[#140b3f] font-bold text-sm px-7 py-3 rounded-full transition-all hover:scale-105 flex-shrink-0"
            >
              {t("donateNow")}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <img src="/logo-1.png" alt="Soy Niña" className="h-12 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("brandDescription")}
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-[#4526c9] rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-[#fe35fe] rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-[#0e76a8] rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Organización */}
          <div>
            <h3 className="font-bold text-sm mb-4">{t("organization")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/quienes-somos" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">{t("quienesSomos")}</Link></li>
              <li><Link href="/programas" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">{t("programas")}</Link></li>
              <li><Link href="/sostenibilidad" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">{t("sostenibilidad")}</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">{t("blog")}</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">{t("faq")}</Link></li>
            </ul>
          </div>

          {/* Apóyanos */}
          <div>
            <h3 className="font-bold text-sm mb-4">{t("supportUs")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#donar" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">{t("makeDonation")}</Link></li>
              <li><Link href="/voluntariado" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">{t("beVolunteer")}</Link></li>
              <li><Link href="/sostenibilidad" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">{t("corporateAlliances")}</Link></li>
              <li><Link href="/contacto" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">{t("contact")}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-sm mb-4">{t("legal")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/politica-de-privacidad" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">{t("privacyPolicy")}</Link></li>
              <li><Link href="/terminos-de-uso" className="text-gray-400 hover:text-[#e0ff4f] transition-colors">{t("termsOfUse")}</Link></li>
              <li className="text-gray-600 text-xs pt-2">{t("legalId")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>{t("copyright")}</p>
          <p>{t("madeWith")}</p>
        </div>
      </div>
    </footer>
  )
}
