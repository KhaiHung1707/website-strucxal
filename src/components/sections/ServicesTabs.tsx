"use client";

import { useState } from "react";
import type { ServicesBlock } from "@/types/content";

export function ServicesTabs({ data }: { data: ServicesBlock }) {
  const [active, setActive] = useState(0);

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="stage-marker">
          <span className="stage-line" />
          <span className="stage-label">{data.stageLabel}</span>
        </div>

        <div className="section-head">
          <span className="eyebrow-pill">{data.eyebrow}</span>
          <h2 className="section-title">
            {data.headingTop}
            <br />
            <span className="soft">{data.headingBottom}</span>
          </h2>
          <p className="lead">{data.lead}</p>
        </div>

        <div className="services-grid">
          <div className="service-visual">
            {data.panels.map((panel, i) => (
              <div
                key={i}
                className={`service-panel${i === active ? " active" : ""}`}
                data-panel={i}
              >
                {panel.nodes.map((n, j) => (
                  <div key={j} style={{ display: "contents" }}>
                    <div className="mock-node">
                      <span className="pill-tag">{n.tag}</span>
                      {n.text}
                    </div>
                    {j < panel.nodes.length - 1 && <div className="mock-connector" />}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="service-tabs">
            {data.tabs.map((tab, i) => (
              <button
                key={i}
                className={`service-tab${i === active ? " active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="title">{tab.title}</span>
                <span className="desc">{tab.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
