import { defineType, defineField } from "sanity";

/**
 * Single FAQ item. Used across homepage, contact, pricing, services pages.
 * `surfaces` lets a single Q live in multiple page contexts without duplication.
 */
export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      type: "string",
      validation: (r) => r.required().max(160),
    }),
    defineField({
      name: "answer",
      type: "text",
      rows: 5,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "surfaces",
      title: "Where to show",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Homepage", value: "home" },
          { title: "Pricing page", value: "pricing" },
          { title: "Contact page", value: "contact" },
          { title: "Services page", value: "services" },
        ],
        layout: "tags",
      },
      validation: (r) => r.min(1),
    }),
    defineField({
      name: "category",
      title: "Category (optional grouping)",
      type: "string",
      options: { list: ["general", "timeline", "pricing", "process", "ownership", "post-launch", "remote"] },
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
    select: { title: "question", subtitle: "category" },
  },
});
