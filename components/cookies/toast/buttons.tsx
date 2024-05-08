"use client";
import { memo } from "react";

import { Button } from "@/components/ui/button";
import { useCookieAPIContext, useCookieContext } from "@/context/cookie";
import { useCookieMenuAPIContext } from "@/context/cookie/menu";
import { setCookie } from "@/lib/cookie/utils";

export const ManageCookies = memo(function ManageCookies() {
  const { toggleManageConsentMenu } = useCookieMenuAPIContext();
  const { consent } = useCookieContext();
  return (
    <>
      <Button
        onClick={() => {
          toggleManageConsentMenu();
        }}
        variant="link"
        tabIndex={consent ? -1 : 0}
        aria-label="Manage Cookies"
        className="w-full md:w-auto"
      >
        <span>Manage Cookies</span>
      </Button>
    </>
  );
});

export const DenyAll = memo(function DenyAll() {
  const { toggleSelectCookies } = useCookieAPIContext();
  const { consent } = useCookieContext();
  return (
    <>
      <Button
        onClick={() => {
          toggleSelectCookies(true, true, true, true);
          setCookie("1:000");
        }}
        variant="outline"
        tabIndex={consent ? -1 : 0}
        aria-label="Deny All"
        className="w-full md:w-auto"
      >
        <span>Deny All</span>
      </Button>
    </>
  );
});

export const AcceptAll = memo(function AcceptAll() {
  const { toggleSelectCookies } = useCookieAPIContext();
  const { consent } = useCookieContext();
  return (
    <>
      <Button
        onClick={() => {
          toggleSelectCookies(true, true, true, true);
          setCookie("1:111");
        }}
        tabIndex={consent ? -1 : 0}
        aria-label="Accept ALl"
        className="w-full md:w-auto"
      >
        <span>Accept All</span>
      </Button>
    </>
  );
});

export const PrivacyPolicy = memo(function PrivacyPolicy() {
  const { consent } = useCookieContext();
  return (
    <>
      <a
        href="/privacy"
        className="font-bold text-primary transition-all hover:text-foreground"
        tabIndex={consent ? -1 : 0}
      >
        Privacy Policy
      </a>
    </>
  );
});
