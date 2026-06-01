import type { CompareBlock } from "@/types/content";

export function CompareTiers({ data }: { data: CompareBlock }) {
  return (
    <section className="compare-section">
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

        <div className="compare-grid">
          {data.cards.map((card, i) => (
            <div key={i} className={`compare-card${card.featured ? " featured" : ""}`}>
              <div className="tag">{card.tag}</div>
              <h4>{card.title}</h4>
              {card.rows.map((r, j) => (
                <div className="row" key={j}>
                  <span className="label">{r.label}</span>
                  <span className={`val${r.tone ? ` ${r.tone}` : ""}`}>{r.val}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
