import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie A&N Electrorecycling in Mannheim. Telefon: 0621 – 86 23 97-0, E-Mail: dispo@an-electrorecycling.de. Franz-Grashof-Straße 15-17, 68199 Mannheim.",
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
