"use client";
import BaseLogo from "@/components/logo";
import { useSidebarContext } from "@/context/sidebar";
import { env } from "@/env/client";
import { cn } from "@/lib/utils";

export default function Logo() {
  const sidebar = useSidebarContext();
  return (
    <>
      <a
        href="/"
        className={cn(
          "h-8",
          "z-30 flex items-center gap-1",
          "text-base font-extrabold tracking-[0.2em]",
          sidebar.isExpanded
            ? "text-foreground m:text-white"
            : "text-foreground"
        )}
      >
        <BaseLogo />
        <span className="text-3xl">/</span>
        <span>{env.NEXT_PUBLIC_SITE_NAME}</span>
      </a>
    </>
  );
}
