"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  href?: string;
};

export default function MagneticButton({ children, href = "#work" }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 250, damping: 18 });
  const springY = useSpring(y, { stiffness: 250, damping: 18 });

  const handleMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (!ref.current || event.pointerType === "touch") return;

    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.22);
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.22);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-medium backdrop-blur-xl transition-colors hover:bg-white/10"
    >
      <span>{children}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        ↗
      </span>
    </motion.a>
  );
}
