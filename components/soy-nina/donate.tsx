import { useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"

export default function Donate() {
  const t = useTranslations("Donate")

  const donationLevels = [
    { amount: "$10", title: t("levels.l1.title"), description: t("levels.l1.description") },
    { amount: "$25", title: t("levels.l2.title"), description: t("levels.l2.description") },
    { amount: "$50", title: t("levels.l3.title"), description: t("levels.l3.description") },
    { amount: "$100+", title: t("levels.l4.title"), description: t("levels.l4.description") },
  ]

  return (
    <section id="donar" className="w-full py-24 bg-[#140b3f] text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: CTA + Donation levels */}
          <div>
            <span className="text-[#e0ff4f] text-sm font-bold tracking-[0.2em] uppercase">{t("eyebrow")}</span>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mt-3 mb-6">
              {t("title1")}<br />
              <span className="text-[#e0ff4f]">{t("titleHighlight")}</span> {t("title2")}
            </h2>

            <p className="text-white/70 leading-relaxed mb-10 max-w-md">
              {t("description")}
            </p>

            {/* Donation level pills */}
            <div className="space-y-3 mb-10">
              {donationLevels.map((level, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#e0ff4f]/40 rounded-xl px-6 py-4 transition-all cursor-pointer"
                >
                  <span className="text-2xl font-black text-[#e0ff4f] min-w-[4rem]">{level.amount}</span>
                  <div>
                    <div className="font-bold text-white">{level.title}</div>
                    <div className="text-sm text-white/60">{level.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Transparency note */}
            <div className="flex items-center gap-3 text-sm text-white/50">
              <span className="text-[#00c49a] text-base">✓</span>
              {t("taxDeductible")}
            </div>
          </div>

          {/* Right: Payment methods */}
          <div className="lg:pt-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-8">
              <h3 className="text-xl font-black text-white">{t("howToDonate")}</h3>

              {/* SINPE */}
              <div>
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-3">{t("sinpeMobile")}</p>
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-black text-[#e0ff4f]">8888-8888</span>
                  <span className="text-white/60 text-sm">Fundación Soy Niña</span>
                </div>
              </div>

              {/* Bank transfer */}
              <div>
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-3">{t("bankTransfer")}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="text-white/50">{t("bank")}:</span> <span className="text-white">Banco Nacional de Costa Rica</span></p>
                  <p><span className="text-white/50">IBAN:</span> <span className="text-white font-mono">CR12345678901234567890</span></p>
                  <p><span className="text-white/50">{t("holder")}:</span> <span className="text-white">Fundación Soy Niña</span></p>
                  <p><span className="text-white/50">{t("legalId")}:</span> <span className="text-white">3-101-123456</span></p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Card donation CTA */}
              <div>
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-3">{t("creditCard")}</p>
                <button className="w-full bg-[#e0ff4f] hover:bg-[#d4f53d] text-[#140b3f] font-black rounded-xl py-4 transition-all hover:scale-[1.02] text-sm tracking-wide">
                  {t("donateWithCard")}
                </button>
              </div>

              {/* Corporate option */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-sm text-white/60 mb-3">{t("corporateQuestion")}</p>
                <Link
                  href="/contacto"
                  className="text-[#00c49a] font-bold text-sm hover:text-[#1ad9b0] transition-colors"
                >
                  {t("contactCorporate")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
