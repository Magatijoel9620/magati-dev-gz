import Image from "next/image";
import Link from "next/link";
import type { AppDefinition } from "@/lib/apps";

export default function AppDownloadPage({ app }: { app: AppDefinition }) {
  return (
    <main className="grid-noise min-h-screen pt-28">
      <div className="container py-12 md:py-20">
        <Link href={`/${app.slug}`} className="mono text-[10px] uppercase tracking-[.2em] text-white/35 hover:text-white">← Back to {app.name}</Link>
        <section className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow">Download · {app.platform}</p>
            <h1 className="display mt-4 max-w-4xl text-6xl font-semibold leading-[.86] md:text-8xl">Get {app.name}.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">Use the official Drive release supplied for this application. If your browser does not start the APK directly, open the Drive page and use its download control.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={app.downloadUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#d7ff65] px-6 py-3 text-sm font-medium text-black">Download APK ↗</a>
              <a href={app.driveUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/75">Open Google Drive ↗</a>
              <Link href={app.guideUrl} className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/75">Installation guide</Link>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[.03] p-4"><p className="eyebrow">Platform</p><p className="mt-2 text-sm text-white/70">{app.platform}</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[.03] p-4"><p className="eyebrow">Release</p><p className="mt-2 text-sm text-white/70">{app.version ?? "Current build"}</p></div>
            </div>
          </div>
          <div className="relative aspect-[1.2] overflow-hidden rounded-[2rem] border border-white/10 bg-[#101213]"><Image src={app.image} alt={`${app.name} download preview`} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" priority /></div>
        </section>

        <section className="mt-20 border-y border-white/10 py-12">
          <p className="eyebrow">Installation</p>
          <div className="mt-7 grid gap-3 md:grid-cols-4">
            {["Download the APK", "Open the downloaded file", "Allow installation if Android asks", `Launch ${app.name} and sign in`].map((step, index) => (
              <div key={step} className="rounded-[1.4rem] border border-white/10 bg-[#101213] p-5"><span className="mono text-[9px] text-[#d7ff65]/70">0{index + 1}</span><p className="mt-5 text-sm leading-6 text-white/65">{step}</p></div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-[#101213] p-7 md:p-10">
          <p className="eyebrow">Need help?</p>
          <h2 className="display mt-3 text-4xl font-semibold md:text-6xl">Use the guide before you install.</h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45">The guide covers the basic setup and workflow for the application.</p>
          <Link href={app.guideUrl} className="mt-7 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm text-white/75">Open user guide ↗</Link>
        </section>
      </div>
    </main>
  );
}
