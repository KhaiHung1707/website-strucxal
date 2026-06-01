import type { GradientKey } from "@/types/content";

/**
 * Five distinct SVG mockups used inside fan cards and case cards.
 * The variant maps 1:1 with the gradient key so each project has a
 * recognisable visual identity.
 */

interface CardArtProps {
  variant: GradientKey;
  viewBox?: string;
}

export function FanCardArt({ variant }: CardArtProps) {
  const fill = `url(#${variant})`;
  return (
    <svg viewBox="0 0 300 440" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="440" fill={fill} />
      {variant === "g1" && (
        <>
          <g opacity="0.28" fill="#0A0A0A">
            <rect x="22" y="44" width="200" height="22" rx="4" />
            <rect x="22" y="74" width="160" height="22" rx="4" />
            <rect x="22" y="160" width="256" height="180" rx="12" />
          </g>
          <text
            x="22"
            y="32"
            fill="#2A0E00"
            fontFamily="JetBrains Mono"
            fontSize="10"
            letterSpacing="1.5"
            fontWeight="500"
          >
            LANDING · 2026
          </text>
        </>
      )}
      {variant === "g2" && (
        <>
          <g opacity="0.22" fill="white">
            <rect x="22" y="60" width="100" height="24" rx="4" />
            <rect x="22" y="100" width="76" height="76" rx="8" />
            <rect x="112" y="100" width="76" height="76" rx="8" />
            <rect x="202" y="100" width="76" height="76" rx="8" />
            <rect x="22" y="194" width="256" height="180" rx="8" />
          </g>
          <circle cx="262" cy="80" r="32" fill="#FF6B35" opacity="0.85" />
        </>
      )}
      {variant === "g3" && (
        <g opacity="0.2" fill="white">
          <circle cx="150" cy="170" r="74" />
          <rect x="40" y="280" width="220" height="12" rx="3" />
          <rect x="80" y="304" width="140" height="12" rx="3" />
          <rect x="100" y="350" width="100" height="38" rx="19" />
        </g>
      )}
      {variant === "g4" && (
        <g opacity="0.24" fill="white">
          <rect x="22" y="44" width="124" height="170" rx="10" />
          <rect x="156" y="44" width="122" height="80" rx="10" />
          <rect x="156" y="134" width="122" height="80" rx="10" />
          <rect x="22" y="232" width="256" height="80" rx="10" />
        </g>
      )}
      {variant === "g5" && (
        <>
          <g opacity="0.32" stroke="white" strokeWidth="1" fill="none">
            <path d="M 0 270 Q 75 230 150 270 T 300 270" />
            <path d="M 0 305 Q 75 270 150 305 T 300 305" />
            <path d="M 0 340 Q 75 305 150 340 T 300 340" />
          </g>
          <circle cx="150" cy="140" r="50" fill="#FF6B35" opacity="0.8" />
        </>
      )}
    </svg>
  );
}

export function CaseCardArt({ variant }: CardArtProps) {
  const fill = `url(#${variant})`;
  return (
    <svg viewBox="0 0 480 380" preserveAspectRatio="xMidYMid slice">
      <rect width="480" height="380" fill={fill} />
      {variant === "g1" && (
        <g opacity="0.18" fill="#0A0A0A">
          <rect x="40" y="60" width="400" height="40" rx="6" />
          <rect x="40" y="120" width="280" height="14" rx="3" />
          <rect x="40" y="180" width="400" height="160" rx="10" />
        </g>
      )}
      {variant === "g2" && (
        <g opacity="0.2" fill="white">
          <rect x="40" y="80" width="100" height="80" rx="8" />
          <rect x="150" y="80" width="100" height="80" rx="8" />
          <rect x="260" y="80" width="100" height="80" rx="8" />
          <rect x="40" y="180" width="320" height="160" rx="8" />
        </g>
      )}
      {variant === "g3" && (
        <g opacity="0.18" fill="white">
          <circle cx="240" cy="160" r="80" />
          <rect x="100" y="260" width="280" height="14" rx="3" />
          <rect x="150" y="284" width="180" height="14" rx="3" />
        </g>
      )}
      {variant === "g4" && (
        <g opacity="0.22" fill="white">
          <rect x="40" y="60" width="180" height="220" rx="10" />
          <rect x="240" y="60" width="200" height="100" rx="10" />
          <rect x="240" y="170" width="200" height="110" rx="10" />
        </g>
      )}
      {variant === "g5" && (
        <>
          <g opacity="0.3" stroke="white" strokeWidth="1" fill="none">
            <path d="M 0 240 Q 120 200 240 240 T 480 240" />
            <path d="M 0 280 Q 120 240 240 280 T 480 280" />
          </g>
          <circle cx="240" cy="140" r="50" fill="#FF6B35" opacity="0.7" />
        </>
      )}
    </svg>
  );
}

export function ThumbCardArt({ variant }: CardArtProps) {
  const fill = `url(#${variant})`;
  return (
    <svg viewBox="0 0 380 280" preserveAspectRatio="xMidYMid slice">
      <rect width="380" height="280" fill={fill} />
      {variant === "g1" && (
        <g opacity="0.2" fill="#0A0A0A">
          <rect x="30" y="50" width="320" height="30" rx="6" />
          <rect x="30" y="100" width="200" height="14" rx="3" />
          <rect x="30" y="140" width="320" height="100" rx="10" />
        </g>
      )}
      {variant === "g2" && (
        <g opacity="0.25" fill="white">
          <rect x="30" y="50" width="80" height="60" rx="6" />
          <rect x="120" y="50" width="80" height="60" rx="6" />
          <rect x="210" y="50" width="80" height="60" rx="6" />
          <rect x="30" y="130" width="260" height="110" rx="6" />
        </g>
      )}
      {variant === "g3" && (
        <g opacity="0.22" fill="white">
          <circle cx="190" cy="120" r="55" />
          <rect x="80" y="200" width="220" height="14" rx="3" />
          <rect x="120" y="226" width="140" height="14" rx="3" />
        </g>
      )}
      {variant === "g4" && (
        <g opacity="0.24" fill="white">
          <rect x="30" y="40" width="140" height="200" rx="10" />
          <rect x="190" y="40" width="160" height="90" rx="10" />
          <rect x="190" y="150" width="160" height="90" rx="10" />
        </g>
      )}
      {variant === "g5" && (
        <>
          <g opacity="0.32" stroke="white" strokeWidth="1" fill="none">
            <path d="M 0 170 Q 95 130 190 170 T 380 170" />
            <path d="M 0 205 Q 95 165 190 205 T 380 205" />
          </g>
          <circle cx="190" cy="100" r="38" fill="#FF6B35" opacity="0.7" />
        </>
      )}
    </svg>
  );
}
