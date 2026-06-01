import type { ServicesPageData } from "@/types/content";
import { homepageData } from "./homepage";

export const servicesPageData: ServicesPageData = {
  hero: {
    eyebrow: "01 — Our services",
    headingTop: "Every stage.",
    headingBottom: "One team.",
    lead: "From first idea, through design system, into production deployment and post-launch tuning — we run with you across the whole lifecycle of your web product.",
    quickNavLabel: "Jump to ↓",
    quickNav: [
      { label: "UI/UX Design", href: "#s2" },
      { label: "Web app development", href: "#s2" },
      { label: "E-commerce", href: "#s2" },
      { label: "Optimization", href: "#s2" },
      { label: "Retainer", href: "#s5" },
    ],
    selector: {
      pre: "★ Find the right service",
      heading: "Where are you in your product journey?",
      rows: [
        { num: "01", text: "Just starting — need ideas and validation", href: "#s2" },
        { num: "02", text: "Have an idea — need a UI/UX design", href: "#s2" },
        { num: "03", text: "Have designs — need engineers to build production", href: "#s2" },
        { num: "04", text: "Already live — want to improve and scale", href: "#s2" },
        { num: "05", text: "Need a long-term partner — retainer model", href: "#s5" },
      ],
    },
  },

  detail: {
    eyebrow: "02 — Deep dive",
    headingTop: "Each service, unpacked.",
    headingBottom: "Know exactly what you get.",
    items: [
      {
        num: "01 · Design",
        visual: "design",
        headingHtml: "Interface design<br/>& design system",
        body: "Wireframe → high-fidelity → interactive prototype. Component-based design with Figma Variables, ready for engineering handoff. The right fit when you already have a tech team and only need design.",
        deliverables: [
          "90-minute discovery workshop",
          "User journey + sitemap",
          "Design system with synced tokens",
          "Interactive prototype in Figma",
          "Dev handoff docs + component spec",
        ],
        meta: [
          { label: "From", value: "$3,200" },
          { label: "Timeline", value: "3–5 weeks" },
          { label: "Feedback rounds", value: "3 rounds" },
        ],
      },
      {
        num: "02 · Development",
        visual: "development",
        reverse: true,
        headingHtml: "Web app development,<br/>production-grade",
        body: "Next.js 15 + TypeScript + Tailwind. Custom logic, backend integration (Supabase, Stripe, CMS), performance, accessibility, SEO. Clean code, documented, easy for your team to maintain.",
        deliverables: [
          "Next.js 16 with App Router",
          "TypeScript strict mode",
          "Component library + Storybook",
          "60%+ test coverage with Vitest",
          "Lighthouse 95+ guaranteed",
          "CI/CD pipeline on Vercel",
        ],
        meta: [
          { label: "From", value: "$8,000" },
          { label: "Timeline", value: "6–12 weeks" },
          { label: "Support", value: "30 days" },
        ],
      },
      {
        num: "03 · Growth",
        visual: "growth",
        headingHtml: "Conversion optimization<br/>& scale traffic",
        body: "Full audit of performance, UX, and funnel. Continuous A/B testing. Recommendations driven by real Analytics + heatmap data. For products that are already live and chasing growth.",
        deliverables: [
          "Detailed UX + performance audit",
          "Analytics + heatmap setup (PostHog)",
          "A/B testing framework",
          "Two-week sprint cadence",
          "Monthly metrics report",
        ],
        meta: [
          { label: "From", value: "$2,400/mo" },
          { label: "Commitment", value: "3 months" },
          { label: "Sprint", value: "2 weeks" },
        ],
      },
    ],
  },

  timeline: {
    eyebrow: "03 — Project roadmap",
    headingTop: "12 weeks from kick-off to launch.",
    headingBottom: "Each week ships a concrete deliverable.",
    lead: "This is the typical timeline for a \"Studio\" engagement — the $8,000 tier. Every phase has a clear deliverable so you can track progress.",
    steps: [
      { week: "Week 0", title: "Kick-off", body: "90-minute discovery workshop. Map goals, audience, success metrics.", deliverable: "✓ Project brief" },
      { week: "Week 1-2", title: "Strategy", body: "Sitemap, user flow, content strategy. References & moodboard.", deliverable: "✓ Wireframes v1" },
      { week: "Week 3-4", title: "Design", body: "High-fidelity design system + interactive Figma prototype.", deliverable: "✓ Design v2 + review" },
      { week: "Week 5-8", title: "Build", body: "Next.js + TypeScript code. CI/CD setup. Weekly staging env.", deliverable: "○ Staging deploy", future: true },
      { week: "Week 9-10", title: "Polish", body: "Full QA, a11y audit, performance, cross-browser testing.", deliverable: "○ Production-ready", future: true },
      { week: "Week 11", title: "Launch", body: "Go-live, domain setup, monitoring active, team training.", deliverable: "○ Live ✓", future: true },
      { week: "Week 12+", title: "Support", body: "30 days post-launch support. Bug fixes, small tweaks, continued training.", deliverable: "○ Handoff complete", future: true },
    ],
  },

  addons: {
    eyebrow: "04 — Add-ons",
    headingTop: "Extend flexibly.",
    headingBottom: "À la carte service.",
    items: [
      { icon: "EN", title: "Bilingual EN/VN", desc: "Full bilingual site with i18n routing. Two-way content sync via CMS.", priceCurrency: "$", priceValue: "800", priceLabel: "From" },
      { icon: "$", title: "Stripe integration", desc: "Full payments, webhooks, subscriptions, automatic invoicing. PCI-compliant.", priceCurrency: "$", priceValue: "1,200", priceLabel: "From" },
      { icon: "▦", title: "CMS setup", desc: "Sanity / Strapi / Payload — content editor friendly for your marketing team.", priceCurrency: "$", priceValue: "1,500", priceLabel: "From" },
      { icon: "A11Y", title: "A11y audit & fix", desc: "WCAG 2.1 AA compliance. Screen reader test, keyboard nav, color contrast fixes.", priceCurrency: "$", priceValue: "900", priceLabel: "From" },
      { icon: "▲", title: "Analytics setup", desc: "GA4 + PostHog event tracking. Custom dashboards, funnel analysis, heatmap.", priceCurrency: "$", priceValue: "600", priceLabel: "From" },
      { icon: "SE", title: "SEO foundation", desc: "Schema markup, sitemap, robots, meta optimization, Core Web Vitals fixes.", priceCurrency: "$", priceValue: "700", priceLabel: "From" },
    ],
  },

  engagement: {
    eyebrow: "05 — How we work",
    headingTop: "Two ways to work together.",
    headingBottom: "Same senior team.",
    lead: "Pick fixed-price for clearly-scoped projects, retainer for long-running partnerships continuously improving the product.",
    cards: [
      {
        tag: "★ Fixed-price project",
        title: "Fixed-price engagement",
        pitch: "Fixed quote after the workshop. Clear scope, clear deadline, clear deliverables. No surprise invoices.",
        features: [
          "Fixed scope, weekly milestones",
          "Three feedback rounds in design",
          "Same team throughout the project",
          "30 days post-launch support",
          "Full source code + docs",
          "Fit for: new product launch, redesign",
        ],
        price: "$8k – $50k",
        priceUnit: "total project",
        cta: { label: "Book a call →", href: "/contact" },
      },
      {
        tag: "★ Retainer / Partnership",
        title: "Long-term partnership",
        pitch: "A dedicated senior team for you. Two-week sprints. Continuous design, build, optimize. Great fit for growth-stage startups.",
        features: [
          "Two-week sprint cadence — predictable rhythm",
          "Shared Slack channel, async-first",
          "Roadmap shared with your team (Linear)",
          "Monthly metrics + retro report",
          "Priority queue for bugs and hotfixes",
          "Fit for: scale, A/B tests, ongoing features",
        ],
        price: "$4.5k – $15k",
        priceUnit: "per month",
        cta: { label: "Explore partnership →", href: "/contact" },
        featured: true,
      },
    ],
  },

  matrix: {
    eyebrow: "06 — Clear scope",
    headingTop: "What we do,",
    headingBottom: "and what we don't.",
    lead: "The clearer up-front, the more time we save each other. Here's how we define scope to avoid mismatches.",
    doTag: "✓ We do this",
    doHeading: "What we're great at",
    doItems: [
      { title: "Custom web apps & SaaS", sub: "Next.js, React, TypeScript. Supabase, Stripe, CMS integrations." },
      { title: "Modern e-commerce", sub: "Shopify Hydrogen, Medusa, custom checkout. B2B/B2C." },
      { title: "Landing & marketing sites", sub: "Conversion-tuned, A/B testing, high performance benchmarks." },
      { title: "Design system & component library", sub: "Figma tokens synced with code. Storybook, full docs." },
      { title: "Brand strategy + visual identity", sub: "For early-stage startups — logo, type, color, voice." },
    ],
    dontTag: "✕ We don't do this",
    dontHeading: "What we turn down",
    dontItems: [
      { title: "WordPress / Wix template setup", sub: "Drag-and-drop builders aren't our craft — you don't need a studio for that." },
      { title: "Native mobile apps (iOS/Android)", sub: "We only build responsive web + PWA. Native needs a different studio." },
      { title: "Standalone logo / brand identity", sub: "Brand work only ships alongside a full-scope web project. No standalone branding." },
      { title: "SEO content & link building", sub: "We set the technical SEO foundation. Content writing and link building sit with a different agency." },
      { title: "Open-ended maintenance with no spec", sub: "Bug fixes after the 30-day warranty need a retainer. We don't do \"just fix one thing\"." },
    ],
  },

  finalCta: homepageData.finalCta,
};
