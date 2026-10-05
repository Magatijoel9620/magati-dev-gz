import Link from "next/link";

const links = [
  { label: "Work", href: "/#work", className: "hidden sm:inline-flex" },
  { label: "Posts", href: "/posts", className: "inline-flex" },
  { label: "Apps", href: "/apps", className: "inline-flex" },
  { label: "Capabilities", href: "/#capabilities", className: "hidden xl:inline-flex" },
  { label: "About", href: "/about", className: "hidden lg:inline-flex" },
  { label: "Contact", href: "/#contact", className: "hidden md:inline-flex" },
];

export default function SiteNav() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2">
      <div className="flex items-center justify-between gap-3 rounded-full border border-white/15 bg-[#101213]/75 px-3 py-2 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:px-4">
        <Link href="/" aria-label="Magati.dev home" className="flex shrink-0 items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/[.07] text-xs font-bold">MJ</span>
          <span className="hidden text-xs font-medium tracking-tight sm:block">MAGATI<span className="accent">.DEV</span></span>
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className={`${link.className} rounded-full px-2.5 py-2 text-[10px] uppercase tracking-[.12em] text-white/65 transition hover:bg-white/10 hover:text-white sm:px-3 sm:text-[11px]`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <a href="mailto:magatijoel@gmail.com" className="shrink-0 rounded-full border border-white/15 bg-white/[.08] px-3 py-2 text-[10px] font-medium text-white transition hover:border-white/30 hover:bg-white/[.14] sm:px-4 sm:text-xs">
          <span className="sm:hidden">Talk ↗</span><span className="hidden sm:inline">Let&apos;s talk ↗</span>
        </a>
      </div>
    </header>
  );
}
