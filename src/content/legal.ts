export interface LegalSection {
  id: string;
  title: string;
  bodyHtml: string;
}

export interface LegalDoc {
  slug: string;
  title: string;
  navLabel: string;
  effectiveDate: string;
  version: string;
  jurisdiction: string;
  sections: LegalSection[];
}

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    navLabel: "Privacy",
    effectiveDate: "May 28, 2026",
    version: "v2.0",
    jurisdiction: "Vietnam",
    sections: [
      {
        id: "intro",
        title: "Introduction",
        bodyHtml:
          "<p>Strucxal Studio (\"we\", \"us\") respects your privacy. This policy describes what information we collect when you visit strucxal.studio, contact us, or engage us for a project — and how we use it.</p><p>We try to collect as little personal data as possible, and to make it obvious when we do.</p>",
      },
      {
        id: "data-collected",
        title: "Data we collect",
        bodyHtml:
          "<p>We collect two categories of data:</p><ul><li><strong>Information you give us directly</strong> — your name, email, company, project details when you submit an inquiry, subscribe to a newsletter, or book a call.</li><li><strong>Aggregated analytics</strong> — anonymous pageviews, session duration, browser type, and country. We use Plausible Analytics, which does not use cookies or track individuals.</li></ul><div class=\"callout\"><strong>What we don't collect</strong>We don't sell your data, we don't run third-party advertising tracking, and we don't use cookies for marketing.</div>",
      },
      {
        id: "how-we-use",
        title: "How we use it",
        bodyHtml:
          "<p>We use the data you give us only to:</p><ul><li>Reply to your inquiry and discuss potential engagements</li><li>Send the newsletter you signed up for (you can unsubscribe at any time)</li><li>Deliver and improve the work we do for clients during an engagement</li><li>Comply with legal obligations (tax records, invoicing)</li></ul>",
      },
      {
        id: "retention",
        title: "Data retention",
        bodyHtml:
          "<p>Inquiry emails are kept for 2 years from last contact. Newsletter subscribers are kept until they unsubscribe. Engagement records (contracts, invoices) are kept for 7 years to meet Vietnamese tax law.</p>",
      },
      {
        id: "your-rights",
        title: "Your rights",
        bodyHtml:
          "<p>You can request a copy of any data we hold about you, ask us to correct it, or delete it entirely. Email <a href=\"mailto:hello@strucxal.studio\">hello@strucxal.studio</a> with the subject \"Data request\" — we reply within 7 days.</p>",
      },
      {
        id: "contact",
        title: "Contact",
        bodyHtml:
          "<p>Questions about this policy? Email <a href=\"mailto:hello@strucxal.studio\">hello@strucxal.studio</a>. We're a small team and we answer ourselves.</p>",
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    navLabel: "Terms",
    effectiveDate: "May 28, 2026",
    version: "v2.0",
    jurisdiction: "Vietnam",
    sections: [
      {
        id: "intro",
        title: "Introduction",
        bodyHtml:
          "<p>These terms cover your use of strucxal.studio. For engagement-specific terms (deliverables, payment, IP transfer), we sign a separate contract before any project starts.</p>",
      },
      {
        id: "use",
        title: "Acceptable use",
        bodyHtml:
          "<p>You may read, share, and link to anything published on this site. Don't:</p><ul><li>Attempt to gain unauthorised access to systems, accounts, or data</li><li>Scrape, crawl, or copy substantial parts of the site without permission</li><li>Use our brand or content in ways that imply endorsement you don't have</li></ul>",
      },
      {
        id: "ip",
        title: "Intellectual property",
        bodyHtml:
          "<p>The studio's brand, copy, code samples, and design work on this site are © 2026 Strucxal Studio. Client work shown in case studies is the property of the respective client and is shown with permission.</p><p>If you want to quote, link, or reference our content — go ahead. If you want to republish in full, email us first.</p>",
      },
      {
        id: "third-party",
        title: "Third-party services",
        bodyHtml:
          "<p>We rely on a small number of vendors to run this site: Vercel for hosting, Plausible for analytics, Sanity for the blog CMS, Resend for transactional email. Each has its own privacy policy — we link to them on request.</p>",
      },
      {
        id: "warranties",
        title: "Warranties & liability",
        bodyHtml:
          "<p>The website is provided \"as is\". We do not warrant that it will be uninterrupted, error-free, or free of harmful components. To the extent permitted by law, our liability for any claim arising from your use of the site is limited to the amount you paid us in the 12 months prior to the claim (which, for visitors who haven't engaged us, is zero).</p>",
      },
      {
        id: "law",
        title: "Governing law",
        bodyHtml:
          "<p>These terms are governed by the laws of Vietnam. Disputes are subject to the exclusive jurisdiction of the courts of Khanh Hoa Province.</p>",
      },
    ],
  },
];

export function findLegalDoc(slug: string): LegalDoc | undefined {
  return legalDocs.find((d) => d.slug === slug);
}
