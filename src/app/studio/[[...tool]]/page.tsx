/**
 * Sanity Studio mount point.
 * Visit /studio in dev or production to edit content.
 * Studio runs entirely in the browser — bypasses the marketing layout.
 */
export { metadata, viewport } from "next-sanity/studio";

import { Studio } from "./Studio";

export const dynamic = "force-static";

export default function StudioPage() {
  return <Studio />;
}
