"use client"

import { useState } from "react"
import { Mail, MessageSquare, Send, CheckCircle2, Loader2 } from "lucide-react"
import { useTranslations } from "next-intl"
import PageHero from "@/components/soy-nina/page-hero"

// ──────────────────────────────────────────────────────────────────────
// LITTLE GREEN LIGHT CONFIGURATION
// Update LGL_ACTION_URL with the contact form URL from your LGL account
// Update FIELD_NAMES with the field names from your LGL contact form
// ──────────────────────────────────────────────────────────────────────
const LGL_ACTION_URL = "https://secure.lglforms.com/form_engine/KqMN6jV81N9cSL-lwC9GtA"
const FIELD_NAMES = {
  firstName: "submission[args][field_6]",
  lastName:  "submission[args][field_7]",
  email:     "submission[args][field_9]",
  message:   "submission[args][field_18]",
  honeypot:  "field_9_verification",         // Must remain empty (bot trap)
}

const CONTACT_EMAIL = "separte@soynina.org"

export default function ContactoPage() {
  const t = useTranslations("ContactoPage")
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:  "",
    email:     "",
    message:   "",
    honeypot:  "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Extra bot check: honeypot must be empty
    if (formData.honeypot) return

    setStatus("submitting")

    try {
      const body = new URLSearchParams()
      body.append(FIELD_NAMES.firstName, formData.firstName)
      body.append(FIELD_NAMES.lastName,  formData.lastName)
      body.append(FIELD_NAMES.email,     formData.email)
      body.append(FIELD_NAMES.message,   formData.message)
      body.append(FIELD_NAMES.honeypot,  formData.honeypot)

      // LGL returns a 302 redirect on success.
      // 'no-cors' treats the redirect as success even if we can't read the response.
      await fetch(LGL_ACTION_URL, {
        method:  "POST",
        mode:    "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body:    body.toString(),
      })

      setTimeout(() => setStatus("success"), 800)
    } catch (err) {
      console.error("Submission error:", err)
      setStatus("error")
    }
  }

  const inputClass =
    "w-full bg-[#f8f4ff] border-2 border-transparent focus:border-[#4526c9]/20 focus:bg-white rounded-2xl px-5 py-4 outline-none transition-all text-[#140b3f] font-medium placeholder:text-gray-400"
  const labelClass =
    "text-xs font-bold uppercase tracking-wider text-gray-400 ml-1 block mb-2"

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        image="/community-workshop-with-families.jpg"
      />

      {/* Main Content */}
      <section className="w-full py-24 bg-[#f8f4ff] relative overflow-hidden">
        {/* Background decor */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#e0ff4f]/5 rounded-l-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4526c9]/5 rounded-full blur-2xl -z-0 -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* ── Left: copy + email alternative ── */}
            <div>
              <div className="inline-flex items-center gap-3 bg-[#4526c9]/10 text-[#4526c9] px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                <MessageSquare className="w-4 h-4" />
                {t("badge")}
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-[#140b3f] leading-[1.1] mb-6">
                {t("title1")}<br />
                <span className="text-[#4526c9]">{t("titleHighlight")}</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-md">
                {t("description")}
              </p>

              {/* Email alternative */}
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-[#4526c9]/8 border border-white">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
                  {t("emailAlt")}
                </h3>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-3 text-[#4526c9] font-bold text-lg hover:text-[#3619b8] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#4526c9]/10 rounded-full flex items-center justify-center group-hover:bg-[#4526c9]/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            {/* ── Right: form card ── */}
            <div className="relative">
              <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-[#4526c9]/10 border border-white relative z-20 overflow-hidden text-left">

                {status === "success" ? (
                  <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-[#00c49a]/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-[#00c49a]" />
                    </div>
                    <h3 className="text-2xl font-black text-[#140b3f] mb-2">{t("successTitle")}</h3>
                    <p className="text-gray-500 max-w-xs">
                      {t("successMessage")}
                    </p>
                    <button
                      onClick={() => {
                        setStatus("idle")
                        setFormData({ firstName: "", lastName: "", email: "", message: "", honeypot: "" })
                      }}
                      className="mt-8 text-[#4526c9] font-bold text-sm hover:underline"
                    >
                      {t("sendAnother")}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Name row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className={labelClass}>{t("firstName")}</label>
                        <input
                          id="firstName"
                          required
                          type="text"
                          placeholder="Ana"
                          className={inputClass}
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className={labelClass}>{t("lastName")}</label>
                        <input
                          id="lastName"
                          required
                          type="text"
                          placeholder="García"
                          className={inputClass}
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contactEmail" className={labelClass}>{t("email")}</label>
                      <input
                        id="contactEmail"
                        required
                        type="email"
                        placeholder="ana@ejemplo.com"
                        className={inputClass}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className={labelClass}>{t("message")}</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder={t("messagePlaceholder")}
                        className={`${inputClass} resize-none`}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    {/* Honeypot – hidden from real users, bots fill it */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        name={FIELD_NAMES.honeypot}
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.honeypot}
                        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      />
                    </div>

                    <button
                      disabled={status === "submitting"}
                      type="submit"
                      className="w-full bg-[#4526c9] hover:bg-[#3619b8] disabled:bg-gray-300 text-white font-black py-5 rounded-2xl shadow-xl shadow-[#4526c9]/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          {t("sending")}
                        </>
                      ) : (
                        <>
                          Enviar mensaje
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    {status === "error" && (
                      <p className="text-red-500 text-sm font-medium text-center">
                        Hubo un problema. Por favor intentá de nuevo.
                      </p>
                    )}

                    <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                      Tu información se usa únicamente para responder tu consulta, de acuerdo con nuestra Política de Privacidad.
                    </p>
                  </form>
                )}
              </div>

              {/* Accent circle behind card */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#e0ff4f] rounded-full -z-10 animate-pulse transition-all duration-1000" />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
