"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"

const CostaRicaMap = dynamic(() => import("./costa-rica-map"), {
  ssr: false,
  loading: () => <div className="w-full rounded-2xl bg-gray-100 animate-pulse" style={{ height: "450px" }} />,
})

/* ─── Animated counter hook ─── */
function useCountUp(end: number, duration = 2000, startAnimation = false) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!startAnimation) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [end, duration, startAnimation])

  return { count, ref }
}

/* ─── Stat Card Component ─── */
function StatCard({ stat, index }: { stat: { value: number; suffix: string; label: string; detail: string; icon: string; accent: string }; index: number }) {
  const [visible, setVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const { count } = useCountUp(stat.value, 2000, visible)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const formattedCount = stat.value >= 1000 ? count.toLocaleString("es-CR") : count

  return (
    <div
      ref={cardRef}
      className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s, box-shadow 0.3s ease, border-color 0.3s ease`,
      }}
    >
      <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: stat.accent }} />
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6" style={{ backgroundColor: `${stat.accent}15`, color: stat.accent }}>{stat.icon}</div>
      <div className="mb-3">
        <span className="text-5xl md:text-6xl font-black tabular-nums" style={{ color: stat.accent }}>{formattedCount}{stat.suffix}</span>
      </div>
      <h3 className="text-lg font-bold text-[#140b3f] mb-3">{stat.label}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{stat.detail}</p>
    </div>
  )
}

/* ─── Impact Area Card ─── */
function ImpactAreaCard({ area, index }: { area: { title: string; description: string; metric: string; metricLabel: string; color: string }; index: number }) {
  const [visible, setVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-2xl p-8 flex flex-col justify-between min-h-[260px] group"
      style={{
        backgroundColor: area.color,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20 group-hover:scale-125 transition-transform duration-700" style={{ backgroundColor: "white" }} />
      <div>
        <h3 className="text-2xl font-black text-white mb-3">{area.title}</h3>
        <p className="text-white/80 text-sm leading-relaxed max-w-xs">{area.description}</p>
      </div>
      <div className="mt-6 flex items-end gap-3">
        <span className="text-4xl font-black text-white">{area.metric}</span>
        <span className="text-white/70 text-sm font-medium pb-1">{area.metricLabel}</span>
      </div>
    </div>
  )
}

/* ─── Main Component ─── */
export default function Impact() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const t = useTranslations("Impact")

  const stats = [
    { value: Number(t.raw("stats.stat1.value")), suffix: t("stats.stat1.suffix"), label: t("stats.stat1.label"), detail: t("stats.stat1.detail"), icon: "✦", accent: "#4526c9" },
    { value: Number(t.raw("stats.stat2.value")), suffix: t("stats.stat2.suffix"), label: t("stats.stat2.label"), detail: t("stats.stat2.detail"), icon: "♡", accent: "#00c49a" },
    { value: Number(t.raw("stats.stat3.value")), suffix: t("stats.stat3.suffix"), label: t("stats.stat3.label"), detail: t("stats.stat3.detail"), icon: "⏱", accent: "#e0a800" },
    { value: Number(t.raw("stats.stat4.value")), suffix: t("stats.stat4.suffix"), label: t("stats.stat4.label"), detail: t("stats.stat4.detail"), icon: "📚", accent: "#fe35fe" },
  ]

  const impactAreas = [
    { title: t("area1.title"), description: t("area1.description"), metric: t("area1.metric"), metricLabel: t("area1.metricLabel"), color: "#4526c9" },
    { title: t("area2.title"), description: t("area2.description"), metric: t("area2.metric"), metricLabel: t("area2.metricLabel"), color: "#00c49a" },
    { title: t("area3.title"), description: t("area3.description"), metric: t("area3.metric"), metricLabel: t("area3.metricLabel"), color: "#e0a800" },
  ]

  const testimonials = [
    { quote: t("testimonials.t1.quote"), author: t("testimonials.t1.author"), role: t("testimonials.t1.role") },
    { quote: t("testimonials.t2.quote"), author: t("testimonials.t2.author"), role: t("testimonials.t2.role") },
    { quote: t("testimonials.t3.quote"), author: t("testimonials.t3.author"), role: t("testimonials.t3.role") },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="impacto" className="w-full">
      {/* ── Dark hero band with stats ── */}
      <div className="bg-[#140b3f] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 mb-20 items-end">
            <div>
              <span className="text-[#e0ff4f] text-sm font-bold tracking-[0.2em] uppercase">{t("eyebrow")}</span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mt-4">
                {t("title1")}{" "}
                <span className="text-[#e0ff4f]">{t("titleHighlight")}</span>{" "}
                {t("title2")}
              </h2>
            </div>
            <div className="lg:pl-8">
              <p className="text-lg text-white/60 leading-relaxed max-w-lg">{t("description")}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => <StatCard key={i} stat={stat} index={i} />)}
          </div>
        </div>
      </div>

      {/* ── Impact areas ── */}
      <div className="bg-[#fafafa] py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="mb-16">
            <span className="text-[#4526c9] text-sm font-bold tracking-[0.2em] uppercase">{t("areasEyebrow")}</span>
            <h3 className="text-4xl md:text-5xl font-black text-[#140b3f] leading-tight mt-3 max-w-2xl">{t("areasTitle")}</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {impactAreas.map((area, i) => <ImpactAreaCard key={i} area={area} index={i} />)}
          </div>
        </div>
      </div>

      {/* ── Map + Testimonials ── */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
            <div>
              <span className="text-[#4526c9] text-sm font-bold tracking-[0.2em] uppercase">{t("presenceEyebrow")}</span>
              <h3 className="text-3xl md:text-4xl font-black text-[#140b3f] leading-tight mt-3 mb-8">{t("presenceTitle")}</h3>
              <CostaRicaMap />
            </div>
            <div className="lg:sticky lg:top-32">
              <div className="bg-[#140b3f] rounded-2xl p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#4526c9] rounded-full opacity-20 -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="text-[#e0ff4f] text-5xl font-serif mb-6">"</div>
                  <div className="min-h-[180px] flex flex-col justify-between">
                    {testimonials.map((testimonial, i) => (
                      <div key={i} className="absolute transition-all duration-500" style={{ opacity: activeTestimonial === i ? 1 : 0, transform: activeTestimonial === i ? "translateY(0)" : "translateY(20px)" }}>
                        <blockquote className="text-xl md:text-2xl font-bold text-white leading-snug mb-8">{testimonial.quote}</blockquote>
                        <div>
                          <div className="text-[#e0ff4f] font-bold">{testimonial.author}</div>
                          <div className="text-white/50 text-sm">{testimonial.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-8">
                    {testimonials.map((_, i) => (
                      <button key={i} onClick={() => setActiveTestimonial(i)} className="w-2 h-2 rounded-full transition-all duration-300" style={{ backgroundColor: activeTestimonial === i ? "#e0ff4f" : "rgba(255,255,255,0.3)", width: activeTestimonial === i ? "24px" : "8px" }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 p-6 bg-[#f5f3ff] rounded-2xl">
                <p className="text-[#140b3f] font-bold mb-2">{t("ctaTitle")}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{t("ctaDescription")}</p>
                <div className="flex gap-3">
                  <a href="#donar" className="inline-flex items-center justify-center bg-[#4526c9] hover:bg-[#3a1faa] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all">{t("ctaDonate")}</a>
                  <Link href="/voluntariado" className="inline-flex items-center justify-center bg-transparent border-2 border-[#4526c9] text-[#4526c9] font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:bg-[#4526c9] hover:text-white">{t("ctaVolunteer")}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
