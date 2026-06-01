"use client";

import { useEffect, useRef, useState } from "react";
import type { TestimonialsBlock } from "@/types/content";

export function Testimonials({ data }: { data: TestimonialsBlock }) {
  const [current, setCurrent] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const total = data.items.length;

  // Autoplay every 6 seconds
  useEffect(() => {
    const id = window.setInterval(() => setCurrent((c) => (c + 1) % total), 6000);
    return () => window.clearInterval(id);
  }, [total]);

  // Match stage height to tallest slide (so absolute slides don't collapse layout)
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const slides = stage.querySelectorAll<HTMLDivElement>(".testimonial-slide");
    const measure = () => {
      let max = 0;
      slides.forEach((s) => {
        const prevPos = s.style.position;
        const prevOp = s.style.opacity;
        s.style.position = "static";
        s.style.opacity = "0";
        if (s.offsetHeight > max) max = s.offsetHeight;
        s.style.position = prevPos;
        s.style.opacity = prevOp;
      });
      stage.style.height = `${max}px`;
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow-pill">{data.eyebrow}</span>
          <h2 className="section-title">
            {data.headingTop}
            <br />
            <span className="soft">{data.headingBottom}</span>
          </h2>
        </div>

        <div className="testimonial-stage" ref={stageRef}>
          {data.items.map((t, i) => (
            <div
              key={i}
              className={`testimonial-slide${i === current ? " active" : ""}`}
              data-slide={i}
            >
              <div className="testimonial-quote">
                <span className="quote-mark">&ldquo;</span>
                {t.quote}
              </div>
              <div className="testimonial-author-card">
                <div className="avatar">{t.initials}</div>
                <div className="name">{t.name}</div>
                <div className="role">{t.role}</div>
                <div className="company-stat">{t.companyStat}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-controls">
          <div className="testimonial-dots">
            {data.items.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                className={`testimonial-dot${i === current ? " active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
          <span className="testimonial-counter">
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
