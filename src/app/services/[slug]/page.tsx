import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import { getService, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return { title: service.title, description: service.short, openGraph: { title: `${service.title} | Hempon.dev`, description: service.short } };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return (
    <main className="grid-noise min-h-screen pt-28">
      <div className="container max-w-6xl pb-10 pt-10"><Link href="/services" className="inline-flex items-center gap-2 text-xs uppercase tracking-[.15em] text-white/40 transition hover:text-[#d7ff65]">← All services</Link></div>
      <header className="container max-w-5xl pb-16 md:pb-24">
        <p className="eyebrow">Hempon.dev / Services / {service.number}</p>
        <h1 className="display mt-6 max-w-5xl text-5xl font-semibold leading-[.9] md:text-8xl">{service.title.split(" & ").length > 1 ? <>{service.title.split(" & ")[0]} <span className="text-white/25">&amp; {service.title.split(" & ").slice(1).join(" & ")}</span></> : service.title}</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55">{service.description}</p>
        <div className="mt-9 flex flex-wrap gap-3"><Link href="/contact" className="rounded-full bg-[#d7ff65] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e5ff9a]">Enquire about this service ↗</Link><Link href="/projects" className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/75 transition hover:border-white/30 hover:text-white">See selected work ↗</Link></div>
      </header>
      <section className="container grid gap-5 pb-20 md:grid-cols-2 md:pb-28">
        <div className="rounded-2xl border border-white/10 bg-[#101213]/85 p-6 md:p-9"><p className="eyebrow">What this can help with</p><h2 className="mt-4 text-2xl font-medium">Potential outcomes</h2><ul className="mt-7 space-y-4">{service.outcomes.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/55"><span className="text-[#d7ff65]">↗</span><span>{item}</span></li>)}</ul></div>
        <div className="rounded-2xl border border-white/10 bg-[#101213]/85 p-6 md:p-9"><p className="eyebrow">Is this relevant?</p><h2 className="mt-4 text-2xl font-medium">A good fit when…</h2><ul className="mt-7 space-y-4">{service.goodFit.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/55"><span className="text-[#d7ff65]">↗</span><span>{item}</span></li>)}</ul></div>
        <div className="rounded-2xl border border-white/10 bg-[#101213]/85 p-6 md:p-9"><p className="eyebrow">How we work</p><h2 className="mt-4 text-2xl font-medium">A practical process</h2><ol className="mt-7 space-y-4">{service.approach.map((item, index) => <li key={item} className="flex gap-4 text-sm leading-6 text-white/55"><span className="mono pt-0.5 text-[10px] text-[#d7ff65]/70">0{index + 1}</span><span>{item}</span></li>)}</ol></div>
        <div className="rounded-2xl border border-white/10 bg-[#101213]/85 p-6 md:p-9"><p className="eyebrow">Depending on scope</p><h2 className="mt-4 text-2xl font-medium">What the work may include</h2><ul className="mt-7 space-y-4">{service.deliverables.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/55"><span className="text-[#d7ff65]">↗</span><span>{item}</span></li>)}</ul></div>
      </section>
      <section className="container pb-24 md:pb-32"><div className="rounded-3xl border border-[#d7ff65]/20 bg-[#d7ff65]/[.045] p-7 md:p-12"><p className="eyebrow">Next step</p><h2 className="display mt-4 max-w-3xl text-4xl font-semibold leading-[.94] md:text-6xl">Let&apos;s start with the problem.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-white/50">Tell us what you need, what is not working today and what a better outcome would look like. We&apos;ll use that to identify a sensible next step.</p><Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#d7ff65] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e5ff9a]">Discuss {service.title.toLowerCase()} ↗</Link></div><div className="mt-10 flex flex-wrap gap-5 text-sm text-white/45"><Link href="/services" className="hover:text-[#d7ff65]">Explore other services ↗</Link><Link href="/projects" className="hover:text-[#d7ff65]">Browse projects ↗</Link></div></section>
      <SiteFooter />
    </main>
  );
}
