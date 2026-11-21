import PortfolioHero from "@/components/PortfolioHero";
import WorkSection from "@/components/WorkSection";
import { About, Capabilities, Contact } from "@/components/ContentSections";
import SiteFooter from "@/components/SiteFooter";
import AppShowcase from "@/components/AppShowcase";
import ServiceDiscovery from "@/components/ServiceDiscovery";
import TrustSignals from "@/components/TrustSignals";

export default function Home() {
  return (
    <div id="page" className="grid-noise">
      <PortfolioHero />
      <WorkSection />
      <ServiceDiscovery />
      <AppShowcase />
      <Capabilities />
      <TrustSignals />
      <About />
      <Contact />
      <SiteFooter />
    </div>
  );
}
