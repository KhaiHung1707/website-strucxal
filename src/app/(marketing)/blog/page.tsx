import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { sanityFetch } from "@/sanity/client";
import { POSTS_INDEX_QUERY } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";
import { isConfigured } from "@/sanity/env";
import type { PostSummary } from "@/sanity/types";
import { homepageData } from "@/content/homepage";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Design systems, performance notes, case studies, and patterns we've learned shipping for the web.",
};

export const revalidate = 60;

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await sanityFetch<PostSummary[]>(POSTS_INDEX_QUERY, {}, []);

  return (
    <>
      <PageHero
        eyebrow="★ Blog"
        headingTop="Notes from"
        headingBottom="the workbench."
        lead="Design systems, performance tips, case studies, and the patterns we keep coming back to."
      />

      <section className="blog-section">
        <div className="container">
          {posts.length === 0 ? (
            <div className="blog-empty">
              <h3>{isConfigured ? "No posts yet" : "Blog is not connected"}</h3>
              <p>
                {isConfigured
                  ? "Posts you publish in the Studio will appear here. Head to "
                  : "Set up Sanity to start publishing. Create a project at sanity.io/manage and add "}
                <Link href="/studio">/studio</Link>{" "}
                {isConfigured ? (
                  "to write your first post."
                ) : (
                  <>
                    your <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and{" "}
                    <code>NEXT_PUBLIC_SANITY_DATASET</code> to <code>.env.local</code>.
                  </>
                )}
              </p>
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map((p) => {
                const cover = urlForImage(p.coverImage);
                return (
                  <Link key={p._id} href={`/blog/${p.slug}`} className="blog-card">
                    <div className="cover">
                      {cover ? (
                        <Image
                          src={cover.width(800).height(500).url()}
                          alt={p.title}
                          width={800}
                          height={500}
                        />
                      ) : (
                        <div className="cover-placeholder">{p.title.slice(0, 1)}</div>
                      )}
                    </div>
                    <div className="body">
                      <div className="meta">
                        {formatDate(p.publishedAt)}
                        {p.readingTimeMinutes ? ` · ${p.readingTimeMinutes} min read` : ""}
                      </div>
                      <h3>{p.title}</h3>
                      {p.excerpt ? <p className="excerpt">{p.excerpt}</p> : null}
                      <span className="read-more">Read post →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <FinalCTA data={homepageData.finalCta} />
    </>
  );
}
