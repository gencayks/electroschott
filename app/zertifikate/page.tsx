import type { Metadata } from "next"
import { CTASection } from "@/components/cta-section"
import { Award, FileCheck, Download, Shield, Eye, CheckCircle2, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Zertifikate",
  description:
    "Unsere Zertifikate: Entsorgungsfachbetrieb nach §§ 56 und 57 KrWG, Datenträgervernichtung nach DIN 66399, DEKRA-zertifizierte Schredderanlage. Dokumente zum Download.",
}

const certificates = [
  {
    icon: Award,
    title: "Entsorgungsfachbetrieb Zertifikat 2024",
    description:
      "Vollständiges Zertifikat nach §§ 56 und 57 KrWG für die fachgerechte Entsorgung von Elektro- und Elektronikaltgeräten.",
    issuer: "Brandt Management UG",
    issuedDate: "12.12.2023",
    validUntil: "11.06.2025",
    registrationNumber: "Z - Nr. 57 / 2023",
    pages: "10 Seiten",
    link: "/documents/Zertifikat2024_Komplett.pdf",
    featured: true,
  },
  {
    icon: Shield,
    title: "Verleihungsurkunde Datenträgervernichtung",
    description:
      "Zertifizierung für die sichere Vernichtung von Datenträgern nach DIN 66399 mit DEKRA-zertifizierter Schredderanlage.",
    issuer: "DEKRA",
    link: "https://www.an-electrorecycling.de/wp-content/uploads/Verleihungsurkunde_Datenträger.pdf",
    featured: false,
  },
]

const certificationPoints = [
  "Entsorgungsfachbetrieb nach § 20; 22; 23 ElektroG",
  "Erstbehandlungsanlage nach § 20 Abs. 2 und § 22 Abs. 3 Satz 1 ElektroG",
  "Vernichtung von Datenträgern nach DIN 66399 Teil 1 und 2",
  "DIN SPEC 66399 Teil 3, die Schutzklasse 3",
  "Datenträgerkategorie T,H,E,O die Sicherheitsstufen H4/H5 bzw. E4/T5/O4",
  "DEKRA-zertifizierte Schredderanlage",
]

const capabilities = [
  { label: "Lagerkapazität", value: "500 Mg", icon: Building2 },
  { label: "Behandlungskapazität", value: "200 Mg/Jahr", icon: FileCheck },
  { label: "Anlagenkapazität", value: "45.000 t/Jahr", icon: Award },
  { label: "Mitarbeiter", value: "30+", icon: CheckCircle2 },
]

export default function ZertifikatePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.3),transparent_50%)]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-6">
              <Award className="w-4 h-4" />
              Zertifizierter Entsorgungsfachbetrieb
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Zertifikate & Nachweise
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Qualität und Vertrauen sind die Grundpfeiler unserer Arbeit. Unsere Zertifizierungen belegen unser
              Engagement für höchste Standards im Elektrorecycling und Datenschutz.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Download Section - No Preview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide">Dokumente</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Unsere Zertifikate zum Download
            </p>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Laden Sie unsere aktuellen Zertifikate und Nachweise herunter oder öffnen Sie sie direkt im Browser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certificates.map((cert) => (
              <Card
                key={cert.title}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 flex-shrink-0">
                      <cert.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">{cert.title}</h3>
                      {cert.featured && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3" />
                          Aktuell gültig
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cert.description}</p>

                  {cert.featured && (
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="p-3 rounded-lg bg-secondary/50">
                        <p className="text-xs text-muted-foreground mb-0.5">Gültig bis</p>
                        <p className="text-sm font-medium text-primary">{cert.validUntil}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-secondary/50">
                        <p className="text-xs text-muted-foreground mb-0.5">Umfang</p>
                        <p className="text-sm font-medium text-foreground">{cert.pages}</p>
                      </div>
                    </div>
                  )}

                  {!cert.featured && cert.issuer && (
                    <p className="text-sm text-muted-foreground mb-4">
                      Ausgestellt von: <span className="text-foreground font-medium">{cert.issuer}</span>
                    </p>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="flex-1 border-border bg-transparent" asChild>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4 mr-2" />
                        Im Browser öffnen
                      </a>
                    </Button>
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                      <a href={cert.link} download>
                        <Download className="w-4 h-4 mr-2" />
                        Herunterladen
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.label} className="text-center p-6 rounded-xl bg-background border border-border">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mx-auto mb-4">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-primary">{cap.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{cap.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Details */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Qualitätssicherung</h2>
              <h3 className="text-3xl font-bold text-foreground mb-6 text-balance">
                Erfüllte Anforderungen & Standards
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Als zertifizierter Entsorgungsfachbetrieb erfüllen wir alle gesetzlichen Anforderungen und darüber
                hinaus. Unsere Zertifizierungen werden regelmäßig überprüft und erneuert.
              </p>
              <ul className="space-y-4">
                {certificationPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                      <FileCheck className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-2xl opacity-30" />
              <img
                src="/official-certification-documents-seals-badges-prof.jpg"
                alt="Zertifikate und Siegel"
                className="rounded-xl w-full h-auto object-cover relative shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-5 rounded-xl hidden lg:flex items-center gap-3 shadow-xl">
                <Award className="w-8 h-8 text-primary-foreground" />
                <div>
                  <p className="text-primary-foreground font-bold text-lg">Zertifiziert</p>
                  <p className="text-primary-foreground/80 text-sm">seit über 30 Jahren</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
