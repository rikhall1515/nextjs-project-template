"use client";
import { type KeyboardEventHandler, useState } from "react";
import { FaDoorOpen } from "react-icons/fa6";

import { useSidebarContext } from "@/context/sidebar";
import { cn } from "@/lib/utils";

export default function LogOut() {
  const [isLoggedIn] = useState(false);
  const sidebar = useSidebarContext();
  const trapFocus: KeyboardEventHandler<HTMLAnchorElement> = (e) => {
    if (e.code === "Tab" && sidebar.mainMenuBtnRef.current) {
      sidebar.isExpanded && sidebar.mainMenuBtnRef.current.focus();
    }
  };
  return (
    <>
      {isLoggedIn && (
        <>
          <a
            href="/dashboard/logout"
            className={cn(
              "transition-all",
              "absolute bottom-0 left-0 mb-6 h-[3.75rem] w-full bg-background m:mb-12",
              "flex items-center gap-3",
              "hover:bg-primary hover:text-primary-foreground"
            )}
            onKeyDown={trapFocus}
          >
            <div className="ml-[2.125rem] w-6">
              <FaDoorOpen className="h-6 w-6" />
            </div>
            <span>Log Out</span>
          </a>
        </>
      )}
    </>
  );
}
