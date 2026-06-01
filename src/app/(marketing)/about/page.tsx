import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PortraitArt } from "@/components/svg/PortraitArt";
import { aboutData } from "@/content/about";
import type { HeroHeadlinePart } from "@/types/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "A boutique studio of five senior practitioners. Twelve years building for the web — async-first, hands-on, fixed-price.",
};

function HeadlineParts({ parts }: { parts: HeroHeadlinePart[] }) {
  return (
    <>
      {parts.map((p, i) => {
        if (p.type === "br") return <br key={i} />;
        if (p.type === "accent")
          return (
            <span key={i} className="accent-word">
              {p.value}
            </span>
          );
        if (p.type === "soft")
          return (
            <span key={i} className="soft">
              {p.value}
            </span>
          );
        return <Fragment key={i}>{p.value}</Fragment>;
      })}
    </>
  );
}

export default function AboutPage() {
  const d = aboutData;
  return (
    <>
      {/* Section 1 — About hero */}
      <section className="about-hero">
        <div className="container">
          <div className="ah-content">
            <span className="eyebrow-pill">{d.hero.eyebrow}</span>
            <h1>
              <HeadlineParts parts={d.hero.headlineParts} />
            </h1>
            <div className="ah-meta-row">
              <span className="label">{d.hero.metaLabel}</span>
              {d.hero.metaPills.map((p) => (
                <span className="ah-meta-pill" key={p}>
                  <span className="dot" />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Studio story timeline */}
      <section className="studio-story">
        <div className="container">
          <div className="ss-grid">
            <aside className="ss-aside">
              <span className="eyebrow-pill">{d.story.eyebrow}</span>
              <h2>{d.story.heading}</h2>
              <p>{d.story.body}</p>
            </aside>

            <div className="ss-timeline">
              {d.story.events.map((e, i) => (
                <div className={`ss-event${e.milestone ? " milestone" : ""}`} key={i}>
                  <div className={`ss-year${e.yearCurrent ? " current" : ""}`}>{e.year}</div>
                  <div className="ss-content">
                    <h4>{e.title}</h4>
                    <p>{e.body}</p>
                    <div className="tags">
                      {e.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Team grid with bios */}
      <section className="team-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-pill on-dark">{d.team.eyebrow}</span>
            <h2 className="section-title">
              {d.team.headingTop}
              <br />
              <span className="soft-dark">{d.team.headingBottom}</span>
            </h2>
            <p className="lead">{d.team.lead}</p>
          </div>

          <div className="team-grid-bio">
            {d.team.members.map((m) => (
              <div className={`tb-card${m.founder ? " founder" : ""}`} key={m.name}>
                <div className="tb-photo">
                  <PortraitArt variant={m.portrait} founder={m.founder} />
                  <span className="role-tag">{m.roleTag}</span>
                </div>
                <div className="tb-body">
                  <div>
                    <div className="name">{m.name}</div>
                    <div className="role">{m.role}</div>
                  </div>
                  <p className="bio">{m.bio}</p>
                  <div className="skills">
                    {m.skills.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  {m.socials ? (
                    <div className="socials">
                      {m.socials.map((s, i) => (
                        <a key={i} href={s.href} title={s.title} aria-label={s.title}>
                          {s.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Values */}
      <section className="values">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-pill">{d.values.eyebrow}</span>
            <h2 className="section-title">
              {d.values.headingTop}
              <br />
              <span className="soft">{d.values.headingBottom}</span>
            </h2>
            <p className="lead">{d.values.lead}</p>
          </div>
          <div className="values-grid">
            {d.values.items.map((v) => {
              const toneClass = v.tone === "accent" ? " accent" : v.tone === "dark" ? " dark" : "";
              return (
                <div className={`value-card${toneClass}`} key={v.number}>
                  <div className="value-num">{v.number}</div>
                  <h4>{v.title}</h4>
                  <p>{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5 — Stats mosaic */}
      <section className="stats-block">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-pill on-dark">{d.stats.eyebrow}</span>
            <h2 className="section-title">
              {d.stats.headingTop}
              <br />
              <span className="soft-dark">{d.stats.headingBottom}</span>
            </h2>
          </div>
          <div className="stats-mosaic">
            {d.stats.items.map((s, i) => (
              <div className={`stat-block ${s.span}`} key={i}>
                <div className="label">{s.label}</div>
                <div className="num">
                  {s.num}
                  {s.unit ? <span className="small">{s.unit}</span> : null}
                </div>
                <h4>{s.heading}</h4>
                {s.body ? <p>{s.body}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Careers */}
      <section className="careers" id="careers">
        <div className="container">
          <div className="careers-head">
            <div>
              <span className="eyebrow-pill">{d.careers.eyebrow}</span>
              <h2 className="section-title">
                {d.careers.headingTop}
                <br />
                <span className="soft">{d.careers.headingBottom}</span>
              </h2>
            </div>
            <div className="careers-cta-card">
              <span className="label">{d.careers.ctaCard.label}</span>
              <p>{d.careers.ctaCard.body}</p>
              <Link href={d.careers.ctaCard.ctaHref} className="btn-card">
                {d.careers.ctaCard.ctaLabel}
              </Link>
            </div>
          </div>

          <div className="roles-list">
            {d.careers.roles.map((role) => (
              <Link
                key={role.id}
                href="/contact"
                className="role-row"
                aria-disabled={role.status === "closed"}
              >
                <div className="role-name">
                  {role.title}
                  <span className="meta">{role.meta}</span>
                </div>
                <div className="role-info">
                  Location
                  <strong>{role.location}</strong>
                </div>
                <div className="role-info">
                  Stack
                  <strong>{role.stack}</strong>
                </div>
                <div>
                  <span className={`role-status${role.status === "closed" ? " closed" : ""}`}>
                    {role.statusLabel}
                  </span>
                </div>
                <div className="role-arrow">↗</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA data={d.finalCta} />
    </>
  );
}
