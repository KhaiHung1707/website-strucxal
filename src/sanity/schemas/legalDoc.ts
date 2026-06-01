import { defineType, defineField } from "sanity";

export const legalDoc = defineType({
  name: "legalDoc",
  title: "Legal document",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 64 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "lastUpdated",
      title: "Last updated",
      type: "date",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "intro",
      title: "Intro paragraph",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "anchorId", type: "string", title: "Anchor id (e.g. 'data-collection')" },
            { name: "heading", type: "string", validation: (r) => r.required() },
            { name: "body", type: "blockContent" },
          ],
          preview: { select: { title: "heading", subtitle: "anchorId" } },
        },
      ],
      validation: (r) => r.min(1),
    }),
  ],
  preview: { select: { title: "title", subtitle: "lastUpdated" } },
});
