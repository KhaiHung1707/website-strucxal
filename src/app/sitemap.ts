import type { MetadataRoute } from "next";
import { workPageData } from "@/content/work-page";
import { legalDocs } from "@/content/legal";
import { sanityFetch } from "@/sanity/client";
import { POST_SLUGS_QUERY } from "@/sanity/queries";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://strucxal.studio";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL + "/", lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: SITE_URL + "/work", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: SITE_URL + "/services", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: SITE_URL + "/pricing", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: SITE_URL + "/about", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: SITE_URL + "/contact", lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: SITE_URL + "/blog", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: SITE_URL + "/changelog", lastModified: now, changeFrequency: "weekly", priority: 0.5 },
  ];

  const legalRoutes: MetadataRoute.Sitemap = legalDocs.map((d) => ({
    url: SITE_URL + "/legal/" + d.slug,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  const caseRoutes: MetadataRoute.Sitemap = workPageData.masonry.map((item) => ({
    url: SITE_URL + "/work/" + item.id,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const postSlugs = await sanityFetch<string[]>(POST_SLUGS_QUERY, {}, []);
  const postRoutes: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
    url: SITE_URL + "/blog/" + slug,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseRoutes, ...postRoutes, ...legalRoutes];
}
