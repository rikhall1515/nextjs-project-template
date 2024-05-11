"use client";

import { useSidebarContext } from "@/context/sidebar";
import { useMenuBtnRefContext } from "@/context/sidebar/btnRef";
import { cn } from "@/lib/utils";

export default function MenuButton() {
  const { isExpanded, toggle } = useSidebarContext();
  const { mainMenuBtnRef } = useMenuBtnRefContext();
  return (
    <>
      <button
        aria-expanded={isExpanded}
        aria-label={isExpanded ? "Close menu" : "Open menu"}
        onClick={toggle}
        className={cn("relative z-[30] fill-[inherit] p-6")}
        onKeyDown={(e) => {
          if (e.code === "Escape") toggle();
        }}
        ref={mainMenuBtnRef}
      >
        <div className={cn("menuBtn h-6 w-6", isExpanded ? "opened" : "")}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </>
  );
}
