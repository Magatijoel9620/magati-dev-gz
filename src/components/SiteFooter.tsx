import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  { label: "Selected work", href: "/#work" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/apps" },
  { label: "Insights", href: "/posts" },
  { label: "About Hempon", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Magatijoel9620" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/joel-magati-973972422/" },
  { label: "X", href: "https://x.com/hempon_group" },
  { label: "Instagram", href: "https://www.instagram.com/hempongroup/" },
  { label: "TikTok", href: "https://www.tiktok.com/@hempon.digital.so" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#08090a]">
      <div className="container py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
          <div>
            <Link href="/" aria-label="Hempon.dev home" className="inline-flex items-center gap-3">
              <span className="grid h-12 w-36 place-items-center overflow-hidden rounded-lg bg-white px-3 py-1.5">
                <Image src="/logo/logo.png" alt="" width={144} height={48} className="h-full w-full object-contain" />
              </span>
              <span className="text-sm font-semibold tracking-[.12em] text-white">HEMPON<span className="accent">.DEV</span></span>
            </Link>
            <p className="eyebrow mt-7">Digital solutions · Software · Technology</p>
            <h2 className="display mt-4 max-w-3xl text-4xl font-semibold leading-[.94] md:text-6xl">
              Practical technology.
              <br />
              <span className="text-white/25">Built for real work.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/45">
              Hempon Group designs and builds digital products, business systems and experiences that help organisations work smarter.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-[#d7ff65] px-5 py-3 text-sm font-semibold text-[#08090a] transition hover:bg-[#e5ff9a]"
              >
                Start a project ↗
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-10">
            <div>
              <p className="mono mb-5 text-[9px] uppercase tracking-[.2em] text-white/30">Explore</p>
              <div className="grid gap-4 text-sm text-white/55">
                {exploreLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="transition hover:text-[#d7ff65]">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="mono mb-5 text-[9px] uppercase tracking-[.2em] text-white/30">Connect</p>
              <div className="grid gap-4 text-sm text-white/55">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition hover:text-[#d7ff65]">
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 hairline" />

        <div className="grid gap-6 text-xs text-white/40 md:grid-cols-2">
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[.16em] text-white/25">Business enquiries</p>
            <a href="mailto:hempongroup@gmail.com" className="block text-sm text-white/75 transition hover:text-[#d7ff65]">hempongroup@gmail.com ↗</a>
            <p>For projects, partnerships, product enquiries and general business communication.</p>
          </div>
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[.16em] text-white/25">Founder & technical lead</p>
            <a href="mailto:magatijoel@gmail.com" className="block text-sm text-white/75 transition hover:text-[#d7ff65]">magatijoel@gmail.com ↗</a>
            <p>For direct founder correspondence and professional connections with Magati Joel.</p>
          </div>
        </div>

        <div className="my-8 hairline" />
        <div className="flex flex-col gap-3 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Hempon Group. All rights reserved.</span>
          <span>Kenya · Digital solutions and product development</span>
          <a href="#top" className="transition hover:text-white">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
