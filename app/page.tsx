import Hero from "@/components/soy-nina/hero"
import Impact from "@/components/soy-nina/impact"
import Programs from "@/components/soy-nina/programs"
import About from "@/components/soy-nina/about"
import Volunteer from "@/components/soy-nina/volunteer"
import Donate from "@/components/soy-nina/donate"
import News from "@/components/soy-nina/news"
import Sustainability from "@/components/soy-nina/sustainability"
import Contact from "@/components/soy-nina/contact"

export default function Page() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <About />
        <Impact />
        <Programs />
        <Volunteer />
        <Donate />
        <News />
        <Sustainability />
        <Contact />
      </main>
    </div>
  )
}
