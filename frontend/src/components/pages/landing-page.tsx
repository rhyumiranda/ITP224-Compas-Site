import HeroSection from "./hero-section"
import ServicesOfferedSection from "./services-offered"
import { AdventureCard } from "./adventure-card"
import { AdventuresSection } from "./adventures-section"
import { PackagesSection } from "./packages-section"
import { SiteFooter } from "./site-footer"

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <ServicesOfferedSection />
      <PackagesSection/>
      <AdventuresSection/>
      <SiteFooter/>
    </div>
  )
}
