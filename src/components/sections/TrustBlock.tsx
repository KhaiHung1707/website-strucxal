"use client";

import { useEffect, useRef } from "react";
import type { TrustBlockData } from "@/types/content";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function CountUp({ target, suffix }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started) {
            started = true;
            const start = performance.now();
            const duration = 1500;
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const current = Math.round(target * easeOutCubic(p));
              el.textContent = `${current}${suffix ?? ""}`;
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix]);
  return <span ref={ref}>0{suffix ?? ""}</span>;
}

export function TrustBlock({ data }: { data: TrustBlockData }) {
  return (
    <section className="trust-block">
      <div className="container">
        <div className="stage-marker on-dark">
          <span className="stage-line" />
          <span className="stage-label">{data.stageLabel}</span>
        </div>

        <div className="section-head">
          <span className="eyebrow-pill on-dark">{data.eyebrow}</span>
          <h2 className="section-title">
            {data.headingTop}
            <br />
            <span className="soft-dark">{data.headingBottom}</span>
          </h2>
        </div>

        <div className="trust-stats">
          {data.stats.map((s, i) => (
            <div className="trust-stat" key={i}>
              <div className="num">
                {s.countTo !== undefined ? (
                  <CountUp target={s.countTo} suffix={s.suffix} />
                ) : (
                  <>
                    {s.value}
                    {s.unit && <span className="unit">{s.unit}</span>}
                  </>
                )}
              </div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="tech-grid">
          {data.tech.map((t) => (
            <div className="tech-pill" key={t.name}>
              <div className="icon">{t.icon}</div>
              <div className="name">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
