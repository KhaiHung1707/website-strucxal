import { defineType, defineField } from "sanity";

/**
 * Site-wide settings. Singleton — uniqueness enforced via structure builder.
 * Drives Nav, Footer, default SEO, social, and global contact info.
 */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Default meta description",
      type: "text",
      rows: 3,
      validation: (r) => r.max(280),
    }),
    defineField({
      name: "ogImage",
      title: "Default OG image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),

    defineField({
      name: "nav",
      title: "Navigation",
      type: "object",
      fields: [
        defineField({
          name: "links",
          title: "Menu links",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", type: "string", validation: (r) => r.required() },
                { name: "href", type: "string", validation: (r) => r.required() },
              ],
              preview: { select: { title: "label", subtitle: "href" } },
            },
          ],
        }),
        defineField({
          name: "cta",
          title: "Header CTA",
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "href", type: "string" },
          ],
        }),
      ],
    }),

    defineField({
      name: "footer",
      title: "Footer",
      type: "object",
      fields: [
        { name: "brandDesc", title: "Brand blurb", type: "text", rows: 3 },
        {
          name: "newsletterHeadlineTop",
          title: "Newsletter headline (top line)",
          type: "string",
        },
        {
          name: "newsletterHeadlineBottom",
          title: "Newsletter headline (bottom line, muted)",
          type: "string",
        },
        { name: "newsletterCopy", title: "Newsletter copy", type: "text", rows: 3 },
        { name: "newsletterFootnote", title: "Newsletter footnote", type: "string" },
        {
          name: "cols",
          title: "Footer link columns",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "heading", type: "string", validation: (r) => r.required() },
                {
                  name: "links",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        { name: "label", type: "string" },
                        { name: "href", type: "string" },
                      ],
                      preview: { select: { title: "label", subtitle: "href" } },
                    },
                  ],
                },
              ],
              preview: { select: { title: "heading" } },
            },
          ],
        },
        { name: "bottomLeft", title: "Bottom row (left)", type: "string" },
        { name: "bottomRight", title: "Bottom row (right)", type: "string" },
      ],
    }),

    defineField({
      name: "contact",
      title: "Contact info",
      type: "object",
      fields: [
        { name: "email", type: "string" },
        { name: "phone", type: "string" },
        { name: "address", type: "text", rows: 2 },
      ],
    }),

    defineField({
      name: "social",
      title: "Social links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              type: "string",
              options: {
                list: ["linkedin", "x", "dribbble", "github", "instagram", "youtube", "upwork"],
              },
            },
            { name: "href", type: "url" },
          ],
          preview: { select: { title: "platform", subtitle: "href" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
