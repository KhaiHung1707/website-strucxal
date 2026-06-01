export interface ChangelogItem {
  label: "new" | "fix" | "imp";
  text: string;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  type: "major" | "minor" | "patch";
  title: string;
  summary: string;
  items: ChangelogItem[];
}

export const changelogData = {
  hero: {
    eyebrow: "Changelog",
    headingTop: "What we've",
    headingBottom: "been shipping.",
    body: "Every two weeks we publish what we shipped — new features, fixes, and improvements. Subscribe to get a summary in your inbox.",
    subscribe: {
      label: "★ Stay in the loop",
      placeholder: "email@example.com",
      button: "Subscribe",
    },
  },
  entries: [
    {
      version: "v4.2.0",
      date: "May 28, 2026",
      type: "major",
      title: "Arc-fan hero, full case study redesign",
      summary:
        "A major refresh of the homepage hero — interactive arc visuals, hover-locked fan cards, and a more focused narrative. /work/[slug] case studies now include a results grid and before/after slider.",
      items: [
        { label: "new", text: "Arc-fan hero with radiating arcs and hover-lock fan interaction" },
        { label: "new", text: "Before/after comparison slider on case study pages" },
        { label: "new", text: "Results grid with feature-card emphasis for headline metrics" },
        { label: "imp", text: "Nav auto-switches to dark variant over the hero via IntersectionObserver" },
        { label: "fix", text: "Removed the static fan motion on reduced-motion users" },
      ],
    },
    {
      version: "v4.1.2",
      date: "May 10, 2026",
      type: "patch",
      title: "Sanity blog wire-up + 404 polish",
      summary:
        "Connected the blog to Sanity Studio with embedded /studio route. New 404 page with playful typography and quick-link suggestions.",
      items: [
        { label: "new", text: "Sanity CMS integration — embedded Studio at /studio" },
        { label: "new", text: "Graceful empty state on /blog when Sanity is not configured" },
        { label: "new", text: "404 page rebuild with rotated accent block" },
        { label: "imp", text: "Sitemap now includes blog post slugs from Sanity" },
      ],
    },
    {
      version: "v4.1.0",
      date: "April 22, 2026",
      type: "minor",
      title: "Inner pages + responsive spacing scale",
      summary:
        "Built out the full set of marketing pages — /work, /services, /pricing, /about, /contact — and refactored the spacing system into responsive CSS variables.",
      items: [
        { label: "new", text: "/work, /services, /pricing, /about, /contact, /blog routes" },
        { label: "new", text: "Per-page metadata, sitemap.xml, robots.txt" },
        { label: "imp", text: "Spacing scale lifted into CSS variables (--section-y, --container-x)" },
        { label: "imp", text: "Nav and Footer moved to a marketing route-group layout" },
      ],
    },
    {
      version: "v4.0.0",
      date: "March 18, 2026",
      type: "major",
      title: "Restructured narrative — homepage v4",
      summary:
        "A complete content overhaul of the homepage. New manifesto, case carousel, services tabs, and a six-phase process bento.",
      items: [
        { label: "new", text: "Homepage redesigned end-to-end (v4 narrative)" },
        { label: "new", text: "Case carousel with drag-to-explore on /" },
        { label: "imp", text: "Typography refresh — Geist + JetBrains Mono + Doto" },
      ],
    },
  ] as ChangelogEntry[],
};
