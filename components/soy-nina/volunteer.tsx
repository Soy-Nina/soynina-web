import { useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"

export default function Volunteer() {
  const t = useTranslations("Volunteer")

  const roles = [
    { emoji: "💜", title: t("roles.r1.title"), desc: t("roles.r1.desc") },
    { emoji: "📚", title: t("roles.r2.title"), desc: t("roles.r2.desc") },
    { emoji: "👨‍👩‍👧‍👦", title: t("roles.r3.title"), desc: t("roles.r3.desc") },
    { emoji: "📱", title: t("roles.r4.title"), desc: t("roles.r4.desc") },
    { emoji: "🍎", title: t("roles.r5.title"), desc: t("roles.r5.desc") },
    { emoji: "💝", title: t("roles.r6.title"), desc: t("roles.r6.desc") },
  ]

  return (
    <section id="voluntariado" className="w-full py-24 bg-[#f8f4ff]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/young-girls-in-educational-workshop-in-costa-rica.jpg"
                alt={t("volunteerImageAlt")}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140b3f]/50 to-transparent" />
              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4">
                  <p className="text-xs font-bold text-[#4526c9] uppercase tracking-widest mb-1">{t("testimonialLabel")}</p>
                  <p className="text-[#140b3f] font-medium text-sm italic">
                    {t("testimonialQuote")}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{t("testimonialAuthor")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="text-[#4526c9] text-sm font-bold tracking-[0.2em] uppercase">{t("eyebrow")}</span>
            <h2 className="text-5xl md:text-6xl font-black text-[#140b3f] leading-tight mt-3 mb-6">
              {t("title1")}<br />{t("title2")}
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              {t("description")}
            </p>

            {/* Roles grid */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {roles.map((role, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 border border-gray-100 hover:border-[#4526c9]/30 hover:shadow-md transition-all"
                >
                  <div className="text-2xl mb-2">{role.emoji}</div>
                  <div className="font-bold text-[#140b3f] text-sm mb-1">{role.title}</div>
                  <div className="text-xs text-gray-500">{role.desc}</div>
                </div>
              ))}
            </div>

            {/* Requirements summary */}
            <div className="bg-white border border-gray-100 rounded-xl p-5 mb-8 text-sm text-gray-600 space-y-1">
              <p className="font-bold text-[#140b3f] mb-2">{t("requirementsTitle")}</p>
              <p>✓ {t("requirement1")}</p>
              <p>✓ {t("requirement2")}</p>
              <p>✓ {t("requirement3")}</p>
            </div>

            <Link
              href="/voluntariado"
              className="inline-flex items-center justify-center bg-[#4526c9] hover:bg-[#3619b8] text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
