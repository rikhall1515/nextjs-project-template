"use client";
import { useState } from "react";

import { useHeaderContext } from "@/context/header";
import { useSidebarContext } from "@/context/sidebar";
import { useMenuBtnRefContext } from "@/context/sidebar/btnRef";
import { cn } from "@/lib/utils";

export default function InnerWrapper({ children }: { children: React.ReactNode }) {
  const { isAtTop } = useHeaderContext();
  const { isExpanded, toggle, sidebarRef } = useSidebarContext();
  const { mainMenuBtnRef } = useMenuBtnRefContext();
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  //127 - 72 = 55 / 2  = 22 - 23
  return (
    <>
      <aside
        className={cn(
          "fixed bottom-0 right-0 top-0 z-[29]", //34px 24 - 34 = 10 / 2 = 5
          "h-[100svh] w-[100vw] transition-all duration-300 md:w-[20rem]",
          "outline-none",
          "bg-white",
          isExpanded
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0",
          isAtTop ? "pt-[1.625rem]" : ""
        )}
        aria-label="Sidebar navigation menu"
        aria-hidden={!isExpanded}
        onKeyDown={(e) => {
          if (e.code === "Escape" && mainMenuBtnRef.current) {
            toggle();
            mainMenuBtnRef.current.focus();
          }
        }}
        onTouchStart={(e) => {
          setTouchStart(e.targetTouches[0].clientX);
          setTouchEnd(e.targetTouches[0].clientX);
        }}
        onTouchMove={(e) => {
          setTouchEnd(e.targetTouches[0].clientX);
        }}
        onTouchEnd={() => {
          if (touchEnd - touchStart > 100) {
            toggle();
          }
          setTouchStart(0);
        }}
        ref={sidebarRef}
      >
        {children}
      </aside>
    </>
  );
}
