import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { CertificationSection } from "@/components/certification-section"
import { PackageSection } from "@/components/package-section"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="-mt-[64px] sm:-mt-[72px] lg:-mt-[112px]">
      <HeroSection />
      <ServicesSection />
      <CertificationSection />
      <StatsSection />
      <PackageSection />
      <CTASection />
    </div>
  )
}
