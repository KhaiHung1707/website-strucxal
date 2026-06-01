import { defineType, defineField } from "sanity";

/**
 * A service offering. Reused on both the Services page (detail block) and
 * the homepage Services tab section. One entity → many surfaces.
 */
export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "num",
      title: "Numbering (e.g. \"01 · Design\")",
      type: "string",
    }),
    defineField({
      name: "visual",
      title: "Visual variant",
      type: "string",
      options: {
        list: [
          { title: "Design", value: "design" },
          { title: "Development", value: "development" },
          { title: "Growth", value: "growth" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tabTitle",
      title: "Tab title (homepage Services tab)",
      type: "string",
    }),
    defineField({
      name: "tabDesc",
      title: "Tab description (homepage Services tab)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "headingHtml",
      title: "Detail heading (HTML allowed)",
      type: "text",
      rows: 2,
      description: 'May contain <br> for line breaks.',
    }),
    defineField({
      name: "body",
      title: "Detail body",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "deliverables",
      title: "Deliverables",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "meta",
      title: "Detail meta rows (label + value)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "value", type: "string" },
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        },
      ],
    }),
    defineField({
      name: "reverse",
      title: "Reverse visual layout",
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
  preview: { select: { title: "title", subtitle: "num" } },
});
