import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { getApp } from "@/lib/apps";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const app = getApp(slug);

  return (
    <main className="container max-w-6xl py-12 md:py-20">
      <Link href="/projects" className="text-xs uppercase tracking-[.18em] text-white/35 hover:text-white">← Project archive</Link>
      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_.75fr] lg:items-end">
        <div>
          <p className="eyebrow">{project.tags.slice(0, 4).join(" · ")}</p>
          <h1 className="display mt-4 text-5xl font-semibold leading-[.9] sm:text-7xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 lg:justify-end">
          {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[.12em] text-white/40">{tag}</span>)}
        </div>
      </div>

      <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/10 bg-[#101213]">
        <Image src={project.imageUrl} alt={project.title} fill priority sizes="(max-width: 1024px) 92vw, 80vw" className="object-cover" />
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_.72fr]">
        <div className="space-y-6 text-base leading-8 text-white/55">
          <p>{project.longDescription}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          {project.liveUrl && (
            <a href={project.liveUrl} target={project.liveUrl.startsWith("/") ? undefined : "_blank"} rel={project.liveUrl.startsWith("/") ? undefined : "noreferrer"} className="inline-flex items-center gap-3 rounded-full bg-[#f1f2ed] px-6 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5">
              Open project ↗
            </a>
          )}
          {app && (
            <Link href={`/${app.slug}`} className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm text-white/75 transition hover:border-white/30 hover:text-white">
              Product page ↗
            </Link>
          )}
        </div>
      </div>

      {project.screenshots.length > 0 && (
        <section className="mt-20">
          <p className="eyebrow">Screenshots</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {project.screenshots.map((src, index) => (
              <div key={`${src}-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101213]">
                <Image src={src} alt={`${project.title} screenshot ${index + 1}`} fill sizes="(max-width: 640px) 92vw, 45vw" className="object-cover transition duration-700 hover:scale-[1.02]" />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
