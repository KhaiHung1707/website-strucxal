import type { ContactPageData } from "@/types/content";

export const contactData: ContactPageData = {
  hero: {
    eyebrow: "01 — Contact",
    headingTop: "Let's talk about",
    headingBottom: "your project.",
    lead: "We read every inquiry within 24 hours and reply with a concrete proposal. No bots, no sales pitch — just a person-to-person conversation.",
    quickLabel: "★ Or reach out directly",
    quickRows: [
      { key: "EMAIL", value: "hello@strucxal.studio", copyIcon: "⎘" },
      { key: "LINKEDIN", value: "/strucxal-studio", copyIcon: "↗" },
      { key: "UPWORK", value: "Top Rated Plus", copyIcon: "↗" },
      { key: "PHONE", value: "+84 905 ••• •••", copyIcon: "⎘" },
    ],
    form: {
      stepLabel: "★ Inquiry · ~3 minutes",
      heading: "Start with a few questions.",
      sub: "Your answers help us prepare for the first call properly.",
      submitLabel: "Send inquiry →",
      footnote: "★ Reply within 24 hours · Your details stay confidential",
      projectTypes: ["E-commerce", "SaaS / Web app", "Marketing site", "Redesign", "Other"],
      defaultProjectType: "E-commerce",
      budgets: ["$2k – $8k", "$8k – $25k", "$25k – $50k", "$50k+"],
      defaultBudget: "$8k – $25k",
      fieldLabels: {
        name: "Full name",
        namePlaceholder: "Your name",
        email: "Work email",
        emailPlaceholder: "you@company.com",
        company: "Company",
        companyPlaceholder: "Brand or company",
        website: "Current website",
        websitePlaceholder: "https://example.com",
        projectType: "Project type",
        budget: "Estimated budget",
        message: "Project summary",
        messagePlaceholder:
          "What are you building? What's the main goal? What's the desired timeline?",
      },
    },
  },

  response: {
    eyebrow: "02 — Commitment",
    headingTop: "We don't keep",
    headingBottom: "you waiting.",
    body: "Every inquiry is reviewed within 24 business hours — by a real person, not an auto-reply. If we're not the right fit, we'll point you to a studio who is.",
    cardLabel: "★ Response time",
    cardNum: "< 24",
    cardUnit: "hours",
    cardPitch:
      "\"We answer fast not because we're idle — but because it's how we respect your time.\"",
    cardSub:
      "Median 4.2 hours during working hours (GMT+7). Weekends and holidays can run slower — but never beyond 48 hours.",
  },

  bookCall: {
    eyebrow: "03 — Book a call",
    headingTop: "30-minute discovery call.",
    headingBottom: "Free. No commitment.",
    pitchHeading: "What you get from 30 minutes",
    pitchBody:
      "This isn't a sales call. It's an open conversation to figure out whether we should work together. If we shouldn't, we'll still leave you with something useful.",
    perks: [
      {
        title: "Quick project assessment",
        body: "We listen, ask the right questions, and give you our honest take.",
      },
      {
        title: "Rough scope & timeline estimate",
        body: "You'll leave the call with a price range and a timeline to reference.",
      },
      {
        title: "Concrete next steps",
        body: "Including when we're not the right fit — we'll recommend another studio.",
      },
      {
        title: "No pitch deck, no sales",
        body: "Just a real conversation — we respect your time.",
      },
    ],
    calendarMonth: "June 2026",
    dayLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    days: [
      { day: 26, state: "disabled" },
      { day: 27, state: "disabled" },
      { day: 28, state: "disabled" },
      { day: 29, state: "disabled" },
      { day: 30, state: "disabled" },
      { day: 31, state: "disabled" },
      { day: 1, state: "available" },
      { day: 2, state: "available" },
      { day: 3, state: "available" },
      { day: 4, state: "today" },
      { day: 5, state: "available" },
      { day: 6, state: "available" },
      { day: 7, state: "default" },
      { day: 8, state: "default" },
      { day: 9, state: "available" },
      { day: 10, state: "available" },
      { day: 11, state: "available" },
      { day: 12, state: "available" },
      { day: 13, state: "available" },
      { day: 14, state: "default" },
      { day: 15, state: "default" },
      { day: 16, state: "available" },
      { day: 17, state: "available" },
      { day: 18, state: "available" },
      { day: 19, state: "available" },
      { day: 20, state: "available" },
      { day: 21, state: "default" },
      { day: 22, state: "default" },
      { day: 23, state: "available" },
      { day: 24, state: "available" },
      { day: 25, state: "available" },
      { day: 26, state: "available" },
      { day: 27, state: "available" },
      { day: 28, state: "default" },
      { day: 29, state: "default" },
    ],
    selectedDay: 4,
    slotsLabel: "★ Wed, June 4 · GMT+7",
    slots: [
      { time: "09:00" },
      { time: "10:00", unavailable: true },
      { time: "11:00" },
      { time: "14:00" },
      { time: "15:00" },
      { time: "16:00" },
      { time: "17:00", unavailable: true },
      { time: "19:00" },
      { time: "20:00" },
    ],
    selectedSlot: "14:00",
  },

  channels: {
    eyebrow: "04 — Other channels",
    headingTop: "Pick the channel you prefer.",
    headingBottom: "We're on more than a few.",
    items: [
      {
        icon: "@",
        title: "Email (fastest)",
        desc:
          "The fastest way to get a detailed reply. Best when you want to share docs, longer briefs, or specific questions.",
        metaPills: ["★ Recommended", "< 24h reply"],
        value: "hello@strucxal.studio",
        href: "mailto:hello@strucxal.studio",
        featured: true,
      },
      {
        icon: "in",
        title: "LinkedIn",
        desc:
          "Connect and follow the team. Best for networking and casual-style inquiries.",
        metaPills: ["Public", "~48h reply"],
        value: "/strucxal-studio",
        href: "#",
      },
      {
        icon: "U",
        title: "Upwork",
        desc:
          "Top Rated Plus with 100% Job Success. A fit when you want escrow-protected payment.",
        metaPills: ["Verified", "100% JS"],
        value: "Hung Khai · Hire on Upwork",
        href: "#",
      },
      {
        icon: "𝕏",
        title: "Twitter / X",
        desc:
          "DMs open. Follow for design tips, behind-the-scenes work, and new project announcements.",
        metaPills: ["DMs open", "2.4k followers"],
        value: "@strucxalstudio",
        href: "#",
      },
      {
        icon: "D",
        title: "Dribbble",
        desc:
          "Visual portfolio updated weekly. You can also message us directly via Dribbble Hire.",
        metaPills: ["For hire ✓", "86 shots"],
        value: "@strucxal",
        href: "#",
      },
      {
        icon: "☎",
        title: "Phone / WhatsApp",
        desc:
          "For existing clients or urgent inquiries. Please email first to schedule a time.",
        metaPills: ["By appointment", "GMT+7"],
        value: "+84 905 ••• •••",
        href: "tel:+84905000000",
      },
    ],
  },

  location: {
    eyebrow: "05 — Location",
    headingTop: "Headquartered in Nha Trang.",
    headingBottom: "Serving worldwide.",
    lead: "The studio is based in Vietnam, but we work async with clients across 12 countries. The Vietnam timezone overlaps cleanly with Asia and Europe.",
    cards: [
      {
        variant: "hq",
        tag: "★ HQ · Vietnam",
        heading: "Nha Trang, Vietnam",
        addressHtml: "82 Tran Phu Street, Loc Tho Ward<br/>Nha Trang City, Khanh Hoa Province",
        rows: [
          { key: "Timezone", value: "GMT+7" },
          { key: "Status", value: "Online now", live: true },
          { key: "Hours", value: "09:00 — 18:00, Mon–Fri" },
        ],
        showPin: true,
      },
      {
        variant: "remote",
        tag: "Async · Global",
        heading: "Async-first remote",
        addressHtml:
          "Clients across UK, US, Singapore, Australia, Tokyo, EU<br/>Working through Slack, Notion, Linear, Loom",
        rows: [
          { key: "Tools", value: "Slack · Notion · Linear" },
          { key: "Meeting", value: "Zoom · Google Meet" },
          { key: "Overlap hours", value: "9h–17h GMT+7" },
        ],
      },
    ],
  },

  faq: {
    eyebrow: "06 — Frequently asked",
    headingTop: "Before you send an inquiry.",
    headingBottom: "A few things that might help.",
    items: [
      {
        q: "What should I prepare for the call?",
        a: "The more specific the better: business goals, target audience, desired deadline, and budget range. If you have wireframes or design references — send them along. If you have none yet — that's fine too, we'll help you think it through.",
      },
      {
        q: "Should we sign an NDA before talking?",
        a: "Yes if you need to. Email us with your NDA template or ask for our standard one. All conversations are confidential by default whether or not there's a formal NDA in place.",
      },
      {
        q: "I'm in a hurry — do you take rush projects?",
        a: "Yes, but with a 25–40% rush fee. Rush projects are usually smaller in scope (landing pages, 1–3 page redesigns). Full-scale web apps can't be rushed — quality doesn't compress.",
      },
      {
        q: "My budget is below $8k — can you still help?",
        a: "Depends on scope. A simple landing page or design-only engagement can start at $2.4k. If your budget is truly small, we'd rather refer a trusted freelancer than squeeze quality. Not every project needs a studio.",
      },
      {
        q: "I'm in US/EU — is the timezone an issue?",
        a: "We're async-first, so timezone isn't a big deal. There's 2–3 hours of overlap per day for meetings when needed. Most US/EU clients appreciate the \"wake up to progress\" rhythm — we work while you sleep.",
      },
      {
        q: "Do you have Q3 2026 slots open?",
        a: "Two slots remain in Q3 (July–September). Q4 is booking now. If you lock something in June, we can kick off in July. Earlier inquiries get priority on slot selection.",
      },
    ],
    footText: "Don't see your question? Just send the inquiry — we'll answer anything specific.",
    footCtaLabel: "Back to inquiry form →",
    footCtaHref: "#s1",
  },
};
