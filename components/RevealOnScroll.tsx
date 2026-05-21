"use client";

import { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  /** Pixels of offset before triggering. Default: 80 */
  offset?: number;
}

/**
 * Adds a subtle fade-up animation when the wrapped content scrolls into view.
 * Uses IntersectionObserver and toggles the `is-visible` class.
 * Falls back to immediately visible on browsers without the API and respects
 * prefers-reduced-motion (handled in globals.css).
 */
export function RevealOnScroll({ children, offset = 80 }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: `0px 0px -${offset}px 0px`, threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [offset]);

  return (
    <div ref={ref} className={`reveal-section ${visible ? "is-visible" : ""}`}>
      {children}
    </div>
  );
}
