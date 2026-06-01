import { defineType, defineField } from "sanity";

/**
 * Singleton holding all homepage-specific blocks that aren't reusable
 * entities of their own (project, testimonial, faq are referenced instead).
 *
 * Grouped to keep authoring sane — Hero / Storytelling / Trust / Footer CTA.
 */
export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "story", title: "Manifesto + Marquee" },
    { name: "trust", title: "Trust + Tech" },
    { name: "process", title: "Process + Compare" },
    { name: "footer", title: "Final CTA" },
  ],
  fields: [
    /* ===== HERO ===== */
    defineField({
      name: "heroBadgeLabel",
      title: "Announce pill — badge label",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroAnnounceText",
      title: "Announce pill — text",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroAnnounceHref",
      title: "Announce pill — link",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroHeadlineTop",
      type: "string",
      group: "hero",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroHeadlineBottom",
      title: "Hero headline (accent line)",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroLead",
      title: "Hero lead paragraph",
      type: "text",
      rows: 3,
      group: "hero",
    }),
    defineField({
      name: "heroPrimaryCta",
      title: "Primary CTA",
      type: "object",
      group: "hero",
      fields: [
        { name: "label", type: "string" },
        { name: "href", type: "string" },
      ],
    }),
    defineField({
      name: "heroSecondaryCta",
      title: "Secondary CTA",
      type: "object",
      group: "hero",
      fields: [
        { name: "label", type: "string" },
        { name: "href", type: "string" },
      ],
    }),
    defineField({
      name: "heroFanCards",
      title: "Fan cards (5 items)",
      type: "array",
      group: "hero",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "gradient",
              type: "string",
              options: { list: ["g1", "g2", "g3", "g4", "g5"], layout: "radio" },
            },
            { name: "meta", type: "string", title: "Meta (e.g. \"E-commerce · 2026\")" },
            { name: "name", type: "string", title: "Project name shown" },
            {
              name: "project",
              type: "reference",
              to: [{ type: "project" }],
              description: "Optional — links the card to a real project.",
            },
          ],
          preview: { select: { title: "name", subtitle: "meta" } },
        },
      ],
      validation: (r) => r.length(5),
    }),
    defineField({
      name: "marqueeLabel",
      title: "Logo marquee — label",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "marqueeLogos",
      title: "Logo marquee — logos",
      type: "array",
      group: "hero",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            {
              name: "style",
              type: "string",
              options: {
                list: ["regular", "bold", "italic", "mono", "symbol"],
                layout: "radio",
              },
            },
          ],
          preview: { select: { title: "label", subtitle: "style" } },
        },
      ],
    }),

    /* ===== MANIFESTO + TEXT MARQUEE ===== */
    defineField({
      name: "manifestoStageLabel",
      type: "string",
      group: "story",
    }),
    defineField({
      name: "manifestoNumber",
      title: "Manifesto chapter number (e.g. \"01\")",
      type: "string",
      group: "story",
    }),
    defineField({
      name: "manifestoAsideLabel",
      type: "string",
      group: "story",
    }),
    defineField({
      name: "manifestoHeadingHtml",
      title: "Manifesto heading (HTML allowed)",
      type: "text",
      rows: 2,
      group: "story",
    }),
    defineField({
      name: "manifestoParagraphs",
      type: "array",
      of: [{ type: "text", rows: 3 }],
      group: "story",
    }),
    defineField({
      name: "manifestoQuote",
      type: "text",
      rows: 3,
      group: "story",
    }),
    defineField({
      name: "manifestoClosingHtml",
      title: "Manifesto closing (HTML allowed)",
      type: "text",
      rows: 3,
      group: "story",
    }),
    defineField({
      name: "manifestoSignature",
      type: "object",
      group: "story",
      fields: [
        { name: "initials", type: "string" },
        { name: "name", type: "string" },
        { name: "role", type: "string" },
      ],
    }),
    defineField({
      name: "textMarquee",
      title: "Accent text marquee phrases",
      type: "array",
      of: [{ type: "string" }],
      group: "story",
    }),

    /* ===== TRUST + CASE CAROUSEL ===== */
    defineField({
      name: "trustStageLabel",
      type: "string",
      group: "trust",
    }),
    defineField({
      name: "trustEyebrow",
      type: "string",
      group: "trust",
    }),
    defineField({
      name: "trustHeadingTop",
      type: "string",
      group: "trust",
    }),
    defineField({
      name: "trustHeadingBottom",
      type: "string",
      group: "trust",
    }),
    defineField({
      name: "trustStats",
      type: "array",
      group: "trust",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "string" },
            { name: "unit", type: "string" },
            { name: "countTo", type: "number" },
            { name: "suffix", type: "string" },
            { name: "label", type: "string" },
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        },
      ],
    }),
    defineField({
      name: "trustTech",
      title: "Tech pills",
      type: "array",
      group: "trust",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", type: "string", title: "Single-char / glyph" },
            { name: "name", type: "string" },
          ],
          preview: { select: { title: "name", subtitle: "icon" } },
        },
      ],
    }),
    defineField({
      name: "caseCarouselStageLabel",
      type: "string",
      group: "trust",
    }),
    defineField({
      name: "caseCarouselEyebrow",
      type: "string",
      group: "trust",
    }),
    defineField({
      name: "caseCarouselHeadingTop",
      type: "string",
      group: "trust",
    }),
    defineField({
      name: "caseCarouselHeadingBottom",
      type: "string",
      group: "trust",
    }),
    defineField({
      name: "caseCarouselLead",
      type: "text",
      rows: 2,
      group: "trust",
    }),
    defineField({
      name: "caseCarouselItems",
      title: "Case carousel projects",
      type: "array",
      group: "trust",
      of: [{ type: "reference", to: [{ type: "project" }] }],
      validation: (r) => r.max(8),
    }),

    /* ===== PROCESS + COMPARE ===== */
    defineField({
      name: "processStageLabel",
      type: "string",
      group: "process",
    }),
    defineField({
      name: "processEyebrow",
      type: "string",
      group: "process",
    }),
    defineField({
      name: "processHeadingTop",
      type: "string",
      group: "process",
    }),
    defineField({
      name: "processHeadingBottom",
      type: "string",
      group: "process",
    }),
    defineField({
      name: "processLead",
      type: "text",
      rows: 2,
      group: "process",
    }),
    defineField({
      name: "processCards",
      type: "array",
      group: "process",
      of: [
        {
          type: "object",
          fields: [
            { name: "number", type: "string" },
            { name: "phase", type: "string" },
            { name: "title", type: "string" },
            { name: "desc", type: "text", rows: 3 },
            { name: "duration", type: "string" },
            {
              name: "tone",
              type: "string",
              options: { list: ["default", "dark", "accent"], layout: "radio" },
              initialValue: "default",
            },
          ],
          preview: { select: { title: "title", subtitle: "phase" } },
        },
      ],
    }),
    defineField({
      name: "compareStageLabel",
      type: "string",
      group: "process",
    }),
    defineField({
      name: "compareEyebrow",
      type: "string",
      group: "process",
    }),
    defineField({
      name: "compareHeadingTop",
      type: "string",
      group: "process",
    }),
    defineField({
      name: "compareHeadingBottom",
      type: "string",
      group: "process",
    }),
    defineField({
      name: "compareCards",
      type: "array",
      group: "process",
      of: [
        {
          type: "object",
          fields: [
            { name: "tag", type: "string" },
            { name: "title", type: "string" },
            { name: "featured", type: "boolean", initialValue: false },
            {
              name: "rows",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "label", type: "string" },
                    { name: "val", type: "string" },
                    {
                      name: "tone",
                      type: "string",
                      options: { list: ["good", "ok", "bad"] },
                    },
                  ],
                  preview: { select: { title: "label", subtitle: "val" } },
                },
              ],
            },
          ],
          preview: { select: { title: "title", subtitle: "tag" } },
        },
      ],
    }),

    /* ===== TESTIMONIAL HEADER + FAQ HEADER ===== */
    defineField({
      name: "testimonialsEyebrow",
      type: "string",
      group: "footer",
    }),
    defineField({
      name: "testimonialsHeadingTop",
      type: "string",
      group: "footer",
    }),
    defineField({
      name: "testimonialsHeadingBottom",
      type: "string",
      group: "footer",
    }),
    defineField({
      name: "faqEyebrow",
      type: "string",
      group: "footer",
    }),
    defineField({
      name: "faqHeadingTop",
      type: "string",
      group: "footer",
    }),
    defineField({
      name: "faqHeadingBottom",
      type: "string",
      group: "footer",
    }),
    defineField({
      name: "faqAsideNote",
      type: "text",
      rows: 2,
      group: "footer",
    }),
    defineField({
      name: "faqAsideCta",
      type: "object",
      group: "footer",
      fields: [
        { name: "label", type: "string" },
        { name: "href", type: "string" },
      ],
    }),

    /* ===== FINAL CTA ===== */
    defineField({
      name: "finalCtaHeadingTop",
      type: "string",
      group: "footer",
    }),
    defineField({
      name: "finalCtaHeadingBottom",
      type: "string",
      group: "footer",
    }),
    defineField({
      name: "finalCtaLead",
      type: "text",
      rows: 2,
      group: "footer",
    }),
    defineField({
      name: "finalCtaPrimary",
      type: "object",
      group: "footer",
      fields: [
        { name: "label", type: "string" },
        { name: "href", type: "string" },
      ],
    }),
    defineField({
      name: "finalCtaSecondary",
      type: "object",
      group: "footer",
      fields: [
        { name: "label", type: "string" },
        { name: "href", type: "string" },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Homepage" }) },
});
