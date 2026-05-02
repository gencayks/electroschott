import type { Metadata } from "next"
import { CTASection } from "@/components/cta-section"
import { VideoSection } from "@/components/video-section"
import { Recycle, HardDrive, Factory, Truck, Monitor, Smartphone, Server, Cpu, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Unsere Leistungen: Elektrorecycling, Datenträgervernichtung nach DIN 66399, Industriedemontage und bundesweite Logistik mit eigenem Fuhrpark.",
}

const b2cCategories = [
  {
    title: "Wärmeüberträger",
    examples:
      "Kühlschränke, Kühlgeräte, Gefriergeräte, Klimageräte, Entfeuchter, Wärmepumpen, Wärmepumpentrockner, ölgefüllte Radiatoren",
  },
  {
    title: "Bildschirme & Monitore",
    examples: "Fernseher, LCD-Fotorahmen, alle Monitore, Laptops, Notebooks, Tablets, EBook-Reader",
  },
  {
    title: "Lampen",
    examples: "Leuchtstofflampen, Entladungslampen, Energiesparlampen, LED-Retrofit",
  },
  {
    title: "Großgeräte (> 50 cm)",
    examples:
      "Große Ausgabeautomaten, Kochplatten, Ventilatoren, Saunen, Sonnenbänke, Tresore mit elektr. Verriegelung",
  },
  {
    title: "Kleingeräte (< 50 cm)",
    examples: "Kleine Haushaltsgeräte, Unterhaltungselektronik, Leuchten, Musikausrüstung, Werkzeuge, Spielzeug",
  },
  {
    title: "IT & Telekommunikation",
    examples: "Mobiltelefone, Smartphones, Tablets, GPS-Geräte, Taschenrechner, Router, PCs, Drucker",
  },
]

const itCategories = [
  { icon: Monitor, title: "Computer & Server", description: "PCs, Server, Laptops, Netzteile, Platinen" },
  { icon: Smartphone, title: "Mobilgeräte", description: "Handys, Tablets, Telefonanlagen" },
  { icon: Server, title: "Netzwerk", description: "Router, Switches, Netzwerkequipment" },
  { icon: Cpu, title: "Komponenten", description: "Laufwerke, Platinen, Produktionsausschüsse" },
]

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Unsere Leistungen</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Egal, ob Sie die umweltfreundlichste oder preiswerteste Lösung suchen oder auch beides: Nutzen Sie unsere
              kostenlose und unverbindliche Beratung zu Lösungen und Konzepten im Sinne des ElektroG.
            </p>
          </div>
        </div>
      </section>

      <VideoSection
        title="Einblick in unsere Arbeit"
        description="Sehen Sie, wie wir Elektroaltgeräte fachgerecht recyceln und verwerten."
        videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video_Enhancement_and_Generation-78Jk05YgZEAD23ZH03R6PzSduhG6Fw.mp4"
      />

      {/* Recycling Section */}
      <section id="recycling" className="py-24 bg-background scroll-mt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10">
              <Recycle className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Recycling</h2>
              <p className="text-muted-foreground">Fachgerechte Entsorgung von Elektroaltgeräten</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Wiederverwendung</h3>
              <p className="text-muted-foreground leading-relaxed">
                Gemäß §11 ElektroG (1) prüfen wir im Rahmen der technischen und wirtschaftlichen Möglichkeiten, ob ein
                Altgerät oder einzelne Bauteile wieder verwendet werden können. Ist die Funktionsfähigkeit
                gewährleistet, können die Teile/Geräte zur Reparatur/Produktion oder zur Ersatzteil-Gewinnung an den
                Handel weitergeleitet werden.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">IT & Telekommunikation</h3>
              <div className="grid grid-cols-2 gap-4">
                {itCategories.map((cat) => (
                  <Card key={cat.title} className="bg-card border-border">
                    <CardContent className="p-4">
                      <cat.icon className="w-6 h-6 text-primary mb-2" />
                      <h4 className="font-medium text-foreground text-sm">{cat.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{cat.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">B2C Gerätearten nach ElektroG</h3>
              <div className="space-y-4">
                {b2cCategories.map((cat) => (
                  <div key={cat.title} className="border-l-2 border-primary pl-4">
                    <h4 className="font-medium text-foreground">{cat.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{cat.examples}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Destruction Section */}
      <section id="datenvernichtung" className="py-24 bg-card scroll-mt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10">
              <HardDrive className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Datenträgervernichtung</h2>
              <p className="text-muted-foreground">Diskret & Zuverlässig nach DIN 66399</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Vernichtung nach BDSG und DS-GVO nach DIN 66399 Teil 1 und 2, DIN SPEC 66399 Teil 3, die Schutzklasse 3
                und hinsichtlich der Datenträgerkategorie T,H,E,O die Sicherheitsstufen H4/H5 bzw. E4/T5/O4. Incl.
                Vernichtungszertifikat und auf Wunsch mit Seriennummerndokumentation.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4">
                Als zertifizierter Fachbetrieb gemäß §§56 und 57 KrWG zerstören wir nach DIN-Vorgabe des
                Bundesdatenschutzgesetzes per werkseigener Datenschredder-Anlage Ihre Festplatten, Mobilfunkgeräte,
                Tablets, Magnet-Datenbänder, uvm.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">DEKRA-zertifizierte Schredderanlage</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Sicherheitsstufe H5 (extrem hohe Zerstörungsebene)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Lückenlose Videoüberwachung aller Arbeitsbereiche</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Vernichtungszertifikat mit Seriennummer</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/industrial-hard-drive-shredder-data-destruction-ma.jpg"
                alt="Datenschredder"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Dismantling Section */}
      <section id="industriedemontage" className="py-24 bg-background scroll-mt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10">
              <Factory className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Industriedemontage</h2>
              <p className="text-muted-foreground">Fachgerechtes Zerlegen und Entsorgen</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Unter dem Begriff Industriedemontage versteht man das fachgerechte Zerlegen und die Entsorgung nicht
                mehr benötigter Maschinen und Anlagen.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Lagerhallen & Geschäftsauflösung</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Lagerhallenräumung</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Altmetalle wie Aluminium und Kupfer Maschinen</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Geschäftsauflösung & Büroeinrichtungen</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Kostenlose Besichtigung und Angebotsabgabe</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Nach Absprache auch Demontage</span>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="/industrial-dismantling-warehouse-machinery-profess.jpg"
                alt="Industriedemontage"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section id="logistik" className="py-24 bg-card scroll-mt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10">
              <Truck className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Logistik</h2>
              <p className="text-muted-foreground">Bundesweiter Service mit eigenem Fuhrpark</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div>
              <img
                src="/logistics-trucks-fleet-container-transport-recycli.jpg"
                alt="Logistik Fuhrpark"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>

            <div>
              <p className="text-muted-foreground leading-relaxed">
                Unser Fuhrpark, bestehend aus Sattelzügen, LKWs, Anhängern, Abrollern und Absetzkippern im Bereich 7,5
                bis 40 Tonnen, ist permanent für unsere Kunden im Einsatz.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4">
                Dadurch sind uns nahezu keine Grenzen gesetzt, um Ihre Entsorgungswünsche schnell und problemlos
                realisieren zu können. Die Fahrzeuge cruisen regelmäßig durch Deutschland und gewährleisten so eine
                schnelle Abholung Ihrer Entsorgungsprodukte.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Eigene Fahrzeuge von 7,5 bis 40 Tonnen</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Eigene Gitterboxen und Container</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Wir übernehmen die komplette Beladung</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Keinerlei Organisation Ihrerseits erforderlich</span>
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
