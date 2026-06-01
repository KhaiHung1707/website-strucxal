import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { dataset, isConfigured, projectId } from "./env";

const builder = isConfigured ? imageUrlBuilder({ projectId, dataset }) : null;

export function urlForImage(source: SanityImageSource | undefined | null) {
  if (!source || !builder) return null;
  return builder.image(source);
}
