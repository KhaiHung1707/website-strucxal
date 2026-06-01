import type { SchemaTypeDefinition } from "sanity";

import { blockContent } from "./blockContent";

// Singletons (only one document each — enforce in structure builder)
import { siteSettings } from "./siteSettings";
import { homepage } from "./homepage";

// Reusable entities
import { project } from "./project";
import { service } from "./service";
import { testimonial } from "./testimonial";
import { faq } from "./faq";
import { pricingPlan } from "./pricingPlan";
import { changelogEntry } from "./changelogEntry";
import { legalDoc } from "./legalDoc";
import { teamMember } from "./teamMember";

// Blog
import { post } from "./post";
import { author } from "./author";
import { category } from "./category";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Building blocks
  blockContent,
  // Singletons
  siteSettings,
  homepage,
  // Marketing content
  project,
  service,
  testimonial,
  faq,
  pricingPlan,
  changelogEntry,
  legalDoc,
  teamMember,
  // Blog
  post,
  author,
  category,
];
