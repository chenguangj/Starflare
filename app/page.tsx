import { Navbar } from "@/components/navbar/navbar"
import { HeroSection } from "@/components/hero/hero-section"
import { StatsSection } from "@/components/stats/stats-section"
import { FeatureSection } from "@/components/features/feature-section"
import { TechStackSection } from "@/components/tech-stack/tech-stack-section"
import { GlobalReachSection } from "@/components/global-reach/global-reach-section"
import { PartnersSection } from "@/components/partners/partners-section"
import { MilestonesSection } from "@/components/milestones/milestones-section"
import { TestimonialsSection } from "@/components/testimonials/testimonials-section"
import { CTASection } from "@/components/cta/cta-section"
import { Footer } from "@/components/footer/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <TechStackSection />
      <GlobalReachSection />
      <PartnersSection />
      <MilestonesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
