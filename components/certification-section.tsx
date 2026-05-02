import Link from "next/link"
import Image from "next/image"
import { Award, FileCheck, Download, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    title: "Entsorgungsfachbetrieb nach § 20; 22; 23 ElektroG",
    detail: "Vollständig zertifiziert und regelmäßig geprüft",
  },
  {
    title: "Erstbehandlungsanlage nach § 20 Abs. 2 und § 22",
    detail: "Für Vorbereitung zur Wiederverwendung und Schadstoffentfrachtung",
  },
  {
    title: "DIN 66399 Schutzklasse 3 zertifiziert",
    detail: "Höchste Sicherheitsstufe für Datenträgervernichtung",
  },
]

export function CertificationSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/official-certification-stamp-document-business-pro.jpg"
                alt="Zertifizierung"
                width={600}
                height={450}
                className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-primary rounded-2xl p-5 shadow-xl hidden lg:flex flex-col items-center justify-center">
              <Award className="w-8 h-8 text-primary-foreground" />
              <span className="text-primary-foreground font-bold text-xs mt-1.5">
                Zertifiziert
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest">
              Qualität & Vertrauen
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Zertifizierter Entsorgungsfachbetrieb
            </h2>
            <div className="mt-4 w-12 h-1 bg-primary rounded-full" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Als zertifizierter Entsorgungsfachbetrieb mit jahrzehntelanger
              Erfahrung auf diesem Sektor steht ressourcenschonendes Recycling
              im Mittelpunkt unserer Überlegungen und Maßnahmen.
            </p>

            <div className="mt-8 space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {cert.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {cert.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/zertifikate">
                  <FileCheck className="mr-2 h-4 w-4" />
                  Alle Zertifikate einsehen
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-border">
                <a href="/documents/Zertifikat2024_Komplett.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Zertifikat herunterladen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
