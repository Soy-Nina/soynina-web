"use client"

import { useState } from "react"
import { Mail, CheckCircle2, Loader2, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

// ──────────────────────────────────────────────────────────────────────
// LITTLE GREEN LIGHT CONFIGURATION
// ──────────────────────────────────────────────────────────────────────
const LGL_ACTION_URL = "https://secure.lglforms.com/form_engine/lv9oMqT--re36Hr4W8TJ8g"
const FIELD_NAMES = {
    firstName: "submission[args][field_6]",
    lastName: "submission[args][field_7]",
    email: "submission[args][field_9]",
    honeypot: "field_9_verification", // Must remain empty
}

export default function Newsletter() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        honeypot: "",
    })
    const t = useTranslations("Newsletter")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("submitting")

        try {
            const body = new URLSearchParams()
            body.append(FIELD_NAMES.firstName, formData.firstName)
            body.append(FIELD_NAMES.lastName, formData.lastName)
            body.append(FIELD_NAMES.email, formData.email)
            body.append(FIELD_NAMES.honeypot, formData.honeypot)

            await fetch(LGL_ACTION_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: body.toString(),
            })

            setTimeout(() => { setStatus("success") }, 800)
        } catch (err) {
            console.error("Submission error:", err)
            setStatus("error")
        }
    }

    const benefits = t.raw("benefits") as string[]

    return (
        <section className="w-full py-24 bg-[#f8f4ff] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#e0ff4f]/5 rounded-l-full blur-3xl -z-0" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4526c9]/5 rounded-full blur-2xl -z-0 -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Copy */}
                    <div>
                        <div className="inline-flex items-center gap-3 bg-[#4526c9]/10 text-[#4526c9] px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                            <Mail className="w-4 h-4" />
                            {t("eyebrow")}
                        </div>

                        <h2 className="text-5xl md:text-6xl font-black text-[#140b3f] leading-[1.1] mb-6">
                            {t("title1")}<br />
                            <span className="text-[#4526c9]">{t("titleHighlight")}</span>
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
                            {t("description")}
                        </p>

                        <div className="space-y-4">
                            {benefits.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-medium text-[#140b3f]/70">
                                    <div className="w-5 h-5 rounded-full bg-[#00c49a]/20 flex items-center justify-center text-[#00c49a]">✓</div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form Card */}
                    <div className="relative">
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-[#4526c9]/10 border border-white relative z-20 overflow-hidden text-left">
                            {status === "success" ? (
                                <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 bg-[#00c49a]/10 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-[#00c49a]" />
                                    </div>
                                    <h3 className="text-2xl font-black text-[#140b3f] mb-2">{t("successTitle")}</h3>
                                    <p className="text-gray-500 max-w-xs">{t("successMessage")}</p>
                                    <button onClick={() => setStatus("idle")} className="mt-8 text-[#4526c9] font-bold text-sm hover:underline">{t("back")}</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2 text-left">
                                            <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">{t("firstName")}</label>
                                            <input id="firstName" required type="text" placeholder={t("firstNamePlaceholder")} className="w-full bg-[#f8f4ff] border-2 border-transparent focus:border-[#4526c9]/20 focus:bg-white rounded-2xl px-5 py-4 outline-none transition-all text-[#140b3f] font-medium" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                                        </div>
                                        <div className="space-y-2 text-left">
                                            <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">{t("lastName")}</label>
                                            <input id="lastName" required type="text" placeholder={t("lastNamePlaceholder")} className="w-full bg-[#f8f4ff] border-2 border-transparent focus:border-[#4526c9]/20 focus:bg-white rounded-2xl px-5 py-4 outline-none transition-all text-[#140b3f] font-medium" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-left">
                                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">{t("email")}</label>
                                        <input id="email" required type="email" placeholder={t("emailPlaceholder")} className="w-full bg-[#f8f4ff] border-2 border-transparent focus:border-[#4526c9]/20 focus:bg-white rounded-2xl px-5 py-4 outline-none transition-all text-[#140b3f] font-medium" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                    </div>

                                    <div className="hidden">
                                        <input type="text" name={FIELD_NAMES.honeypot} value={formData.honeypot} onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })} />
                                    </div>

                                    <button disabled={status === "submitting"} type="submit" className="w-full bg-[#4526c9] hover:bg-[#3619b8] disabled:bg-gray-300 text-white font-black py-5 rounded-2xl shadow-xl shadow-[#4526c9]/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3">
                                        {status === "submitting" ? (<><Loader2 className="w-5 h-5 animate-spin" />{t("processing")}</>) : (<>{t("subscribe")}<ArrowRight className="w-5 h-5" /></>)}
                                    </button>

                                    {status === "error" && (
                                        <p className="text-red-500 text-sm font-medium text-center">{t("error")}</p>
                                    )}

                                    <p className="text-[10px] text-gray-400 text-center leading-relaxed">{t("privacy")}</p>
                                </form>
                            )}
                        </div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#e0ff4f] rounded-full -z-10 animate-pulse transition-all duration-1000" />
                    </div>
                </div>
            </div>
        </section>
    )
}
