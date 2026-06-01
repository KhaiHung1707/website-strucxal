/**
 * Stylised SVG maps for the /contact location section.
 * Left card = HQ (grid + coastline). Right card = global remote network.
 */

const ACCENT = "var(--accent)";

export function HQMap() {
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
      <rect width="600" height="400" fill="#1F1F1F" />
      <g opacity="0.3" stroke="#F2F0E8" strokeWidth="0.5" fill="none">
        {[50, 100, 150, 200, 250, 300, 350].map((y) => (
          <line key={`h-${y}`} x1="0" y1={y} x2="600" y2={y} />
        ))}
        {[100, 200, 300, 400, 500].map((x) => (
          <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="400" />
        ))}
      </g>
      <path
        d="M 0 280 Q 80 240 160 260 T 320 250 Q 400 240 480 280 T 600 290 L 600 400 L 0 400 Z"
        fill="#0A0A0A"
        opacity="0.5"
      />
      <path
        d="M 0 280 Q 80 240 160 260 T 320 250 Q 400 240 480 280 T 600 290"
        stroke={ACCENT}
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <g opacity="0.15" stroke="#F2F0E8" strokeWidth="0.8" fill="none">
        <path d="M 250 100 L 350 200 L 320 300" />
        <path d="M 200 150 L 400 220" />
        <path d="M 280 50 L 300 350" />
      </g>
    </svg>
  );
}

export function GlobalNetworkMap() {
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
      <rect width="600" height="400" fill="#1F1F1F" />
      <g opacity="0.18" stroke={ACCENT} strokeWidth="1" fill="none">
        <circle cx="120" cy="140" r="40" />
        <circle cx="280" cy="200" r="55" />
        <circle cx="440" cy="150" r="40" />
        <circle cx="180" cy="280" r="35" />
        <circle cx="380" cy="290" r="45" />
        <circle cx="500" cy="260" r="38" />
      </g>
      <g fill={ACCENT}>
        <circle cx="120" cy="140" r="4" />
        <circle cx="280" cy="200" r="5" />
        <circle cx="440" cy="150" r="4" />
        <circle cx="180" cy="280" r="3" />
        <circle cx="380" cy="290" r="4" />
        <circle cx="500" cy="260" r="3" />
      </g>
      <g opacity="0.4" stroke={ACCENT} strokeWidth="0.8" fill="none" strokeDasharray="3,4">
        <path d="M 280 200 L 120 140" />
        <path d="M 280 200 L 440 150" />
        <path d="M 280 200 L 180 280" />
        <path d="M 280 200 L 380 290" />
        <path d="M 280 200 L 500 260" />
      </g>
      <g
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill="#F2F0E8"
        opacity="0.5"
      >
        <text x="100" y="115" letterSpacing="1">
          LONDON
        </text>
        <text x="260" y="175" letterSpacing="1">
          NHA TRANG
        </text>
        <text x="420" y="125" letterSpacing="1">
          TOKYO
        </text>
        <text x="160" y="305" letterSpacing="1">
          SINGAPORE
        </text>
        <text x="360" y="315" letterSpacing="1">
          SYDNEY
        </text>
        <text x="480" y="285" letterSpacing="1">
          AUCKLAND
        </text>
      </g>
    </svg>
  );
}
