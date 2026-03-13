"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/src/i18n/navigation"

export default function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: "es" | "en") => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div className="flex items-center gap-1 bg-white/10 rounded-full px-1 py-0.5">
      <button
        onClick={() => switchLocale("es")}
        className={`text-xs font-bold px-2.5 py-1 rounded-full transition-all ${
          locale === "es"
            ? "bg-[#e0ff4f] text-[#140b3f]"
            : "text-white/70 hover:text-white"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => switchLocale("en")}
        className={`text-xs font-bold px-2.5 py-1 rounded-full transition-all ${
          locale === "en"
            ? "bg-[#e0ff4f] text-[#140b3f]"
            : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  )
}
