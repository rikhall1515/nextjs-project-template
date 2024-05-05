"use client";
import TabNav from "@/components/cookies/manage/tabNav";
import { useCookieContext } from "@/context/cookie";
import { useCookieFormContext } from "@/context/cookie/form";
import { cn } from "@/lib/utils";

export default function ManageWrapper() {
  const cookie = useCookieContext();
  const { handleSubmit, onSubmit } = useCookieFormContext();
  return (
    <>
      <div
        className={cn(
          "cover bottom-[-100%] left-[-100%] right-[-100%] top-[-100%] m-auto h-[100vh] w-full bg-opacity-50 !bg-no-repeat object-cover backdrop-blur backdrop-brightness-50",
          "fixed z-40 overflow-hidden bg-black bg-opacity-50",
          cookie.isManageConsentMenuOpen ? "block" : "hidden"
        )}
        id="#ManageConsentMenuDialog"
      >
        <div
          className={cn(
            " flex flex-col items-center rounded-2xl text-foreground",
            "fixed left-1/2 top-1/2 z-[99] box-border -translate-x-1/2 -translate-y-1/2 overflow-hidden",
            "h-auto max-h-[calc(100%-16px)] w-[calc(100%-16px)] max-w-[80rem] rounded-2xl bg-background pt-6 shadow transition-all"
          )}
        >
          <TabNav handleSubmit={handleSubmit} onSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
}
