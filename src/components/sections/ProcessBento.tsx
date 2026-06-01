import type { ProcessBlock } from "@/types/content";

export function ProcessBento({ data }: { data: ProcessBlock }) {
  return (
    <section className="process-section" id="process">
      <div className="container">
        {data.stageLabel && (
          <div className="stage-marker">
            <span className="stage-line" />
            <span className="stage-label">{data.stageLabel}</span>
          </div>
        )}
        <div className="section-head">
          <span className="eyebrow-pill">{data.eyebrow}</span>
          <h2 className="section-title">
            {data.headingTop}
            <br />
            <span className="soft">{data.headingBottom}</span>
          </h2>
          {data.lead && <p className="lead">{data.lead}</p>}
        </div>

        <div className="values-grid">
          {data.cards.map((card, i) => {
            const toneClass =
              card.tone === "accent" ? " accent" : card.tone === "dark" ? " dark" : "";
            const metaText = card.duration
              ? `${card.phase} · ${card.duration}`
              : card.phase;
            return (
              <div className={`value-card${toneClass}`} key={i}>
                <div className="value-num">{card.number}</div>
                <div className="value-meta">{metaText}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
