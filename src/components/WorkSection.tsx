
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/lib/data";

const featuredSlugs = [
  "farmora",
  "landlord-ledger",
  "flutter-invoice-app",
  "hempon-group-website",
  "kanyi-j-advocates-website",
  "config-driven-logistics-website-starter-kit",
  "fintrack-ai",
  "google-apps-script-automation",
  //"stayzen-accommodation-booking-app",
  "church-website-django",
  "building-devpilot-personal-productivity-app",
  "civicforge",
  "personal-portfolio",
];

const featured = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

export default function WorkSection() {
  return (
    <section id="work" className="container py-24 md:py-36">
      <div className="flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="display mt-3 max-w-3xl text-5xl font-semibold leading-[.92] md:text-7xl">
            Real products.
            <br />
            <span className="text-white/28">Real systems.</span>
          </h2>
        </div>

        <Link
          href="/projects"
          className="ui-btn-text inline-flex items-center gap-2 text-sm text-white/50"
        >
          Open the full archive <span>↗</span>
        </Link>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {featured.map((project, index) => {
          const isWide = index === 0 || index === 3;

          return (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: (index % 4) * 0.06, duration: 0.65 }}
              className={`group ${isWide ? "md:col-span-2" : ""}`}
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div
                  className={`relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#101213] ${
                    isWide
                      ? "aspect-[1.45/1] sm:aspect-[1.8/1] md:aspect-[2.5/1]"
                      : "aspect-[1.3]"
                  }`}
                >
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} — portfolio project`}
                    fill
                    sizes={isWide ? "90vw" : "50vw"}
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />

                  {/* Project classification */}
                  <div className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] truncate rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[8px] uppercase tracking-[.13em] text-white/65 backdrop-blur-md sm:left-5 sm:top-5 sm:px-3 sm:py-1.5 sm:text-[9px] sm:tracking-[.18em]">
                    {project.classification ?? "Selected project"}
                  </div>

                  {/* Responsive image overlay */}
                  <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2 sm:inset-x-5 sm:bottom-5 sm:gap-4 md:inset-x-7 md:bottom-7 md:gap-5">
                    <div className="min-w-0 flex-1">
                      <p className="mono truncate text-[7px] uppercase tracking-[.12em] text-white/50 sm:text-[8px] sm:tracking-[.16em] md:text-[9px] md:tracking-[.2em]">
                        {project.tags.slice(0, 3).join(" · ")}
                      </p>

                      <h3 className="mt-1.5 line-clamp-2 text-base font-medium leading-tight sm:mt-2 sm:text-xl md:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mt-1.5 hidden max-w-2xl text-sm leading-6 text-white/55 md:mt-2 md:block">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      <span className="hidden rounded-full border border-white/15 bg-black/30 px-3 py-2 text-[9px] uppercase tracking-[.12em] text-white/55 backdrop-blur-md sm:inline">
                        Case study
                      </span>

                      <span className="ui-btn-icon grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-black/35 text-sm sm:h-10 sm:w-10 sm:text-base md:h-11 md:w-11 md:text-lg">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-16 border-t border-white/10 pt-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mono text-[9px] uppercase tracking-[.22em] text-white/25">
              Portfolio archive
            </p>

            <p className="mt-2 text-sm text-white/45">
              {projects.length} documented projects, concepts and case studies.
            </p>
          </div>

          <Link
            href="/projects"
            className="ui-btn-secondary inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm text-white/70"
          >
            Explore every project <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
