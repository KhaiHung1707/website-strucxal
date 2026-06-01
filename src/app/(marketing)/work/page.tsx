import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PortfolioFilterBar } from "@/components/sections/PortfolioFilterBar";
import { FanCardArt } from "@/components/svg/CardArt";
import { workPageData } from "@/content/work-page";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects across e-commerce, SaaS, B2B, marketplace, and studio portfolios — with real business outcomes.",
};

export default function WorkPage() {
  const d = workPageData;
  return (
    <>
      {/* Section 1 — Hero with stats + filter */}
      <section className="portfolio-hero" id="s1">
        <div className="container">
          <div className="ph-top">
            <div>
              <span className="eyebrow-pill">{d.hero.eyebrow}</span>
              <h1>
                {d.hero.headingTop}
                <br />
                <span className="soft">{d.hero.headingBottom}</span>
              </h1>
            </div>

            <div className="ph-stats">
              {d.hero.stats.map((s) => (
                <div className="ph-stat-card" key={s.label}>
                  <div className="num">
                    {s.num}
                    {s.unit ? <span className="sm">{s.unit}</span> : null}
                  </div>
                  <div className="label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <PortfolioFilterBar chips={d.filterChips} />
        </div>
      </section>

      {/* Section 2 — Masonry grid */}
      <section className="masonry" id="s2">
        <div className="container">
          <div className="masonry-grid">
            {d.masonry.map((item) => (
              <Link key={item.id} href={item.href} className={`m-item ${item.size}`}>
                <FanCardArt variant={item.gradient} />
                <div className="m-overlay" />
                <span className="m-tag">{item.tag}</span>
                <span className="m-arrow">↗</span>
                <div className="m-info">
                  <div className="year">{item.year}</div>
                  <h4>{item.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA data={d.finalCta} />
    </>
  );
}
