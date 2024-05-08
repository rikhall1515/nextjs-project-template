"use client";
import { useState } from "react";

import { useHeaderAPIContext, useSidebarRefContext } from "@/context/sidebar";
import { cn } from "@/lib/utils";

export default function InnerWrapper({ children }: { children: React.ReactNode }) {
  const { toggleSidebarDialog } = useHeaderAPIContext();
  const { sidebarRef } = useSidebarRefContext();

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  //127 - 72 = 55 / 2  = 22 - 23
  return (
    <>
      <dialog
        className={cn(
          "peer/dialog",
          "fixed bottom-0 right-0 top-0 z-[29]", //34px 24 - 34 = 10 / 2 = 5
          "h-[100svh] w-[100vw] transition-all duration-300 m:w-[20rem]",
          "outline-none",
          "bg-background",
          "open:pointer-events-auto open:translate-x-0 open:opacity-100",
          "pointer-events-none translate-x-full opacity-0"
        )}
        aria-label="Sidebar navigation dialog"
        onTouchStart={(e) => {
          setTouchStart(e.targetTouches[0].clientX);
          setTouchEnd(e.targetTouches[0].clientX);
        }}
        onTouchMove={(e) => {
          setTouchEnd(e.targetTouches[0].clientX);
        }}
        onTouchEnd={() => {
          if (touchEnd - touchStart > 100) {
            toggleSidebarDialog();
          }
          setTouchStart(0);
        }}
        ref={sidebarRef}
        id="sidebarMenuNav"
      >
        {children}
      </dialog>
    </>
  );
}
