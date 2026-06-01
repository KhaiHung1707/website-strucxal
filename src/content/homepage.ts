import type { HomePageData } from "@/types/content";

export const homepageData: HomePageData = {
  hero: {
    badgeLabel: "New",
    announceText: "Luma case study — 100% mobile conversion lift",
    headlineTop: "A design and development studio",
    headlineBottom: "for modern brands.",
    lead: "We build beautiful, fast, high-converting web products for e-commerce, SaaS, and brands shipping to a global market.",
    primaryCta: { label: "Start a project →", href: "#contact" },
    secondaryCta: { label: "View portfolio", href: "#work" },
    fanCards: [
      { gradient: "g1", meta: "E-commerce · 2026", name: "Luma Atelier" },
      { gradient: "g2", meta: "SaaS · Dashboard", name: "Quartz Analytics" },
      { gradient: "g3", meta: "B2B · Infra", name: "Nordic Cloud" },
      { gradient: "g4", meta: "Marketplace", name: "Petal Art" },
      { gradient: "g5", meta: "Portfolio · Studio", name: "Atlas Architects" },
    ],
  },

  manifesto: {
    stageLabel: "★ Why we exist",
    number: "01",
    asideLabel: "Philosophy",
    headingHtml: `Why we believe <span class="soft">the web is a product, not a brochure.</span>`,
    paragraphs: [
      "A website isn't marketing material rendered onto a screen. It is the first real touchpoint between a customer and your product — where every buying decision, every emotion about your brand, every ounce of trust is built.",
      "After 12 years building for the web, we've noticed most agencies treat a website like a flat poster. They point at 'beautiful' and 'responsive' and call it done. But users don't care if a page is responsive — they care whether they can finish the job they came here for.",
    ],
    quote: "Every pixel, every loading second, every click should earn its place.",
    closingHtml:
      "That's why we measure success not by Dribbble likes but by <strong>conversion rate, retention, and customer LTV</strong>. That's why every project starts with a discovery workshop instead of a moodboard. And that's why we turn down more than 60% of inquiries — not every project needs us.",
    signature: { initials: "HK", name: "Hung Khai", role: "Founder · Strucxal Studio" },
  },

  logoMarquee: {
    label: "Trusted by 40+ brands across the globe",
    logos: [
      { label: "Luma", style: "symbol" },
      { label: "QUARTZ", style: "bold" },
      { label: "Nordic.cloud", style: "italic" },
      { label: "PETAL/", style: "mono" },
      { label: "Atlas", style: "bold" },
      { label: "Coil ▲" },
      { label: "Glyphic", style: "symbol" },
      { label: "imeld.io", style: "mono" },
    ],
  },

  trust: {
    stageLabel: "★ Studio in numbers",
    eyebrow: "02 — Measured",
    headingTop: "Quality you can",
    headingBottom: "measure in numbers.",
    stats: [
      { value: "0", label: "Live projects shipped in five years", countTo: 40, suffix: "+" },
      { value: "0", label: "Countries our clients ship to", countTo: 12 },
      { value: "0", label: "Average Lighthouse score", countTo: 95, suffix: "+" },
      { value: "$24", unit: "M", label: "Estimated revenue impact for clients" },
    ],
    tech: [
      { icon: "N", name: "Next.js 15" },
      { icon: "TS", name: "TypeScript" },
      { icon: "⚡", name: "Tailwind" },
      { icon: "◐", name: "Supabase" },
      { icon: "$", name: "Stripe" },
      { icon: "▲", name: "Vercel" },
      { icon: "F", name: "Figma" },
      { icon: "S", name: "Sanity" },
    ],
  },

  caseCarousel: {
    stageLabel: "★ Selected work",
    eyebrow: "03 — Case studies",
    headingTop: "Real outcomes.",
    headingBottom: "Real customers.",
    lead: "Each card is a concrete business result we helped a client reach. Drag to explore.",
    items: [
      { gradient: "g1", meta: "E-commerce", stat: "100", statUnit: "%", title: "Luma Atelier doubled mobile conversion after redesign" },
      { gradient: "g2", meta: "SaaS", stat: "20", statUnit: "%", title: "Quartz cut sales cycle by a fifth" },
      { gradient: "g3", meta: "B2B Infra", stat: "2", statUnit: "x", title: "Nordic Cloud doubled qualified leads" },
      { gradient: "g4", meta: "Marketplace", stat: "70", statUnit: "%", title: "Petal lowered artist onboarding cost" },
      { gradient: "g5", meta: "Portfolio", stat: "100", statUnit: "%", title: "Atlas Architects hit full internal adoption" },
    ],
  },

  textMarquee: [
    { text: "Pixel-perfect design" },
    { text: "Production-grade code" },
    { text: "Real business results" },
    { text: "Senior team only" },
    { text: "Pixel-perfect design" },
    { text: "Production-grade code" },
    { text: "Real business results" },
    { text: "Senior team only" },
  ],

  portfolio: {
    eyebrow: "04 — Portfolio",
    headingTop: "Selected projects.",
    headingBottom: "Each one a story.",
    rows: [
      { id: "p1", number: "01", title: "Luma Atelier", metaItems: ["E-commerce", "London · 2026", "6 months"], stat: "+100%", gradient: "g1", previewTag: "★ Featured", previewIndustry: "E-COMMERCE" },
      { id: "p2", number: "02", title: "Quartz Analytics", metaItems: ["SaaS Dashboard", "Singapore · 2025", "4 months"], stat: "−20%", gradient: "g2", previewTag: "SaaS", previewIndustry: "DASHBOARD" },
      { id: "p3", number: "03", title: "Nordic Cloud", metaItems: ["B2B Infrastructure", "Stockholm · 2025", "5 months"], stat: "2×", gradient: "g3", previewTag: "B2B", previewIndustry: "INFRASTRUCTURE" },
      { id: "p4", number: "04", title: "Petal Art Market", metaItems: ["Marketplace", "Berlin · 2025", "7 months"], stat: "−70%", gradient: "g4", previewTag: "Marketplace", previewIndustry: "ART · DESIGN" },
      { id: "p5", number: "05", title: "Atlas Architects", metaItems: ["Studio Portfolio", "Milan · 2024", "3 months"], stat: "100%", gradient: "g5", previewTag: "Studio", previewIndustry: "ARCHITECTURE" },
      { id: "p6", number: "06", title: "Coil Wallet", metaItems: ["FinTech App", "London · 2024", "8 months"], stat: "+87%", gradient: "g2", previewTag: "FinTech", previewIndustry: "WALLET APP" },
    ],
    viewAll: { caption: "★ 6 of 40 completed projects", cta: { label: "See full portfolio →", href: "/work" } },
  },

  services: {
    stageLabel: "★ How we work",
    eyebrow: "05 — Services",
    headingTop: "One team.",
    headingBottom: "Every stage of the product.",
    lead: "From first idea to production release. We stay close — designing, building, and optimising the whole way.",
    tabs: [
      { title: "Interface design", desc: "Figma design systems, wireframes, prototypes — handed off ready for engineering. A fit when you already have a tech team." },
      { title: "Web app development", desc: "Next.js, React, TypeScript. Custom logic, integrations with Supabase / Stripe / your CMS, deployed production-ready." },
      { title: "Optimise & scale", desc: "Performance audits, UX upgrades, A/B testing, traffic scale-up. Built for products that are already live and chasing growth." },
    ],
    panels: [
      {
        label: "Design",
        nodes: [
          { tag: "brief", text: "Discovery and needs" },
          { tag: "figma", text: "Design system + prototype" },
          { tag: "handoff", text: "Component-ready files" },
        ],
      },
      {
        label: "Build",
        nodes: [
          { tag: "next.js", text: "Next.js 15 + TypeScript" },
          { tag: "stack", text: "Tailwind · Supabase · Stripe" },
          { tag: "deploy", text: "Production on Vercel" },
        ],
      },
      {
        label: "Grow",
        nodes: [
          { tag: "audit", text: "Performance + UX audit" },
          { tag: "iterate", text: "Two-week sprints" },
          { tag: "scale", text: "CRO + A/B testing" },
        ],
      },
    ],
  },

  process: {
    eyebrow: "06 — Process",
    stageLabel: "★ How we ship",
    headingTop: "Six phases.",
    headingBottom: "Zero surprises.",
    lead: "Not a marketing slogan — this is how we kick off, build, and hand over every single project.",
    cards: [
      {
        number: "01",
        phase: "Discovery",
        title: "Understand you before designing",
        desc: "A 90-minute workshop to map business goals, audience, and success metrics. No guesswork — we work from real data.",
        duration: "≈ 1 week",
        tone: "accent",
      },
      {
        number: "02",
        phase: "Strategy",
        title: "Information architecture first",
        desc: "Sitemap, user flow, content strategy — everything is structured on paper before any pixel is pushed.",
      },
      {
        number: "03",
        phase: "Design",
        title: "Design system, not screens",
        desc: "Wireframe → high-fidelity → interactive prototype. Tokens, components, and states documented for engineering handoff.",
        tone: "dark",
      },
      {
        number: "04",
        phase: "Build",
        title: "Production-grade code",
        desc: "Next.js, TypeScript, component library. Lighthouse 95+. Accessible by default. Documented for your team to own long-term.",
        duration: "≈ 4-8 weeks",
      },
      {
        number: "05",
        phase: "Launch",
        title: "Handover & training",
        desc: "Docs, recorded walkthrough, 30 days of free support after go-live. Your team owns the codebase from day one.",
        tone: "dark",
      },
      {
        number: "06",
        phase: "Grow",
        title: "Optimise & expand",
        desc: "Optional retainer — two-week sprints of continuous improvement based on real user behaviour after launch.",
        tone: "accent",
      },
    ],
  },

  compare: {
    stageLabel: "★ Why us",
    eyebrow: "07 — Why pick Strucxal",
    headingTop: "Different from a traditional agency.",
    headingBottom: "Compared line by line.",
    cards: [
      {
        tag: "Option 1",
        title: "Traditional agency",
        rows: [
          { label: "Team size", val: "20-100+ people" },
          { label: "Cost", val: "$30k-100k+", tone: "bad" },
          { label: "Timeline", val: "4-9 months", tone: "bad" },
          { label: "Who actually builds", val: "Juniors", tone: "ok" },
          { label: "Communication", val: "Through a PM", tone: "ok" },
          { label: "Flexibility", val: "Low", tone: "bad" },
        ],
      },
      {
        tag: "★ Strucxal Studio",
        title: "Boutique studio",
        featured: true,
        rows: [
          { label: "Team size", val: "3-5 seniors" },
          { label: "Cost", val: "$8k-25k", tone: "good" },
          { label: "Timeline", val: "6-12 weeks", tone: "good" },
          { label: "Who actually builds", val: "Seniors, hands-on", tone: "good" },
          { label: "Communication", val: "Direct 1:1", tone: "good" },
          { label: "Flexibility", val: "High", tone: "good" },
        ],
      },
      {
        tag: "Option 3",
        title: "Solo freelancer",
        rows: [
          { label: "Team size", val: "1 person" },
          { label: "Cost", val: "$2k-8k", tone: "good" },
          { label: "Timeline", val: "4-8 weeks" },
          { label: "Who actually builds", val: "That same person", tone: "good" },
          { label: "Communication", val: "Direct", tone: "good" },
          { label: "Flexibility", val: "Depends on schedule", tone: "ok" },
        ],
      },
    ],
  },

  testimonials: {
    eyebrow: "08 — What clients say",
    headingTop: "Trust earned",
    headingBottom: "one project at a time.",
    items: [
      {
        quote:
          "Strucxal didn't just make a beautiful site — they understood our product better than we did. Three months in, our conversion rate doubled.",
        initials: "SM",
        name: "Sarah Martin",
        role: "CEO, Luma Atelier",
        companyStat: "E-COMMERCE · LONDON",
      },
      {
        quote:
          "Extremely professional team. Deadlines hit to the day, clean code, easy to maintain. A 10/10 recommendation if you have a technical team.",
        initials: "DK",
        name: "David Kim",
        role: "CTO, Quartz Analytics",
        companyStat: "SAAS · SINGAPORE",
      },
      {
        quote:
          "They changed how we think about the web. Not a brochure — a product that actually generates revenue.",
        initials: "EP",
        name: "Emma Petrov",
        role: "Founder, Nordic Cloud",
        companyStat: "B2B INFRA · STOCKHOLM",
      },
    ],
  },

  faq: {
    eyebrow: "09 — Frequently asked",
    headingTop: "Got questions?",
    headingBottom: "Here are the answers.",
    asideNote: "Don't see your question? Reach out directly — we reply within 24 hours.",
    asideCta: { label: "Contact us →", href: "#contact" },
    items: [
      {
        question: "How long does a project usually take?",
        answer:
          "Depends on the scope. A simple landing page is two to three weeks. A 5-10 page marketing site is roughly six to eight weeks. A custom web app with backend or database typically takes three to six months. We commit to a specific timeline after the discovery workshop.",
      },
      {
        question: "How is pricing calculated?",
        answer:
          "We quote a fixed price after the discovery workshop — no hourly billing. That means you know the total upfront and won't be surprised by extra invoices. Pricing depends on scope: simple landings from $2,400, full-stack web apps from $8,000+.",
      },
      {
        question: "Do I keep the source code?",
        answer:
          "Yes — all source code, design files, and assets are 100% yours after delivery. We commit code to your Git repository, transfer Figma files to your workspace, and document everything so your team can take over maintenance.",
      },
      {
        question: "What happens after launch?",
        answer:
          "You get 30 days of free support — bug fixes, small adjustments, training your team. After that, if you want to keep working together, we offer a retainer with two-week sprints of continuous improvement.",
      },
      {
        question: "Do you work with international clients?",
        answer:
          "Yes — most of our clients are in the US, UK, EU, and Singapore. We work async-first via Slack/Notion/Linear with one or two Zoom sync sessions a week. Our timezone overlaps cleanly with APAC and morning/afternoon EU.",
      },
      {
        question: "I already have a tech team — can I hire just design?",
        answer:
          "Absolutely. Our design-only package includes wireframes, design system, high-fidelity mockups, interactive prototypes, and a handoff file ready for development. We can also join design reviews while your team builds.",
      },
    ],
  },

  finalCta: {
    headingTop: "Let's build",
    headingBottom: "your future.",
    lead: "A free 30-minute discovery call. No commitment. Just a conversation about your project.",
    primaryCta: { label: "Book a discovery call →", href: "/contact" },
    secondaryCta: { label: "hello@strucxal.studio", href: "mailto:hello@strucxal.studio" },
  },
};
