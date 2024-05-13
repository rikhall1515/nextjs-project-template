import BaseLogo from "@/components/logo";
import HeaderContextProvider from "@/context/header";
import { env } from "@/env/client";
import { cn } from "@/lib/utils";

import Nav from "./menu";
import Sidebar from "./sidebar";
import JumpToContent from "./util/jumpToContent";
import HeaderWrapper from "./util/wrapper";

export default function Header() {
  return (
    <>
      <JumpToContent />
      <HeaderContextProvider>
        <HeaderWrapper>
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
                  "z-[30] flex items-center gap-1",
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
        </HeaderWrapper>
      </HeaderContextProvider>
    </>
  );
}
