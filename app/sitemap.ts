import type { MetadataRoute } from "next";

import { BASE_PATH, BASE_URL } from "@/next.constants.mjs";

// This is the combination of the Application Base URL and Base PATH
const baseUrlAndPath = `${BASE_URL}${BASE_PATH}`;

// This allows us to generate a `sitemap.xml` file dynamically based on the needs of the Node.js Website
// Next.js Sitemap Generation doesn't support `alternate` refs yet
// @see https://github.com/vercel/next.js/discussions/55646
const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const staticUrls = [
    "",
    "legal/terms",
    "legal/support-terms",
    "legal/sla",
    "legal/privacy-policy",
    "sign-in",
    "sign-up",
    "about",
    "help",
  ];
  const currentDate = new Date().toISOString();

  return [...staticUrls].map((route) => ({
    url: `${baseUrlAndPath}${route}`,
    lastModified: currentDate,
    changeFrequency: "always",
  }));
};

export default sitemap;

// Enforces that this route is used as static rendering
// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = "error";
