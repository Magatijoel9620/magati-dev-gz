import Link from "next/link";
import { services } from "@/lib/services";

export default function ServiceDiscovery() {
  return (
    <section aria-labelledby="service-discovery-title" className="border-y border-white/10 bg-[#0b0d0e]/80">
      <div className="container py-24 md:py-32">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-9 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">What we can build together</p>
            <h2 id="service-discovery-title" className="display mt-4 max-w-3xl text-5xl font-semibold leading-[.92] md:text-7xl">Find the right<br /><span className="text-white/28">way forward.</span></h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/45">Start with the challenge, not a technology list. Explore the areas below to see where a focused digital solution could help.</p>
        </div>
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group flex min-h-56 flex-col bg-[#0b0d0e] p-6 transition hover:bg-[#121617] sm:p-7">
              <div className="flex items-center justify-between"><span className="mono text-[10px] text-[#d7ff65]/65">Service area</span><span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/50 transition group-hover:border-[#d7ff65]/50 group-hover:bg-[#d7ff65] group-hover:text-black">↗</span></div>
              <h3 className="mt-8 text-xl font-medium tracking-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/45">{service.short}</p>
              <span className="mt-auto pt-6 text-[10px] uppercase tracking-[.16em] text-white/35 transition group-hover:text-[#d7ff65]">Explore service</span>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#d7ff65]/20 bg-[#d7ff65]/[.045] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div><p className="text-sm font-medium">Not sure which service fits?</p><p className="mt-1 text-sm text-white/45">Describe the challenge and we can work out a sensible starting point.</p></div>
          <a href="mailto:hempongroup@gmail.com?subject=Help%20choosing%20a%20digital%20solution" className="ui-btn-primary inline-flex shrink-0 items-center justify-center rounded-full bg-[#d7ff65] px-5 py-3 text-sm font-semibold text-[#08090a]">Talk through your idea ↗</a>
        </div>
      </div>
    </section>
  );
}
