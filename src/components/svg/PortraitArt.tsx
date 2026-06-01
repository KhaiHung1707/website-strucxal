/**
 * SVG portrait placeholders for team members.
 * Five variants with distinct gradients — drop in until real headshots exist.
 */

export type PortraitVariant = "p1" | "p2" | "p3" | "p4" | "p5";

interface PortraitArtProps {
  variant: PortraitVariant;
  founder?: boolean;
}

const STOPS: Record<PortraitVariant, [string, string]> = {
  p1: ["#FF7E5F", "#C04A2D"],
  p2: ["#1A2332", "#3A5475"],
  p3: ["#0F4F38", "#1B7855"],
  p4: ["#5C2A4F", "#A03B5E"],
  p5: ["#7A5A2F", "#C09140"],
};

export function PortraitArt({ variant, founder = false }: PortraitArtProps) {
  const [start, end] = STOPS[variant];
  const opacity = variant === "p1" ? 0.3 : 0.22;
  const gradId = `portrait-${variant}`;
  return (
    <svg
      viewBox={founder ? "0 0 280 380" : "0 0 200 280"}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={start} />
          <stop offset="100%" stopColor={end} />
        </linearGradient>
      </defs>
      {founder ? (
        <>
          <rect width="280" height="380" fill={`url(#${gradId})`} />
          <circle cx="140" cy="150" r="62" fill="#0A0A0A" opacity={opacity} />
          <path
            d="M 60 280 Q 140 230 220 280 L 220 380 L 60 380 Z"
            fill="#0A0A0A"
            opacity={opacity}
          />
        </>
      ) : (
        <>
          <rect width="200" height="280" fill={`url(#${gradId})`} />
          <circle cx="100" cy="110" r="45" fill="white" opacity={opacity} />
          <path
            d="M 40 210 Q 100 170 160 210 L 160 280 L 40 280 Z"
            fill="white"
            opacity={opacity}
          />
        </>
      )}
    </svg>
  );
}
