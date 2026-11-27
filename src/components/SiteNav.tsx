"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Work", href: "/#work", className: "hidden sm:inline-flex" },
  { label: "Insights", href: "/posts", className: "hidden md:inline-flex" },
  { label: "Products", href: "/apps", className: "inline-flex" },
  { label: "Services", href: "/services", className: "hidden xl:inline-flex" },
  { label: "About", href: "/about", className: "hidden lg:inline-flex" },
  { label: "Contact", href: "/contact", className: "hidden md:inline-flex" },
];

const mobileLinks = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Products", href: "/apps" },
  { label: "Insights", href: "/posts" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 mx-auto mb-0 w-[calc(100%-1.5rem)] max-w-6xl pt-3 sm:w-[calc(100%-2rem)]">
      <div className="flex items-center justify-between gap-2 rounded-full border border-white/12 bg-[#08090a]/55 px-3 py-2 shadow-xl shadow-black/20 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#08090a]/40 sm:gap-3 sm:px-4">
        <Link
          href="/"
          aria-label="HEMPON.DEV home"
          onClick={() => setMenuOpen(false)}
          className="flex min-w-0 shrink-0 items-center gap-2.5"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full border border-white/15 bg-[#08090a] p-1.5">
            <Image src="/logo/logo_round.png" alt="" width={36} height={36} className="h-full w-full object-contain" />
          </span>
          <span className="block text-[clamp(15px,2vw,18px)] font-semibold tracking-[.08em] text-white">
            HEMPON<span className="accent">.DEV</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex lg:gap-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`${link.className} ui-btn-text rounded-full px-2.5 py-2 text-[10px] uppercase tracking-[.12em] text-white/75 sm:px-3 sm:text-[11px]`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Link href="/contact" className="ui-btn-primary rounded-full border border-[#d7ff65]/35 bg-[#d7ff65] px-3 py-2 text-[10px] font-semibold text-[#08090a] sm:px-4 sm:text-xs">
            <span className="lg:hidden">Enquire ↗</span>
            <span className="hidden lg:inline">Start a project ↗</span>
          </Link>
          <button
            type="button"
            className="ui-btn-icon grid size-10 place-items-center rounded-full border border-white/15 text-white lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-site-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" className="text-xl leading-none">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-site-navigation" aria-label="Mobile navigation" className="mt-2 rounded-3xl border border-white/12 bg-[#08090a]/75 p-3 shadow-2xl shadow-black/35 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#08090a]/60 lg:hidden">
          <div className="grid grid-cols-2 gap-1">
            {mobileLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
