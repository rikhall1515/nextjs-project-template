import type { Metadata } from "next";

import { env } from "@/env/client";

import Hero from "./_components/hero";

export const metadata: Metadata = {
  title: "NextJS Template",
  alternates: {
    canonical: "/",
  },
  icons: {
    apple: "/static/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "alternate icon",
        sizes: "48x48",
        url: "/static/favicon/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        sizes: "any",
        url: "/static/favicon/favicon.svg",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/static/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/static/favicon/favicon-16x16.png",
      },
      {
        rel: "mask-icon",
        color: "#0e0813",
        url: "/public/static/favicon/safari-pinned-tab.svg",
      },
    ],
  },
  openGraph: {
    title: "NextJS Template - rikhall.proj",
    description:
      "This is a Next.JS template designed and made by Rikard Hallberg.",
    url: env.NEXT_PUBLIC_BASE_URL,
    images: "/static/og.png",
    siteName: "RikardTemplate",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "NextJS Template - rikhall.proj",
    description:
      "This is a Next.JS template designed and made by Rikard Hallberg.",
    images: "/static/og.png",
    card: "summary_large_image",
    creator: "@rikhall_",
  },
};

export default function Home() {
  return <Hero />;
}
