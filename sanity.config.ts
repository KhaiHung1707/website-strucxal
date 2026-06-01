import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import { apiVersion, dataset, projectId, studioUrl } from "./src/sanity/env";

export default defineConfig({
  name: "strucxal-studio",
  title: "Strucxal Studio",
  basePath: studioUrl,
  projectId,
  dataset,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema: { types: schemaTypes },
});
