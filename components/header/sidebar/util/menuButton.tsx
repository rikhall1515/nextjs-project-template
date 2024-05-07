"use client";
import { forwardRef } from "react";

import {
  useHeaderAPIContext,
  useSidebarExpandedContext,
  useSidebarRefContext,
} from "@/context/sidebar";
import { cn } from "@/lib/utils";

type Props = JSX.IntrinsicElements["button"];

type Ref = HTMLButtonElement;
export const MenuButton = forwardRef<Ref, Props>(function MenuButton() {
  const { isExpanded } = useSidebarExpandedContext();
  const { toggle } = useHeaderAPIContext();
  const { mainMenuBtnRef } = useSidebarRefContext();
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
});
