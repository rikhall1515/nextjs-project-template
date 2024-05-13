import svgToTinyDataUri from "mini-svg-data-uri";
import type { Config } from "tailwindcss";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
// type TRecord = Record<string, string> | string;
// function addVariablesForColors({
//   addBase,
//   theme,
// }: {
//   addBase: (arg0: Record<string, TRecord>) => void;
//   theme: (arg0: string) => Record<string, string>;
// }) {
//   const allColors = flattenColorPalette(theme("colors"));
//   const newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{tsx,mdx}",
    "./components/**/*.tsx",
    "./context/**/*.tsx",
    "./layouts/**/*.tsx",
    "./.storybook/preview.tsx",
    "./.storybook/main.ts",
    "./app/**/*.tsx",
  ],
  prefix: "",
  theme: {
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.875rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.25rem"],
      "4xl": ["2.25rem", "2.5rem"],
      "5xl": ["3rem", "3rem"],
      "6xl": ["3.75rem", "3.75rem"],
      "7xl": ["4.5rem", "4.5rem"],
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    fontFamily: {
      plusjakarta: ["var(--font-jakarta)"],
      atkinson: ["var(--font-atkinson)"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      m: "420px",
      // => @media (min-width: 420px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      /* light: hsl(0 0% 98%) */
      /* dark: hsl(274 84% 5%) */
      background: "hsl(var(--background))",
      /* light: hsl(274 84% 5%) */
      /* dark: hsl(270 40% 98%) */
      foreground: "hsl(var(--foreground))",
      card: {
        /* light: hsl(0 0% 100%) */
        /* dark: hsl(274 84% 10%) */
        DEFAULT: "hsl(var(--card))",
        /* light: hsl(274 84% 5%) */
        /* dark: hsl(270 40% 98%) */
        foreground: "hsl(var(--card-foreground))",
      },
      popover: {
        /* light: hsl(0 0% 100%) */
        /* dark: hsl(274 84% 10%) */
        DEFAULT: "hsl(var(--popover))",
        /* light: hsl(274 84% 5%) */
        /* dark: hsl(270 40% 98%) */
        foreground: "hsl(var(--popover-foreground))",
      },
      primary: {
        /* light: hsl(274 90% 47%) */
        /* dark: hsl(274 70% 61%) */
        DEFAULT: "hsl(var(--primary))",
        /* light: hsl(270 40% 98%) */
        /* dark: hsl(274 47% 11%) */
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        /* light: hsl(238 82% 38%) */
        /* dark: hsl(238 72% 58%) */
        DEFAULT: "hsl(var(--secondary))",
        /* light: hsl(0 0% 98%) */
        /* dark: hsl(270 40% 98%) */
        foreground: "hsl(var(--secondary-foreground))",
      },
      muted: {
        /* light: hsl(270 40% 96%) */
        /* dark: hsl(260 33% 18%) */
        DEFAULT: "hsl(var(--muted))",
        /* light: hsl(250 16% 47%) */
        /* dark: hsl(250 20% 65%) */
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        /* light: hsl(274 90% 30%) */
        /* dark: hsl(274 70% 80%) */
        DEFAULT: "hsl(var(--accent))",
        /* light: hsl(270 40% 98%) */
        /* dark: hsl(274 47% 11%) */
        foreground: "hsl(var(--accent-foreground))",
      },
      successful: {
        /* light: hsl(101 90% 40%) */
        /* dark: hsl(101 70% 60%) */
        DEFAULT: "hsl(var(--successful))",
        /* light: hsl(0 0% 98%) */
        /* dark: hsl(274 47% 11%) */
        foreground: "hsl(var(--successful-foreground))",
      },
      pending: {
        /* light: hsl(25 90% 40%) */
        /* dark: hsl(25 70% 60%) */
        DEFAULT: "hsl(var(--pending))",
        /* light: hsl(0 0% 98%) */
        /* dark: hsl(274 47% 11%) */
        foreground: "hsl(var(--pending-foreground))",
      },
      destructive: {
        /* light: hsl(0 90% 40%) */
        /* dark: hsl(0 70% 60%) */
        DEFAULT: "hsl(var(--destructive))",
        /* light: hsl(0 0% 98%) */
        /* dark: hsl(274 47% 11%) */
        foreground: "hsl(var(--destructive-foreground))",
      },
      /* light: hsl(270 32% 91%) */
      /* dark: hsl(260 33% 18%) */
      border: "hsl(var(--border))",
      /* light: hsl(270 32% 91%) */
      /* dark: hsl(260 33% 18%) */
      input: "hsl(var(--input))",
      /* light: hsl(274 84% 5%) */
      /* dark: hsl(213 27% 84%) */
      ring: "hsl(var(--ring))",
      white: "#FFFFFF",
      black: "#2E2E2E",
      transparent: "transparent",
      shadow: "#101828",
    },
    extend: {
      screens: {
        m: "420px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "150% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        gradient: "gradient 6s linear infinite",
      },
      transitionTimingFunction: {
        customEase: "cubic-bezier(0.13, 0.87, 0.35, 1.09)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@savvywombat/tailwindcss-grid-areas"),
    require("@tailwindcss/container-queries"),
    function ({ matchUtilities, theme }: unknown) {
      matchUtilities(
        {
          "bg-grid": (value: string) => ({
            backgroundImage: `url("${svgToTinyDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: string) => ({
            backgroundImage: `url("${svgToTinyDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: string) => ({
            backgroundImage: `url("${svgToTinyDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

export default config;
