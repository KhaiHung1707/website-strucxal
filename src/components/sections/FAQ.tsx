"use client";

import { useState } from "react";
import type { FaqBlock } from "@/types/content";

export function FAQ({ data }: { data: FaqBlock }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-grid">
          <aside className="faq-aside">
            <span className="eyebrow-pill">{data.eyebrow}</span>
            <h2 className="section-title" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
              {data.headingTop}
              <br />
              <span className="soft">{data.headingBottom}</span>
            </h2>
            <p>{data.asideNote}</p>
            <a href={data.asideCta.href} className="btn-link">
              {data.asideCta.label}
            </a>
          </aside>

          <div className="faq-list">
            {data.items.map((item, i) => (
              <div key={i} className={`faq-item${i === open ? " open" : ""}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpen(i === open ? -1 : i)}
                  aria-expanded={i === open}
                >
                  {item.question}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
