import type { FooterData, NavData } from "@/types/content";

export const navData: NavData = {
  links: [
    { label: "Services", href: "/#services" },
    { label: "Work", href: "/work" },
    { label: "Process", href: "/#process" },
    { label: "Pricing", href: "/pricing" },
  ],
  cta: { label: "Contact", href: "/contact" },
};

export const footerData: FooterData = {
  newsletterHeadlineTop: "Weekly insight.",
  newsletterHeadlineBottom: "No spam.",
  newsletterCopy:
    "One email a week — design systems, performance tips, fresh case studies, and patterns we've learned in the field. Five minutes to read, a week to apply.",
  newsletterFootnote: "★ Unsubscribe any time · We never sell your email.",
  brandDesc:
    "A design and development studio for modern brands. Based in Vietnam, serving clients worldwide.",
  cols: [
    {
      heading: "Services",
      links: [
        { label: "UI/UX Design", href: "/services" },
        { label: "Web development", href: "/services" },
        { label: "E-commerce", href: "/services" },
        { label: "SaaS platform", href: "/services" },
      ],
    },
    {
      heading: "Studio",
      links: [
        { label: "About", href: "/about" },
        { label: "Process", href: "/#process" },
        { label: "Blog", href: "/blog" },
        { label: "Changelog", href: "/changelog" },
        { label: "Careers", href: "/about#careers" },
      ],
    },
    {
      heading: "Contact",
      links: [
        { label: "hello@strucxal.studio", href: "mailto:hello@strucxal.studio" },
        { label: "LinkedIn", href: "#" },
        { label: "Dribbble", href: "#" },
        { label: "Upwork", href: "#" },
        { label: "Privacy", href: "/legal/privacy" },
        { label: "Terms", href: "/legal/terms" },
      ],
    },
  ],
  bottomLeft: "© 2026 Strucxal Studio · Nha Trang, Vietnam",
  bottomRight: "v4.0 · Restructured narrative",
};
