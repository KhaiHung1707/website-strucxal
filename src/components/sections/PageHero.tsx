import type { ReactNode } from "react";

export interface PageHeroProps {
  eyebrow?: string;
  headingTop: string;
  headingBottom?: string;
  lead?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, headingTop, headingBottom, lead, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow ? <span className="eyebrow-pill">{eyebrow}</span> : null}
        <h1>
          {headingTop}
          {headingBottom ? (
            <>
              {" "}
              <span className="soft">{headingBottom}</span>
            </>
          ) : null}
        </h1>
        {lead ? <p className="lead">{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}
