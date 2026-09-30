"use client";

import { useEffect, useState } from "react";

/** Scharfer Hero-Countdown (kein Bitmap). */
export function HeroTimer({ startSeconds = 5 * 60 }: { startSeconds?: number }) {
  const [seconds, setSeconds] = useState(startSeconds);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSeconds((s) => (s <= 0 ? startSeconds : s - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [startSeconds]);

  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const label = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden pr-[4%] sm:pr-[8%]"
    >
      <div className="relative translate-x-[6%] select-none sm:translate-x-0">
        <div
          className="absolute inset-0 blur-3xl animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, rgba(245,185,66,0.28), transparent 60%)",
          }}
        />
        <p className="hero-timer-digits relative font-[family-name:var(--font-display)] font-extrabold tabular-nums tracking-tight text-amber/25">
          {label}
        </p>
      </div>
    </div>
  );
}
