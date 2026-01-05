"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#140b3f] via-[#4526c9] to-[#2d1a7a]">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#fe35fe]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#e0ff4f]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#00c49a]/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left side - Text content */}
          <div className="text-white space-y-8">
            <div className="inline-block">
              <div className="px-6 py-2 rounded-full bg-gradient-to-r from-[#e0ff4f]/30 to-[#fe35fe]/30 border border-[#e0ff4f]/50">
                <span className="text-sm font-bold text-[#e0ff4f]">TRANSFORMANDO VIDAS</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              Empoderamos a <span className="bg-gradient-to-r from-[#e0ff4f] via-[#fe35fe] to-[#00c49a] text-transparent bg-clip-text">Niñas</span> y Adolescentes
            </h1>
            
            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-xl">
              En Costa Rica, construimos futuros brillantes a través de programas educativos transformadores y comunidades resilientes
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                asChild 
                className="bg-gradient-to-r from-[#e0ff4f] to-[#00c49a] hover:shadow-2xl shadow-xl text-[#140b3f] font-bold text-base rounded-full px-8 py-6 transition-transform hover:scale-105"
              >
                <a href="#donar">Dona Ahora</a>
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-[#fe35fe] to-[#ff5fff] hover:shadow-2xl shadow-xl border-2 border-[#fe35fe] text-white font-bold text-base rounded-full px-8 py-6 transition-transform hover:scale-105"
              >
                <a href="/voluntariado">Únete como Voluntaria</a>
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[500px] lg:h-[600px] xl:h-[700px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/girls-participating-in-stem-activities.jpg" 
                alt="Niñas participando en actividades STEM" 
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#140b3f]/40 via-transparent to-transparent" />
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e0ff4f] rounded-full blur-2xl opacity-30" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#fe35fe] rounded-full blur-2xl opacity-30" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <svg className="w-6 h-6 text-[#e0ff4f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
