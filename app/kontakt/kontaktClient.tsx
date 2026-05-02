"use client"

import type React from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    lines: ["Franz-Grashof-Straße 15-17", "68199 Mannheim"],
  },
  {
    icon: Phone,
    title: "Zentrale",
    lines: ["0621 – 86 23 97-0"],
    href: "tel:+4962186239700",
  },
  {
    icon: Mail,
    title: "E-Mail",
    lines: ["dispo@an-electrorecycling.de"],
    href: "mailto:dispo@an-electrorecycling.de",
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    lines: ["Mo - Fr: 8:00 - 17:00 Uhr"],
  },
]

const departments = [
  {
    name: "Vertrieb",
    phone: "0621 – 86 23 97-13",
    email: "vertrieb@an-electrorecycling.de",
  },
  {
    name: "Buchhaltung",
    phone: "0621 – 86 23 97-15 oder 19",
    email: "buchhaltung@an-electrorecycling.de",
  },
  {
    name: "Dispo",
    phone: null,
    email: "dispo@an-electrorecycling.de",
  },
]

export default function KontaktClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
  }

  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Kontaktieren Sie uns
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Füllen Sie das Kontaktformular aus, wenn Sie weitere Informationen wünschen. Wir melden uns dann bei
              Ihnen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Nachricht senden</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="bg-card border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Firma</Label>
                    <Input
                      id="company"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="bg-card border-border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="bg-card border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="bg-card border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Ihre Nachricht *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="bg-card border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                >
                  Nachricht senden
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">A&N Electrorecycling GmbH & Co. KG</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="bg-card border-border">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground text-sm">{info.title}</h3>
                          {info.lines.map((line, i) =>
                            info.href ? (
                              <a
                                key={i}
                                href={info.href}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                              >
                                {line}
                              </a>
                            ) : (
                              <p key={i} className="text-sm text-muted-foreground">
                                {line}
                              </p>
                            ),
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-4">Abteilungen</h3>
              <div className="space-y-4">
                {departments.map((dept) => (
                  <div key={dept.name} className="border-l-2 border-primary pl-4">
                    <h4 className="font-medium text-foreground">{dept.name}</h4>
                    {dept.phone && (
                      <a
                        href={`tel:${dept.phone.replace(/\s/g, "")}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                      >
                        {dept.phone}
                      </a>
                    )}
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                    >
                      {dept.email}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-card rounded-lg border border-border">
                <h4 className="font-medium text-foreground mb-2">Vertretungsberechtige Gesellschafter</h4>
                <p className="text-sm text-muted-foreground">Nihat Altun und Adem Coban</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-card">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.123456789!2d8.4567890!3d49.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFranz-Grashof-Stra%C3%9Fe%2015-17%2C%2068199%20Mannheim!5e0!3m2!1sde!2sde!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Standort A&N Electrorecycling"
          className="grayscale"
        />
      </section>
    </>
  )
}
