import { defineType, defineField } from "sanity";

/**
 * Project = portfolio item + case-study. One document drives:
 *   /work          (masonry index)
 *   /work/[slug]   (full case study)
 *   homepage Portfolio Editorial list
 *   homepage Case carousel
 *
 * Keep authoring linear: index fields first, then case study fields.
 */
export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  groups: [
    { name: "index", title: "Index card", default: true },
    { name: "caseStudy", title: "Case study" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    /* ===== INDEX CARD ===== */
    defineField({
      name: "client",
      title: "Client name",
      type: "string",
      group: "index",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      group: "index",
      options: { source: "client", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "industry",
      type: "string",
      group: "index",
    }),
    defineField({
      name: "category",
      title: "Category (filter chip)",
      type: "string",
      group: "index",
      options: {
        list: ["e-commerce", "saas", "b2b", "marketplace", "portfolio", "fintech", "other"],
      },
    }),
    defineField({
      name: "location",
      title: "Location (e.g. \"London\")",
      type: "string",
      group: "index",
    }),
    defineField({
      name: "year",
      type: "string",
      group: "index",
    }),
    defineField({
      name: "duration",
      title: "Project duration (e.g. \"6 months\")",
      type: "string",
      group: "index",
    }),
    defineField({
      name: "tag",
      title: "Editorial list tag",
      type: "string",
      group: "index",
      description: 'Shown above title in the homepage list, e.g. "E-commerce".',
    }),
    defineField({
      name: "stat",
      title: "Headline metric (e.g. \"+100%\")",
      type: "string",
      group: "index",
    }),
    defineField({
      name: "gradient",
      title: "Gradient placeholder",
      type: "string",
      group: "index",
      options: { list: ["g1", "g2", "g3", "g4", "g5"], layout: "radio" },
      description: "Falls back to this gradient when no cover image is uploaded.",
      initialValue: "g1",
    }),
    defineField({
      name: "cover",
      title: "Cover image",
      type: "image",
      group: "index",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({
      name: "masonrySize",
      title: "Masonry tile size",
      type: "string",
      group: "index",
      options: {
        list: [
          { title: "Regular", value: "regular" },
          { title: "Tall", value: "tall" },
          { title: "Wide", value: "wide" },
          { title: "Square", value: "square" },
          { title: "Full row", value: "full" },
        ],
        layout: "radio",
      },
      initialValue: "regular",
    }),
    defineField({
      name: "featured",
      title: "Featured on homepage",
      type: "boolean",
      group: "index",
      initialValue: false,
    }),
    defineField({
      name: "order",
      type: "number",
      group: "index",
      initialValue: 100,
    }),

    /* ===== CASE STUDY ===== */
    defineField({
      name: "headline",
      title: "Case study headline",
      type: "string",
      group: "caseStudy",
    }),
    defineField({
      name: "lead",
      title: "Case study lead paragraph",
      type: "text",
      rows: 3,
      group: "caseStudy",
    }),
    defineField({
      name: "metaPills",
      title: "Meta pills (top of case page)",
      type: "array",
      group: "caseStudy",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "accent", type: "boolean", initialValue: false },
          ],
          preview: { select: { title: "label" } },
        },
      ],
    }),
    defineField({
      name: "infoCard",
      title: "Info card rows (label · value)",
      type: "array",
      group: "caseStudy",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "value", type: "string" },
            { name: "accent", type: "boolean", initialValue: false },
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        },
      ],
    }),
    defineField({
      name: "outcomes",
      title: "Headline outcomes (top of case)",
      type: "array",
      group: "caseStudy",
      of: [
        {
          type: "object",
          fields: [
            { name: "num", type: "string", title: "Number (e.g. \"+100\")" },
            { name: "label", type: "string" },
          ],
          preview: { select: { title: "num", subtitle: "label" } },
        },
      ],
    }),
    defineField({
      name: "sections",
      title: "Narrative sections",
      type: "array",
      group: "caseStudy",
      of: [
        {
          type: "object",
          fields: [
            { name: "heading", type: "string", validation: (r) => r.required() },
            { name: "paragraphs", type: "array", of: [{ type: "text", rows: 3 }] },
          ],
          preview: { select: { title: "heading" } },
        },
      ],
    }),
    defineField({
      name: "beforeAfter",
      title: "Before / After slider",
      type: "object",
      group: "caseStudy",
      fields: [
        { name: "eyebrow", type: "string" },
        { name: "headingTop", type: "string" },
        { name: "headingBottom", type: "string" },
        { name: "lead", type: "text", rows: 2 },
        {
          name: "before",
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", type: "string", title: "Alt text" }],
        },
        {
          name: "after",
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", type: "string", title: "Alt text" }],
        },
        { name: "beforeLabel", type: "string", initialValue: "Before" },
        { name: "afterLabel", type: "string", initialValue: "After" },
      ],
    }),
    defineField({
      name: "results",
      title: "Results block",
      type: "object",
      group: "caseStudy",
      fields: [
        { name: "eyebrow", type: "string" },
        { name: "headingTop", type: "string" },
        { name: "headingBottom", type: "string" },
        { name: "lead", type: "text", rows: 2 },
        {
          name: "items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", type: "string" },
                { name: "num", type: "string" },
                { name: "sym", type: "string", title: "Symbol suffix (e.g. \"%\")" },
                { name: "heading", type: "string" },
                { name: "body", type: "text", rows: 2 },
                { name: "feature", type: "boolean", initialValue: false },
              ],
              preview: { select: { title: "label", subtitle: "num" } },
            },
          ],
        },
      ],
    }),
    defineField({
      name: "related",
      title: "Related projects",
      type: "array",
      group: "caseStudy",
      of: [{ type: "reference", to: [{ type: "project" }] }],
      validation: (r) => r.max(6),
    }),

    /* ===== SEO ===== */
    defineField({
      name: "seoTitle",
      title: "SEO title (overrides default)",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 3,
      group: "seo",
    }),
  ],
  orderings: [
    { name: "manualOrder", title: "Manual order", by: [{ field: "order", direction: "asc" }] },
    {
      name: "byYear",
      title: "Year — newest first",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "client", subtitle: "industry", media: "cover" },
  },
});
