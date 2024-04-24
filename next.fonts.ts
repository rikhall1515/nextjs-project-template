import { Plus_Jakarta_Sans, Atkinson_Hyperlegible } from "next/font/google";

// This configures the Next.js Font for Open Sans
// We then export a variable and class name to be used
// within Tailwind (tailwind.config.ts) and Storybook (preview.js)
export const PLUS_JAKARTA_SANS = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  display: "fallback",
  subsets: ["latin"],
  variable: "--font-jakarta",
});

// This configures the Next.js Font for IBM Plex Mono
// We then export a variable and class name to be used
// within Tailwind (tailwind.config.ts) and Storybook (preview.js)
export const ATKINSON_HYPERLEGIBLE = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-atkinson",
});
