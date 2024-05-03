import { ImageResponse } from "next/og";

// import HexagonGrid from "@/components/Icons/HexagonGrid";
// import JsIconWhite from "@/components/Icons/Logos/JsIconWhite";

import Logo from "@/components/logo";
import { VERCEL_ENV, VERCEL_REVALIDATE } from "@/next.constants.mjs";

// This is the Route Handler for the `GET` method which handles the request
// for generating OpenGrapgh images for Blog Posts and Pages
// @see https://nextjs.org/docs/app/building-your-application/routing/router-handlers
export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  // ?title=<title>
  const hasTitle = searchParams.has("title");
  const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "Next.js Project Template";
  return new ImageResponse(
    (
      <div tw="relative flex items-center justify-center bg-black w-[1200px] h-[600px]">
        <div tw="absolute mx-auto flex max-w-xl flex-col text-center items-center text-3xl font-semibold text-white">
          <Logo length={128} />
          <h1 tw="font-bold" style={{ fontWeight: 700 }}>
            {title}
          </h1>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
};

// We want to use `edge` runtime when using Vercel
// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#runtime
export const runtime = VERCEL_ENV ? "edge" : "nodejs";

// In this case we want to catch-all possible requests. This ensures that we always generate and
// serve the OpenGrapgh images independently on the locale
// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
export const dynamicParams = true;

// Enforces that this route is used as static rendering
// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = "auto";

// Ensures that this endpoint is invalidated and re-executed every X minutes
// so that when new deployments happen, the data is refreshed
// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = VERCEL_REVALIDATE;
