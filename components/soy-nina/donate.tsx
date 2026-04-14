"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { CheckCircle2 } from "lucide-react"

type DonationState = "idle" | "success" | "error"

export default function Donate() {
  const t = useTranslations("Donate")

  const [selectedAmount, setSelectedAmount] = useState<number>(10)
  const [isCustomActive, setIsCustomActive] = useState(false)
  const [customAmount, setCustomAmount] = useState("")
  const [donationState, setDonationState] = useState<DonationState>("idle")
  const [confirmedAmount, setConfirmedAmount] = useState<number | null>(null)

  const donationLevels = [
    { value: 10,   label: "$10",   title: t("levels.l1.title"), description: t("levels.l1.description") },
    { value: 25,   label: "$25",   title: t("levels.l2.title"), description: t("levels.l2.description") },
    { value: 50,   label: "$50",   title: t("levels.l3.title"), description: t("levels.l3.description") },
    { value: null, label: "$100+", title: t("levels.l4.title"), description: t("levels.l4.description") },
  ]

  const effectiveAmount = isCustomActive
    ? parseFloat(customAmount) || 0
    : selectedAmount

  const isValidAmount = effectiveAmount >= 1

  function handlePresetClick(value: number) {
    setSelectedAmount(value)
    setIsCustomActive(false)
    setCustomAmount("")
    setDonationState("idle")
  }

  function handleCustomClick() {
    setIsCustomActive(true)
    setDonationState("idle")
  }

  async function createOrder() {
    const res = await fetch("/api/paypal/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: effectiveAmount }),
    })
    if (!res.ok) throw new Error("create-order failed")
    const { id } = await res.json()
    return id as string
  }

  async function onApprove(data: { orderID: string }) {
    const res = await fetch("/api/paypal/capture-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderID: data.orderID }),
    })
    if (!res.ok) {
      setDonationState("error")
      return
    }
    setConfirmedAmount(effectiveAmount)
    setDonationState("success")
  }

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
              {donationLevels.map((level, i) => {
                const isSelected = level.value !== null
                  ? !isCustomActive && selectedAmount === level.value
                  : isCustomActive

                return (
                  <div
                    key={i}
                    onClick={() => level.value !== null ? handlePresetClick(level.value) : handleCustomClick()}
                    className={`group flex items-center gap-5 border rounded-xl px-6 py-4 transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#e0ff4f]/10 border-[#e0ff4f]/60"
                        : "bg-white/5 hover:bg-white/10 border-white/10 hover:border-[#e0ff4f]/40"
                    }`}
                  >
                    <span className="text-2xl font-black text-[#e0ff4f] min-w-[4rem]">{level.label}</span>
                    <div>
                      <div className="font-bold text-white">{level.title}</div>
                      <div className="text-sm text-white/60">{level.description}</div>
                    </div>
                  </div>
                )
              })}

              {/* Custom amount input */}
              {isCustomActive && (
                <div className="pt-1">
                  <input
                    type="number"
                    min="1"
                    step="1"
                    autoFocus
                    placeholder={t("customAmountPlaceholder")}
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setDonationState("idle") }}
                    className="w-full bg-white/5 border border-[#e0ff4f]/40 focus:border-[#e0ff4f] rounded-xl px-5 py-3 text-white outline-none transition-colors placeholder:text-white/30 font-mono text-lg"
                  />
                </div>
              )}
            </div>

            {/* Transparency note */}
            <div className="flex items-center gap-3 text-sm text-white/50">
              <span className="text-[#00c49a] text-base">✓</span>
              {t("taxDeductible")}
            </div>
          </div>

          {/* Right: Payment methods */}
          <div className="lg:pt-16">
            {donationState === "success" && confirmedAmount !== null ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 bg-[#00c49a]/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#00c49a]" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">{t("successTitle")}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {t("successMessage").replace("${amount}", `$${confirmedAmount.toFixed(2)}`)}
                  </p>
                </div>
                <button
                  onClick={() => { setDonationState("idle"); setCustomAmount(""); setIsCustomActive(false); setSelectedAmount(10) }}
                  className="text-[#e0ff4f] font-bold text-sm hover:text-[#d4f53d] transition-colors"
                >
                  {t("donateAgain")}
                </button>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-8">
                <h3 className="text-xl font-black text-white">{t("howToDonate")}</h3>

                {/* SINPE */}
                <div>
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-3">{t("sinpeMobile")}</p>
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl font-black text-[#e0ff4f]">{t("sinpeNumber")}</span>
                    <span className="text-white/60 text-sm">Fundación Soy Niña</span>
                  </div>
                </div>

                {/* Bank transfer */}
                <div>
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-3">{t("bankTransfer")}</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-white/50">{t("bankName")}:</span> <span className="text-white">Banco Nacional de Costa Rica</span></p>
                    <p><span className="text-white/50">IBAN:</span> <span className="text-white font-mono">{t("iban")}</span></p>
                    <p><span className="text-white/50">{t("holder")}:</span> <span className="text-white">Fundación Soy Niña</span></p>
                    <p><span className="text-white/50">{t("legalId")}:</span> <span className="text-white">3-101-123456</span></p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10" />

                {/* PayPal donation */}
                <div>
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-4">{t("orPayWith")}</p>

                  {isValidAmount ? (
                    <PayPalScriptProvider
                      options={{
                        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
                        currency: "USD",
                        intent: "capture",
                      }}
                    >
                      <PayPalButtons
                        key={effectiveAmount}
                        style={{ layout: "vertical", color: "gold", shape: "rect", label: "donate", height: 48 }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                        onError={() => setDonationState("error")}
                      />
                    </PayPalScriptProvider>
                  ) : (
                    <p className="text-white/40 text-sm text-center py-3">
                      {t("selectAmountPrompt")}
                    </p>
                  )}

                  {donationState === "error" && (
                    <p className="text-red-400 text-sm text-center mt-3">{t("errorPayment")}</p>
                  )}
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
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
