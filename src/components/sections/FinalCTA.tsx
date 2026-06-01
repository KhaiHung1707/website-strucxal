import type { FinalCtaBlock } from "@/types/content";

export function FinalCTA({ data }: { data: FinalCtaBlock }) {
  return (
    <section className="cta-final" id="contact">
      <div className="container">
        <h2 className="section-title">
          {data.headingTop}
          <br />
          <span className="soft-dark">{data.headingBottom}</span>
        </h2>
        <p className="lead">{data.lead}</p>
        <div className="hero-actions">
          <a href={data.primaryCta.href} className="btn btn-accent">
            {data.primaryCta.label}
          </a>
          <a href={data.secondaryCta.href} className="btn btn-on-dark">
            {data.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
