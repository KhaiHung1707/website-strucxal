/**
 * Sanity seed — pushes mock content from src/content/*.ts into a Sanity dataset.
 *
 * Usage:
 *   npm run seed:dry            # log shapes, no upload (no token required)
 *   npm run seed                # upload using SANITY_API_WRITE_TOKEN
 *   npm run seed -- --only=project,homepage   # subset
 *
 * Required env (.env.local):
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET       (defaults to "production")
 *   SANITY_API_WRITE_TOKEN           (from sanity.io/manage > API > Tokens, Editor role)
 *
 * Idempotent: each doc has a deterministic _id so re-running overwrites in place.
 */

import "dotenv/config";
import { createClient } from "next-sanity";

import { homepageData } from "../src/content/homepage";
import { aboutData } from "../src/content/about";
import { servicesPageData } from "../src/content/services-page";
import { workPageData } from "../src/content/work-page";
import { caseStudies } from "../src/content/case-studies";
import { pricingData } from "../src/content/pricing";
import { contactData } from "../src/content/contact";
import { changelogData } from "../src/content/changelog";
import { legalDocs } from "../src/content/legal";
import { navData, footerData } from "../src/content/shared";

/* ---------- args & env ---------- */
const args = process.argv.slice(2);
const DRY = args.includes("--dry-run") || args.includes("--dry");
const onlyArg = args.find((a) => a.startsWith("--only="));
const ONLY = onlyArg ? new Set(onlyArg.slice("--only=".length).split(",")) : null;

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) {
  console.error("✗ Missing NEXT_PUBLIC_SANITY_PROJECT_ID — add it to .env.local");
  process.exit(1);
}
if (!token && !DRY) {
  console.error("✗ Missing SANITY_API_WRITE_TOKEN — use --dry-run to preview without uploading");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-05-01",
  token,
  useCdn: false,
});

/* ---------- helpers ---------- */
function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[''""·]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
const projectId_ = (clientName: string) => `project-${slugify(clientName)}`;

interface Doc {
  _id: string;
  _type: string;
  [k: string]: unknown;
}

const sent: { type: string; id: string }[] = [];

async function put(doc: Doc) {
  sent.push({ type: doc._type, id: doc._id });
  console.log(`  → ${doc._type.padEnd(18)} ${doc._id}`);
  if (DRY) return;
  await client.createOrReplace(doc);
}

function shouldRun(group: string) {
  return !ONLY || ONLY.has(group);
}

/* ---------- siteSettings ---------- */
async function seedSiteSettings() {
  if (!shouldRun("siteSettings")) return;
  console.log("\n[siteSettings]");
  await put({
    _id: "siteSettings",
    _type: "siteSettings",
    title: "Strucxal Studio",
    description:
      "Strucxal is a boutique studio building fast, beautiful, conversion-focused websites for e-commerce, SaaS, and global brands.",
    nav: { links: navData.links, cta: navData.cta },
    footer: {
      brandDesc: footerData.brandDesc,
      newsletterHeadlineTop: footerData.newsletterHeadlineTop,
      newsletterHeadlineBottom: footerData.newsletterHeadlineBottom,
      newsletterCopy: footerData.newsletterCopy,
      newsletterFootnote: footerData.newsletterFootnote,
      cols: footerData.cols,
      bottomLeft: footerData.bottomLeft,
      bottomRight: footerData.bottomRight,
    },
    contact: {
      email: "hello@strucxal.studio",
      phone: "",
      address: "Nha Trang, Vietnam",
    },
    social: [
      { platform: "linkedin", href: "https://linkedin.com/company/strucxal" },
      { platform: "dribbble", href: "https://dribbble.com/strucxal" },
      { platform: "upwork", href: "https://upwork.com/agencies/strucxal" },
    ],
  });
}

/* ---------- teamMember ---------- */
async function seedTeamMembers() {
  if (!shouldRun("teamMember")) return;
  console.log("\n[teamMember]");
  const members = aboutData.team.members;
  for (let i = 0; i < members.length; i++) {
    const m = members[i];
    await put({
      _id: `team-${slugify(m.name)}`,
      _type: "teamMember",
      name: m.name,
      slug: { _type: "slug", current: slugify(m.name) },
      role: m.role,
      roleTag: m.roleTag,
      founder: m.founder ?? false,
      bio: m.bio,
      portrait: m.portrait,
      skills: m.skills,
      socials: m.socials,
      order: i,
    });
  }
}

