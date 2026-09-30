"use client";

import { useEffect, useState } from "react";

function format(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/** Live-Countdown für Device-Mockups. */
export function LiveCountdown({
  startSeconds = 60,
  className = "",
}: {
  startSeconds?: number;
  className?: string;
}) {
  const [seconds, setSeconds] = useState(startSeconds);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSeconds((s) => (s <= 0 ? startSeconds : s - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [startSeconds]);

  return (
    <span className={`tabular-nums ${className}`}>{format(seconds)}</span>
  );
}
