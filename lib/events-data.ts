// Shared event types and fallback data used by both the API route and components

export interface EventItem {
    date: string // ISO format: "2026-04-15"
    title: string
    description: string
    location: string
    time: string
    category: string
}

export const CATEGORY_COLORS: Record<string, string> = {
    Taller: "#4526c9",
    Festival: "#fe35fe",
    Jornada: "#00c49a",
    Reunión: "#e0a800",
    Charla: "#4526c9",
    Evento: "#fe35fe",
}

export const MONTH_NAMES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
]

// Fallback events used when no ICS URL is configured
export const FALLBACK_EVENTS: EventItem[] = [
    {
        date: "2026-03-21",
        title: "Taller de Liderazgo Juvenil",
        description: "Sesión interactiva para adolescentes sobre liderazgo, toma de decisiones y comunicación asertiva.",
        location: "Centro Comunitario, San José",
        time: "9:00 AM – 12:00 PM",
        category: "Taller",
    },
    {
        date: "2026-03-28",
        title: "Jornada del Banco de Alimentos",
        description: "Clasificación y distribución de alimentos para las familias de nuestras comunidades.",
        location: "Bodega Soy Niña, Heredia",
        time: "8:00 AM – 1:00 PM",
        category: "Jornada",
    },
    {
        date: "2026-04-05",
        title: "Festival de Arte y Expresión",
        description: "Exposición de arte creado por las niñas de Club Niña. Pintura, poesía y música en vivo.",
        location: "Parque Central, Alajuela",
        time: "10:00 AM – 4:00 PM",
        category: "Festival",
    },
    {
        date: "2026-04-12",
        title: "Charla: Crianza Positiva",
        description: "Taller para familias sobre estrategias de crianza respetuosa y gestión emocional.",
        location: "Virtual (Zoom)",
        time: "6:00 PM – 8:00 PM",
        category: "Charla",
    },
    {
        date: "2026-04-19",
        title: "Taller de Educación Sexual Integral",
        description: "Sesión educativa para adolescentes del Club Cole sobre derechos sexuales y reproductivos.",
        location: "Centro Comunitario, San José",
        time: "2:00 PM – 5:00 PM",
        category: "Taller",
    },
    {
        date: "2026-05-10",
        title: "Reunión de Voluntarias",
        description: "Encuentro mensual para coordinación de equipos, retroalimentación y planificación.",
        location: "Oficinas Soy Niña, San José",
        time: "5:00 PM – 7:00 PM",
        category: "Reunión",
    },
    {
        date: "2026-05-17",
        title: "Festival Día de la Familia",
        description: "Celebración especial con actividades, juegos y presentaciones de las niñas para sus familias.",
        location: "Parque La Libertad, Desamparados",
        time: "9:00 AM – 2:00 PM",
        category: "Festival",
    },
    {
        date: "2026-06-14",
        title: "Jornada de Tutorías Abiertas",
        description: "Sesión especial de tutorías académicas abierta a nuevas participantes. Refuerzo en matemáticas y español.",
        location: "Virtual (Zoom)",
        time: "3:00 PM – 6:00 PM",
        category: "Jornada",
    },
]