/* ---------- testimonial ---------- */
async function seedTestimonials() {
  if (!shouldRun("testimonial")) return;
  console.log("\n[testimonial]");
  const items = homepageData.testimonials.items;
  for (let i = 0; i < items.length; i++) {
    const t = items[i];
    await put({
      _id: `testimonial-${slugify(t.name)}`,
      _type: "testimonial",
      quote: t.quote,
      authorName: t.name,
      initials: t.initials,
      role: t.role,
      companyStat: t.companyStat,
      featured: true,
      order: i,
    });
  }
}

/* ---------- faq ---------- */
async function seedFaqs() {
  if (!shouldRun("faq")) return;
  console.log("\n[faq]");
  let i = 0;
  for (const item of homepageData.faq.items) {
    await put({
      _id: `faq-${slugify(item.question).slice(0, 80)}`,
      _type: "faq",
      question: item.question,
      answer: item.answer,
      surfaces: ["home"],
      order: i++,
    });
  }
  for (const item of pricingData.faq.items) {
    await put({
      _id: `faq-pricing-${slugify(item.question).slice(0, 80)}`,
      _type: "faq",
      question: item.question,
      answer: item.answer,
      surfaces: ["pricing"],
      order: i++,
    });
  }
  for (const item of contactData.faq.items) {
    await put({
      _id: `faq-contact-${slugify(item.q).slice(0, 80)}`,
      _type: "faq",
      question: item.q,
      answer: item.a,
      surfaces: ["contact"],
      order: i++,
    });
  }
}

/* ---------- pricingPlan ---------- */
async function seedPricing() {
  if (!shouldRun("pricingPlan")) return;
  console.log("\n[pricingPlan]");
  const tiers = pricingData.tiers;
  for (let i = 0; i < tiers.length; i++) {
    const t = tiers[i];
    await put({
      _id: `plan-${slugify(t.name)}`,
      _type: "pricingPlan",
      name: t.name,
      slug: { _type: "slug", current: slugify(t.name) },
      tag: t.tag,
      price: t.price,
      priceUnit: t.priceUnit,
      pitch: t.desc,
      features: t.features,
      cta: t.cta,
      featured: t.tag?.includes("★") ?? false,
      order: i,
    });
  }
}

/* ---------- changelogEntry ---------- */
async function seedChangelog() {
  if (!shouldRun("changelogEntry")) return;
  console.log("\n[changelogEntry]");
  for (const e of changelogData.entries) {
    await put({
      _id: `changelog-${slugify(e.version)}`,
      _type: "changelogEntry",
      version: e.version,
      date: parseDate(e.date),
      type: e.type,
      title: e.title,
      summary: e.summary,
      items: e.items.map((it) => ({
        kind: it.label === "new" ? "new" : it.label === "fix" ? "fixed" : "improved",
        text: it.text,
      })),
    });
  }
}

function parseDate(s: string): string {
  // "May 28, 2026" → "2026-05-28"
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return new Date().toISOString().slice(0, 10);
  return d.toISOString().slice(0, 10);
}

