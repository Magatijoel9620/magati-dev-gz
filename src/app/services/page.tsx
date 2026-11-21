import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — Websites, Software, Mobile Apps & Automation",
  description: "Explore Hempon Group services: website development, custom business software, mobile apps, business automation, AI integrations and digital product design.",
};

export default function ServicesPage() {
  return (
    <main className="grid-noise min-h-screen pt-28">
      <header className="container max-w-5xl pb-16 pt-12 md:pb-24 md:pt-20">
        <p className="eyebrow">Hempon.dev / Services</p>
        <h1 className="display mt-6 text-6xl font-semibold leading-[.88] md:text-8xl">Technology<br /><span className="text-white/25">with a purpose.</span></h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-white/50 md:text-lg">We design and build digital experiences around the work that needs to get done. Explore the service areas, then start a conversation about the problem you want to solve.</p>
        <a href="mailto:hempongroup@gmail.com?subject=Project%20enquiry%20%E2%80%94%20Hempon.dev" className="mt-8 inline-flex rounded-full bg-[#d7ff65] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e5ff9a]">Discuss a project ↗</a>
      </header>
      <section className="container pb-24 md:pb-32" aria-label="Service areas">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="rounded-2xl border border-white/10 bg-[#101213]/80 p-6 md:p-8">
              <p className="mono text-[10px] tracking-[.18em] text-[#d7ff65]/65">{service.number} / SERVICE AREA</p>
              <h2 className="mt-5 text-2xl font-medium tracking-tight md:text-3xl">{service.title}</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/48">{service.short}</p>
              <Link href={`/services/${service.slug}`} className="mt-7 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-sm text-white/75 transition hover:border-[#d7ff65] hover:text-[#d7ff65]">Explore this service <span>↗</span></Link>
            </article>
          ))}
        </div>
      </section>
      <section className="container pb-24 md:pb-32"><div className="rounded-3xl border border-white/10 bg-[#111516] p-7 md:p-12"><p className="eyebrow">A useful starting point</p><h2 className="display mt-4 max-w-3xl text-4xl font-semibold leading-[.95] md:text-6xl">You don&apos;t need a complete brief to begin.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-white/45">Share what is happening today, what you would like to improve and who the solution is for. We can clarify the scope together.</p><a href="mailto:hempongroup@gmail.com?subject=Let%E2%80%99s%20discuss%20a%20project" className="mt-8 inline-flex rounded-full bg-[#d7ff65] px-6 py-3 text-sm font-semibold text-black">Start a conversation ↗</a></div></section>
      <SiteFooter />
    </main>
  );
}
