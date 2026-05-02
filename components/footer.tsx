import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, ChevronRight, Award } from "lucide-react"

const navigation = {
  main: [
    { name: "Startseite", href: "/" },
    { name: "Leistungen", href: "/leistungen" },
    { name: "Philosophie", href: "/philosophie" },
    { name: "Richtlinien", href: "/richtlinien" },
    { name: "Zertifikate", href: "/zertifikate" },
    { name: "Kontakt", href: "/kontakt" },
  ],
  services: [
    { name: "Recycling", href: "/leistungen#recycling" },
    { name: "Datenträgervernichtung", href: "/leistungen#datenvernichtung" },
    { name: "Industriedemontage", href: "/leistungen#industriedemontage" },
    { name: "Logistik", href: "/leistungen#logistik" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-foreground/20 flex-shrink-0">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-primary-foreground text-sm sm:text-base">
                  Zertifizierter Entsorgungsfachbetrieb
                </p>
                <p className="text-xs sm:text-sm text-primary-foreground/80">Nach §§ 56 und 57 KrWG</p>
              </div>
            </div>
            <Link
              href="/zertifikate"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              Zertifikate ansehen
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand - Larger footer logo with 3D effect */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="A&N Electrorecycling Logo"
                width={180}
                height={50}
                className="h-12 w-auto logo-3d"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Zertifizierter Entsorgungsfachbetrieb mit jahrzehntelanger Erfahrung im ressourcenschonenden Recycling von
              Elektro- und Elektronikaltgeräten.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Leistungen</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Kontakt</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">
                  Franz-Grashof-Straße 15-17
                  <br />
                  68199 Mannheim
                </div>
              </li>
              <li>
                <a
                  href="tel:+4962186239700"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  0621 – 86 23 97-0
                </a>
              </li>
              <li>
                <a
                  href="mailto:dispo@an-electrorecycling.de"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="break-all">dispo@an-electrorecycling.de</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                Mo - Fr: 8:00 - 17:00 Uhr
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} A&N Electrorecycling GmbH & Co. KG. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link
                href="/impressum"
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Datenschutz
              </Link>
              <Link
                href="/richtlinien"
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Richtlinien
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
