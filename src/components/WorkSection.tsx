"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/lib/data";

const featuredSlugs = [
  "farmora",
  "landlord-ledger",
  "hempon-group-website",
  "config-driven-logistics-website-starter-kit",
  "flutter-invoice-app",
  "fintrack-ai",
  "google-apps-script-automation",
  "stayzen-accommodation-booking-app",
  "foodie-app-firebase",
  "flutter-expense-tracker",
  "ai-travel-planner",
  "real-time-chat-app",
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
            Real products.<br />
            <span className="text-white/28">Real systems.</span>
          </h2>
        </div>
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white">
          Open the full archive <span>↗</span>
        </Link>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {featured.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: (index % 4) * 0.06, duration: 0.65 }}
            className={`group ${index === 0 || index === 3 ? "md:col-span-2" : ""}`}
          >
            <Link href={`/projects/${project.slug}`} className="block">
              <div className={`relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#101213] ${index === 0 || index === 3 ? "aspect-[2/1] md:aspect-[2.5/1]" : "aspect-[1.3]"}`}>
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} — portfolio project`}
                  fill
                  sizes={index === 0 || index === 3 ? "90vw" : "50vw"}
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[9px] uppercase tracking-[.18em] text-white/55 backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5 md:inset-x-7 md:bottom-7">
                  <div className="min-w-0">
                    <p className="mono truncate text-[9px] uppercase tracking-[.2em] text-white/45">{project.tags.slice(0, 3).join(" · ")}</p>
                    <h3 className="mt-2 text-2xl font-medium md:text-4xl">{project.title}</h3>
                    <p className="mt-2 hidden max-w-2xl text-sm leading-6 text-white/55 md:block">{project.description}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2"><span className="hidden rounded-full border border-white/15 bg-black/30 px-3 py-2 text-[9px] uppercase tracking-[.12em] text-white/55 backdrop-blur-md sm:inline">Case study</span><span className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/30 text-lg transition group-hover:-translate-y-1 group-hover:bg-white group-hover:text-black">↗</span></div>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      <div className="mt-16 border-t border-white/10 pt-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mono text-[9px] uppercase tracking-[.22em] text-white/25">Portfolio archive</p>
            <p className="mt-2 text-sm text-white/45">{projects.length} documented projects, concepts and case studies.</p>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 transition hover:border-white/30 hover:bg-white/[.04] hover:text-white">
            Explore every project <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
