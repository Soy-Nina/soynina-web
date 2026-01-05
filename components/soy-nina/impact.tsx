"use client"

import { Users, GraduationCap, Heart, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    icon: Users,
    value: "200+",
    label: "Niñas y adolescentes",
    color: "bg-[#4526c9]",
  },
  {
    icon: GraduationCap,
    value: "4",
    label: "Comunidades",
    color: "bg-[#00c49a]",
  },
  {
    icon: Heart,
    value: "28,000+",
    label: "Horas de voluntariado",
    color: "bg-[#fe35fe]",
  },
  {
    icon: TrendingUp,
    value: "600+",
    label: "Vidas impactadas desde 2018",
    color: "bg-[#e0ff4f]",
  },
]

export default function Impact() {
  return (
    <section id="impacto" className="w-full py-20 bg-[#140b3f] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Nuestro <span className="bg-gradient-to-r from-[#e0ff4f] to-[#00c49a] text-transparent bg-clip-text">Impacto</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">Transformando vidas y comunidades en Costa Rica</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 rounded-3xl hover:scale-105 transition-transform"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <stat.icon size={32} className={stat.color === "bg-[#e0ff4f]" ? "text-[#140b3f]" : "text-white"} />
                </div>
                <div className="text-4xl font-bold mb-2 text-white">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
