import Hero from "@/components/soy-nina/hero"
import Programs from "@/components/soy-nina/programs"
import Impact from "@/components/soy-nina/impact"
import UpcomingEvents from "@/components/soy-nina/upcoming-events"
import Donate from "@/components/soy-nina/donate"
import Volunteer from "@/components/soy-nina/volunteer"
import Newsletter from "@/components/soy-nina/newsletter"

export default function Page() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Programs />
        <Impact />
        <UpcomingEvents />
        <Donate />
        <Volunteer />
        <Newsletter />
      </main>
    </div>
  )
}
