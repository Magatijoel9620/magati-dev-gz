
import Image from "next/image";
import Link from "next/link";

const socials = [
  ["GitHub", "https://github.com/Magatijoel9620"],
  ["LinkedIn", "https://www.linkedin.com/in/joel-magati-973972422/"],
  ["X", "https://x.com/hempon_group"],
  ["Instagram", "https://www.instagram.com/hempongroup/"],
];

export default function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#08090a]">
      {/* Subtle lime glow from the right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[-8rem] -z-10 h-[30rem] w-[34rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(215,255,101,.10),rgba(215,255,101,.035)_38%,transparent_72%)] blur-3xl"
      />

      <div className="container py-16 md:py-24">
        <div className="grid justify-items-center gap-12 text-center lg:grid-cols-[1.2fr_.8fr] lg:items-start lg:justify-items-stretch lg:gap-14 lg:text-left">
          {/* Brand and introduction */}
          <div className="flex flex-col items-center lg:items-start">
            <Link
              href="/"
              aria-label="Hempon.dev home"
              className="inline-flex items-center gap-3"
            >
              <span className="grid h-12 w-36 place-items-center overflow-hidden rounded-lg bg-white px-3 py-1.5">
                <Image
                  src="/logo/logo.png"
                  alt=""
                  width={144}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </span>

              <span className="text-sm font-semibold tracking-[.12em] text-white">
                HEMPON<span className="accent">.DEV</span>
              </span>
            </Link>

            <p className="eyebrow mt-7">
              HEMPON.DEV · By Magati Joel
            </p>

            <h2 className="display mt-4 max-w-3xl text-4xl font-semibold leading-[.92] md:text-7xl">
              Useful software.
              <br />
              <span className="text-white/25">
                Built with intention.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/48">
              A digital portfolio from Hempon Group — bringing
              together practical software, thoughtful design and technology
              that solves real problems.
            </p>

            <a
              href="mailto:hempongroup@gmail.com"
              className="mt-7 inline-flex text-base text-white/70 transition hover:text-white"
            >
              hempongroup@gmail.com ↗
            </a>
          </div>

          {/* Navigation and social links */}
          <div className="grid w-full max-w-md grid-cols-2 gap-10 text-center text-sm lg:max-w-none lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <p className="mono mb-4 text-[9px] uppercase tracking-[.2em] text-white/35">
                Explore
              </p>

              <div className="grid justify-items-center gap-3 text-white/60 lg:justify-items-start">
                <Link
                  href="/#work"
                  className="transition hover:text-white"
                >
                  Selected work
                </Link>

                <Link
                  href="/services"
                  className="transition hover:text-white"
                >
                  Capabilities
                </Link>

                <Link
                  href="/about"
                  className="transition hover:text-white"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="transition hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <p className="mono mb-4 text-[9px] uppercase tracking-[.2em] text-white/35">
                Connect
              </p>

              <div className="grid justify-items-center gap-3 text-white/60 lg:justify-items-start">
                {socials.map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    {name} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="my-12 hairline" />

        {/* Copyright and secondary navigation */}
        <div className="flex flex-col items-center gap-3 text-center text-xs text-white/35 lg:flex-row lg:justify-between lg:text-left">
          <span>
            © {new Date().getFullYear()} Hempon Group. All rights reserved.
          </span>

          <span>Kenya · digital products &amp; development</span>

          <a
            href="#top"
            className="transition hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
