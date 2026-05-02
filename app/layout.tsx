import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.an-electrorecycling.de"),
  title: {
    default: "A&N Electrorecycling GmbH & Co.KG | Elektrorecycling & Entsorgung",
    template: "%s | A&N Electrorecycling",
  },
  description:
    "Zertifizierter Entsorgungsfachbetrieb für Elektrorecycling, Datenträgervernichtung nach DIN 66399, Industriedemontage und Logistik. Über 30 Jahre Erfahrung in Mannheim.",
  keywords: [
    "Elektrorecycling",
    "Entsorgungsfachbetrieb",
    "Datenträgervernichtung",
    "DIN 66399",
    "ElektroG",
    "Industriedemontage",
    "Elektroaltgeräte",
    "Mannheim",
    "Recycling",
    "E-Waste",
  ],
  authors: [{ name: "A&N Electrorecycling GmbH & Co.KG" }],
  creator: "A&N Electrorecycling GmbH & Co.KG",
  publisher: "A&N Electrorecycling GmbH & Co.KG",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.an-electrorecycling.de",
    siteName: "A&N Electrorecycling",
    title: "A&N Electrorecycling GmbH & Co.KG | Elektrorecycling & Entsorgung",
    description:
      "Zertifizierter Entsorgungsfachbetrieb für Elektrorecycling, Datenträgervernichtung und Industriedemontage. Über 30 Jahre Erfahrung.",
    images: [
      {
        url: "/logo.png",
        width: 180,
        height: 50,
        alt: "A&N Electrorecycling Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A&N Electrorecycling GmbH & Co.KG",
    description: "Zertifizierter Entsorgungsfachbetrieb für Elektrorecycling und Datenträgervernichtung.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/logo.png" }],
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#3730a3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="bg-background">
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          <main className="flex-1 pt-[60px] sm:pt-[72px] lg:pt-[112px]">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
