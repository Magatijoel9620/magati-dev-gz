import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects & Case Studies | Hempon.dev",
  description:
    "Explore Hempon Group projects, software products, client websites, automation work, reusable starters and independent design concepts.",
};

export default function ProjectsPage() {
  return (
    <main className="container py-16 md:py-24">
      <header className="max-w-5xl border-b border-white/10 pb-10">
        <Link href="/" className="text-xs uppercase tracking-[.18em] text-white/35 hover:text-white">← Back home</Link>
        <p className="eyebrow mt-12">Projects & case studies</p>
        <h1 className="display mt-4 text-5xl font-semibold leading-[.9] sm:text-7xl">A record of the systems, products and experiences we build.</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/55">Explore product builds, client websites, automation work, reusable website starters and independent concepts. Each project is labelled by its type so you can distinguish a live product from a demo or design exploration.</p>
        <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-[.14em] text-white/40">
          <span className="rounded-full border border-white/10 px-3 py-2">Products</span>
          <span className="rounded-full border border-white/10 px-3 py-2">Client websites</span>
          <span className="rounded-full border border-white/10 px-3 py-2">Automation</span>
          <span className="rounded-full border border-white/10 px-3 py-2">Concepts & starters</span>
        </div>
      </header>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group block overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101213] transition hover:border-white/25">
            <div className="relative aspect-[1.35] overflow-hidden">
              <Image src={project.imageUrl} alt={`${project.title} project preview`} fill sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[9px] uppercase tracking-[.18em] text-white/65 backdrop-blur-md">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="p-5">
              <p className="mono text-[9px] uppercase tracking-[.16em] text-[#d7ff65]/70">{project.classification ?? "Portfolio project"}</p>
              <h2 className="mt-2 text-xl font-medium">{project.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-white/45">{project.description}</p>
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-[10px] uppercase tracking-[.14em] text-white/35">{project.screenshots.length} visual references</span>
                <span className="text-xs text-white/65 transition group-hover:text-[#d7ff65]">Explore project ↗</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-20 rounded-[1.8rem] border border-white/10 bg-white/[.025] p-7 md:p-10">
        <p className="eyebrow">Have a project in mind?</p>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="display max-w-2xl text-4xl font-semibold md:text-5xl">Let’s discuss the problem you need to solve.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">Share the context, the people it needs to serve and what a useful outcome would look like.</p>
          </div>
          <a href="mailto:hempongroup@gmail.com?subject=Project%20enquiry" className="inline-flex shrink-0 rounded-full bg-[#d7ff65] px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5">Start a project enquiry ↗</a>
        </div>
      </section>
    </main>
  );
}
