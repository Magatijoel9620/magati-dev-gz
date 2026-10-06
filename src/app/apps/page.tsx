import Image from "next/image";
import Link from "next/link";
import { apps } from "@/lib/apps";

export const metadata = {
  title: "Apps — Magati.dev",
  description: "Live applications built by Magati Joel.",
};

export default function AppsPage() {
  return (
    <main className="grid-noise min-h-screen pt-28">
      <div className="container py-12 md:py-20">
        <p className="eyebrow">Apps & products</p>
        <h1 className="display mt-4 max-w-5xl text-6xl font-semibold leading-[.86] md:text-8xl">
          Built things you can actually download.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">
          These are the product-facing pages that sit beside the portfolio case
          studies. Explore an app, read its guide, or go straight to its current
          release.
        </p>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {apps.map((app) => (
            <article
              key={app.slug}
              className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#101213]"
            >
              <Link href={`/${app.slug}`} className="group block">
                <div className="relative aspect-[1.55] overflow-hidden">
                  <Image
                    src={app.image}
                    alt={`${app.name} preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="eyebrow">{app.kicker}</p>
                  <h2 className="mt-2 text-2xl font-medium">{app.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {app.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white px-3 py-1.5 text-[10px] text-black">
                      Download
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/45">
                      Guide
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
