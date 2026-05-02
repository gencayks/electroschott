import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Award, Truck, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-end overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-facility.jpg"
          alt="A&N Electrorecycling Betriebsgelände"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Layered overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 pb-12 sm:pb-16 pt-28 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-inset ring-white/25 backdrop-blur-md">
              <Leaf className="w-4 h-4" />
              Zertifizierter Entsorgungsfachbetrieb
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance leading-tight">
            Ihr Partner für{" "}
            <span className="text-[#7c8aff]">Elektrorecycling</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/80 max-w-xl">
            Entsorgungsfachbetrieb nach § 20; 22; 23 ElektroG. Wir sind Ihr
            Ansprechpartner für die fachgerechte Rücknahme und Verwertung von
            Elektroaltgeräten.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg h-12 px-8 text-base"
            >
              <Link href="/kontakt">
                Kontakt aufnehmen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur-sm h-12 px-8 text-base"
            >
              <Link href="/leistungen">Unsere Leistungen</Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-6">
            {[
              { icon: Shield, label: "DIN 66399", sub: "Zertifiziert" },
              { icon: Award, label: "ElektroG", sub: "Konform" },
              { icon: Truck, label: "Eigene", sub: "Logistik" },
            ].map((badge) => (
              <div key={badge.label} className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 group">
                <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/15 group-hover:bg-white/20 group-hover:ring-white/30 transition-all">
                  <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm font-semibold text-white">{badge.label}</p>
                  <p className="text-[10px] sm:text-xs text-white/60">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-white animate-bounce" />
        </div>
      </div>
    </section>
  )
}
