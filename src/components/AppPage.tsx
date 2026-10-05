"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { AppDefinition } from "@/lib/apps";

export default function AppPage({ app }: { app: AppDefinition }) {
  return (
    <main className="grid-noise min-h-screen pt-28">
      <div className="container py-12 md:py-20">
        <Link href="/apps" className="mono text-[10px] uppercase tracking-[.2em] text-white/35 hover:text-white">← Apps</Link>
        <section className="mt-8 grid items-end gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="eyebrow">{app.kicker}</p>
            <h1 className="display mt-4 max-w-4xl text-6xl font-semibold leading-[.86] md:text-8xl">{app.name}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">{app.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/${app.slug}/download`} className="rounded-full bg-[#f1f2ed] px-6 py-3 text-sm font-medium text-black">Download ↗</Link>
              <Link href={app.guideUrl} className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/70 hover:border-white/30 hover:text-white">User guide</Link>
              {app.webUrl && <a href={app.webUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/70 hover:border-white/30 hover:text-white">Open web app ↗</a>}
            </div>
          </div>
          <div className="relative aspect-[1.25] overflow-hidden rounded-[2rem] border border-white/10 bg-[#101213]">
            <Image src={app.image} alt={`${app.name} interface`} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" priority />
          </div>
        </section>

        <section className="mt-20 border-t border-white/10 pt-10">
          <div className="grid gap-10 md:grid-cols-[.55fr_1.45fr]">
            <div><p className="eyebrow">Built for the work</p><p className="mt-3 text-sm text-white/35">{app.version ? `Current release · ${app.version}` : app.platform}</p></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {app.features.map((feature, index) => (
                <motion.div key={feature} whileHover={{ x: 5 }} className="border-b border-white/10 py-4 text-sm text-white/65">
                  <span className="mono mr-4 text-[9px] text-white/25">{String(index + 1).padStart(2, "0")}</span>{feature}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-5 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#101213] p-6"><p className="eyebrow">Get the app</p><h2 className="mt-3 text-xl font-medium">Download the current build.</h2><Link href={`/${app.slug}/download`} className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm text-black">Download page ↗</Link></div>
          <div className="rounded-[1.5rem] border border-white/10 bg-[#101213] p-6"><p className="eyebrow">Learn</p><h2 className="mt-3 text-xl font-medium">Follow the setup and workflow.</h2><Link href={app.guideUrl} className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/75">Read guide ↗</Link></div>
          <div className="rounded-[1.5rem] border border-white/10 bg-[#101213] p-6"><p className="eyebrow">Portfolio</p><h2 className="mt-3 text-xl font-medium">See the project case study.</h2><Link href={`/projects/${app.slug}`} className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/75">Open project ↗</Link></div>
        </section>
      </div>
    </main>
  );
}
