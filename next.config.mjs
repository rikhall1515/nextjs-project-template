"use strict";
import { fileURLToPath } from "node:url";

import createJiti from "jiti";
const jiti = createJiti(fileURLToPath(import.meta.url));

import { BASE_PATH } from "./next.constants.mjs";

// Import env here to validate during build. Using jiti we can import .ts files :)
jiti("./env/client.ts");
jiti("./env/server.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // We don't use trailing slashes on URLs from the Node.js Website
  trailingSlash: false,
  // We don't want to redirect with trailing slashes
  skipTrailingSlashRedirect: true,
  // We allow the BASE_PATH to be overridden in case that the Website
  // is being built on a subdirectory
  basePath: BASE_PATH,
  images: {
    // We allow SVGs to be used as images
    dangerouslyAllowSVG: true,
  },
  // We don't want to run Type Checking on Production Builds
  // as we already check it on the CI within each Pull Request
  typescript: { ignoreBuildErrors: true },
  // We don't want to run ESLint Checking on Production Builds
  // as we already check it on the CI within each Pull Request
  // we also configure ESLint to run its lint checking on all files (next lint)
  eslint: { dirs: ["."], ignoreDuringBuilds: true },
  // Adds custom WebPack configuration to our Next.hs setup
  webpack: function (config) {
    // Next.js WebPack Bundler does not know how to handle `.mjs` files on `node_modules`
    // This is not an issue when using TurboPack as it uses SWC and it is ESM-only
    // Once Next.js uses Turbopack for their build process we can remove this
    config.module.rules.push({
      test: /\.m?js$/,
      type: "javascript/auto",
      resolve: { fullySpecified: false },
    });

    return config;
  },
  experimental: {
    // A list of packages that Next.js should automatically evaluate and optimise the imports for.
    // @see https://vercel.com/blog/how-we-optimized-package-imports-in-next-js
    optimizePackageImports: [
      "@radix-ui/react-avatar",
      "@radix-ui/react-select",
      "@radix-ui/react-toast",
      "tailwindcss",
    ],
    // Removes the warning regarding the WebPack Build Worker
    webpackBuildWorker: false,
  },
};

export default nextConfig;
