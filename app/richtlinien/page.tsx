import type { Metadata } from "next"
import { CTASection } from "@/components/cta-section"
import { ExternalLink, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Richtlinien",
  description:
    "Alle relevanten Richtlinien für Elektrorecycling: WEEE, ElektroG, EAR, RoHS, REACH, KrWG und mehr. Wir arbeiten nach höchsten europäischen und deutschen Standards.",
}

const guidelines = [
  {
    title: "WEEE",
    fullName: "Waste of Electrical and Electronics Equipment",
    description:
      "Die Richtlinie WEEE gilt für Unternehmen, die Elektro- oder Elektronikgeräte herstellen, verkaufen, vertreiben, wiederverwerten oder behandeln, sowie für Verbraucher innerhalb der Europäischen Union. Die WEEE-Richtlinie soll das Recycling von elektrischen und elektronischen Geräten steigern und dieses bereits im Produktdesign berücksichtigen.",
    link: "https://eur-lex.europa.eu/legal-content/de/ALL/?uri=CELEX:32002L0096",
  },
  {
    title: "EAR",
    fullName: "Elektro-Altgeräte-Register",
    description:
      'Die stiftung elektro-altgeräte register (stiftung ear) ist die „Gemeinsame Stelle der Hersteller" im Sinne des ElektroG. Vom Umweltbundesamt mit der Wahrnehmung hoheitlicher Aufgaben betraut, registriert die stiftung ear die Hersteller von Elektro- und Elektronikgeräten.',
    link: "http://www.stiftung-ear.de/",
  },
  {
    title: "ElektroG",
    fullName: "Elektro- und Elektronikgerätegesetz",
    description:
      "Das ElektroG setzt die europäische WEEE-Richtlinie in deutsches Recht um. Es regelt das Inverkehrbringen, die Rücknahme und die umweltverträgliche Entsorgung von Elektro- und Elektronikgeräten.",
    link: "https://www.elektrogesetz.de/",
  },
  {
    title: "ÖRE",
    fullName: "Öffentlich-rechtliche Entsorgungsträger",
    description:
      "ÖRE sind die nach jeweiligem Landesrecht zur Entsorgung verpflichteten juristischen Personen, zumeist kreisfreie Städte und (Land-)Kreise. Diese sind dazu verpflichtet, Sammelstellen einzurichten, an denen (Elektro-)Altgeräte aus privaten Haushalten ihres Gebietes angeliefert werden können.",
    link: null,
  },
  {
    title: "REACH",
    fullName: "Registration Evaluation Authorisation of Chemicals",
    description:
      "Die Europäische Chemikalienverordnung REACH soll ein hohes Schutzniveau für Mensch und Umwelt sicherstellen. Gemäß REACH müssen Hersteller, Importeure und nachgeschaltete Anwender ihre Chemikalien registrieren und sind für deren sichere Verwendung selbst verantwortlich.",
    link: null,
  },
  {
    title: "CE-Kennzeichnung",
    fullName: "Conformité Européenne",
    description:
      "Die Intention der CE-Kennzeichnung ist es, dem Verbraucher innerhalb des Europäischen Wirtschaftsraumes anzuzeigen, dass das erworbene Produkt den geltenden Europäischen Richtlinien entspricht.",
    link: null,
  },
  {
    title: "Ökodesign",
    fullName: "Ökodesign-Richtlinie",
    description:
      "Die Ökodesign-Richtlinie dient der umweltgerechten Gestaltung sogenannter energiebetriebener Produkte. Ziel dieser Richtlinie ist es, durch Ökodesign sowohl Energie als auch weitere Ressourcen nicht nur beim Betrieb, sondern schon bei der Herstellung einzusparen.",
    link: null,
  },
  {
    title: "RoHS",
    fullName: "Restriction of the use of certain Hazardous Substances",
    description:
      "Die sogenannte RoHS-Richtlinie dient der Beschränkung der Verwendung bestimmter gefährlicher Stoffe in Elektro- und Elektronikgeräten. Diese Binnenmarktrichtlinie gilt für alle Mitgliedstaaten der EU in gleicher Weise.",
    link: "https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2011:174:0088:0110:DE:PDF",
  },
  {
    title: "BattG",
    fullName: "Batteriegesetz",
    description:
      "Gesetz über das Inverkehrbringen, die Rücknahme und die umweltverträgliche Entsorgung von Batterien und Akkumulatoren.",
    link: "http://www.gesetze-im-internet.de/battg/",
  },
  {
    title: "KrWG",
    fullName: "Kreislaufwirtschaftsgesetz",
    description:
      "Gesetz zur Förderung der Kreislaufwirtschaft und Sicherung der umweltverträglichen Bewirtschaftung von Abfällen.",
    link: "http://www.gesetze-im-internet.de/krwg/index.html",
  },
  {
    title: "LAGA M31b",
    fullName: "LAGA Mitteilung 31 B (2018)",
    description:
      "Mitteilung der Bund/Länder-Arbeitsgemeinschaft Abfall (LAGA) 31 B zur „Umsetzung des Elektro- und Elektronikgerätegesetzes sowie Technische Anforderungen an die Behandlung und Verwertung von Elektro- und Elektronikaltgeräten.",
    link: "https://www.laga-online.de/documents/m-31b-18-04-2018-neu_1527151713.pdf",
  },
]

export default function RichtlinienPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Unsere Richtlinien</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Wir arbeiten nach den höchsten Standards und erfüllen alle relevanten europäischen und deutschen
              Richtlinien für das Elektrorecycling.
            </p>
          </div>
        </div>
      </section>

      {/* Guidelines Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guidelines.map((guideline) => (
              <Card
                key={guideline.title}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{guideline.title}</h3>
                      <p className="text-xs text-muted-foreground">{guideline.fullName}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{guideline.description}</p>
                  {guideline.link && (
                    <a
                      href={guideline.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-4"
                    >
                      Mehr erfahren
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
