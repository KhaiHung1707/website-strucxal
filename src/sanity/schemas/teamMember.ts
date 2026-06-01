import { defineType, defineField } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team member",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    }),
    defineField({ name: "role", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "roleTag",
      title: "Role tag (shown on portrait corner)",
      type: "string",
      description: 'e.g. "Engineering" / "Design" / "Strategy"',
    }),
    defineField({
      name: "founder",
      title: "Founder (spans 2 cols)",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "bio", type: "text", rows: 4 }),
    defineField({
      name: "portrait",
      title: "Portrait variant",
      type: "string",
      options: { list: ["p1", "p2", "p3", "p4", "p5"], layout: "radio" },
      description: "Used when no real avatar is uploaded.",
      initialValue: "p1",
    }),
    defineField({
      name: "avatar",
      title: "Photo (overrides portrait variant)",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({
      name: "skills",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "socials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Display label" },
            { name: "title", type: "string", title: "Tooltip" },
            { name: "href", type: "url" },
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Sort order",
      type: "number",
      description: "Lower numbers appear first on the About page.",
      initialValue: 100,
    }),
  ],
  orderings: [
    { name: "manualOrder", title: "Manual order", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "name", subtitle: "role", media: "avatar" } },
});