/* ---------- legalDoc ---------- */
async function seedLegal() {
  if (!shouldRun("legalDoc")) return;
  console.log("\n[legalDoc]");
  for (const doc of legalDocs) {
    await put({
      _id: `legal-${doc.slug}`,
      _type: "legalDoc",
      title: doc.title,
      slug: { _type: "slug", current: doc.slug },
      lastUpdated: parseDate(doc.effectiveDate),
      intro: doc.intro ?? "",
      // Sections are stored as HTML in mock data — convert to simple block stubs.
      sections: doc.sections.map((s) => ({
        _key: s.id,
        anchorId: s.id,
        heading: s.title,
        body: [
          {
            _type: "block",
            _key: `${s.id}-body`,
            style: "normal",
            children: [{ _type: "span", _key: `${s.id}-span`, text: stripHtml(s.bodyHtml) }],
          },
        ],
      })),
    });
  }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

/* ---------- service ---------- */
async function seedServices() {
  if (!shouldRun("service")) return;
  console.log("\n[service]");
  const detail = servicesPageData.detail.items;
  const tabs = homepageData.services.tabs;
  for (let i = 0; i < detail.length; i++) {
    const d = detail[i];
    const tab = tabs[i] ?? { title: "", desc: "" };
    const slug = slugify(d.visual);
    await put({
      _id: `service-${slug}`,
      _type: "service",
      title: tab.title || d.visual,
      slug: { _type: "slug", current: slug },
      num: d.num,
      visual: d.visual,
      tabTitle: tab.title,
      tabDesc: tab.desc,
      headingHtml: d.headingHtml,
      body: d.body,
      deliverables: d.deliverables,
      meta: d.meta,
      reverse: d.reverse ?? false,
      order: i,
    });
  }
}

/* ---------- project ---------- */
async function seedProjects() {
  if (!shouldRun("project")) return;
  console.log("\n[project]");
  // Merge case-studies (rich) + masonry items (for index card extras).
  const masonryById = new Map(workPageData.masonry.map((m) => [m.id, m]));

  for (const cs of caseStudies) {
    const m = masonryById.get(cs.id);
    await put({
      _id: projectId_(cs.client),
      _type: "project",
      client: cs.client,
      slug: { _type: "slug", current: slugify(cs.client) },
      industry: cs.industry,
      category: m?.category ?? "other",
      location: cs.location,
      year: cs.year,
      duration: cs.duration,
      tag: m?.tag ?? cs.industry.split(" · ")[0] ?? cs.industry,
      stat: undefined,
      gradient: cs.gradient,
      masonrySize: m?.size ?? "regular",
      featured: m?.featured ?? false,
      order: 100,
      headline: cs.headline,
      lead: cs.lead,
      metaPills: cs.metaPills,
      infoCard: cs.infoCard,
      outcomes: cs.outcomes,
      sections: cs.sections.map((s) => ({
        heading: s.heading,
        paragraphs: s.paragraphs,
      })),
      beforeAfter: cs.beforeAfter
        ? {
            eyebrow: cs.beforeAfter.eyebrow,
            headingTop: cs.beforeAfter.headingTop,
            headingBottom: undefined,
            lead: undefined,
            beforeLabel: "Before",
            afterLabel: "After",
          }
        : undefined,
      results: cs.results,
      related: cs.relatedIds?.map((id) => {
        const related = caseStudies.find((x) => x.id === id);
        return related ? { _type: "reference", _ref: projectId_(related.client) } : null;
      }).filter(Boolean),
    });
  }

  // Seed any masonry items NOT covered by case studies as light projects.
  for (const m of workPageData.masonry) {
    if (caseStudies.some((c) => c.id === m.id)) continue;
    await put({
      _id: `project-${slugify(m.title)}`,
      _type: "project",
      client: m.title,
      slug: { _type: "slug", current: slugify(m.title) },
      category: m.category,
      year: m.year,
      duration: m.duration,
      tag: m.tag,
      gradient: m.gradient,
      masonrySize: m.size,
      featured: m.featured ?? false,
      order: 200,
    });
  }
}

/* ---------- homepage ---------- */
async function seedHomepage() {
  if (!shouldRun("homepage")) return;
  console.log("\n[homepage]");
  const h = homepageData;
  // Resolve case carousel items to project refs by best-effort title match.
  const caseRefs = h.caseCarousel.items
    .map((item) => {
      const cs = caseStudies.find((c) =>
        item.title.toLowerCase().includes(c.client.toLowerCase()),
      );
      return cs ? { _type: "reference", _ref: projectId_(cs.client) } : null;
    })
    .filter(Boolean);

  // Fan cards: match by `name` to case studies.
  const fanCards = h.hero.fanCards.map((f) => ({
    gradient: f.gradient,
    meta: f.meta,
    name: f.name,
    project: (() => {
      const cs = caseStudies.find((c) =>
        c.client.toLowerCase().includes(f.name.toLowerCase()) ||
        f.name.toLowerCase().includes(c.client.toLowerCase()),
      );
      return cs ? { _type: "reference", _ref: projectId_(cs.client) } : undefined;
    })(),
  }));

  await put({
    _id: "homepage",
    _type: "homepage",
    // Hero
    heroBadgeLabel: h.hero.badgeLabel,
    heroAnnounceText: h.hero.announceText,
    heroAnnounceHref: h.hero.primaryCta.href,
    heroHeadlineTop: h.hero.headlineTop,
    heroHeadlineBottom: h.hero.headlineBottom,
    heroLead: h.hero.lead,
    heroPrimaryCta: h.hero.primaryCta,
    heroSecondaryCta: h.hero.secondaryCta,
    heroFanCards: fanCards,
    marqueeLabel: h.logoMarquee.label,
    marqueeLogos: h.logoMarquee.logos,
    // Manifesto + text marquee
    manifestoStageLabel: h.manifesto.stageLabel,
    manifestoNumber: h.manifesto.number,
    manifestoAsideLabel: h.manifesto.asideLabel,
    manifestoHeadingHtml: h.manifesto.headingHtml,
    manifestoParagraphs: h.manifesto.paragraphs,
    manifestoQuote: h.manifesto.quote,
    manifestoClosingHtml: h.manifesto.closingHtml,
    manifestoSignature: h.manifesto.signature,
    textMarquee: h.textMarquee.map((m) => m.text),
    // Trust
    trustStageLabel: h.trust.stageLabel,
    trustEyebrow: h.trust.eyebrow,
    trustHeadingTop: h.trust.headingTop,
    trustHeadingBottom: h.trust.headingBottom,
    trustStats: h.trust.stats,
    trustTech: h.trust.tech,
    // Case carousel
    caseCarouselStageLabel: h.caseCarousel.stageLabel,
    caseCarouselEyebrow: h.caseCarousel.eyebrow,
    caseCarouselHeadingTop: h.caseCarousel.headingTop,
    caseCarouselHeadingBottom: h.caseCarousel.headingBottom,
    caseCarouselLead: h.caseCarousel.lead,
    caseCarouselItems: caseRefs,
    // Process
    processStageLabel: h.process.stageLabel,
    processEyebrow: h.process.eyebrow,
    processHeadingTop: h.process.headingTop,
    processHeadingBottom: h.process.headingBottom,
    processLead: h.process.lead,
    processCards: h.process.cards,
    // Compare
    compareStageLabel: h.compare.stageLabel,
    compareEyebrow: h.compare.eyebrow,
    compareHeadingTop: h.compare.headingTop,
    compareHeadingBottom: h.compare.headingBottom,
    compareCards: h.compare.cards,
    // Testimonials / FAQ headers
    testimonialsEyebrow: h.testimonials.eyebrow,
    testimonialsHeadingTop: h.testimonials.headingTop,
    testimonialsHeadingBottom: h.testimonials.headingBottom,
    faqEyebrow: h.faq.eyebrow,
    faqHeadingTop: h.faq.headingTop,
    faqHeadingBottom: h.faq.headingBottom,
    faqAsideNote: h.faq.asideNote,
    faqAsideCta: h.faq.asideCta,
    // Final CTA
    finalCtaHeadingTop: h.finalCta.headingTop,
    finalCtaHeadingBottom: h.finalCta.headingBottom,
    finalCtaLead: h.finalCta.lead,
    finalCtaPrimary: h.finalCta.primaryCta,
    finalCtaSecondary: h.finalCta.secondaryCta,
  });
}

/* ---------- main ---------- */
async function main() {
  console.log(
    `\n${DRY ? "DRY RUN" : "SEED"} → ${projectId}/${dataset}${ONLY ? ` (only: ${[...ONLY].join(", ")})` : ""}\n`,
  );

  // Order matters: projects + small entities before homepage (which references them).
  await seedSiteSettings();
  await seedTeamMembers();
  await seedTestimonials();
  await seedFaqs();
  await seedPricing();
  await seedChangelog();
  await seedLegal();
  await seedServices();
  await seedProjects();
  await seedHomepage();

  console.log(`\n✓ ${DRY ? "Would upload" : "Uploaded"} ${sent.length} documents.\n`);
}

main().catch((err) => {
  console.error("\n✗ Seed failed:", err);
  process.exit(1);
});
