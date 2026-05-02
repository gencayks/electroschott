import Link from "next/link"
import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  "Gestellung von Gitterboxen, Mulden und Container",
  "Günstige An- und Abfahrt, Befüllungen vor Ort",
  "Rücknahme von B2C und B2B Geräten sowie Buntmetalle",
  "Sortierung und Wiegung nach neuen Sammelgruppen",
  "An- und Verkauf Remarketinggeräte",
  "Jährliche Mengenstromnachweise",
  "Datenträgervernichtung mit Zertifikat",
]

export function PackageSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">
              Alles aus einer Hand
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Unser Rundum-Paket
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Profitieren Sie von unserem umfassenden Service-Angebot. Wir
              kümmern uns um alles – von der Abholung bis zur fachgerechten
              Entsorgung.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/kontakt">
                  Jetzt anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/industrial-recycling-containers-warehouse-logistic.jpg"
              alt="Logistik und Container"
              width={640}
              height={480}
              className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
