"use client";
import BaseLogo from "@/components/logo";
import { useSidebarExpandedContext } from "@/context/sidebar";
import { env } from "@/env/client";
import { cn } from "@/lib/utils";

export default function Logo() {
  const { isExpanded } = useSidebarExpandedContext();
  return (
    <>
      <a
        href="/"
        className={cn(
          "h-8",
          "z-30 flex items-center gap-1",
          "text-base font-bold tracking-[0.2em]",
          isExpanded ? "text-foreground m:text-white" : "text-foreground"
        )}
      >
        <BaseLogo />
        <span className="text-3xl">/</span>
        <span className="-mb-2">{env.NEXT_PUBLIC_SITE_NAME}</span>
      </a>
    </>
  );
}
