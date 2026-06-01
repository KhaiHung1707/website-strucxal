import type { PricingPageData } from "@/types/content";
import { homepageData } from "./homepage";

export const pricingData: PricingPageData = {
  pageHero: {
    eyebrow: "★ Pricing",
    headingTop: "Fixed prices.",
    headingBottom: "Quoted after a real conversation.",
    lead: "We don't bill hourly. After a discovery workshop we send one fixed quote — you know the total upfront, with no surprise invoices.",
  },

  tiers: [
    {
      tag: "Starter",
      name: "Landing page",
      price: "$2.4k",
      priceUnit: "from",
      desc: "One-page launch site or campaign landing — fast, beautiful, conversion-tuned.",
      features: [
        "1–2 week timeline",
        "Custom design, no templates",
        "Responsive mobile + desktop",
        "Basic CMS for copy edits",
        "Analytics + form setup",
        "Deployment on Vercel",
      ],
      cta: { label: "Start a project →", href: "/contact" },
    },
    {
      tag: "★ Most popular",
      name: "Marketing site",
      price: "$8k",
      priceUnit: "from",
      desc: "Full multi-page brand site with CMS, blog, and a real conversion narrative.",
      features: [
        "6–8 week timeline",
        "5–10 page architecture",
        "Custom component library",
        "Sanity / Payload CMS integration",
        "Blog + case study templates",
        "Lighthouse 95+ guaranteed",
        "30 days post-launch support",
      ],
      cta: { label: "Book discovery call →", href: "/contact" },
      featured: true,
    },
    {
      tag: "Custom",
      name: "Web application",
      price: "$25k",
      priceUnit: "from",
      desc: "SaaS, marketplace, or product with custom logic — design system, frontend, backend, integrations.",
      features: [
        "3–6 month timeline",
        "Discovery + tech strategy phase",
        "Custom design system",
        "Next.js + TypeScript codebase",
        "Auth, payments, database",
        "Third-party integrations",
        "QA + production deployment",
        "30 days post-launch support",
      ],
      cta: { label: "Discuss scope →", href: "/contact" },
    },
  ],

  compare: homepageData.compare,

  faq: {
    eyebrow: "★ Pricing questions",
    headingTop: "Common questions",
    headingBottom: "about cost & scope.",
    asideNote: "Have a specific budget in mind? Tell us — we'll be honest about what fits.",
    asideCta: { label: "Talk to us →", href: "/contact" },
    items: [
      {
        question: "Why fixed price instead of hourly?",
        answer:
          "Hourly billing creates the wrong incentives — slower work means more revenue for the agency. We quote a fixed price after the discovery workshop so you know the total upfront and we're motivated to ship quality fast.",
      },
      {
        question: "What's not included?",
        answer:
          "Third-party costs are billed at cost: domain, hosting (Vercel ~ $20/mo), CMS subscription (Sanity free → $99/mo), analytics, email service, image CDN. We never mark these up.",
      },
      {
        question: "Can I pay in installments?",
        answer:
          "Yes. Standard split is 40% kickoff, 30% on design sign-off, 30% on go-live. For longer engagements we can break it into monthly milestones — happy to discuss.",
      },
      {
        question: "What if the scope changes mid-project?",
        answer:
          "Small adjustments are included. Material scope changes are quoted as a change order — you decide whether to add them now or keep them for a Phase 2.",
      },
      {
        question: "Do you do retainers?",
        answer:
          "Yes — after launch we offer two-week sprints at a fixed monthly rate. Useful when you want continuous improvement, A/B tests, or feature work without re-scoping every time.",
      },
    ],
  },

  finalCta: homepageData.finalCta,
};
