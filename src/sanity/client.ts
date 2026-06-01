import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, isConfigured, projectId, readToken } from "./env";

let _client: SanityClient | null = null;

export function getSanityClient(): SanityClient | null {
  if (!isConfigured) return null;
  if (_client) return _client;
  _client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    token: readToken || undefined,
    perspective: "published",
  });
  return _client;
}

/** Safely run a GROQ query, returning a fallback when Sanity is not configured. */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  fallback: T,
): Promise<T> {
  const client = getSanityClient();
  if (!client) return fallback;
  try {
    return await client.fetch<T>(query, params, { next: { revalidate: 60 } });
  } catch (err) {
    console.error("[sanity] fetch failed:", err);
    return fallback;
  }
}
