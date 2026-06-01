import { defineType, defineField } from "sanity";

export const pricingPlan = defineType({
  name: "pricingPlan",
  title: "Pricing plan",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Plan name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name", maxLength: 64 },
    }),
    defineField({
      name: "tag",
      title: "Eyebrow tag (e.g. \"Most popular\")",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      description: 'Plain string — e.g. "$2,400" or "Custom".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "priceUnit",
      title: "Price unit",
      type: "string",
      description: 'e.g. "/ project", "/ month".',
    }),
    defineField({
      name: "pitch",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "features",
      title: "Features list",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "cta",
      title: "CTA button",
      type: "object",
      fields: [
        { name: "label", type: "string" },
        { name: "href", type: "string" },
      ],
    }),
    defineField({
      name: "featured",
      title: "Featured (visually highlighted)",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      type: "number",
      initialValue: 100,
    }),
  ],
  orderings: [
    { name: "manualOrder", title: "Manual order", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "price" },
    prepare: ({ title, subtitle }) => ({ title, subtitle: subtitle ?? "—" }),
  },
});
