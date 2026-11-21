"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useEffect } from "react";

export default function CursorGlow() {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 120, damping: 25, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 120, damping: 25, mass: 0.5 });

  useEffect(() => {
    if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) return;

    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [prefersReducedMotion, x, y]);

  if (prefersReducedMotion) return null;

  return (
    <>
      <motion.div aria-hidden="true" style={{ x: springX, y: springY }} className="pointer-events-none fixed left-0 top-0 z-40 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl md:block" />
      <motion.div aria-hidden="true" style={{ x: springX, y: springY }} className="pointer-events-none fixed left-0 top-0 z-40 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_24px_8px_rgba(255,255,255,0.25)] md:block" />
    </>
  );
}
