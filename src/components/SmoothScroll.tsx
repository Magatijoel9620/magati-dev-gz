"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const lenis = new Lenis({ smoothWheel: true, lerp: 0.08 });
    let frame = 0;
    let active = true;

    const raf = (time: number) => {
      if (!active) return;
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    const stopForReducedMotion = (event: MediaQueryListEvent) => {
      if (event.matches) {
        active = false;
        cancelAnimationFrame(frame);
        lenis.destroy();
      }
    };

    frame = requestAnimationFrame(raf);
    mediaQuery.addEventListener("change", stopForReducedMotion);

    return () => {
      active = false;
      cancelAnimationFrame(frame);
      mediaQuery.removeEventListener("change", stopForReducedMotion);
      lenis.destroy();
    };
  }, []);

  return null;
}
