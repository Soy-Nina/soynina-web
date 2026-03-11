import PageHero from "@/components/soy-nina/page-hero"
import EventsCalendar from "@/components/soy-nina/events-calendar"

export const metadata = {
    title: "Eventos | Soy Niña",
    description: "Calendario de próximos eventos, talleres, festivales y jornadas de Soy Niña en Costa Rica.",
}

export default function EventosPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title="Eventos"
                subtitle="Talleres, festivales y jornadas que transforman comunidades"
                image="/community-workshop-with-families.jpg"
            />

            {/* Intro */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-8 max-w-4xl">
                    <div className="bg-white rounded-2xl p-8 border-l-4 border-[#4526c9]">
                        <h2 className="text-3xl font-black text-[#140b3f] mb-4">Nuestro Calendario</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Explora nuestros próximos eventos. Desde talleres de liderazgo hasta festivales comunitarios,
                            cada actividad es una oportunidad para crecer, aprender y conectar. Selecciona un mes para
                            ver los eventos programados.
                        </p>
                    </div>
                </div>
            </section>

            <EventsCalendar />

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-[#4526c9] to-[#6b3fdb] text-white">
                <div className="container mx-auto px-8 text-center">
                    <h2 className="text-4xl font-black mb-6">¿Quieres participar?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
                        Únete como voluntaria o trae a tu familia a nuestras actividades. ¡Te esperamos!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/voluntariado"
                            className="inline-block bg-[#e0ff4f] text-[#140b3f] px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg"
                        >
                            Sé Voluntaria
                        </a>
                        <a
                            href="/#contacto"
                            className="inline-block bg-transparent border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
                        >
                            Contactar
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
