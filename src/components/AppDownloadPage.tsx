import Image from "next/image";
import Link from "next/link";
import type { AppDefinition } from "@/lib/apps";

export default function AppDownloadPage({ app }: { app: AppDefinition }) {
  const hasPWA = Boolean(app.webUrl);

  return (
    <main className="grid-noise min-h-screen pt-28">
      <div className="container py-12 md:py-20">
        <Link
          href={`/${app.slug}`}
          className="mono text-[10px] uppercase tracking-[.2em] text-white/35 transition hover:text-white"
        >
          ← Back to {app.name}
        </Link>

        <section className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow">Official download · {app.platform}</p>
            <h1 className="display mt-4 max-w-4xl text-6xl font-semibold leading-[.86] md:text-8xl">
              Get {app.name}.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">
              Download the latest Android release from the official Hempon
              Group release page, or use the web app on a supported device.
            </p>

            <div className={`mt-8 grid gap-3 ${hasPWA ? "sm:grid-cols-2" : "sm:max-w-sm"}`}>
              <a
                href={app.downloadUrl}
                className="group rounded-[1.4rem] bg-[#d7ff65] p-5 text-black transition hover:-translate-y-1 hover:bg-[#e2ff91]"
              >
                <span className="mono text-[9px] uppercase tracking-[.18em] opacity-60">01 · Android</span>
                <span className="mt-3 block text-lg font-semibold">Download APK ↓</span>
                <span className="mt-1 block text-xs opacity-65">Latest Release</span>
              </a>

              {hasPWA && (
                <a
                  href={app.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[1.4rem] border border-white/15 bg-white/[.04] p-5 text-white transition hover:-translate-y-1 hover:border-white/30"
                >
                  <span className="mono text-[9px] uppercase tracking-[.18em] text-white/40">02 · Web app</span>
                  <span className="mt-3 block text-lg font-medium">Open web app ↗</span>
                  <span className="mt-1 block text-xs text-white/45">No APK required</span>
                </a>
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-3">
              {app.projectSlug && (
                <Link
                  href={`/projects/${app.projectSlug}`}
                  className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/75 transition hover:border-white/30 hover:text-white"
                >
                  Explore the project ↗
                </Link>
              )}
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[.03] p-4">
                <p className="eyebrow">Platform</p>
                <p className="mt-2 text-sm text-white/75">{app.platform}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[.03] p-4">
                <p className="eyebrow">Current version</p>
                <p className="mt-2 text-sm text-white/75">{app.version ?? "Latest release"}</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[1.2] overflow-hidden rounded-[2rem] border border-white/10 bg-[#101213]">
            <Image
              src={app.image}
              alt={`${app.name} app preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-16">
              <p className="text-sm font-medium text-white">{app.name}</p>
              <p className="mt-1 text-xs text-white/65">Official Hempon Group release</p>
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-4 md:grid-cols-[.8fr_1.2fr]">
          <div className="rounded-[1.7rem] border border-white/10 bg-[#101213] p-6 md:p-8">
            <p className="eyebrow">Before you download</p>
            <h2 className="mt-3 text-xl font-medium text-white">Use the official release.</h2>
            <p className="mt-3 text-sm leading-7 text-white/50">
              This APK is provided through the official Hempon Group release
              page. Check the current version above before installing.
            </p>
          </div>
          <div className="rounded-[1.7rem] border border-white/10 bg-white/[.025] p-6 md:p-8">
            <p className="eyebrow">Android quick start</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Download", "Tap Download APK and wait for the file to finish."],
                ["02", "Open", "Open the downloaded APK and review Android’s prompts."],
                ["03", "Launch", `Finish installation, then open ${app.name}.`],
              ].map(([number, title, body]) => (
                <div key={number}>
                  <span className="mono text-[9px] text-[#d7ff65]/75">{number}</span>
                  <h3 className="mt-2 text-sm font-medium text-white">{title}</h3>
                  <p className="mt-1 text-xs leading-6 text-white/45">{body}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-6 text-white/40">
              Android may ask permission to install apps from your browser. Only
              continue if you intended to download this release and trust its source.
            </p>
          </div>
        </section>

        {hasPWA && (
          <section className="mt-14 border-y border-white/10 py-12">
            <p className="eyebrow">Web app option</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <h2 className="display text-4xl font-semibold md:text-6xl">
                  Use it without an APK.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
                  Open the official web address and sign in. On supported devices,
                  you can add the site to your home screen for an app-like experience.
                </p>
                <a
                  href={app.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-[#d7ff65]"
                >
                  Open {app.name} web app ↗
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "Open website", "Visit the official web app in a supported browser."],
                  ["02", "Add to home", "Choose Install app or Add to Home screen if available."],
                  ["03", "Launch", "Open it from your home screen or app launcher."],
                ].map(([number, title, body]) => (
                  <div key={number} className="rounded-[1.4rem] border border-white/10 bg-[#101213] p-5">
                    <span className="mono text-[9px] text-[#d7ff65]/70">{number}</span>
                    <h3 className="mt-5 text-sm font-medium">{title}</h3>
                    <p className="mt-2 text-xs leading-6 text-white/45">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="mt-14 flex flex-col gap-4 rounded-[1.7rem] border border-white/10 p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
          <div>
            <p className="eyebrow">Need more details?</p>
            <h2 className="mt-3 text-xl font-medium text-white">Explore {app.name}.</h2>
            <p className="mt-2 max-w-xl text-sm leading-7 text-white/50">
              Learn about the features, intended workflows and the wider project.
            </p>
          </div>
          <Link
            href={`/projects/${app.projectSlug ?? app.slug}`}
            className="inline-flex shrink-0 rounded-full border border-white/15 px-5 py-3 text-sm text-white/80 transition hover:border-white/30 hover:text-white"
          >
            View project details ↗
          </Link>
        </section>
      </div>
    </main>
  );
}
