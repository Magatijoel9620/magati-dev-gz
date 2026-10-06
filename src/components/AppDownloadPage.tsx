import Image from "next/image";
import Link from "next/link";
import type { AppDefinition } from "@/lib/apps";

export default function AppDownloadPage({ app }: { app: AppDefinition }) {
  const hasPWA = Boolean(app.webUrl);

  return (
    <main className="grid-noise min-h-screen pt-28">
      <div className="container py-12 md:py-20">
        <Link href={`/${app.slug}`} className="mono text-[10px] uppercase tracking-[.2em] text-white/35 hover:text-white">
          ← Back to {app.name}
        </Link>

        <section className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow">Download · {app.platform}</p>
            <h1 className="display mt-4 max-w-4xl text-6xl font-semibold leading-[.86] md:text-8xl">
              Get {app.name}.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">
              Choose the platform that fits your device. Android users can install
              the APK; supported devices can also use the web app as a PWA.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href={app.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[1.4rem] bg-[#d7ff65] p-5 text-black transition hover:-translate-y-1"
              >
                <span className="mono text-[9px] uppercase tracking-[.18em] opacity-55">01 · Android</span>
                <span className="mt-3 block text-lg font-medium">Download APK ↗</span>
                <span className="mt-1 block text-xs opacity-60">Google Drive release</span>
              </a>

              {hasPWA ? (
                <a
                  href={app.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[1.4rem] border border-white/15 bg-white/[.04] p-5 text-white transition hover:-translate-y-1 hover:border-white/30"
                >
                  <span className="mono text-[9px] uppercase tracking-[.18em] text-white/35">02 · PWA / Web</span>
                  <span className="mt-3 block text-lg font-medium">Open web app ↗</span>
                  <span className="mt-1 block text-xs text-white/40">Install it from your browser</span>
                </a>
              ) : (
                <Link
                  href={app.guideUrl}
                  className="rounded-[1.4rem] border border-white/15 bg-white/[.04] p-5 text-white transition hover:-translate-y-1 hover:border-white/30"
                >
                  <span className="mono text-[9px] uppercase tracking-[.18em] text-white/35">02 · Setup</span>
                  <span className="mt-3 block text-lg font-medium">Installation guide ↗</span>
                  <span className="mt-1 block text-xs text-white/40">Step-by-step setup</span>
                </Link>
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={app.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 hover:border-white/30 hover:text-white"
              >
                Open Google Drive ↗
              </a>
              <Link
                href={app.guideUrl}
                className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 hover:border-white/30 hover:text-white"
              >
                Installation guide ↗
              </Link>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[.03] p-4">
                <p className="eyebrow">Platform</p>
                <p className="mt-2 text-sm text-white/70">{app.platform}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[.03] p-4">
                <p className="eyebrow">Release</p>
                <p className="mt-2 text-sm text-white/70">{app.version ?? "Current build"}</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[1.2] overflow-hidden rounded-[2rem] border border-white/10 bg-[#101213]">
            <Image
              src={app.image}
              alt={`${app.name} download preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section className="mt-14 rounded-[1.7rem] border border-amber-300/20 bg-amber-200/[.045] p-6 md:p-8">
          <p className="eyebrow text-amber-200/65">Google Drive download notice</p>
          <h2 className="mt-3 text-xl font-medium text-white">The APK is delivered through Drive.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/50">
            If tapping Download opens a Drive preview instead of downloading the file,
            use the Drive download button. On Android, your browser may ask for
            permission to install an app from that browser. Allow it only when prompted
            for this trusted release, complete the installation, then disable that
            permission again if you do not want to keep it enabled.
          </p>
        </section>

        {hasPWA && (
          <section className="mt-14 border-y border-white/10 py-12">
            <p className="eyebrow">PWA option</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <h2 className="display text-4xl font-semibold md:text-6xl">
                  Use it without an APK.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/45">
                  Open the official web address, sign in, then install the site from
                  your browser. The result behaves like an app with its own launcher
                  entry and standalone window on supported devices.
                </p>
                <a
                  href={app.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
                >
                  Open {app.name} web app ↗
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "Open website", "Use the official web app link above in Chrome, Edge or another supported browser."],
                  ["02", "Install", "Choose Install app / Add to Home screen from the browser menu when offered."],
                  ["03", "Launch", "Open it from your home screen or app launcher like a normal installed web app."],
                ].map(([number, title, body]) => (
                  <div key={number} className="rounded-[1.4rem] border border-white/10 bg-[#101213] p-5">
                    <span className="mono text-[9px] text-[#d7ff65]/70">{number}</span>
                    <h3 className="mt-5 text-sm font-medium">{title}</h3>
                    <p className="mt-2 text-xs leading-6 text-white/40">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="mt-16 border-y border-white/10 py-12">
          <p className="eyebrow">Android installation</p>
          <div className="mt-7 grid gap-3 md:grid-cols-4">
            {[
              "Download the APK from Drive",
              "Open the downloaded file",
              "Allow installation if Android asks",
              `Launch ${app.name} and sign in`,
            ].map((step, index) => (
              <div key={step} className="rounded-[1.4rem] border border-white/10 bg-[#101213] p-5">
                <span className="mono text-[9px] text-[#d7ff65]/70">0{index + 1}</span>
                <p className="mt-5 text-sm leading-6 text-white/65">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-[#101213] p-7 md:p-10">
          <p className="eyebrow">Need help?</p>
          <h2 className="display mt-3 text-4xl font-semibold md:text-6xl">
            Use the guide before you install.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45">
            The guide covers the basic setup and workflow for the application.
          </p>
          <Link href={app.guideUrl} className="mt-7 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm text-white/75">
            Open user guide ↗
          </Link>
        </section>
      </div>
    </main>
  );
}
