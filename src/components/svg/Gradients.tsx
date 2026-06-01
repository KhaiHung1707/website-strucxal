/**
 * Shared SVG gradient defs. Rendered once at the top of the page so every
 * downstream <svg> can reference `url(#g1)` … `url(#g5)`.
 */
export function GradientDefs() {
  return (
    <svg
      aria-hidden="true"
      width="0"
      height="0"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#C24218" />
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A2332" />
          <stop offset="100%" stopColor="#3A5475" />
        </linearGradient>
        <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0F4F38" />
          <stop offset="100%" stopColor="#1B7855" />
        </linearGradient>
        <linearGradient id="g4" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5C2A4F" />
          <stop offset="100%" stopColor="#A03B5E" />
        </linearGradient>
        <linearGradient id="g5" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1F1F1F" />
          <stop offset="100%" stopColor="#3A3A3A" />
        </linearGradient>
      </defs>
    </svg>
  );
}
