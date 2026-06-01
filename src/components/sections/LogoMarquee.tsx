import type { LogoItem } from "@/types/content";

export function LogoMarquee({ label, logos }: { label: string; logos: LogoItem[] }) {
  // Duplicate the list so the CSS marquee can scroll seamlessly.
  const track = [...logos, ...logos];
  return (
    <section className="logo-marquee">
      <div className="container">
        <p className="logo-marquee-label">{label}</p>
      </div>
      <div className="logo-marquee-track-wrap">
        <div className="logo-marquee-track">
          {track.map((logo, i) => (
            <span
              key={i}
              className={`logo-item${logo.style && logo.style !== "regular" ? ` style-${logo.style}` : ""}`}
            >
              {logo.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
