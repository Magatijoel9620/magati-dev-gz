import PortfolioHero from "@/components/PortfolioHero";
import WorkSection from "@/components/WorkSection";
import { About, Capabilities, Contact } from "@/components/ContentSections";
import SiteFooter from "@/components/SiteFooter";
import AppShowcase from "@/components/AppShowcase";

export default function Home() {
  return (
    <div id="page" className="grid-noise">
      <PortfolioHero />
      <WorkSection />
      <AppShowcase />
      <Capabilities />
      <About />
      <Contact />
      <SiteFooter />
      <div className="fixed bottom-5 right-5 z-30">
        <a
          href="#top"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/65 text-xs backdrop-blur-xl transition hover:border-white/30"
          aria-label="Back to top"
        >
          ↑
        </a>
      </div>
    </div>
  );
}
