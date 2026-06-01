import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      type: "text",
      rows: 4,
      validation: (r) => r.required().max(500),
    }),
    defineField({
      name: "authorName",
      title: "Author name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "initials",
      title: "Initials (used in avatar circle)",
      type: "string",
      validation: (r) => r.max(3),
    }),
    defineField({ name: "role", title: "Role / Title", type: "string" }),
    defineField({ name: "company", type: "string" }),
    defineField({
      name: "companyStat",
      title: "Industry · City line",
      type: "string",
      description: 'Small caps under the author, e.g. "E-COMMERCE · LONDON".',
    }),
    defineField({
      name: "avatar",
      title: "Avatar photo",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({
      name: "project",
      title: "Related project",
      type: "reference",
      to: [{ type: "project" }],
      description: "Optional — surface this quote on the project's case study page.",
    }),
    defineField({
      name: "featured",
      title: "Featured on homepage",
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
    select: { title: "authorName", subtitle: "role", media: "avatar" },
  },
});
