"use client";
import { forwardRef } from "react";

import { useHeaderAPIContext } from "@/context/sidebar";
import { cn } from "@/lib/utils";

type Props = JSX.IntrinsicElements["button"];

type Ref = HTMLButtonElement;
export const MenuButton = forwardRef<Ref, Props>(function MenuButton() {
  const { toggleSidebarDialog } = useHeaderAPIContext();
  return (
    <>
      <button
        aria-expanded={false}
        aria-label={"open menu"}
        onClick={toggleSidebarDialog}
        className={cn("relative z-[30] fill-[inherit] p-6")}
        aria-haspopup="menu"
        aria-controls="sidebarMenuNav"
      >
        <div className={cn("menuBtn h-6 w-6")}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </>
  );
});
