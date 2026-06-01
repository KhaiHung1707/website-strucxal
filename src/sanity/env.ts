/**
 * Sanity environment configuration.
 *
 * Required env vars (set in .env.local):
 *   NEXT_PUBLIC_SANITY_PROJECT_ID  — from sanity.io/manage
 *   NEXT_PUBLIC_SANITY_DATASET     — usually "production"
 *
 * Optional:
 *   NEXT_PUBLIC_SANITY_API_VERSION — defaults to current date
 *   SANITY_API_READ_TOKEN          — for draft previews / private datasets
 *
 * `isConfigured` lets us render a graceful empty state instead of throwing
 * during build/dev when no Sanity project has been wired up yet.
 */

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-05-01";
export const readToken = process.env.SANITY_API_READ_TOKEN ?? "";

export const isConfigured = Boolean(projectId && dataset);

export const studioUrl = "/studio";
