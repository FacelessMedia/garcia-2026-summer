"use client";

import { useEffect, useState } from "react";

interface ConfettiProps {
  /** Toggles a confetti burst whenever this changes. */
  trigger: number;
  /** Number of pieces. Default 60. */
  count?: number;
}

const COLORS = ["#D8232A", "#1A2A3F", "#2C5C9C", "#F2B632", "#B3DDF2", "#A41C20"];

interface Piece {
  id: number;
  left: number;
  delay: number;
  color: string;
  drift: number;
  size: number;
}

/**
 * Fixed-position falling confetti.
 * Fires a burst whenever the `trigger` prop changes.
 */
export function Confetti({ trigger, count = 60 }: ConfettiProps) {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    if (trigger === 0) return;
    const next: Piece[] = Array.from({ length: count }).map((_, i) => ({
      id: trigger * 1000 + i,
      left: Math.random() * 100,
      delay: Math.random() * 250,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      drift: (Math.random() - 0.5) * 80,
      size: 6 + Math.random() * 8,
    }));
    setPieces(next);
    const t = setTimeout(() => setPieces([]), 2200);
    return () => clearTimeout(t);
  }, [trigger, count]);

  if (pieces.length === 0) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            backgroundColor: p.color,
            width: `${p.size}px`,
            height: `${p.size * 1.4}px`,
            animationDelay: `${p.delay}ms`,
            transform: `translateX(${p.drift}px)`,
          }}
        />
      ))}
    </div>
  );
}
