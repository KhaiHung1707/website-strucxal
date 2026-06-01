import type { MarqueePhrase } from "@/types/content";

export function TextMarquee({ phrases }: { phrases: MarqueePhrase[] }) {
  return (
    <div className="text-marquee">
      <div className="text-marquee-track">
        {phrases.map((p, i) => (
          <span className="text-marquee-item" key={i}>
            {p.text}
          </span>
        ))}
      </div>
    </div>
  );
}
