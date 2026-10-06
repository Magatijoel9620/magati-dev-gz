"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { apps } from "@/lib/apps";

export default function AppShowcase() {
  return (
    <section id="apps" className="border-y border-white/10 bg-white/[.015]">
      <div className="container py-24 md:py-32">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Live products</p>
            <h2 className="display mt-3 max-w-4xl text-5xl font-semibold leading-[.9] md:text-7xl">
              The apps are not just case studies.
              <br />
              <span className="text-white/25">You can actually use them.</span>
            </h2>
          </div>
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white"
          >
            Open app hub <span>↗</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {apps.map((app, index) => (
            <motion.article
              key={app.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="group overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#101213]"
            >
              <Link href={`/${app.slug}`} className="block">
                <div className="relative aspect-[1.65] overflow-hidden border-b border-white/10">
                  <Image
                    src={app.image}
                    alt={`${app.name} application`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[9px] uppercase tracking-[.18em] text-white/60 backdrop-blur-md">
                    {app.kicker}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mono text-[9px] uppercase tracking-[.2em] text-[#d7ff65]/70">
                        {app.accent}
                      </p>
                      <h3 className="mt-2 text-2xl font-medium">{app.name}</h3>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-lg transition group-hover:bg-white group-hover:text-black">
                      ↗
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/45">
                    {app.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {app.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-white/10 px-2.5 py-1.5 text-[9px] uppercase tracking-[.1em] text-white/35"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
