"use client";

import { Button } from "@/components/ui/button";
import { useCookieContext } from "@/context/cookie";
import { useCookieFormContext } from "@/context/cookie/form";

export function DenyAll() {
  const cookieStore = useCookieContext();
  const { setValue } = useCookieFormContext();
  return (
    <>
      <Button
        type="submit"
        tabIndex={cookieStore.isManageConsentMenuOpen ? 0 : -1}
        onClick={() => {
          setValue("necessary", true);
          setValue("preferences", false);
          setValue("analytics", false);
          setValue("advertising", false);
          cookieStore.toggleManageConsentMenu();
        }}
        variant="outline"
        className="flex h-[3rem] w-full grow items-center justify-center rounded-lg px-6 font-bold transition-all md:w-fit"
      >
        <span className="z-[2]">Deny all</span>
      </Button>
    </>
  );
}

export function AcceptAll() {
  const cookieStore = useCookieContext();
  const { setValue } = useCookieFormContext();
  return (
    <>
      <Button
        type="submit"
        tabIndex={cookieStore.isManageConsentMenuOpen ? 0 : -1}
        onClick={() => {
          setValue("necessary", true);
          setValue("preferences", true);
          setValue("analytics", true);
          setValue("advertising", true);
          cookieStore.toggleManageConsentMenu();
        }}
        variant="default"
        className="flex h-[3rem] w-full grow items-center justify-center rounded-lg px-6 font-bold transition-all md:w-fit"
      >
        <span className="z-[2]">Accept All</span>
      </Button>
    </>
  );
}

export function AcceptSelection() {
  const cookieStore = useCookieContext();
  return (
    <>
      <Button
        type="submit"
        tabIndex={cookieStore.isManageConsentMenuOpen ? 0 : -1}
        onClick={() => {
          cookieStore.toggleManageConsentMenu();
        }}
        variant="outline"
        className="flex h-[3rem] w-full grow items-center justify-center rounded-lg px-6 font-bold transition-all md:w-fit"
      >
        <span className="z-[2]">Accept Selection</span>
      </Button>
    </>
  );
}
