import { groq } from "next-sanity";

/* =========================================================
   BLOG
   ========================================================= */

export const POSTS_INDEX_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    readingTimeMinutes,
    coverImage,
    "author": author->{ name, role, "slug": slug.current, image },
    "categories": categories[]->{ title, "slug": slug.current }
  }
`;

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    readingTimeMinutes,
    coverImage,
    body,
    "author": author->{ name, role, bio, "slug": slug.current, image },
    "categories": categories[]->{ title, "slug": slug.current }
  }
`;

export const POST_SLUGS_QUERY = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

/* =========================================================
   SITE SETTINGS (singleton)
   ========================================================= */

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    ogImage,
    nav,
    footer,
    contact,
    social
  }
`;

/* =========================================================
   HOMEPAGE (singleton — references projects & may pull testimonials/faqs)
   ========================================================= */

export const HOMEPAGE_QUERY = groq`
  *[_type == "homepage"][0] {
    ...,
    "caseCarouselItems": caseCarouselItems[]->{
      "id": slug.current,
      tag,
      industry,
      stat,
      "gradient": gradient,
      headline,
      client,
      "title": coalesce(headline, client)
    },
    "heroFanCards": heroFanCards[] {
      gradient,
      meta,
      name,
      "projectSlug": project->slug.current
    }
  }
`;

/** Lightweight fragment to pair with HOMEPAGE_QUERY for testimonials + faqs. */
export const HOMEPAGE_TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial" && featured == true] | order(order asc) {
    _id,
    quote,
    authorName,
    initials,
    role,
    company,
    companyStat,
    avatar
  }
`;

export const HOMEPAGE_FAQS_QUERY = groq`
  *[_type == "faq" && "home" in surfaces] | order(order asc) {
    _id,
    question,
    answer
  }
`;

/* =========================================================
   PROJECTS (work)
   ========================================================= */

export const PROJECT_INDEX_QUERY = groq`
  *[_type == "project" && defined(slug.current)] | order(order asc, year desc) {
    _id,
    "slug": slug.current,
    client,
    industry,
    category,
    location,
    year,
    duration,
    tag,
    stat,
    gradient,
    cover,
    masonrySize,
    featured,
    headline
  }
`;

export const PROJECT_BY_SLUG_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    client,
    industry,
    category,
    location,
    year,
    duration,
    tag,
    stat,
    gradient,
    cover,
    headline,
    lead,
    metaPills,
    infoCard,
    outcomes,
    sections,
    beforeAfter,
    results,
    seoTitle,
    seoDescription,
    "related": related[]->{
      _id,
      "slug": slug.current,
      client,
      industry,
      tag,
      stat,
      gradient,
      headline
    }
  }
`;

export const PROJECT_SLUGS_QUERY = groq`
  *[_type == "project" && defined(slug.current)][].slug.current
`;

/** Homepage editorial list — first N projects (or featured). */
export const PROJECT_EDITORIAL_QUERY = groq`
  *[_type == "project" && defined(slug.current)] | order(featured desc, order asc) [0...8] {
    _id,
    "slug": slug.current,
    client,
    industry,
    location,
    year,
    duration,
    tag,
    stat,
    gradient,
    cover,
    "metaItems": [tag, location + " · " + year, duration]
  }
`;

/* =========================================================
   SERVICES
   ========================================================= */

export const SERVICE_INDEX_QUERY = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    "slug": slug.current,
    title,
    num,
    visual,
    tabTitle,
    tabDesc,
    headingHtml,
    body,
    deliverables,
    meta,
    reverse
  }
`;

/* =========================================================
   TESTIMONIALS
   ========================================================= */

export const TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    authorName,
    initials,
    role,
    company,
    companyStat,
    avatar,
    "projectSlug": project->slug.current
  }
`;

/* =========================================================
   FAQS (filtered by surface)
   ========================================================= */

export const FAQS_BY_SURFACE_QUERY = groq`
  *[_type == "faq" && $surface in surfaces] | order(order asc) {
    _id,
    question,
    answer,
    category
  }
`;

/* =========================================================
   PRICING
   ========================================================= */

export const PRICING_PLANS_QUERY = groq`
  *[_type == "pricingPlan"] | order(order asc) {
    _id,
    "slug": slug.current,
    name,
    tag,
    price,
    priceUnit,
    pitch,
    features,
    cta,
    featured
  }
`;

/* =========================================================
   CHANGELOG
   ========================================================= */

export const CHANGELOG_QUERY = groq`
  *[_type == "changelogEntry"] | order(date desc) {
    _id,
    version,
    date,
    type,
    title,
    summary,
    items
  }
`;

/* =========================================================
   LEGAL
   ========================================================= */

export const LEGAL_INDEX_QUERY = groq`
  *[_type == "legalDoc"] {
    "slug": slug.current,
    title,
    lastUpdated
  }
`;

export const LEGAL_BY_SLUG_QUERY = groq`
  *[_type == "legalDoc" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    lastUpdated,
    intro,
    sections
  }
`;

export const LEGAL_SLUGS_QUERY = groq`
  *[_type == "legalDoc" && defined(slug.current)][].slug.current
`;

/* =========================================================
   TEAM
   ========================================================= */

export const TEAM_MEMBERS_QUERY = groq`
  *[_type == "teamMember"] | order(founder desc, order asc) {
    _id,
    name,
    "slug": slug.current,
    role,
    roleTag,
    founder,
    bio,
    portrait,
    avatar,
    skills,
    socials
  }
`;
