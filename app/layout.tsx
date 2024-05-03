import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";

import "@/styles/index.css";
import Providers from "@/context";
import { env } from "@/env/client";
import { VERCEL_ENV } from "@/next.constants.mjs";
import { PLUS_JAKARTA_SANS, ATKINSON_HYPERLEGIBLE } from "@/next.fonts";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: {
    template: "%s | rikhall.proj",
    default: "NextJS Template | rikhall.proj",
  },
  description: "This is a Next.JS template made by Rikard Hallberg.",
  manifest: "/site.webmanifest",
  creator: "Rikard Hallberg",
  publisher: "Vercel",
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  applicationName: "rikhall.proj",
  authors: [{ name: "Rikard Hallberg", url: "https://rikardhallberg.com" }],
  other: {
    "msapplication-TileColor": "#0e0813",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0217" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${PLUS_JAKARTA_SANS.variable} ${ATKINSON_HYPERLEGIBLE.variable}`}>
        <Providers>{children}</Providers>
        {VERCEL_ENV && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
