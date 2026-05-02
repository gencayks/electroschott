import Link from "next/link";
import Image from "next/image";
import { Recycle, HardDrive, Factory, Truck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Recycle,
    title: "Recycling",
    description:
      "Ob Hersteller, Vertreiber oder Erzeuger von Elektro- und/oder Elektronikaltgeräten – bei uns sind sie richtig!",
    href: "/leistungen.html#recycling",
    image: "/electronic-recycling-facility-industrial.jpg",
  },
  {
    icon: HardDrive,
    title: "Datenträgervernichtung",
    description:
      "Vernichtung gemäß Bundesdatenschutzgesetz BDSG gemäß DIN 66399-2:2012-10: H5 und DS-GVO mit Vernichtungszertifikat.",
    href: "/leistungen.html#datenvernichtung",
    image: "/team1.jpg",
  },
  {
    icon: Factory,
    title: "Industriedemontage",
    description:
      "Fachgerechtes Zerlegen und Entsorgung nicht mehr benötigter Maschinen und Anlagen.",
    href: "/leistungen.html#industriedemontage",
    image: "/whatsapp-image.jpg",
  },
  {
    icon: Truck,
    title: "Logistik",
    description:
      "Wir beladen unsere Fahrzeuge selbst und verfügen über eigene Gitterboxen und Container. Keinerlei Organisation erforderlich.",
    href: "/leistungen.html#logistik",
    image: "/logistics-trucks-fleet-container-transport-recycli.jpg",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">
            Unsere Leistungen
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Komplettlösungen für Ihr Unternehmen
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Nutzen Sie unsere kostenlose und unverbindliche Beratung zu Lösungen
            und Konzepten im Sinne des ElektroG.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image area */}
              <div className="relative h-52 sm:h-60 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Floating icon */}
                <div className="absolute top-4 left-4 z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-white/90 shadow-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Mehr erfahren
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
