interface ChicagoStarProps {
  className?: string;
  size?: number;
}

/**
 * Six-point star, the same shape that appears on the Chicago city flag.
 * Two overlapping equilateral triangles forming a hexagram.
 */
export function ChicagoStar({ className, size = 24 }: ChicagoStarProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <polygon points="50,5 60.825,38.175 95,38.175 67.5,58.65 78.325,91.825 50,71.35 21.675,91.825 32.5,58.65 5,38.175 39.175,38.175" />
    </svg>
  );
}
