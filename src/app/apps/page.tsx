import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { apps } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Products & Applications | Hempon.dev",
  description:
    "Explore Hempon Group digital products, including farm management, business invoicing, property management, finance, productivity and campaign website concepts.",
};

export default function AppsPage() {
  return (
    <main className="grid-noise min-h-screen pt-28">
      <div className="container py-12 md:py-20">
        <p className="eyebrow">Products & applications</p>
        <h1 className="display mt-4 max-w-5xl text-6xl font-semibold leading-[.86] md:text-8xl">Digital products built around real workflows.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">Explore product pages, current release information, public web experiences and practical user guides. Design concepts and demos are labelled separately from downloadable products.</p>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {apps.map((app) => (
            <article key={app.slug} className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#101213] transition hover:border-white/25">
              <Link href={`/${app.slug}`} className="group block">
                <div className="relative aspect-[1.55] overflow-hidden">
                  <Image src={app.image} alt={`${app.name} preview`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                  <span className="absolute bottom-4 left-5 text-[10px] uppercase tracking-[.16em] text-white/65">{app.kicker}</span>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-medium">{app.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/50">{app.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white px-3 py-1.5 text-[10px] text-black">{app.downloadUrl ? "APK available" : app.slug === "civicforge" ? "Design demo" : app.webUrl ? "Web experience" : "Portfolio concept"}</span>
                    <span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/55">{app.platform}</span>
                    {app.version && <span className="rounded-full border border-[#d7ff65]/25 px-3 py-1.5 text-[10px] text-[#d7ff65]/80">v{app.version}</span>}
                  </div>
                </div>
              </Link>
              <div className="flex items-center justify-between border-t border-white/10 px-6 py-4">
                <Link href={app.guideUrl} className="text-xs text-white/55 transition hover:text-white">Read user guide ↗</Link>
                <Link href={app.projectSlug ? `/projects/${app.projectSlug}` : `/projects`} className="text-xs text-white/55 transition hover:text-[#d7ff65]">Project details ↗</Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-xs leading-6 text-white/30">Release versions are shown where supplied in the product registry. Follow each product download page for its current distribution route; web links and demos are identified on their respective product pages.</p>
      </div>
    </main>
  );
}
