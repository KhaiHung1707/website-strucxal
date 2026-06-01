import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { BookCallWidget } from "@/components/sections/BookCallWidget";
import { HQMap, GlobalNetworkMap } from "@/components/svg/LocationMaps";
import { contactData } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Strucxal Studio. A free 30-minute discovery call — no commitment.",
};

export default function ContactPage() {
  const d = contactData;
  return (
    <>
      {/* Section 1 — Hero + form */}
      <section className="contact-hero" id="s1">
        <div className="container">
          <div className="cnt-grid">
            <div className="cnt-text">
              <span className="eyebrow-pill">{d.hero.eyebrow}</span>
              <h1>
                {d.hero.headingTop}
                <br />
                <span className="soft">{d.hero.headingBottom}</span>
              </h1>
              <p className="lead">{d.hero.lead}</p>

              <div className="cnt-quick-list">
                <span className="label">{d.hero.quickLabel}</span>
                {d.hero.quickRows.map((row) => (
                  <div className="cnt-quick-row" key={row.key}>
                    <span className="key">{row.key}</span>
                    <span className="val">
                      {row.value}
                      <button className="copy-btn" type="button" title="Copy" aria-label="Copy">
                        {row.copyIcon}
                      </button>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <InquiryForm
              stepLabel={d.hero.form.stepLabel}
              heading={d.hero.form.heading}
              sub={d.hero.form.sub}
              submitLabel={d.hero.form.submitLabel}
              footnote={d.hero.form.footnote}
              projectTypes={d.hero.form.projectTypes}
              defaultProjectType={d.hero.form.defaultProjectType}
              budgets={d.hero.form.budgets}
              defaultBudget={d.hero.form.defaultBudget}
              fieldLabels={d.hero.form.fieldLabels}
            />
          </div>
        </div>
      </section>

      {/* Section 2 — Response time */}
      <section className="response" id="s2">
        <div className="container">
          <div className="response-grid">
            <div>
              <span className="eyebrow-pill">{d.response.eyebrow}</span>
              <h2 style={{ marginTop: 24 }}>
                {d.response.headingTop}
                <br />
                <span className="opacity">{d.response.headingBottom}</span>
              </h2>
              <p>{d.response.body}</p>
            </div>
            <div className="response-time-card">
              <div className="label">{d.response.cardLabel}</div>
              <div className="num">
                {d.response.cardNum}
                <span className="unit">{d.response.cardUnit}</span>
              </div>
              <div className="pitch">{d.response.cardPitch}</div>
              <div className="sub">{d.response.cardSub}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Book a call */}
      <section className="book-call" id="s3">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-pill">{d.bookCall.eyebrow}</span>
            <h2 className="section-title">
              {d.bookCall.headingTop}
              <br />
              <span className="soft">{d.bookCall.headingBottom}</span>
            </h2>
          </div>

          <div className="bc-grid">
            <div className="bc-info">
              <h3>{d.bookCall.pitchHeading}</h3>
              <p>{d.bookCall.pitchBody}</p>

              <div className="bc-perks">
                {d.bookCall.perks.map((p) => (
                  <div className="bc-perk" key={p.title}>
                    <div className="check">✓</div>
                    <div className="copy">
                      <strong>{p.title}</strong>
                      <span>{p.body}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <BookCallWidget
              month={d.bookCall.calendarMonth}
              dayLabels={d.bookCall.dayLabels}
              days={d.bookCall.days}
              defaultSelectedDay={d.bookCall.selectedDay}
              slotsLabel={d.bookCall.slotsLabel}
              slots={d.bookCall.slots}
              defaultSelectedSlot={d.bookCall.selectedSlot}
            />
          </div>
        </div>
      </section>

      {/* Section 4 — Channels */}
      <section className="channels" id="s4">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-pill">{d.channels.eyebrow}</span>
            <h2 className="section-title">
              {d.channels.headingTop}
              <br />
              <span className="soft">{d.channels.headingBottom}</span>
            </h2>
          </div>

          <div className="channels-grid">
            {d.channels.items.map((c) => (
              <a
                className={`channel-card${c.featured ? " featured" : ""}`}
                href={c.href}
                key={c.title}
              >
                <div className="channel-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p className="desc">{c.desc}</p>
                <div className="channel-meta">
                  {c.metaPills.map((m) => (
                    <span className="meta-pill" key={m}>
                      {m}
                    </span>
                  ))}
                </div>
                <div className="channel-value">
                  <span className="text">{c.value}</span>
                  <span className="arrow">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Location */}
      <section className="location" id="s5">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-pill on-dark">{d.location.eyebrow}</span>
            <h2 className="section-title">
              {d.location.headingTop}
              <br />
              <span className="soft-dark">{d.location.headingBottom}</span>
            </h2>
            <p className="lead">{d.location.lead}</p>
          </div>

          <div className="loc-grid">
            {d.location.cards.map((c) => (
              <div className={`loc-card${c.variant === "remote" ? " remote" : ""}`} key={c.tag}>
                <div className="loc-map">
                  {c.variant === "hq" ? <HQMap /> : <GlobalNetworkMap />}
                  {c.showPin ? <div className="loc-pin" /> : null}
                  <span className="loc-tag">{c.tag}</span>
                </div>
                <div className="loc-body">
                  <h3>{c.heading}</h3>
                  <p className="address" dangerouslySetInnerHTML={{ __html: c.addressHtml }} />
                  <div className="loc-info">
                    {c.rows.map((row) => (
                      <div className="loc-info-row" key={row.key}>
                        <span className="key">{row.key}</span>
                        <span className={`val${row.live ? " live" : ""}`}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Contact FAQ */}
      <section className="contact-faq" id="s6">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-pill">{d.faq.eyebrow}</span>
            <h2 className="section-title">
              {d.faq.headingTop}
              <br />
              <span className="soft">{d.faq.headingBottom}</span>
            </h2>
          </div>

          <div className="cf-grid">
            {d.faq.items.map((item, i) => (
              <div className="cf-card" key={item.q}>
                <div className="q-num">Q{String(i + 1).padStart(2, "0")}</div>
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </div>

          <div className="cf-foot">
            <p>{d.faq.footText}</p>
            <Link href={d.faq.footCtaHref} className="btn-cta">
              {d.faq.footCtaLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
