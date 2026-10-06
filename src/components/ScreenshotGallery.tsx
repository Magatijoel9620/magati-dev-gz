"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ScreenshotGallery({
  title,
  screenshots,
}: {
  title: string;
  screenshots: string[];
}) {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const previous = () =>
    setActive((current) =>
      current === null ? null : (current - 1 + screenshots.length) % screenshots.length,
    );
  const next = () =>
    setActive((current) =>
      current === null ? null : (current + 1) % screenshots.length,
    );

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {screenshots.map((src, index) => (
          <button
            key={`${src}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101213] text-left outline-none transition hover:-translate-y-1 hover:border-white/20 focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label={`Open ${title} screenshot ${index + 1} of ${screenshots.length}`}
          >
            <Image
              src={src}
              alt={`${title} screenshot ${index + 1}`}
              fill
              sizes="(max-width: 640px) 92vw, 45vw"
              className="object-cover transition duration-700 group-hover:scale-[1.035]"
            />
            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/75 via-black/20 to-transparent p-5 pt-14 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xs text-white/80">View full screenshot</span>
              <span className="mono text-[9px] text-white/45">
                {String(index + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}
              </span>
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-xl sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot gallery`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className="relative flex h-full w-full max-w-7xl flex-col justify-center">
            <div className="mb-3 flex items-center justify-between px-1 sm:mb-4 sm:px-2">
              <div>
                <p className="eyebrow">Screenshot gallery</p>
                <p className="mt-1 text-sm text-white/50">
                  {title} · {active + 1} / {screenshots.length}
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/[.06] text-xl text-white/75 transition hover:bg-white/10 hover:text-white"
                aria-label="Close screenshot gallery"
              >
                ×
              </button>
            </div>

            <div className="relative min-h-0 flex-1 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080909]">
              <Image
                src={screenshots[active]}
                alt={`${title} screenshot ${active + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />

              <button
                type="button"
                onClick={previous}
                className="absolute left-2 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/45 text-2xl text-white/80 backdrop-blur-md transition hover:bg-black/70 hover:text-white sm:left-5 sm:size-14"
                aria-label="Previous screenshot"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-2 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/45 text-2xl text-white/80 backdrop-blur-md transition hover:bg-black/70 hover:text-white sm:right-5 sm:size-14"
                aria-label="Next screenshot"
              >
                ›
              </button>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-16">
                <p className="text-xs text-white/45">
                  Use ← → to move · Esc to close · Swipe/tap arrows on mobile
                </p>
              </div>
            </div>

            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {screenshots.map((src, index) => (
                <button
                  key={`thumb-${src}-${index}`}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition sm:h-16 sm:w-24 ${
                    index === active ? "border-white/70" : "border-white/10 opacity-55 hover:opacity-90"
                  }`}
                  aria-label={`Show screenshot ${index + 1}`}
                >
                  <Image src={src} alt="" fill sizes="96px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
