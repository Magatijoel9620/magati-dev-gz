"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutFloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 480);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-[80] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
        className={`ui-btn-icon pointer-events-auto grid size-11 place-items-center rounded-full border border-white/15 bg-[#15191a]/95 text-lg text-white shadow-xl backdrop-blur focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${
          showBackToTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <span aria-hidden="true">↑</span>
      </button>

      <Link
        href="/contact"
        aria-label="Start a project enquiry"
        className="ui-btn-primary pointer-events-auto inline-flex min-h-12 items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[#08090a] shadow-[0_12px_36px_rgba(0,0,0,.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:px-5"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
        <span>Let’s talk</span>
      </Link>
    </div>
  );
}
