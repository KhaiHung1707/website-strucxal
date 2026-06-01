import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ServiceVisualArt } from "@/components/svg/ServiceVisualArt";
import { servicesPageData } from "@/content/services-page";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interface design, web app development, and growth optimisation — one senior team from idea to production.",
};

export default function ServicesPage() {
  const d = servicesPageData;
  return (
    <>
      {/* Section 1 — Hero + selector */}
      <section className="services-hero" id="s1">
        <div className="container">
          <div className="sh-grid">
            <div className="sh-text">
              <span className="eyebrow-pill">{d.hero.eyebrow}</span>
              <h1>
                {d.hero.headingTop}
                <br />
                <span className="soft">{d.hero.headingBottom}</span>
              </h1>
              <p>{d.hero.lead}</p>
              <div className="sh-quick-nav">
                <span className="label">{d.hero.quickNavLabel}</span>
                {d.hero.quickNav.map((q) => (
                  <a key={q.label} href={q.href}>
                    {q.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="sh-selector">
              <div className="pre">{d.hero.selector.pre}</div>
              <h3>{d.hero.selector.heading}</h3>
              <div className="sh-service-list">
                {d.hero.selector.rows.map((row) => (
                  <a key={row.num} href={row.href} className="sh-service-row">
                    <span className="sh-service-num">{row.num}</span>
                    <span className="sh-service-name">{row.text}</span>
                    <span className="sh-service-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Service detail */}
      <section className="service-detail" id="s2">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-pill">{d.detail.eyebrow}</span>
            <h2 className="section-title">
              {d.detail.headingTop}
              <br />
              <span className="soft">{d.detail.headingBottom}</span>
            </h2>
          </div>

          <div className="sd-stack">
            {d.detail.items.map((item) => (
              <div className={`sd-item${item.reverse ? " reverse" : ""}`} key={item.num}>
                <div className="sd-visual">
                  <ServiceVisualArt variant={item.visual} />
                </div>
                <div className="sd-content">
                  <span className="sd-num">{item.num}</span>
                  <h3 dangerouslySetInnerHTML={{ __html: item.headingHtml }} />
                  <p>{item.body}</p>
                  <div className="sd-deliverables">
                    {item.deliverables.map((dv) => (
                      <div className="sd-deliverable" key={dv}>
                        <span className="sd-check">✓</span>
                        {dv}
                      </div>
                    ))}
                  </div>
                  <div className="sd-meta">
                    {item.meta.map((m) => (
                      <div className="meta-item" key={m.label}>
                        <div className="label">{m.label}</div>
                        <div className="value">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Process timeline */}
      <section className="process-timeline" id="s3">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-pill on-dark">{d.timeline.eyebrow}</span>
            <h2 className="section-title">
              {d.timeline.headingTop}
              <br />
              <span className="soft-dark">{d.timeline.headingBottom}</span>
            </h2>
            <p className="lead">{d.timeline.lead}</p>
          </div>
        </div>
        <div className="container pt-scroll-wrap">
          <div className="pt-line">
            {d.timeline.steps.map((s) => (
              <div className={`pt-step${s.future ? " future" : ""}`} key={s.week}>
                <div className="pt-week">{s.week}</div>
                <div className="pt-dot" />
                <h4>{s.title}</h4>
                <p>{s.body}</p>
                <div className="pt-deliverables">{s.deliverable}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Add-ons */}
      <section className="addons" id="s4">
        <div className="container">
          <div className="addons-head">
            <div>
              <span className="eyebrow-pill">{d.addons.eyebrow}</span>
              <h2 className="section-title">
                {d.addons.headingTop}
                <br />
                <span className="soft">{d.addons.headingBottom}</span>
              </h2>
            </div>
          </div>
          <div className="addons-grid">
            {d.addons.items.map((a) => (
              <div className="addon-card" key={a.title}>
                <div>
                  <div className="addon-icon">{a.icon}</div>
                  <h4>{a.title}</h4>
                  <p className="desc">{a.desc}</p>
                </div>
                <div className="addon-price">
                  <span className="label">{a.priceLabel}</span>
                  <span className="value">
                    {a.priceCurrency ? <span className="currency">{a.priceCurrency}</span> : null}
                    {a.priceValue}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Engagement model */}
      <section className="engagement" id="s5">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-pill">{d.engagement.eyebrow}</span>
            <h2 className="section-title">
              {d.engagement.headingTop}
              <br />
              <span className="soft">{d.engagement.headingBottom}</span>
            </h2>
            <p className="lead">{d.engagement.lead}</p>
          </div>

          <div className="engagement-grid">
            {d.engagement.cards.map((c) => (
              <div className={`eng-card${c.featured ? " featured" : ""}`} key={c.title}>
                <span className="eng-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p className="eng-pitch">{c.pitch}</p>
                <ul className="eng-features">
                  {c.features.map((f) => (
                    <li key={f}>
                      <span className="dot" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="eng-meta">
                  <div className="eng-price">
                    {c.price}
                    <div className="small">{c.priceUnit}</div>
                  </div>
                  <Link href={c.cta.href} className="eng-cta">
                    {c.cta.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Do/Don't matrix */}
      <section className="matrix" id="s6">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-pill">{d.matrix.eyebrow}</span>
            <h2 className="section-title">
              {d.matrix.headingTop}
              <br />
              <span className="soft">{d.matrix.headingBottom}</span>
            </h2>
            <p className="lead">{d.matrix.lead}</p>
          </div>

          <div className="matrix-grid">
            <div className="matrix-col do">
              <span className="matrix-tag">{d.matrix.doTag}</span>
              <h3>{d.matrix.doHeading}</h3>
              <ul className="matrix-list">
                {d.matrix.doItems.map((item) => (
                  <li key={item.title}>
                    <span className="matrix-mark">✓</span>
                    <span className="matrix-text">
                      <strong>{item.title}</strong>
                      <span className="sub">{item.sub}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="matrix-col dont">
              <span className="matrix-tag">{d.matrix.dontTag}</span>
              <h3>{d.matrix.dontHeading}</h3>
              <ul className="matrix-list">
                {d.matrix.dontItems.map((item) => (
                  <li key={item.title}>
                    <span className="matrix-mark">✕</span>
                    <span className="matrix-text">
                      <strong>{item.title}</strong>
                      <span className="sub">{item.sub}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA data={d.finalCta} />
    </>
  );
}
