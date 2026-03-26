"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"

export default function Hero() {
  const t = useTranslations("Hero")


  const stats = [
    { value: "600+", label: t("stats.livesImpacted") },
    { value: "200+", label: t("stats.activeGirls") },
    { value: "28,000", label: t("stats.volunteerHours") },
    { value: "4", label: t("stats.communities") },
  ]

  return (
    <section id="inicio" className="relative w-full min-h-screen overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-marcha-2025.jpg"
          alt={t("imageAlt")}
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#140b3f]/85 via-[#140b3f]/55 to-[#140b3f]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140b3f]/70 via-transparent to-[#140b3f]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Main hero content */}
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl py-24 pt-32">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <div className="mb-6">
                <span className="inline-block text-[#e0ff4f] text-sm font-bold tracking-[0.2em] uppercase">
                  {t("eyebrow")}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] mb-8">
                {t("headline1")}{" "}
                <span className="text-[#e0ff4f]">{t("headlineHighlight")}</span>{" "}
                {t("headline2")}
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-10">
                {t("description")}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#donar"
                  className="inline-flex items-center justify-center bg-[#e0ff4f] hover:bg-[#d4f53d] text-[#140b3f] font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t("ctaDonate")}
                </a>
                <Link
                  href="/voluntariado"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white/50 hover:border-white text-white font-bold text-base px-8 py-4 rounded-full transition-all hover:bg-white/10"
                >
                  {t("ctaVolunteer")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats ribbon */}
        <div className="relative z-10 border-t border-white/20 bg-[#140b3f]/60 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/20">
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:px-8">
                  <div className="text-2xl md:text-3xl font-black text-[#e0ff4f]">{stat.value}</div>
                  <div className="text-xs md:text-sm text-white/70 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
