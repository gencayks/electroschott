import type { Metadata } from "next"
import KontaktClient from "./kontaktClient"

export const metadata: Metadata = {
  title: "Kontaktieren Sie uns - A&N Electrorecycling GmbH & Co. KG",
  description:
    "Füllen Sie das Kontaktformular aus, wenn Sie weitere Informationen wünschen. Wir melden uns dann bei Ihnen.",
}

export default function KontaktPage() {
  return <KontaktClient />
}
