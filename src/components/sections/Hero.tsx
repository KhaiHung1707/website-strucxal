"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { HeroBlock, LogoItem } from "@/types/content";
import { FanCardArt } from "@/components/svg/CardArt";

export interface HeroProps {
  data: HeroBlock;
  marqueeLabel: string;
  marqueeLogos: LogoItem[];
}

export function Hero({ data, marqueeLabel, marqueeLogos }: HeroProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const repeatedLogos = [...marqueeLogos, ...marqueeLogos];

  const onCardEnter = (i: number) => {
    if (activeIdx === null) setActiveIdx(i);
  };

  const onStageLeave = () => setActiveIdx(null);

  const locked = activeIdx !== null;

  return (
    <section className="hero-arcfan" data-nav-dark>
      <div className="arc-bg" aria-hidden="true">
        <div className="arc-ring r4" />
        <div className="arc-ring r3" />
        <div className="arc-ring r2" />
        <div className="arc-ring r1" />
      </div>
      <div className="arc-glow" aria-hidden="true" />

      <div className="acf-content">
        <a href={data.primaryCta.href} className="arc-pill">
          <span className="badge">{data.badgeLabel}</span>
          {data.announceText}
          <span className="arrow">→</span>
        </a>
        <h1>
          {data.headlineTop}
          <br />
          <span className="accent">{data.headlineBottom}</span>
        </h1>
        <p className="lead">{data.lead}</p>
        <div className="acf-actions">
          <Link href={data.primaryCta.href} className="btn btn-light">
            {data.primaryCta.label}
          </Link>
          <Link href={data.secondaryCta.href} className="btn btn-ghost">
            {data.secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className="acf-stage" ref={stageRef} onMouseLeave={onStageLeave}>
        <div className={`acf-fan${locked ? " locked" : ""}`}>
          {data.fanCards.map((card, i) => {
            const isActive = activeIdx === i;
            const isDimmed = locked && !isActive;
            return (
              <div
                key={i}
                className={`acf-card${isActive ? " active" : ""}${isDimmed ? " dimmed" : ""}`}
                onMouseEnter={() => onCardEnter(i)}
              >
                <FanCardArt variant={card.gradient} />
                <div className="acf-label">
                  <div>
                    <span className="meta">{card.meta}</span>
                    <span className="name">{card.name}</span>
                  </div>
                  <div className="pin">↗</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="acf-marquee">
        <p className="acf-marquee-label">{marqueeLabel}</p>
        <div className="acf-marquee-track">
          {repeatedLogos.map((logo, i) => (
            <span
              key={i}
              className={`acf-logo${logo.style ? ` style-${logo.style}` : ""}`}
            >
              {logo.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
