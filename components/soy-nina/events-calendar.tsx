"use client"

import { useState, useMemo, useEffect } from "react"
import { ChevronLeft, ChevronRight, MapPin, Clock, CalendarDays, Loader2 } from "lucide-react"
import { FALLBACK_EVENTS, CATEGORY_COLORS, MONTH_NAMES, type EventItem } from "@/lib/events-data"

const DAY_NAMES = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

function getCategoryColor(category: string) {
    return CATEGORY_COLORS[category] || "#4526c9"
}

export default function EventsCalendar() {
    const today = new Date()
    const [currentMonth, setCurrentMonth] = useState(today.getMonth())
    const [currentYear, setCurrentYear] = useState(today.getFullYear())
    const [events, setEvents] = useState<EventItem[]>(FALLBACK_EVENTS)
    const [loading, setLoading] = useState(true)

    // Fetch events from API
    useEffect(() => {
        fetch("/api/events")
            .then((res) => res.json())
            .then((data: EventItem[]) => {
                setEvents(data)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false) // keep fallback events
            })
    }, [])

    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11)
            setCurrentYear(currentYear - 1)
        } else {
            setCurrentMonth(currentMonth - 1)
        }
    }

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0)
            setCurrentYear(currentYear + 1)
        } else {
            setCurrentMonth(currentMonth + 1)
        }
    }

    // Build calendar grid
    const calendarDays = useMemo(() => {
        const firstDay = new Date(currentYear, currentMonth, 1)
        const lastDay = new Date(currentYear, currentMonth + 1, 0)
        let startDow = firstDay.getDay() - 1
        if (startDow < 0) startDow = 6

        const days: Array<{ day: number; isCurrentMonth: boolean; dateStr: string }> = []

        const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate()
        for (let i = startDow - 1; i >= 0; i--) {
            const d = prevMonthLastDay - i
            const m = currentMonth === 0 ? 11 : currentMonth - 1
            const y = currentMonth === 0 ? currentYear - 1 : currentYear
            days.push({
                day: d,
                isCurrentMonth: false,
                dateStr: `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`,
            })
        }

        for (let d = 1; d <= lastDay.getDate(); d++) {
            days.push({
                day: d,
                isCurrentMonth: true,
                dateStr: `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`,
            })
        }

        const remaining = 42 - days.length
        for (let d = 1; d <= remaining; d++) {
            const m = currentMonth === 11 ? 0 : currentMonth + 1
            const y = currentMonth === 11 ? currentYear + 1 : currentYear
            days.push({
                day: d,
                isCurrentMonth: false,
                dateStr: `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`,
            })
        }

        return days
    }, [currentMonth, currentYear])

    // Events lookup by date
    const eventsByDate = useMemo(() => {
        const map: Record<string, EventItem[]> = {}
        events.forEach((event) => {
            if (!map[event.date]) map[event.date] = []
            map[event.date].push(event)
        })
        return map
    }, [events])

    // Events for this month
    const monthEvents = useMemo(() => {
        return events.filter((e) => {
            const d = new Date(e.date + "T00:00:00")
            return d.getMonth() === currentMonth && d.getFullYear() === currentYear
        }).sort((a, b) => a.date.localeCompare(b.date))
    }, [currentMonth, currentYear, events])

    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`

    return (
        <section className="w-full py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
                    {/* Calendar Grid */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
                        {/* Month Header */}
                        <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-[#4526c9] to-[#6b3fdb]">
                            <button
                                onClick={prevMonth}
                                className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
                                aria-label="Mes anterior"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <h3 className="text-xl font-bold text-white tracking-wide">
                                {MONTH_NAMES[currentMonth]} {currentYear}
                            </h3>
                            <button
                                onClick={nextMonth}
                                className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
                                aria-label="Mes siguiente"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        {/* Day names */}
                        <div className="grid grid-cols-7 border-b border-gray-100">
                            {DAY_NAMES.map((name) => (
                                <div key={name} className="py-3 text-center text-xs font-bold text-[#4526c9] uppercase tracking-wider">
                                    {name}
                                </div>
                            ))}
                        </div>

                        {/* Day grid */}
                        <div className="grid grid-cols-7">
                            {calendarDays.map((day, i) => {
                                const hasEvents = eventsByDate[day.dateStr]
                                const isToday = day.dateStr === todayStr
                                return (
                                    <div
                                        key={i}
                                        className={`relative flex flex-col items-center justify-center py-3 min-h-[52px] border-b border-r border-gray-50 transition-colors
                      ${day.isCurrentMonth ? "bg-white" : "bg-gray-50/50"}
                      ${isToday ? "ring-2 ring-inset ring-[#4526c9]/30 bg-[#4526c9]/5" : ""}
                    `}
                                    >
                                        <span
                                            className={`text-sm font-medium
                        ${!day.isCurrentMonth ? "text-gray-300" : isToday ? "text-[#4526c9] font-bold" : "text-[#140b3f]"}
                      `}
                                        >
                                            {day.day}
                                        </span>
                                        {hasEvents && day.isCurrentMonth && (
                                            <div className="flex gap-0.5 mt-1">
                                                {hasEvents.slice(0, 3).map((ev, j) => (
                                                    <span
                                                        key={j}
                                                        className="w-1.5 h-1.5 rounded-full"
                                                        style={{ backgroundColor: getCategoryColor(ev.category) }}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>

                        {/* Legend */}
                        <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex flex-wrap gap-4">
                            {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
                                <div key={cat} className="flex items-center gap-1.5 text-xs text-gray-500">
                                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                                    {cat}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Events List */}
                    <div>
                        <h3 className="text-2xl font-black text-[#140b3f] mb-6 flex items-center gap-3">
                            <CalendarDays size={24} className="text-[#4526c9]" />
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <Loader2 size={18} className="animate-spin" />
                                    Cargando eventos…
                                </span>
                            ) : monthEvents.length > 0 ? (
                                `Eventos en ${MONTH_NAMES[currentMonth]}`
                            ) : (
                                "Sin eventos este mes"
                            )}
                        </h3>

                        {!loading && monthEvents.length === 0 && (
                            <div className="bg-gray-50 rounded-2xl p-10 text-center">
                                <p className="text-gray-400 text-lg">No hay eventos programados para este mes.</p>
                                <p className="text-gray-400 text-sm mt-2">Navega a otro mes para ver más eventos.</p>
                            </div>
                        )}

                        <div className="space-y-4">
                            {monthEvents.map((event, i) => {
                                const eventDate = new Date(event.date + "T00:00:00")
                                const dayNum = eventDate.getDate()
                                const monthAbbr = MONTH_NAMES[eventDate.getMonth()].substring(0, 3).toUpperCase()
                                const color = getCategoryColor(event.category)

                                return (
                                    <div
                                        key={i}
                                        className="group flex gap-5 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
                                        style={{ borderLeft: `4px solid ${color}` }}
                                    >
                                        {/* Date badge */}
                                        <div
                                            className="flex-shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center text-white"
                                            style={{ backgroundColor: color }}
                                        >
                                            <span className="text-2xl font-black leading-none">{dayNum}</span>
                                            <span className="text-[10px] font-bold tracking-wider opacity-80">{monthAbbr}</span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-3 mb-1">
                                                <h4 className="text-lg font-bold text-[#140b3f] group-hover:text-[#4526c9] transition-colors">
                                                    {event.title}
                                                </h4>
                                                <span
                                                    className="flex-shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full text-white uppercase tracking-wider mt-0.5"
                                                    style={{ backgroundColor: color }}
                                                >
                                                    {event.category}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{event.description}</p>
                                            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <Clock size={12} />
                                                    {event.time}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin size={12} />
                                                    {event.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
