import { defineType, defineField } from "sanity";

export const changelogEntry = defineType({
  name: "changelogEntry",
  title: "Changelog entry",
  type: "document",
  fields: [
    defineField({
      name: "version",
      title: "Version",
      type: "string",
      description: 'e.g. "v3.0", "v2.8".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "date",
      title: "Release date",
      type: "date",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "type",
      title: "Release type",
      type: "string",
      options: {
        list: [
          { title: "Major", value: "major" },
          { title: "Minor", value: "minor" },
          { title: "Patch", value: "patch" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "title",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "summary",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "items",
      title: "Bullet items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "kind",
              title: "Kind",
              type: "string",
              options: { list: ["new", "improved", "fixed", "removed"] },
            },
            { name: "text", type: "string" },
          ],
          preview: { select: { title: "text", subtitle: "kind" } },
        },
      ],
    }),
  ],
  orderings: [
    { name: "byDate", title: "Newest first", by: [{ field: "date", direction: "desc" }] },
  ],
  preview: {
    select: { title: "version", subtitle: "date", type: "type" },
    prepare: ({ title, subtitle, type }) => ({
      title: `${title}${type ? ` · ${type}` : ""}`,
      subtitle: subtitle,
    }),
  },
});
