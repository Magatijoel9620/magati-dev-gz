
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
        className="pointer-events-none absolute -right-40 -top-32 -z-10 h-120 w-136 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(215,255,101,.10),rgba(215,255,101,.035)_38%,transparent_72%)] blur-3xl"
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
              <Image
                src="/logo/logo.svg"
                alt="Hempon Group"
                width={170}
                height={56}
                className="h-auto w-36.25 invert sm:w-42.5"
                style={{ height: "auto" }}
                loading="eager"
              />

              <span className="text-[clamp(18px,2vw,24px)] font-semibold tracking-[.12em] text-white">
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
              className="ui-btn-text mt-7 inline-flex text-base text-white/70"
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
                  className="ui-btn-text"
                >
                  Selected work
                </Link>

                <Link
                  href="/services"
                  className="ui-btn-text"
                >
                  Capabilities
                </Link>

                <Link
                  href="/about"
                  className="ui-btn-text"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="ui-btn-text"
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
                    className="ui-btn-text"
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
            className="ui-btn-text"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
