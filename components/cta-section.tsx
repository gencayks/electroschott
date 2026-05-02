import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-2xl bg-card border border-border p-8 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Sprechen Sie mit uns über Ihr Projekt
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Lassen Sie uns gemeinsam die beste Lösung für Ihre
                Entsorgungsbedürfnisse finden. Kostenlose und unverbindliche
                Beratung.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8"
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
                  className="border-border h-12 px-8"
                >
                  <a href="tel:+4962186239700">
                    <Phone className="mr-2 h-4 w-4" />
                    0621 – 86 23 97-0
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:pl-12 lg:border-l lg:border-border">
              <h3 className="text-base font-semibold text-foreground mb-5">
                Schnellkontakt
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+4962186239700"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Zentrale</p>
                    <p className="text-sm font-medium text-foreground">
                      0621 – 86 23 97-0
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:dispo@an-electrorecycling.de"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">E-Mail</p>
                    <p className="text-sm font-medium text-foreground">
                      dispo@an-electrorecycling.de
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
