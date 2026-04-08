import { useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"

export default function Programs() {
  const t = useTranslations("Programs")

  const programs = [
    {
      image: "/club-nina-programa.jpg",
      title: t("program1.title"),
      age: t("program1.age"),
      description: t("program1.description"),
      activities: t.raw("program1.activities") as string[],
      accent: "#4526c9",
    },
    {
      image: "/club-cole-programa.jpg",
      title: t("program2.title"),
      age: t("program2.age"),
      description: t("program2.description"),
      activities: t.raw("program2.activities") as string[],
      accent: "#00c49a",
    },
    {
      image: "/club-familias-programa.jpg",
      title: t("program3.title"),
      age: t("program3.age"),
      description: t("program3.description"),
      activities: t.raw("program3.activities") as string[],
      accent: "#fe35fe",
    },
    {
      image: "/tutorias-programa.jpg",
      title: t("program4.title"),
      age: t("program4.age"),
      description: t("program4.description"),
      activities: t.raw("program4.activities") as string[],
      accent: "#e0a800",
    },
  ]

  return (
    <section id="programas" className="w-full py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section header */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 mb-16 items-end">
          <div>
            <span className="text-[#4526c9] text-sm font-bold tracking-[0.2em] uppercase">{t("eyebrow")}</span>
            <h2 className="text-5xl md:text-6xl font-black text-[#140b3f] leading-tight mt-3">
              {t("title1")}<br />{t("title2")}
            </h2>
          </div>
          <div className="max-w-xl lg:ml-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              {t("description")}
            </p>
            <Link
              href="/programas"
              className="inline-flex items-center gap-2 mt-6 text-[#4526c9] font-bold hover:gap-4 transition-all"
            >
              {t("viewAll")}
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>

        {/* Program cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col aspect-square sm:aspect-[4/3]"
            >
              {/* Background Image */}
              <img
                src={program.image}
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#140b3f] via-[#140b3f]/70 to-transparent opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative p-8 flex flex-col h-full justify-end z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-3xl font-black text-white leading-tight">{program.title}</h3>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full text-white ml-4 flex-shrink-0 shadow-md"
                    style={{ backgroundColor: program.accent }}
                  >
                    {program.age}
                  </span>
                </div>
                
                <p className="text-gray-200 leading-relaxed mb-6 text-sm">{program.description}</p>
                
                <ul className="space-y-3 mt-auto">
                  {program.activities.map((activity, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-100 font-medium">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5 shadow-sm"
                        style={{ backgroundColor: program.accent }}
                      />
                      <span className="flex-1">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
