"use client";
import { FaArrowRight } from "react-icons/fa6";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function GlobalError() {
  return (
    <html>
      <body>
        <Header />
        <main className="">
          <section
            className={cn(
              "h-full min-h-[40rem] w-full",
              "py-8 m:py-16 lg:py-24",
              "relative overflow-x-hidden overflow-y-visible",
              "bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
            )}
          >
            <div
              className={cn(
                "min-h-[40rem] w-full max-w-[103rem]",
                "pxPage mx-auto",
                "flex flex-col items-center justify-center py-[7rem]"
              )}
            >
              <Logo className="mb-12 h-[8rem] w-[8rem]" length={128} />
              <span className="mb-2">500</span>
              <h1 className="mb-6">Internal Server Error</h1>
              <p>This page has thrown a non-recoverable error.</p>
              <Button asChild>
                <a href="/">Back to Home</a>
                <FaArrowRight />
              </Button>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
