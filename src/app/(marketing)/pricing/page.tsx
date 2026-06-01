import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CompareTiers } from "@/components/sections/CompareTiers";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pricingData } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Fixed-price engagements quoted after discovery. Landing page from $2.4k, marketing site from $8k, full web app from $25k.",
};

export default function PricingPage() {
  const d = pricingData;
  return (
    <>
      <PageHero {...d.pageHero} />
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {d.tiers.map((tier) => (
              <div className={`pricing-card${tier.featured ? " featured" : ""}`} key={tier.name}>
                <span className="tag">{tier.tag}</span>
                <h3>{tier.name}</h3>
                <div className="price">
                  {tier.price}
                  {tier.priceUnit ? <span className="unit">{tier.priceUnit}</span> : null}
                </div>
                <p className="desc">{tier.desc}</p>
                <ul>
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link
                  href={tier.cta.href}
                  className={`btn ${tier.featured ? "btn-accent" : "btn-dark"}`}
                >
                  {tier.cta.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CompareTiers data={d.compare} />
      <FAQ data={d.faq} />
      <FinalCTA data={d.finalCta} />
    </>
  );
}
