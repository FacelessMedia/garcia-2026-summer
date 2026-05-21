/**
 * Animated weather elements for the hero:
 * three drifting clouds at different speeds, a soft pulsing sun glow,
 * and a small bird silhouette flying across.
 *
 * All purely CSS-driven (see app/globals.css) so it stays smooth on mobile
 * and respects prefers-reduced-motion.
 */
export function WeatherFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Sun: warm soft glow up in the corner */}
      <div className="absolute right-[8%] top-[10%]">
        <div
          className="sun-glow h-44 w-44 rounded-full"
          style={{
            background:
              "radial-gradient(circle, #FFE9B0 0%, #FFD673 40%, transparent 75%)",
          }}
        />
      </div>

      {/* Three clouds drifting at different speeds */}
      <Cloud className="cloud cloud-1" width={140} />
      <Cloud className="cloud cloud-2" width={210} />
      <Cloud className="cloud cloud-3" width={170} />

      {/* A single bird gliding across the sky */}
      <div className="bird" style={{ top: "20%" }}>
        <Bird />
      </div>
    </div>
  );
}

function Cloud({ className, width }: { className?: string; width: number }) {
  return (
    <svg
      viewBox="0 0 200 80"
      width={width}
      height={(width * 80) / 200}
      className={className}
      fill="currentColor"
    >
      <path d="M 40 60 C 22 60 12 50 14 38 C 16 28 26 22 36 24 C 38 12 50 6 64 8 C 76 10 84 18 86 28 C 96 22 110 24 118 32 C 130 28 146 32 152 42 C 168 40 182 48 184 60 C 186 70 178 78 168 78 L 50 78 C 42 78 38 72 40 60 Z" />
    </svg>
  );
}

function Bird() {
  return (
    <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="#1A2A3F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 6 Q 5 1 9 6 Q 12 1 16 6 Q 18 4 21 6" />
    </svg>
  );
}
