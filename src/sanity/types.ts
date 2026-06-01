import type { PortableTextBlock } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";

export interface AuthorRef {
  name: string;
  role?: string;
  slug?: string;
  bio?: string;
  image?: SanityImageSource;
}

export interface CategoryRef {
  title: string;
  slug: string;
}

export interface PostSummary {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  readingTimeMinutes?: number;
  coverImage?: SanityImageSource;
  author?: AuthorRef;
  categories?: CategoryRef[];
}

export interface PostFull extends PostSummary {
  body?: PortableTextBlock[];
}
