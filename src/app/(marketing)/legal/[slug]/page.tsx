import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findLegalDoc, legalDocs } from "@/content/legal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return legalDocs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = findLegalDoc(slug);
  if (!doc) return { title: "Legal" };
  return {
    title: doc.title,
    description: `${doc.title} for Strucxal Studio — effective ${doc.effectiveDate}.`,
  };
}

export default async function LegalPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = findLegalDoc(slug);
  if (!doc) notFound();

  return (
    <section className="legal">
      <div className="container">
        <div className="legal-grid">
          <aside className="legal-aside">
            <h1>{doc.title}</h1>

            <div className="legal-meta">
              <div className="row">
                <span className="key">Effective</span>
                <span className="val">{doc.effectiveDate}</span>
              </div>
              <div className="row">
                <span className="key">Version</span>
                <span className="val">{doc.version}</span>
              </div>
              <div className="row">
                <span className="key">Law</span>
                <span className="val">{doc.jurisdiction}</span>
              </div>
            </div>

            <div className="legal-toc">
              <span className="toc-label">★ Contents</span>
              {doc.sections.map((s) => (
                <a href={`#${s.id}`} key={s.id}>
                  {s.title}
                </a>
              ))}
              <span className="toc-label" style={{ marginTop: 16 }}>
                ★ Documents
              </span>
              {legalDocs.map((d) => (
                <Link
                  key={d.slug}
                  href={`/legal/${d.slug}`}
                  className={d.slug === doc.slug ? "active" : ""}
                >
                  {d.navLabel}
                </Link>
              ))}
            </div>
          </aside>

          <div className="legal-content">
            {doc.sections.map((s) => (
              <div key={s.id}>
                <h2 id={s.id}>{s.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: s.bodyHtml }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
