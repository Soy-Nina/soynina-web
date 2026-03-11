"use client"

import { useState, useMemo } from "react"
import { FileText, Download, Eye, Calendar } from "lucide-react"

export interface ReportData {
    title: string
    month: number
    year: number
    description: string
    pdf: string
    slug: string
}

const MONTH_NAMES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
]

const GRADIENT_PAIRS = [
    "from-[#4526c9] to-[#6b3fdb]",
    "from-[#fe35fe] to-[#c926c9]",
    "from-[#00c49a] to-[#00967a]",
    "from-[#4526c9] to-[#fe35fe]",
    "from-[#00c49a] to-[#4526c9]",
]

interface ReportsProps {
    reports: ReportData[]
}

export default function Reports({ reports }: ReportsProps) {
    const availableYears = useMemo(() => {
        const years = [...new Set(reports.map((r) => r.year))].sort((a, b) => b - a)
        return years
    }, [reports])

    const [selectedYear, setSelectedYear] = useState(availableYears[0])

    const filteredReports = useMemo(() => {
        return reports
            .filter((r) => r.year === selectedYear)
            .sort((a, b) => b.month - a.month)
    }, [reports, selectedYear])

    return (
        <section className="w-full py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-[#140b3f] mb-4">
                        Informes Mensuales
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Consulta y descarga nuestros informes mensuales de actividades, impacto y transparencia.
                    </p>
                </div>

                {/* Year Filter */}
                <div className="flex justify-center gap-3 mb-12">
                    {availableYears.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${selectedYear === year
                                ? "bg-[#4526c9] text-white shadow-lg shadow-[#4526c9]/30 scale-105"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-[#140b3f]"
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {/* Reports Grid */}
                {filteredReports.length === 0 ? (
                    <div className="bg-gray-50 rounded-2xl p-12 text-center">
                        <FileText size={48} className="mx-auto text-gray-300 mb-4" />
                        <p className="text-gray-400 text-lg">No hay informes disponibles para {selectedYear}.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredReports.map((report, idx) => {
                            const gradient = GRADIENT_PAIRS[idx % GRADIENT_PAIRS.length]
                            return (
                                <article
                                    key={report.slug}
                                    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col"
                                >
                                    {/* Gradient Header */}
                                    <div className={`relative bg-gradient-to-br ${gradient} p-6 flex items-center gap-4`}>
                                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                            <FileText size={28} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white/80 text-sm font-medium">
                                                {MONTH_NAMES[report.month - 1]}
                                            </p>
                                            <p className="text-white text-2xl font-black">{report.year}</p>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-lg font-bold text-[#140b3f] mb-2 group-hover:text-[#4526c9] transition-colors">
                                            {report.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-5 flex-grow">
                                            {report.description}
                                        </p>

                                        {/* Meta */}
                                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-5">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} />
                                                {MONTH_NAMES[report.month - 1]} {report.year}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <FileText size={12} />
                                                PDF
                                            </span>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex gap-3">
                                            <a
                                                href={report.pdf}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#4526c9] hover:bg-[#3a1fa8] text-white text-sm font-bold rounded-full transition-all hover:shadow-lg hover:shadow-[#4526c9]/20"
                                            >
                                                <Eye size={16} />
                                                Ver PDF
                                            </a>
                                            <a
                                                href={report.pdf}
                                                download
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#e0ff4f] hover:bg-[#d4f53d] text-[#140b3f] text-sm font-bold rounded-full transition-all hover:shadow-lg"
                                            >
                                                <Download size={16} />
                                                Descargar
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                )}
            </div>
        </section>
    )
}
