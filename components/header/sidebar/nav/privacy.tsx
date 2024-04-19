"use client";
import { type KeyboardEventHandler, useState } from "react";
import { FaPassport } from "react-icons/fa6";

import { useSidebarContext } from "@/context/sidebar";

import SidebarItem from "./sidebarItem";

export default function Privacy() {
  const sidebar = useSidebarContext();
  const [isLoggedIn] = useState(false);
  const trapFocus: KeyboardEventHandler<HTMLAnchorElement> = (e) => {
    if (e.code === "Tab" && !e.shiftKey && sidebar.mainMenuBtnRef.current) {
      e.preventDefault();
      sidebar.isExpanded && sidebar.mainMenuBtnRef.current.focus();
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
