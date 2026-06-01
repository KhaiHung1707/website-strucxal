import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { RelatedCarousel, type RelatedItem } from "@/components/sections/RelatedCarousel";
import { CaseCardArt } from "@/components/svg/CardArt";
import { workPageData } from "@/content/work-page";
import { caseStudies, findCaseStudy } from "@/content/case-studies";
import { homepageData } from "@/content/homepage";
import type { MasonryItem } from "@/types/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return workPageData.masonry.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = workPageData.masonry.find((r) => r.id === slug);
  const study = findCaseStudy(slug);
  if (!item) return { title: "Case study not found" };
  return {
    title: study?.client ?? item.title,
    description: study?.lead ?? item.title,
  };
}

function findItem(id: string): MasonryItem | undefined {
  return workPageData.masonry.find((r) => r.id === id);
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const item = findItem(slug);
  if (!item) notFound();
  const study = findCaseStudy(slug);

  const relatedIds =
    study?.relatedIds ?? caseStudies.filter((c) => c.id !== slug).map((c) => c.id);

  const relatedItems: RelatedItem[] = relatedIds
    .map((id) => {
      const r = findItem(id);
      const cs = findCaseStudy(id);
      if (!r) return null;
      return {
        id: r.id,
        gradient: r.gradient,
        thumbStat: cs?.outcomes[0]?.num ?? "★ Case",
        year: r.year.split("·")[0]?.trim() ?? r.year,
        category: r.category,
        duration: cs?.duration ?? r.duration ?? "",
        title: cs?.client ?? r.title,
        industry: cs ? `${cs.industry.split("·")[0]?.trim()} · ${cs.location.split(",")[0]?.trim() ?? ""}` : r.category,
        href: r.href,
      } satisfies RelatedItem;
    })
    .filter((r): r is RelatedItem => Boolean(r))
    .slice(0, 6);

  return (
    <>
      {/* Section 3 — Case detail hero */}
      <section className="case-hero">
        <div className="container">
          <Link href="/work" className="case-back">
            ← Back to portfolio
          </Link>

          <div className="ch-grid">
            <div>
              <div className="ch-meta-row">
                {(study?.metaPills ?? [
                  { label: item.category },
                  { label: item.year.split("·")[0]?.trim() ?? "" },
                  ...(item.duration ? [{ label: item.duration }] : []),
                ]).map((p) => (
                  <span key={p.label} className={`ch-meta-pill${p.accent ? " accent" : ""}`}>
                    {p.label}
                  </span>
                ))}
              </div>
              <h1>{study?.headline ?? item.title}</h1>
              {study?.lead ? <p>{study.lead}</p> : null}
            </div>

            {study?.infoCard ? (
              <div className="ch-info-card">
                {study.infoCard.map((row) => (
                  <div className="ch-info-row" key={row.label}>
                    <span className="label">{row.label}</span>
                    <span className={`value${row.accent ? " accent" : ""}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="ch-feature-image">
            <CaseCardArt variant={study?.gradient ?? item.gradient} />
          </div>
        </div>
      </section>

      {/* Section 4 — Before/After (only when configured) */}
      {study?.beforeAfter ? (
        <section className="ba-section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow-pill">{study.beforeAfter.eyebrow}</span>
              <h2 className="section-title">
                {study.beforeAfter.headingTop}
                <br />
                <span className="soft">{study.beforeAfter.headingBottom}</span>
              </h2>
            </div>

            <BeforeAfterSlider
              beforeLabel={study.beforeAfter.beforeLabel}
              afterLabel={study.beforeAfter.afterLabel}
              instructions={study.beforeAfter.instructions}
              before={
                <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
                  <rect width="1600" height="1000" fill="#C7C2B0" />
                  <g opacity="0.35" fill="#3A3A38">
                    <rect x="80" y="80" width="1440" height="60" rx="4" />
                    <rect x="80" y="180" width="400" height="40" rx="4" />
                    <rect x="80" y="240" width="600" height="40" rx="4" />
                    <rect x="80" y="340" width="280" height="200" rx="4" />
                    <rect x="380" y="340" width="280" height="200" rx="4" />
                    <rect x="680" y="340" width="280" height="200" rx="4" />
                    <rect x="980" y="340" width="280" height="200" rx="4" />
                    <rect x="80" y="580" width="1440" height="220" rx="4" />
                  </g>
                </svg>
              }
              after={<CaseCardArt variant={study.gradient} />}
            />
          </div>
        </section>
      ) : null}

      {/* Section 5 — Results (only when configured) */}
      {study?.results ? (
        <section className="results-block">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow-pill on-dark">{study.results.eyebrow}</span>
              <h2 className="section-title">
                {study.results.headingTop}
                <br />
                <span className="soft-dark">{study.results.headingBottom}</span>
              </h2>
              <p className="lead">{study.results.lead}</p>
            </div>

            <div className="results-grid">
              {study.results.items.map((r) => (
                <div className={`result-card${r.feature ? " feature" : ""}`} key={r.heading}>
                  <div className="label">{r.label}</div>
                  <div className="result-bignum">
                    {r.num}
                    {r.sym ? <span className="sym">{r.sym}</span> : null}
                  </div>
                  <h4>{r.heading}</h4>
                  <p>{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* If no extended case study, render the narrative sections from base study */}
      {study && !study.results ? (
        <section className="case-body">
          <div className="container">
            <div className="case-body-grid">
              <div>
                <div className="case-aside-label">★ {study.client}</div>
              </div>
              <div>
                {study.outcomes.length > 0 ? (
                  <div className="case-outcomes">
                    {study.outcomes.map((o) => (
                      <div className="case-outcome-cell" key={o.label}>
                        <div className="num">{o.num}</div>
                        <div className="label">{o.label}</div>
                      </div>
                    ))}
                  </div>
                ) : null}

                {study.sections.map((s) => (
                  <div className="case-section" key={s.heading}>
                    <h2>{s.heading}</h2>
                    {s.paragraphs.map((p, i) => (
                      <p key={i} className={i === 0 ? undefined : "muted"}>
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Fallback when no case study exists for this slug */}
      {!study ? (
        <section className="case-body">
          <div className="container">
            <div className="case-body-grid">
              <div>
                <div className="case-aside-label">★ {item.title}</div>
              </div>
              <div>
                <div className="case-section">
                  <h2>Case study coming soon</h2>
                  <p>
                    We&rsquo;re still putting this one together. In the meantime, here&rsquo;s the
                    headline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Section 6 — Related projects */}
      {relatedItems.length > 0 ? (
        <section className="related">
          <div className="container">
            <div className="related-head">
              <div>
                <span className="eyebrow-pill">06 — See more</span>
                <h2 className="section-title">
                  Related projects.
                  <br />
                  <span className="soft">Same industry & scale.</span>
                </h2>
              </div>
            </div>
            <RelatedCarousel items={relatedItems} />
          </div>
        </section>
      ) : null}

      <FinalCTA data={homepageData.finalCta} />
    </>
  );
}
