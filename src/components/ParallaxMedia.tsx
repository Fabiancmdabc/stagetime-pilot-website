"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/** Bild bewegt sich langsamer als der Scroll — leichter Parallax. */
export function ParallaxMedia({
  children,
  speed = 0.28,
  className = "",
}: {
  children: ReactNode;
  /** 0 = klebt, 0.5 = halb so schnell wie Scroll */
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
      setOffset(progress * speed * 120);
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
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div style={style} className="scale-[1.12]">
        {children}
      </div>
    </div>
  );
}
