"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/** Bild bewegt sich langsamer als Text — ohne seitliches Abschneiden. */
export function ParallaxMedia({
  children,
  speed = 0.22,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = (vh / 2 - (rect.top + rect.height / 2)) / vh;
      setOffset(progress * speed * 80);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  const style: CSSProperties = {
    transform: `translate3d(0, ${offset}px, 0)`,
    willChange: "transform",
  };

  return (
    <div ref={ref} className={className}>
      <div style={style}>{children}</div>
    </div>
  );
}
