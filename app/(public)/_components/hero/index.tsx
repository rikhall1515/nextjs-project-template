import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Wrapper from "./wrapper";

export default function Hero() {
  return (
    <>
      <Wrapper>
        <Link
          className={cn(
            "relative inline-flex overflow-hidden rounded-full",
            "focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
            "mb-6 h-12 p-[1px] transition-all hover:scale-110 focus:outline-none"
          )}
          href="https://github.com/rikhall1515/nextjs-project-template/tree/main"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary))_0%,hsl(var(--background))_25%,hsl(var(--background))_50%,hsl(var(--primary))_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-3 py-1 text-sm font-medium backdrop-blur-md transition-all hover:bg-primary hover:text-primary-foreground">
            @ <span className="mx-1 inline-block font-bold">v2.0.0</span>
            available
          </span>
        </Link>
        <div className="z-[5] mb-12 space-y-2">
          <h1 className="mb-4 text-center text-3xl font-extrabold leading-[2.5rem] tracking-wide m:text-4xl lg:text-5xl lg:leading-[3.5rem]">
            <span className="bg-gradient-to-b from-foreground/40 to-foreground bg-clip-text text-transparent">
              Stop
            </span>{" "}
            <span className="bg-gradient-to-b from-foreground/40 to-foreground bg-clip-text text-transparent">
              writing
            </span>{" "}
            <span className="bg-gradient-to-b from-foreground/40 to-foreground bg-clip-text text-transparent">
              boilerplate
            </span>{" "}
            <span className="bg-gradient-to-b from-foreground/40 to-foreground bg-clip-text text-transparent">
              code.
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-center text-foreground md:text-xl">
            This is a Next.js project template powered by{" "}
            <span className="gradientText animate-gradient bg-clip-text font-bold text-transparent">
              turbo
            </span>{" "}
            and vercel that makes it easier to deploy faster.
          </p>
        </div>
        <div className="relative">
          <svg
            width="723"
            height="806"
            viewBox="0 0 723 806"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute bottom-4 left-6 !w-[45rem] opacity-50 md:bottom-8 md:left-12"
          >
            <g filter="url(#filter0_f_1276_1297)">
              <path
                d="M539.041 694.226C704.413 669.259 571.082 530.318 483.745 463.968C472.981 457.523 436.625 439.135 377.311 417.147C303.169 389.661 352.505 305.832 255.699 151.609C158.893 -2.61458 47.4605 271.8 139.393 302.714C231.325 333.628 197.58 433.108 223.876 536.039C250.172 638.97 332.326 725.434 539.041 694.226Z"
                fill="url(#paint0_linear_1276_1297)"
              />
              <path
                d="M539.041 694.226C704.413 669.259 571.082 530.318 483.745 463.968C472.981 457.523 436.625 439.135 377.311 417.147C303.169 389.661 352.505 305.832 255.699 151.609C158.893 -2.61458 47.4605 271.8 139.393 302.714C231.325 333.628 197.58 433.108 223.876 536.039C250.172 638.97 332.326 725.434 539.041 694.226Z"
                fill="url(#paint1_radial_1276_1297)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1276_1297"
                x="0.293747"
                y="0.0945282"
                width="722.202"
                height="805.397"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="52.4"
                  result="effect1_foregroundBlur_1276_1297"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1276_1297"
                x1="602.09"
                y1="539.236"
                x2="111.535"
                y2="426.974"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.08" stop-color="#A26EF7" />
                <stop offset="0.9999" stop-color="#C36EF7" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_1276_1297"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(231.366 440.155) rotate(-52.2302) scale(274.037 134.982)"
              >
                <stop stop-color="#CB6EF7" />
                <stop offset="1" stop-color="#1017AF" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
          <svg
            width="616"
            height="655"
            viewBox="0 0 616 655"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute bottom-[-4rem] right-[6rem] !w-[40rem] opacity-50 md:bottom-[-8rem] md:right-[12rem]"
          >
            <g filter="url(#filter0_f_1276_1295)">
              <path
                d="M109.001 459C133.401 586.6 202.308 555.059 232.001 512C252 483 270.823 475.897 302 466C369.388 444.609 355 545.5 474 522.5C593 499.5 385 404.5 400.5 292.5C416 180.5 570.5 156.5 454 115C337.5 73.5003 274.501 169.5 266.001 302C257.501 434.5 78.5014 299.5 109.001 459Z"
                fill="url(#paint0_linear_1276_1295)"
              />
              <path
                d="M109.001 459C133.401 586.6 202.308 555.059 232.001 512C252 483 270.823 475.897 302 466C369.388 444.609 355 545.5 474 522.5C593 499.5 385 404.5 400.5 292.5C416 180.5 570.5 156.5 454 115C337.5 73.5003 274.501 169.5 266.001 302C257.501 434.5 78.5014 299.5 109.001 459Z"
                fill="url(#paint1_radial_1276_1295)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1276_1295"
                x="0.707809"
                y="0.426559"
                width="615.026"
                height="654.127"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="52.4"
                  result="effect1_foregroundBlur_1276_1295"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1276_1295"
                x1="496.411"
                y1="515.559"
                x2="189.275"
                y2="479.98"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.08" stop-color="#A26EF7" />
                <stop offset="0.49" stop-color="#C36EF7" />
                <stop offset="1" stop-color="#1017AF" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_1276_1295"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(347.5 456.5) rotate(-140.097) scale(338.274 284.182)"
              >
                <stop stop-color="#CB6EF7" />
                <stop offset="1" stop-color="#1017AF" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>

          <Button asChild className="transition-all">
            <Link
              className="inline-flex h-14 items-center justify-center rounded-md px-6 text-lg font-semibold shadow hover:scale-110 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none"
              href="#"
            >
              Get Started
            </Link>
          </Button>
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      </Wrapper>
    </>
  );
}
