"use client";
import { type KeyboardEventHandler, useState } from "react";
import { FaPassport } from "react-icons/fa6";

import { useSidebarExpandedContext, useSidebarRefContext } from "@/context/sidebar";

import { SidebarItem } from "./sidebarItem";

export default function Privacy() {
  const { isExpanded } = useSidebarExpandedContext();
  const { mainMenuBtnRef } = useSidebarRefContext();
  const [isLoggedIn] = useState(false);
  const trapFocus: KeyboardEventHandler<HTMLAnchorElement> = (e) => {
    if (e.code === "Tab" && !e.shiftKey && mainMenuBtnRef.current) {
      e.preventDefault();
      isExpanded && mainMenuBtnRef.current.focus();
    }
  };
  return (
    <>
      <SidebarItem
        href="/privacy/"
        text="Privacy Policy"
        isLast={!isLoggedIn}
        onKeyDown={trapFocus}
      >
        <FaPassport className="h-6 w-6" />
      </SidebarItem>
    </>
  );
}
