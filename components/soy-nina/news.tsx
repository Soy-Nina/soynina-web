import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

const newsItems = [
  {
    type: "Noticia",
    title: "Inauguramos nuevo espacio en Heredia",
    date: "15 de Marzo, 2025",
    description:
      "Gracias al apoyo de la comunidad, abrimos un nuevo centro de atención en Heredia que beneficiará a 100 niñas y adolescentes.",
    image: "/new-community-center-opening-in-costa-rica.jpg",
  },
  {
    type: "Evento",
    title: "Taller de Liderazgo Juvenil",
    date: "22 de Marzo, 2025",
    location: "San José",
    description: "Únete a nuestro taller gratuito de liderazgo para adolescentes. Inscripciones abiertas.",
    image: "/youth-leadership-workshop.png",
  },
  {
    type: "Logro",
    title: "95% de retención escolar en nuestras beneficiarias",
    date: "10 de Marzo, 2025",
    description:
      "Nuestro programa de tutorías logró que el 95% de las participantes completaran exitosamente el año escolar.",
    image: "/students-celebrating-academic-success.jpg",
  },
]

export default function News() {
  return (
    <section id="noticias" className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#140b3f]">
            Noticias y <span className="bg-gradient-to-r from-[#4526c9] to-[#fe35fe] text-transparent bg-clip-text">Eventos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mantente al día con nuestras actividades, logros y próximos eventos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 rounded-3xl border-2"
            >
              <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#4526c9] text-white text-xs font-semibold rounded-full">
                    {item.type}
                  </span>
                </div>
                <CardTitle className="text-xl text-[#140b3f]">{item.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {item.date}
                  </span>
                  {item.location && (
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {item.location}
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-[#00c49a] text-[#00c49a] hover:bg-[#00c49a] hover:text-white bg-transparent rounded-full font-semibold"
                >
                  Leer más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="/blog" 
            className="inline-block border-2 border-[#140b3f] text-[#140b3f] hover:bg-[#140b3f] hover:text-white bg-transparent rounded-full px-8 py-4 font-bold transition-all hover:scale-105 shadow-lg"
          >
            Ver todas las noticias en el Blog
          </a>
        </div>
      </div>
    </section>
  )
}
