/**
 * Content types shared by mock data (POC) and the future Payload CMS schema.
 * Each interface here maps to a Payload Collection or Block to make migration trivial.
 */

export type GradientKey = "g1" | "g2" | "g3" | "g4" | "g5";

export interface FanCard {
  /** Maps to Payload field: gradientKey (radio: g1|g2|g3|g4|g5) */
  gradient: GradientKey;
  /** e.g. "E-commerce · 2026" */
  meta: string;
  /** Project / client name */
  name: string;
  /** Optional fallback when image is missing */
  svgMockId?: number;
}

export interface HeroBlock {
  badgeLabel: string; // "New"
  announceText: string; // "Luma case study — 100% mobile conversion"
  headlineTop: string;
  headlineBottom: string;
  lead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  fanCards: FanCard[]; // exactly 5
}

export interface ManifestoBlock {
  stageLabel: string;
  number: string;
  asideLabel: string;
  headingHtml: string; // contains <span class="soft"> markup
  paragraphs: string[];
  quote: string;
  closingHtml: string;
  signature: { initials: string; name: string; role: string };
}

export interface LogoItem {
  label: string;
  style?: "bold" | "italic" | "mono" | "symbol" | "regular";
}

export interface TrustBlockData {
  stageLabel: string;
  eyebrow: string;
  headingTop: string;
  headingBottom: string;
  stats: { value: string; unit?: string; label: string; countTo?: number; suffix?: string }[];
  tech: { icon: string; name: string }[];
}

export interface CaseItem {
  gradient: GradientKey;
  meta: string; // "E-commerce"
  stat: string; // "100"
  statUnit: string; // "%"
  title: string;
}

export interface CaseCarouselBlock {
  stageLabel: string;
  eyebrow: string;
  headingTop: string;
  headingBottom: string;
  lead: string;
  items: CaseItem[];
}

export interface MarqueePhrase {
  text: string;
}

export interface WorkRow {
  id: string;
  number: string; // "01"
  title: string;
  metaItems: string[]; // ["E-commerce", "London · 2026", "6 months"]
  stat: string; // "+100%"
  gradient: GradientKey;
  previewTag: string;
  previewIndustry: string;
  category?: string; // grouping key for filters on /work page (e.g. "E-commerce", "SaaS")
}

export interface PortfolioBlock {
  eyebrow: string;
  headingTop: string;
  headingBottom: string;
  rows: WorkRow[];
  viewAll: { caption: string; cta: { label: string; href: string } };
}

export interface ServicePanel {
  label: string;
  nodes: { tag: string; text: string }[]; // 3 mock nodes
}
export interface ServiceTab {
  title: string;
  desc: string;
}
export interface ServicesBlock {
  stageLabel: string;
  eyebrow: string;
  headingTop: string;
  headingBottom: string;
  lead: string;
  tabs: ServiceTab[];
  panels: ServicePanel[];
}

export interface ProcessCard {
  number: string; // "01"
  phase: string; // "Discovery"
  title: string; // "Understand you before designing"
  desc: string;
  duration?: string; // e.g. "≈ 1 week"
  tone?: "default" | "dark" | "accent";
}
export interface ProcessBlock {
  eyebrow: string;
  stageLabel?: string;
  headingTop: string;
  headingBottom: string;
  lead?: string;
  cards: ProcessCard[];
}

export interface CompareCard {
  tag: string;
  title: string;
  featured?: boolean;
  rows: { label: string; val: string; tone?: "good" | "ok" | "bad" }[];
}
export interface CompareBlock {
  stageLabel: string;
  eyebrow: string;
  headingTop: string;
  headingBottom: string;
  cards: CompareCard[];
}

export interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  role: string;
  companyStat: string;
}
export interface TestimonialsBlock {
  eyebrow: string;
  headingTop: string;
  headingBottom: string;
  items: Testimonial[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
export interface FaqBlock {
  eyebrow: string;
  headingTop: string;
  headingBottom: string;
  asideNote: string;
  asideCta: { label: string; href: string };
  items: FaqItem[];
}

export interface FinalCtaBlock {
  headingTop: string;
  headingBottom: string;
  lead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface FooterData {
  newsletterHeadlineTop: string;
  newsletterHeadlineBottom: string;
  newsletterCopy: string;
  newsletterFootnote: string;
  brandDesc: string;
  cols: { heading: string; links: { label: string; href: string }[] }[];
  bottomLeft: string;
  bottomRight: string;
}

export interface NavData {
  links: { label: string; href: string }[];
  cta: { label: string; href: string };
}

/* =========================================================
   INNER PAGE TYPES
   ========================================================= */

export interface PageHeroData {
  eyebrow?: string;
  headingTop: string;
  headingBottom?: string;
  lead?: string;
}

export interface ContactQuickRow {
  key: string;
  value: string;
  copyIcon: string; // "⎘" or "↗"
}

export interface ContactPerk {
  title: string;
  body: string;
}

export interface ContactChannel {
  icon: string;
  title: string;
  desc: string;
  metaPills: string[];
  value: string;
  href: string;
  featured?: boolean;
}

export interface ContactFaqItem {
  q: string;
  a: string;
}

export interface ContactLocation {
  variant: "hq" | "remote";
  tag: string;
  heading: string;
  addressHtml: string;
  rows: { key: string; value: string; live?: boolean }[];
  showPin?: boolean;
}

export interface ContactPageData {
  hero: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    lead: string;
    quickLabel: string;
    quickRows: ContactQuickRow[];
    form: {
      stepLabel: string;
      heading: string;
      sub: string;
      submitLabel: string;
      footnote: string;
      projectTypes: string[];
      defaultProjectType?: string;
      budgets: string[];
      defaultBudget?: string;
      fieldLabels: {
        name: string;
        namePlaceholder: string;
        email: string;
        emailPlaceholder: string;
        company: string;
        companyPlaceholder: string;
        website: string;
        websitePlaceholder: string;
        projectType: string;
        budget: string;
        message: string;
        messagePlaceholder: string;
      };
    };
  };
  response: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    body: string;
    cardLabel: string;
    cardNum: string;
    cardUnit: string;
    cardPitch: string;
    cardSub: string;
  };
  bookCall: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    pitchHeading: string;
    pitchBody: string;
    perks: ContactPerk[];
    calendarMonth: string;
    dayLabels: string[];
    days: { day: number; state: "disabled" | "default" | "available" | "today" }[];
    selectedDay?: number;
    slotsLabel: string;
    slots: { time: string; unavailable?: boolean }[];
    selectedSlot?: string;
  };
  channels: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    items: ContactChannel[];
  };
  location: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    lead: string;
    cards: ContactLocation[];
  };
  faq: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    items: ContactFaqItem[];
    footText: string;
    footCtaLabel: string;
    footCtaHref: string;
  };
}

export interface PricingTier {
  tag: string;
  name: string;
  price: string;
  priceUnit?: string;
  desc: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}

export interface PricingPageData {
  pageHero: PageHeroData;
  tiers: PricingTier[];
  compare: CompareBlock;
  faq: FaqBlock;
  finalCta: FinalCtaBlock;
}

export interface DeliverableCard {
  heading: string;
  items: string[];
}

export interface SelectorRow {
  num: string; // "01"
  text: string;
  href: string;
}

export interface ServiceDetailItem {
  num: string; // "01 · Design"
  visual: "design" | "development" | "growth";
  reverse?: boolean;
  headingHtml: string; // may contain <br>
  body: string;
  deliverables: string[];
  meta: { label: string; value: string }[];
}

export interface ProcessStep {
  week: string;
  title: string;
  body: string;
  deliverable: string;
  future?: boolean;
}

export interface AddonCard {
  icon: string;
  title: string;
  desc: string;
  priceCurrency?: string;
  priceValue: string;
  priceLabel: string;
}

export interface EngagementCard {
  tag: string;
  title: string;
  pitch: string;
  features: string[];
  price: string;
  priceUnit: string;
  cta: { label: string; href: string };
  featured?: boolean;
}

export interface MatrixItem {
  title: string;
  sub: string;
}

