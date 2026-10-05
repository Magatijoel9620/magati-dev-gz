import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="container py-16 md:py-24">
      <header className="max-w-5xl border-b border-white/10 pb-10">
        <Link href="/" className="text-xs uppercase tracking-[.18em] text-white/35 hover:text-white">← Back home</Link>
        <p className="eyebrow mt-12">Project archive</p>
        <h1 className="display mt-4 text-5xl font-semibold leading-[.9] sm:text-7xl">A working archive of useful digital systems.</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/45">The complete portfolio registry — products, websites, applications, starter kits, automation work and documented case studies.</p>
      </header>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group block overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101213]">
            <div className="relative aspect-[1.35] overflow-hidden">
              <Image src={project.imageUrl} alt={`${project.title} project preview`} fill sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[9px] uppercase tracking-[.18em] text-white/45 backdrop-blur-md">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="p-5">
              <p className="mono text-[9px] uppercase tracking-[.18em] text-white/30">{project.tags.slice(0, 3).join(" · ")}</p>
              <h2 className="mt-2 text-xl font-medium">{project.title}</h2>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/40">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
