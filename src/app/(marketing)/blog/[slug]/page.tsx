import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PostBody } from "@/components/sections/PostBody";
import { sanityFetch } from "@/sanity/client";
import { POST_BY_SLUG_QUERY, POST_SLUGS_QUERY } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";
import type { PostFull } from "@/sanity/types";
import { homepageData } from "@/content/homepage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>(POST_SLUGS_QUERY, {}, []);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<PostFull | null>(POST_BY_SLUG_QUERY, { slug }, null);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await sanityFetch<PostFull | null>(POST_BY_SLUG_QUERY, { slug }, null);
  if (!post) notFound();

  const cover = urlForImage(post.coverImage);
  const avatar = urlForImage(post.author?.image);

  return (
    <>
      <article className="post-article">
        <div className="container">
          <div className="post-meta-row">
            <span>{formatDate(post.publishedAt)}</span>
            {post.readingTimeMinutes ? (
              <>
                <span className="dot" />
                <span>{post.readingTimeMinutes} min read</span>
              </>
            ) : null}
            {post.categories && post.categories.length > 0 ? (
              <>
                <span className="dot" />
                <span>{post.categories.map((c) => c.title).join(", ")}</span>
              </>
            ) : null}
          </div>
          <h1>{post.title}</h1>
          {post.excerpt ? <p className="excerpt">{post.excerpt}</p> : null}

          {cover ? (
            <div className="post-cover">
              <Image
                src={cover.width(1400).height(788).url()}
                alt={post.title}
                width={1400}
                height={788}
                priority
              />
            </div>
          ) : null}

          <PostBody value={post.body} />

          {post.author ? (
            <div className="post-author">
              <div className="avatar">
                {avatar ? (
                  <Image
                    src={avatar.width(120).height(120).url()}
                    alt={post.author.name}
                    width={56}
                    height={56}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                ) : (
                  post.author.name.slice(0, 2).toUpperCase()
                )}
              </div>
              <div>
                <div className="name">{post.author.name}</div>
                {post.author.role ? <div className="role">{post.author.role}</div> : null}
              </div>
            </div>
          ) : null}
        </div>
      </article>

      <FinalCTA data={homepageData.finalCta} />
    </>
  );
}
