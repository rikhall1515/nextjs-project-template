"use client";
import { Button } from "@/components/ui/button";
import { useCookieContext } from "@/context/cookie";
import { setCookie } from "@/lib/cookie/utils";
import { cn } from "@/lib/utils";

export default function CookieToast() {
  const cookie = useCookieContext();
  return (
    <>
      <div
        className={cn(
          "shadow-Dark fixed bottom-0 right-0 z-[5] mb-6 flex w-full flex-col gap-3 rounded-l-lg rounded-r-none bg-background px-6 py-3 transition-all md:w-fit",
          !cookie.consent ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={cookie.consent}
      >
        <p className="max-w-[60ch] leading-[1.3]">
          Sebastian Wing uses cookies to improve the website and your user experience, read more in
          the{" "}
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
