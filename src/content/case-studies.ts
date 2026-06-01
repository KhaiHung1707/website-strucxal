import type { CaseStudy } from "@/types/content";

export const caseStudies: CaseStudy[] = [
  {
    id: "p1",
    client: "Luma Atelier",
    industry: "E-commerce · Womenswear",
    location: "London, UK",
    duration: "6 months",
    year: "2026",
    headline: "Luma Atelier — from 1.2% to 2.4% mobile conversion in 6 months.",
    lead: "How we rebuilt the entire mobile shopping experience for a British luxury fashion brand — and helped them reclaim a leadership position in a tight niche.",
    gradient: "g1",
    metaPills: [
      { label: "★ Featured case", accent: true },
      { label: "E-commerce" },
      { label: "2026" },
      { label: "6 months" },
    ],
    infoCard: [
      { label: "Client", value: "Luma Atelier Ltd" },
      { label: "Industry", value: "Luxury fashion DTC" },
      { label: "Year", value: "2026" },
      { label: "Scope", value: "Design + Build + Growth" },
      { label: "Stack", value: "Next.js · Shopify Hydrogen" },
      { label: "Outcome", value: "+100% mobile CVR", accent: true },
    ],
    outcomes: [
      { num: "+100%", label: "Mobile conversion rate" },
      { num: "−42%", label: "Time-to-cart" },
      { num: "98", label: "Lighthouse mobile" },
    ],
    sections: [
      {
        heading: "Challenge",
        paragraphs: [
          "Luma had grown from a Shopify template that no longer matched the brand. Mobile traffic represented 78% of sessions but only 36% of revenue. Page weight on PDP was over 4MB, with thumbnails loading after the fold.",
          "The team needed a redesign that wouldn't sacrifice the editorial brand voice for raw conversion — a balance many e-commerce redesigns get wrong.",
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "Two-week discovery: user interviews, heatmap analysis, a Stripe-level funnel audit. We identified six concrete friction points across the mobile path.",
          "Designed and shipped a custom Next.js + Shopify Hydrogen storefront. Inline checkout. Editorial PDP with progressive disclosure. Image CDN with adaptive sizing. Type system tuned for thumb-zone reading.",
          "Launched in three phases over six months to limit risk, with A/B tests gating each rollout.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Mobile conversion doubled in the first 30 days post-launch and held the new baseline through the next two quarters. Time-to-cart dropped from a median of 78 seconds to 45.",
          "Editorial brand voice scored higher on customer surveys — a reminder that polish and performance don't have to trade off.",
        ],
      },
    ],
    results: {
      eyebrow: "05 — Results",
      headingTop: "Real numbers.",
      headingBottom: "Six months after go-live.",
      lead: "All metrics measured through Google Analytics 4, Shopify Analytics, and PostHog. Compared against the 6-month baseline before the redesign.",
      items: [
        {
          label: "★ Biggest outcome",
          num: "+100",
          sym: "%",
          heading: "Mobile conversion rate",
          body: "From 1.2% to 2.4% — doubled the mobile CVR, which represents 73% of Luma's total traffic.",
          feature: true,
        },
        {
          label: "Performance",
          num: "98",
          sym: "/100",
          heading: "Lighthouse score",
          body: "Up from 54 to 98 on mobile. LCP dropped from 4.2s to 1.1s. Cumulative Layout Shift near zero.",
        },
        {
          label: "Revenue",
          num: "+87",
          sym: "%",
          heading: "Quarterly revenue",
          body: "First quarter post-launch hit $2.4M, up from $1.28M the year prior. ROI recovered in 11 weeks.",
        },
        {
          label: "Retention",
          num: "+44",
          sym: "%",
          heading: "Returning customer rate",
          body: "Repeat purchase within 90 days rose from 18% to 26%. Average order value also climbed 12%.",
        },
        {
          label: "Engagement",
          num: "3.2",
          sym: "×",
          heading: "Time on product page",
          body: "Median time-on-page rose from 38s to 122s. Bounce rate fell from 64% to 41%.",
        },
      ],
    },
    beforeAfter: {
      eyebrow: "04 — Before & After",
      headingTop: "Visible difference.",
      headingBottom: "Drag the slider to compare.",
      beforeLabel: "Before · 2025",
      afterLabel: "After · 2026",
      instructions: "★ Drag the orange pin to compare the old and new UI",
    },
    relatedIds: ["p2", "p3", "p4"],
  },
  {
    id: "p2",
    client: "Quartz Analytics",
    industry: "SaaS · B2B Analytics",
    location: "Singapore",
    duration: "4 months",
    year: "2025",
    headline: "Quartz Analytics — cut a 6-week sales cycle to under 5 weeks.",
    lead: "Quartz had strong product-market fit but a website that confused enterprise buyers. We restructured the narrative and rebuilt the dashboard demo flow.",
    gradient: "g2",
    metaPills: [
      { label: "SaaS" },
      { label: "2025" },
      { label: "4 months" },
    ],
    infoCard: [
      { label: "Client", value: "Quartz Analytics Pte" },
      { label: "Industry", value: "B2B Analytics" },
      { label: "Year", value: "2025" },
      { label: "Scope", value: "Design + Build" },
      { label: "Stack", value: "Next.js · Postgres" },
      { label: "Outcome", value: "−20% sales cycle", accent: true },
    ],
    outcomes: [
      { num: "−20%", label: "Sales cycle length" },
      { num: "+38%", label: "Demo-to-trial rate" },
      { num: "3.2×", label: "Inbound qualified leads" },
    ],
    sections: [
      {
        heading: "Challenge",
        paragraphs: [
          "Quartz's marketing site listed every feature but couldn't explain why an enterprise data team should care. Sales calls spent the first 20 minutes re-stating what the website should have said.",
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "Three workshops with founders and the AE team to map the buying committee — analyst, manager, VP, finance. One narrative per persona, layered into the site.",
          "Built an interactive product demo using real (anonymised) data — visitors could explore the dashboard before talking to sales.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Sales cycle dropped 20% on average — partly because trials arrived with much higher intent. Demo-to-trial conversion went from 22% to 30%.",
          "The AE team now opens calls assuming the prospect already knows the basics — a different conversation entirely.",
        ],
      },
    ],
    relatedIds: ["p1", "p3"],
  },
  {
    id: "p3",
    client: "Nordic Cloud",
    industry: "B2B · Cloud Infrastructure",
    location: "Stockholm",
    duration: "5 months",
    year: "2025",
    headline: "Nordic Cloud — doubled qualified leads by rebuilding the developer story.",
    lead: "Nordic Cloud sells infrastructure to engineering leaders. The old site spoke to procurement, not engineers — costing them the technical decision-maker.",
    gradient: "g3",
    metaPills: [
      { label: "B2B" },
      { label: "2025" },
      { label: "5 months" },
    ],
    infoCard: [
      { label: "Client", value: "Nordic Cloud AB" },
      { label: "Industry", value: "Cloud Infrastructure" },
      { label: "Year", value: "2025" },
      { label: "Scope", value: "Design + Build" },
      { label: "Stack", value: "Next.js · MDX docs" },
      { label: "Outcome", value: "2× qualified leads", accent: true },
    ],
    outcomes: [
      { num: "2×", label: "Qualified leads" },
      { num: "+54%", label: "Developer signups" },
      { num: "−31%", label: "Bounce on docs" },
    ],
    sections: [
      {
        heading: "Challenge",
        paragraphs: [
          "Engineers visiting the site needed code examples and architecture diagrams. The site offered marketing copy and a contact form. Developer signups had stagnated for two quarters.",
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "Rebuilt the site as a hybrid marketing + technical resource hub. Every product page now opens with a working code example. Architecture diagrams are first-class content, not afterthoughts.",
          "Docs site moved to MDX with first-party search. Sign-up form moved inline next to each example.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Qualified leads doubled within two quarters. The shift wasn't volume — it was quality. Sales no longer spent calls explaining what the product does.",
        ],
      },
    ],
    relatedIds: ["p2", "p1"],
  },
];

export function findCaseStudy(id: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.id === id);
}
