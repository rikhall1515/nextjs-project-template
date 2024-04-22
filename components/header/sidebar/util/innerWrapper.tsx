"use client";
import { useState } from "react";

import { useSidebarContext } from "@/context/sidebar";
import { cn } from "@/lib/utils";

export default function InnerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebar = useSidebarContext();
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  //127 - 72 = 55 / 2  = 22 - 23
  return (
    <>
      <aside
        className={cn(
          "fixed bottom-0 right-0 top-0 z-[29]", //34px 24 - 34 = 10 / 2 = 5
          "h-[100svh] w-[100vw] transition-all duration-300 m:w-[20rem]",
          "outline-none",
          "bg-white",
          sidebar.isExpanded
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0",
          sidebar.isAtTop ? "pt-[1.625rem]" : ""
        )}
        aria-label="In-page jump links"
        aria-hidden={!sidebar.isExpanded}
        onKeyDown={(e) => {
          if (e.code === "Escape" && sidebar.mainMenuBtnRef.current) {
            sidebar.toggle();
            sidebar.mainMenuBtnRef.current.focus();
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
            sidebar.toggle();
          }
          setTouchStart(0);
        }}
        ref={sidebar.sidebarRef}
      >
        {children}
      </aside>
    </>
  );
}
