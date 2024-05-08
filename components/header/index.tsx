import BaseLogo from "@/components/logo";
import SidebarContextProvider from "@/context/sidebar";
import { env } from "@/env/client";
import { cn } from "@/lib/utils";

import Nav from "./menu";
import Sidebar from "./sidebar";
import JumpToContent from "./util/jumpToContent";

export default function Header() {
  return (
    <>
      <JumpToContent />
      <SidebarContextProvider>
        <header
          className={cn(
            "fixed left-0 right-0 top-0 z-10", //position
            "h-[8rem] w-[100svw]", //size
            "border-b-[1px] border-[transparent] bg-[initial]", //color
            "transition-[height,border,background-color] duration-300", //transition
            "h-[4.5rem] border-b border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60",
            "backdrop-blur"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between",
              "h-full w-full max-w-[103rem]",
              "pxPage mx-auto"
            )}
          >
            <div className="flex items-center gap-12">
              <a
                href="/"
                className={cn(
                  "h-8",
                  "flex items-center gap-1",
                  "text-base font-bold tracking-[0.2em]",
                  "text-foreground"
                )}
              >
                <BaseLogo />
                <span className="text-3xl">/</span>
                <span className="-mb-2">{env.NEXT_PUBLIC_SITE_NAME}</span>
              </a>
              <Nav />
            </div>
            <Sidebar />
          </div>
        </header>
      </SidebarContextProvider>
    </>
  );
}
