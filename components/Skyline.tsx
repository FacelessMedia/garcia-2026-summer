interface SkylineProps {
  className?: string;
}

/**
 * Stylized Chicago skyline silhouette in SVG.
 * Loosely modeled on the lake-front view: Willis Tower, Aon Center,
 * 875 N. Michigan (Hancock), Trump Tower, Vista Tower, AT&T, 311 S Wacker.
 * Used as a decorative accent in the hero.
 */
export function Skyline({ className }: SkylineProps) {
  return (
    <svg
      viewBox="0 0 1200 220"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.0" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <path
        fill="url(#sky-fade)"
        d="
          M0,220 L0,170
          L40,170 L40,150 L70,150 L70,160 L100,160 L100,135 L120,135
          L120,120 L150,120 L150,130 L180,130 L180,100 L200,100 L200,85
          L210,85 L210,75 L225,75 L225,95 L255,95 L255,115 L285,115
          L285,90 L305,90 L305,60 L325,60 L325,40 L345,40 L345,55 L365,55
          L365,75 L390,75 L390,110 L420,110 L420,95 L455,95 L455,125
          L490,125 L490,80 L515,80 L515,55 L540,55 L540,30 L560,30
          L560,15 L580,15 L580,40 L605,40 L605,70 L630,70 L630,95 L660,95
          L660,75 L690,75 L690,110 L725,110 L725,80 L755,80 L755,65
          L780,65 L780,40 L800,40 L800,25 L820,25 L820,55 L850,55
          L850,90 L885,90 L885,70 L915,70 L915,100 L950,100 L950,75
          L985,75 L985,115 L1020,115 L1020,95 L1055,95 L1055,130
          L1085,130 L1085,150 L1120,150 L1120,140 L1155,140 L1155,160
          L1200,160 L1200,220 Z
        "
      />
      {/* Small antennas / spires */}
      <g stroke="currentColor" strokeWidth="2" opacity="0.85">
        <line x1="335" y1="40" x2="335" y2="20" />
        <line x1="570" y1="15" x2="570" y2="0" />
        <line x1="810" y1="25" x2="810" y2="8" />
      </g>
    </svg>
  );
}
