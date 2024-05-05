"use client";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useCookieContext } from "@/context/cookie";
import { env } from "@/env/client";
import { setCookie } from "@/lib/cookie/utils";
import { cn } from "@/lib/utils";

export default function CookieToast() {
  const cookie = useCookieContext();
  const [initialVisible, setInitialVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setInitialVisible(true);
    }, 500);
  });
  return (
    <>
      <div
        className={cn(
          "fixed bottom-0 right-0 z-[5] mb-6 flex w-full flex-col gap-3 rounded-l-lg rounded-r-none bg-background px-6 py-3 shadow transition-all md:w-fit",
          !cookie.consent && initialVisible
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        aria-hidden={cookie.consent}
      >
        <p className="max-w-[60ch] leading-[1.3]">
          {env.NEXT_PUBLIC_SITE_NAME} uses cookies to improve the website and your user experience,
          read more in the{" "}
          <a
            href="/privacy"
            className="font-bold text-primary transition-all hover:text-foreground"
          >
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex flex-col-reverse items-center gap-6 md:flex-row">
          <Button
            onClick={() => {
              cookie.toggleManageConsentMenu();
            }}
            variant="link"
          >
            <span>Manage Cookies</span>
          </Button>
          <Button
            onClick={() => {
              cookie.denyAllCookies();
              setCookie("1:000");
            }}
            variant="outline"
          >
            <span>Deny All</span>
          </Button>
          <Button
            onClick={() => {
              cookie.acceptAllCookies();
              setCookie("1:111");
            }}
          >
            <span>Accept All</span>
          </Button>
        </div>
      </div>
    </>
  );
}
