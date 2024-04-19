"use strict";

/**
 * This is used to verify if the current Website is running on a Development Environment
 */
export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

/**
 * This is used for telling Next.js if the Website is deployed on Vercel
 *
 * Can be used for conditionally enabling features that we know are Vercel only
 *
 * @see https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables#framework-environment-variables
 */
export const VERCEL_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV || undefined;

/**
 * This is used for any place that requires the full canonical URL path for website and its deployment
 *
 * This variable can either come from the Vercel Deployment as `NEXT_PUBLIC_VERCEL_URL` or from
 * the `NEXT_PUBLIC_BASE_URL` Environment Variable that is manually defined by us if necessary.
 * Otherwise it will fallback to the default URL.
 *
 * @see https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables#framework-environment-variables
 */
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "https://nextjs-project-template-rosy.vercel.app/";

/**
 * The `localStorage` key to store the theme choice of `next-themes`
 *
 * This is what allows us to store user preference for theming
 */
export const THEME_STORAGE_KEY = "theme";

/**
 * Supports a manual override of the base path of the Website
 *
 * This is useful when running the deployment on a subdirectory
 * of a domain, such as when hosted on GitHub Pages.
 *
 * Note that this is a custom Environment Variable that can be defined by us when necessary
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * This is used for defining a default time of when `next-data` and other dynamically generated
 * but static-enabled pages should be regenerated.
 *
 * Note that this is a custom Environment Variable that can be defined by us when necessary
 */
export const VERCEL_REVALIDATE = Number(
  process.env.NEXT_PUBLIC_VERCEL_REVALIDATE_TIME || 300
);
