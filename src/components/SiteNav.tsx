import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Work", href: "/#work", className: "hidden sm:inline-flex" },
  { label: "Insights", href: "/posts", className: "hidden md:inline-flex" },
  { label: "Products", href: "/apps", className: "inline-flex" },
  { label: "Services", href: "/services", className: "hidden xl:inline-flex" },
  { label: "About", href: "/about", className: "hidden lg:inline-flex" },
  { label: "Contact", href: "/contact", className: "hidden md:inline-flex" },
];

export default function SiteNav() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2">
      <div className="flex items-center justify-between gap-3 rounded-full border border-white/15 bg-[#101213]/85 px-3 py-2 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:px-4">
        <Link
          href="/"
          aria-label="Hempon.dev home"
          className="flex min-w-0 shrink-0 items-center gap-2.5"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full border border-white/15 bg-white p-1.5">
            <Image
              src="/logo/logo_round.png"
              alt=""
              width={36}
              height={36}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="hidden text-xs font-semibold tracking-[.08em] text-white sm:block">
            HEMPON<span className="accent">.DEV</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`${link.className} rounded-full px-2.5 py-2 text-[10px] uppercase tracking-[.12em] text-white/65 transition hover:bg-white/10 hover:text-white sm:px-3 sm:text-[11px]`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="/contact"
          className="shrink-0 rounded-full border border-[#d7ff65]/35 bg-[#d7ff65] px-3 py-2 text-[10px] font-semibold text-[#08090a] transition hover:bg-[#e5ff9a] sm:px-4 sm:text-xs"
        >
          <span className="sm:hidden">Enquire ↗</span>
          <span className="hidden sm:inline">Start a project ↗</span>
        </a>
      </div>
    </header>
  );
}
