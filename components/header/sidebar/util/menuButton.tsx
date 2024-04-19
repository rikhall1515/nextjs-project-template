"use client";
import { forwardRef } from "react";

import { useSidebarContext } from "@/context/sidebar";
import { cn } from "@/lib/utils";

type Props = JSX.IntrinsicElements["button"];

type Ref = HTMLButtonElement;
export const MenuButton = forwardRef<Ref, Props>(function MenuButton() {
  const sidebar = useSidebarContext();
  return (
    <>
      <button
        aria-expanded={sidebar.isExpanded}
        aria-label={sidebar.isExpanded ? "Close menu" : "Open menu"}
        onClick={sidebar.toggle}
        className={cn("relative z-[30] fill-[inherit] p-6")}
        onKeyDown={(e) => {
          if (e.code === "Escape") sidebar.toggle();
          // if (
          //   e.code === "Enter" ||
          //   (e.code === "Escape" && !sidebar.isExpanded)
          // ) {
          //   sidebar.btnInSidebarRef.current?.focus();
          // }
        }}
        ref={sidebar.mainMenuBtnRef}
      >
        <div
          className={cn("menuBtn h-6 w-6", sidebar.isExpanded ? "opened" : "")}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible fill-[inherit]"
        >
          <rect width="24" height="4" rx="2" fill="inherit" />
          <rect y="10" width="24" height="4" rx="2" fill="inherit" />
          <rect y="20" width="24" height="4" rx="2" fill="inherit" />
        </svg> */}
      </button>
    </>
  );
});
