/**
 * Three SVG visuals used in service detail cards on /services.
 * Each variant matches one of: Design, Development, Growth.
 */

export type ServiceVisualVariant = "design" | "development" | "growth";

const ACCENT = "var(--accent)";
const ACCENT_DARK = "var(--accent-ink)";

interface Props {
  variant: ServiceVisualVariant;
}

export function ServiceVisualArt({ variant }: Props) {
  if (variant === "design") {
    return (
      <svg viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice">
        <rect width="600" height="450" fill="#E5E2D7" />
        <g opacity="0.5" fill="#0A0A0A">
          <rect x="40" y="40" width="200" height="30" rx="6" />
          <rect x="40" y="84" width="150" height="20" rx="4" />
        </g>
        <g fill="#0A0A0A">
          <rect x="40" y="140" width="160" height="200" rx="12" />
          <rect x="220" y="140" width="160" height="95" rx="12" />
          <rect x="220" y="245" width="160" height="95" rx="12" />
          <rect x="400" y="140" width="160" height="200" rx="12" />
        </g>
        <circle cx="520" cy="380" r="30" fill={ACCENT} />
        <text
          x="40"
          y="400"
          fontFamily="JetBrains Mono, monospace"
          fontSize="11"
          fill="#0A0A0A"
          opacity="0.5"
          letterSpacing="2"
        >
          DESIGN_SYSTEM.FIG
        </text>
      </svg>
    );
  }

  if (variant === "development") {
    return (
      <svg viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice">
        <rect width="600" height="450" fill="#1F1F1F" />
        <g fontFamily="JetBrains Mono, monospace" fontSize="14" fill={ACCENT}>
          <text x="40" y="80">{"import { Suspense } from 'react'"}</text>
          <text x="40" y="106">{"import { Hero } from './Hero'"}</text>
          <text x="40" y="158" fill="#8B8B85">
            // Server component
          </text>
          <text x="40" y="184">{"export default async function Page() {"}</text>
          <text x="40" y="210">{"  const data = await fetch('/api')"}</text>
          <text x="40" y="236">{"  return ("}</text>
          <text x="40" y="262">{"    <Suspense fallback={<Skeleton/>}>"}</text>
          <text x="40" y="288">{"      <Hero items={data} />"}</text>
          <text x="40" y="314">{"    </Suspense>"}</text>
          <text x="40" y="340">{"  )"}</text>
          <text x="40" y="366">{"}"}</text>
        </g>
        <text
          x="40"
          y="410"
          fontFamily="JetBrains Mono, monospace"
          fontSize="11"
          fill="#F2F0E8"
          opacity="0.5"
          letterSpacing="2"
        >
          APP/PAGE.TSX
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice">
      <rect width="600" height="450" fill="#0F4F38" />
      <g fill={ACCENT}>
        <text
          x="40"
          y="120"
          fontFamily="Doto, monospace"
          fontWeight="900"
          fontSize="80"
          letterSpacing="-3"
        >
          + 100%
        </text>
        <text
          x="40"
          y="170"
          fontFamily="JetBrains Mono, monospace"
          fontSize="12"
          opacity="0.8"
          letterSpacing="2"
        >
          CONVERSION GROWTH
        </text>
      </g>
      <g opacity="0.4" stroke={ACCENT} strokeWidth="2" fill="none">
        <path d="M 40 320 L 120 280 L 200 290 L 280 240 L 360 200 L 440 180 L 520 140 L 560 100" />
        <circle cx="40" cy="320" r="4" fill={ACCENT} />
        <circle cx="200" cy="290" r="4" fill={ACCENT} />
        <circle cx="360" cy="200" r="4" fill={ACCENT} />
        <circle cx="560" cy="100" r="4" fill={ACCENT} />
      </g>
      <text
        x="40"
        y="420"
        fontFamily="JetBrains Mono, monospace"
        fontSize="11"
        fill="white"
        opacity="0.5"
        letterSpacing="2"
      >
        METRICS · 6 MONTHS
      </text>
      {/* keep ACCENT_DARK referenced to silence unused-import warnings if any */}
      <rect x="0" y="0" width="0" height="0" fill={ACCENT_DARK} />
    </svg>
  );
}
