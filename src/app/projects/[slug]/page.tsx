import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { getAppByProjectSlug } from "@/lib/apps";
import ScreenshotGallery from "@/components/ScreenshotGallery";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found | Hempon.dev" };
  return {
    title: `${project.title} | Projects | Hempon.dev`,
    description: project.description,
    openGraph: { title: project.title, description: project.description, images: [project.imageUrl] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const app = getAppByProjectSlug(slug);
  const externalLink = project.liveUrl || app?.webUrl;
  const isInternalLink = externalLink?.startsWith("/");

  return (
    <main className="container max-w-6xl py-12 md:py-20">
      <Link href="/projects" className="text-xs uppercase tracking-[.18em] text-white/35 hover:text-white">← Projects & case studies</Link>
      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_.75fr] lg:items-end">
        <div>
          <p className="eyebrow">{project.classification ?? project.tags.slice(0, 4).join(" · ")}</p>
          <h1 className="display mt-4 text-5xl font-semibold leading-[.9] sm:text-7xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 lg:justify-end">
          {project.tags.filter(Boolean).map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[.12em] text-white/45">{tag}</span>)}
        </div>
      </div>

      <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/10 bg-[#101213]">
        <Image src={project.imageUrl} alt={`${project.title} project preview`} fill priority sizes="(max-width: 1024px) 92vw, 80vw" className="object-cover" />
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_.62fr]">
        <div className="space-y-8">
          <section>
            <p className="eyebrow">Project overview</p>
            <p className="mt-4 whitespace-pre-line text-base leading-8 text-white/60">{project.longDescription}</p>
          </section>
          <section className="border-t border-white/10 pt-7">
            <p className="eyebrow">Implementation areas</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.tags.filter(Boolean).map((tag) => (
                <div key={tag} className="flex items-center gap-3 border-b border-white/10 py-3 text-sm text-white/65">
                  <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-[#d7ff65]/65" />{tag}
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="h-fit rounded-[1.6rem] border border-white/10 bg-[#101213] p-6 md:p-7">
          <p className="eyebrow">Project details</p>
          <div className="mt-5 space-y-5">
            <div>
              <p className="text-[10px] uppercase tracking-[.16em] text-white/30">Project type</p>
              <p className="mt-1 text-sm text-white/80">{project.classification ?? "Portfolio project"}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[.16em] text-white/30">Technology & scope</p>
              <p className="mt-1 text-sm leading-6 text-white/65">{project.tags.filter(Boolean).slice(0, 5).join(" · ")}</p>
            </div>
            {project.evidenceNote && (
              <div className="border-t border-white/10 pt-5">
                <p className="text-[10px] uppercase tracking-[.16em] text-white/30">Reference note</p>
                <p className="mt-2 text-sm leading-6 text-white/55">{project.evidenceNote}</p>
              </div>
            )}
          </div>
          <div className="mt-7 flex flex-col gap-3">
            {externalLink && (
              <a href={externalLink} target={isInternalLink ? undefined : "_blank"} rel={isInternalLink ? undefined : "noreferrer"} className="ui-btn-primary inline-flex justify-center rounded-full bg-[#f1f2ed] px-5 py-3 text-sm font-medium text-black">
                {project.classification?.includes("concept") || project.classification?.includes("Demo") ? "Open demo / reference ↗" : "Open listed experience ↗"}
              </a>
            )}
            {app && (
              <Link href={`/${app.slug}`} className="ui-btn-secondary inline-flex justify-center rounded-full border border-white/15 px-5 py-3 text-sm text-white/75">Explore {app.name} product ↗</Link>
            )}
            <a href={`mailto:hempongroup@gmail.com?subject=${encodeURIComponent(`Enquiry about a project like ${project.title}`)}`} className="ui-btn-secondary inline-flex justify-center rounded-full border border-white/15 px-5 py-3 text-sm text-white/75">Discuss a similar project ↗</a>
          </div>
          <p className="mt-5 text-[11px] leading-5 text-white/30">Project descriptions and visuals are provided as portfolio references. No performance figures or business outcomes are implied unless stated.</p>
        </aside>
      </div>

      {project.screenshots.length > 0 && (
        <section className="mt-20 border-t border-white/10 pt-10">
          <p className="eyebrow">Visual references · tap to expand</p>
          <ScreenshotGallery title={project.title} screenshots={project.screenshots} />
        </section>
      )}
    </main>
  );
}
