"use client";

import { memo } from "react";
import { FaWindowClose } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { useCookieFormContext } from "@/context/cookie/form";
import { useCookieMenuAPIContext } from "@/context/cookie/menu";

export function DenyAll() {
  const { toggleManageConsentMenu } = useCookieMenuAPIContext();
  const { setValue } = useCookieFormContext();
  return (
    <>
      <Button
        type="submit"
        onClick={() => {
          setValue("necessary", true);
          setValue("preferences", false);
          setValue("analytics", false);
          setValue("advertising", false);
          toggleManageConsentMenu();
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
  const { toggleManageConsentMenu } = useCookieMenuAPIContext();
  const { setValue } = useCookieFormContext();
  return (
    <>
      <Button
        type="submit"
        onClick={() => {
          setValue("necessary", true);
          setValue("preferences", true);
          setValue("analytics", true);
          setValue("advertising", true);
          toggleManageConsentMenu();
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
  const { toggleManageConsentMenu } = useCookieMenuAPIContext();
  return (
    <>
      <Button
        type="submit"
        onClick={() => {
          toggleManageConsentMenu();
        }}
        variant="outline"
        className="flex h-[3rem] w-full grow items-center justify-center rounded-lg px-6 font-bold transition-all md:w-fit"
      >
        <span className="z-[2]">Accept Selection</span>
      </Button>
    </>
  );
}

export const CloseModal = memo(function CloseModal() {
  const { toggleManageConsentMenu } = useCookieMenuAPIContext();
  return (
    <>
      <Button
        onClick={toggleManageConsentMenu}
        className="absolute right-[1rem] top-[1rem]"
        aria-label="Close manage consent modal"
        variant="ghost"
      >
        <FaWindowClose className="h-8 w-8" />
      </Button>
    </>
  );
});
