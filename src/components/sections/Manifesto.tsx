import type { ManifestoBlock } from "@/types/content";

export function Manifesto({ data }: { data: ManifestoBlock }) {
  return (
    <section className="manifesto" id="manifesto">
      <div className="container">
        <div className="stage-marker">
          <span className="stage-line" />
          <span className="stage-label">{data.stageLabel}</span>
        </div>
        <div className="manifesto-grid">
          <aside className="manifesto-aside">
            <div className="num">{data.number}</div>
            <div className="label">{data.asideLabel}</div>
          </aside>
          <div className="manifesto-content">
            <h2 dangerouslySetInnerHTML={{ __html: data.headingHtml }} />
            {data.paragraphs.map((p, i) => (
              <p key={i} className={i > 0 ? "muted" : undefined}>
                {p}
              </p>
            ))}
            <blockquote>{data.quote}</blockquote>
            <p dangerouslySetInnerHTML={{ __html: data.closingHtml }} />
            <div className="manifesto-signature">
              <div className="avatar">{data.signature.initials}</div>
              <div>
                <div className="name">{data.signature.name}</div>
                <div className="role">{data.signature.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