export interface ServicesPageData {
  hero: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    lead: string;
    quickNavLabel: string;
    quickNav: { label: string; href: string }[];
    selector: {
      pre: string;
      heading: string;
      rows: SelectorRow[];
    };
  };
  detail: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    items: ServiceDetailItem[];
  };
  timeline: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    lead: string;
    steps: ProcessStep[];
  };
  addons: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    items: AddonCard[];
  };
  engagement: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    lead: string;
    cards: EngagementCard[];
  };
  matrix: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    lead: string;
    doTag: string;
    doHeading: string;
    doItems: MatrixItem[];
    dontTag: string;
    dontHeading: string;
    dontItems: MatrixItem[];
  };
  finalCta: FinalCtaBlock;
}

export interface MasonryItem {
  id: string;
  size: "tall" | "wide" | "square" | "regular" | "full";
  gradient: GradientKey;
  tag: string;
  year: string;
  category: string;
  title: string;
  duration?: string;
  href: string;
  featured?: boolean;
}

export interface WorkPageData {
  hero: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    stats: { num: string; unit?: string; label: string }[];
  };
  filterChips: { label: string; count: number }[];
  masonry: MasonryItem[];
  finalCta: FinalCtaBlock;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  portrait: "p1" | "p2" | "p3" | "p4" | "p5";
  roleTag: string; // shown on portrait corner — e.g. "Engineering"
  skills: string[];
  socials?: { label: string; href: string; title: string }[];
  founder?: boolean; // span 2 cols
}

export interface TimelineEvent {
  year: string;
  yearCurrent?: boolean;
  milestone?: boolean;
  title: string;
  body: string;
  tags: string[];
}

export interface StatMosaicBlock {
  label: string;
  num: string;
  unit?: string;
  heading: string;
  body?: string;
  span: "feature" | "regular" | "wide";
}

export interface CareerRow {
  id: string;
  title: string;
  meta: string; // "★ Open · Full-time"
  location: string;
  stack: string;
  status: "open" | "closed";
  statusLabel: string;
}

export type HeroHeadlinePart =
  | { type: "text"; value: string }
  | { type: "accent"; value: string }
  | { type: "soft"; value: string }
  | { type: "br" };

export interface CaseStudyOutcome {
  num: string;
  label: string;
}

export interface CaseStudySection {
  heading: string;
  paragraphs: string[];
}

export interface ResultCard {
  label: string;
  num: string;
  sym?: string;
  heading: string;
  body: string;
  feature?: boolean;
}

export interface CaseStudy {
  /** Matches WorkRow.id — wire via /work/[slug] */
  id: string;
  client: string;
  industry: string;
  location: string;
  duration: string;
  year: string;
  headline: string;
  lead: string;
  gradient: GradientKey;
  outcomes: CaseStudyOutcome[];
  sections: CaseStudySection[];
  relatedIds?: string[];
  /** Extended fields used by /work/[slug] redesign */
  metaPills?: { label: string; accent?: boolean }[];
  infoCard?: { label: string; value: string; accent?: boolean }[];
  results?: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    lead: string;
    items: ResultCard[];
  };
  beforeAfter?: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    beforeLabel: string;
    afterLabel: string;
    instructions: string;
  };
}

export interface AboutPageData {
  hero: {
    eyebrow: string;
    headlineParts: HeroHeadlinePart[];
    metaLabel: string;
    metaPills: string[];
  };
  story: {
    eyebrow: string;
    heading: string;
    body: string;
    events: TimelineEvent[];
  };
  team: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    lead: string;
    members: TeamMember[];
  };
  values: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    lead: string;
    items: { number: string; title: string; body: string; tone?: "accent" | "dark" }[];
  };
  stats: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    items: StatMosaicBlock[];
  };
  careers: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    ctaCard: { label: string; body: string; ctaLabel: string; ctaHref: string };
    roles: CareerRow[];
  };
  finalCta: FinalCtaBlock;
}

export interface HomePageData {
  hero: HeroBlock;
  manifesto: ManifestoBlock;
  logoMarquee: { label: string; logos: LogoItem[] };
  trust: TrustBlockData;
  caseCarousel: CaseCarouselBlock;
  textMarquee: MarqueePhrase[];
  portfolio: PortfolioBlock;
  services: ServicesBlock;
  process: ProcessBlock;
  compare: CompareBlock;
  testimonials: TestimonialsBlock;
  faq: FaqBlock;
  finalCta: FinalCtaBlock;
}
