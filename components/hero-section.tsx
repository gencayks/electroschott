import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Award, Truck, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-64px)] lg:min-h-[calc(100vh-112px)] flex items-end overflow-hidden">
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
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 pt-16 sm:px-6 sm:pb-14 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-5 sm:mb-6">
            <span className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-inset ring-white/25 backdrop-blur-md sm:px-4 sm:text-sm">
              <Leaf className="w-4 h-4" />
              Zertifizierter Entsorgungsfachbetrieb
            </span>
          </div>

          <h1 className="text-[2.35rem] font-bold tracking-tight text-white min-[380px]:text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.08]">
            Ihr Partner für{" "}
            <span className="text-[#7c8aff]">Elektrorecycling</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
            Entsorgungsfachbetrieb nach § 20; 22; 23 ElektroG. Wir sind Ihr
            Ansprechpartner für die fachgerechte Rücknahme und Verwertung von
            Elektroaltgeräten.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 w-full bg-primary px-6 text-base text-primary-foreground shadow-lg hover:bg-primary/90 sm:w-auto sm:px-8"
            >
              <Link href="/kontakt.html">
                Kontakt aufnehmen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 w-full border-white/30 bg-white/5 px-6 text-base text-white backdrop-blur-sm hover:bg-white/10 hover:text-white sm:w-auto sm:px-8"
            >
              <Link href="/leistungen.html">Unsere Leistungen</Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-8 grid grid-cols-3 gap-3 sm:mt-12 sm:flex sm:flex-wrap sm:gap-6">
            {[
              { icon: Shield, label: "DIN 66399", sub: "Zertifiziert" },
              { icon: Award, label: "ElektroG", sub: "Konform" },
              { icon: Truck, label: "Eigene", sub: "Logistik" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="group flex min-w-0 items-center gap-2 sm:gap-3"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/15 transition-all group-hover:bg-white/20 group-hover:ring-white/30 sm:h-11 sm:w-11">
                  <badge.icon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-white sm:text-sm">
                    {badge.label}
                  </p>
                  <p className="truncate text-[11px] text-white/65 sm:text-xs">
                    {badge.sub}
                  </p>
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
  );
}
