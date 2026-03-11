import PageHero from "@/components/soy-nina/page-hero"
import Reports from "@/components/soy-nina/reports"
import { getReports } from "@/lib/reports"

export const metadata = {
    title: "Informes Mensuales | Soy Niña",
    description: "Consulta y descarga los informes mensuales de actividades, impacto y transparencia de Soy Niña.",
}

export default function InformesPage() {
    const reports = getReports()

    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title="Informes Mensuales"
                subtitle="Transparencia y rendición de cuentas de nuestras actividades e impacto"
                image="/community-workshop-with-families.jpg"
            />
            <Reports reports={reports} />
        </div>
    )
}
