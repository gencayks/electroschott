import type { Metadata } from "next"
import { CTASection } from "@/components/cta-section"
import { VideoSection } from "@/components/video-section"
import { Leaf, Globe, Users, Ban } from "lucide-react"

export const metadata: Metadata = {
  title: "Philosophie",
  description:
    "Unsere Philosophie: Verantwortungsvolles Recycling für eine nachhaltige Zukunft. Kein Dritte-Welt-Export, 100% Recycling in Deutschland.",
}

const stats = [
  { value: "583 kg", label: "Abfall pro Person/Jahr in Deutschland" },
  { value: "45%", label: "Gelangen ins Recycling" },
  { value: "80%", label: "Weniger Luftverschmutzung durch Recycling" },
  { value: "40%", label: "Weniger Wasserverbrauch" },
]

export default function PhilosophiePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Unsere Philosophie</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Recycling ist ein Nebeneffekt unserer modernen Wegwerfgesellschaft. Die meisten Produkte zerfallen heute
              nicht mehr "einfach so" auf Mülldeponien, sondern greifen in vielfacher Form unsere Umwelt an.
            </p>
          </div>
        </div>
      </section>

      <VideoSection
        title="A&N Electrorecycling"
        description="Erfahren Sie mehr über unser Unternehmen und unsere Mission."
        videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Company_Logo_and_Name_Enhancement-RFC6o3G7hUuveju52AtHJ5vCrPvAxl.mp4"
      />

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="mt-2 text-sm text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Content */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Umweltschutz</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Reduzierung von Abfall ist stets die beste Möglichkeit, unsere Umwelt und unsere Ressourcen zu schonen.
                Diesem bestehenden Entsorgungsbedarf begegnet A&N mit seinen selektiv angepassten Recycling-Stufen,
                wodurch die Abfall-Last in Boden, Wasser und Luft in höchstmöglichem Maße reduziert wird.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Wir legen dabei unseren Fokus sowohl auf das Recyceln elektronischer und elektrischer Komponenten und
                Geräte als auch auf Buntmetalle, um diese der endgültigen Rückgewinnung von Sekundärrohstoffen
                zuzuführen.
              </p>
            </div>

            <div>
              <img
                src="/environmental-protection-green-nature-sustainabili.jpg"
                alt="Umweltschutz"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Responsibility Section */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src="/future-generations-children-nature-sustainable-ear.jpg"
                alt="Verantwortung für die Zukunft"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Verantwortung für unsere Zukunft</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Die Welt von morgen wird immer digitaler werden. In nahezu allen elektronischen Systemen wie Computern,
                Autos, Mobilfunkgeräten und vielen anderen Produkten befinden sich elektronische Bauelemente, die
                wiederum Anteile von Gold, Silber und Palladium enthalten.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Diese Edelmetalle durch Recyclingverfahren zu extrahieren und erneut in den Wertkreislauf zu integrieren
                ist zwar aufwändig, im Vergleich zur Urgewinnung aus der Erde jedoch weitaus ökologischer und
                ressourcenschonender. Rückgewinnung ist weitaus sinnvoller als Neugewinnung!
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Der beliebig oft wiederholbare Schmelzvorgang von recycelten Edelmetallen führt zu keinerlei
                Qualitätsverlust des künftigen Endprodukts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Über uns</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Die traditionellen Werte unseres Unternehmens bilden seit Jahrzehnten die Basis unseres Handelns.
                Verantwortung für die Umwelt sowie ein fairer, partnerschaftlicher und verantwortungsvoller Umgang mit
                unseren Geschäftspartnern und -freunden sind die Grundpfeiler unseres Bestrebens im Sinne einer
                langjährigen und ausgewogenen Geschäftsbeziehung.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Als zertifizierter Entsorgungsfachbetrieb mit jahrzehntelanger Erfahrung auf diesem Sektor steht
                ressourcenschonendes Recycling im Mittelpunkt unserer Überlegungen und Maßnahmen. Dahinter steht ein
                engagiertes Team von ca. 25 motivierten und zielstrebigen Mitarbeitern, das stets bemüht ist,
                Kundenwünsche schnell und effektiv umzusetzen.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                An mehreren Standorten verfügen wir zu diesem Zweck über Hallen sowie geschlossene Freibereiche von
                mehreren tausend Quadratmetern Fläche sowie einen beachtlichen Fuhrpark, um für Auftragsvolumen
                jeglicher Art die geeigneten Kapazitäten verfügbar zu haben.
              </p>
            </div>

            <div>
              <img
                src="/professional-team-industrial-recycling-facility-wo.jpg"
                alt="Unser Team"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* No Export Section */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6">
              <Ban className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Kein Dritte-Welt-Export von Recyclingware!</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Getreu unserer Philosophie garantieren wir, dass der gesamte von uns durchgeführte Recyclingprozess
              ausschließlich in Deutschland ohne Beteiligung von Drittstaaten, insbesondere solcher der Dritten Welt,
              erfolgt.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Obwohl sich ein Export in solche Länder aus rein wirtschaftlichen Gründen geradezu aufdrängt, vertreten
              wir die Auffassung, dass sich die in vielen Ländern fehlende Verantwortung für Mensch und Umwelt dadurch
              langfristig negativ für solche Länder auswirken würde.
            </p>
            <p className="mt-6 text-lg font-medium text-primary">
              Wir freuen uns, wenn auch Sie diese Philosophie mit uns teilen möchten – für einen verantwortungsvollen
              Weg in eine umweltfreundliche Zukunft.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
