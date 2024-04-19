"use client";
import { type KeyboardEventHandler, useState } from "react";

import { useSidebarContext } from "@/context/sidebar";
import { cn } from "@/lib/utils";

export default function LogOut() {
  const [isLoggedIn] = useState(false);
  const sidebar = useSidebarContext();
  const trapFocus: KeyboardEventHandler<HTMLAnchorElement> = (e) => {
    if (e.code === "Tab" && sidebar.btnInSidebarRef.current) {
      sidebar.isExpanded && sidebar.btnInSidebarRef.current.focus();
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
              "m:mb-12 absolute bottom-0 left-0 mb-6 h-[3.75rem] w-full bg-white fill-black text-black",
              "flex items-center gap-3",
              "hover:bg-[#E0FCE7] hover:fill-primary hover:stroke-primary hover:text-primary"
            )}
            onKeyDown={trapFocus}
          >
            <div className="ml-[2.125rem] w-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
              >
                <path
                  d="M20 24H4C3.44772 24 3 23.5523 3 23V1C3 0.447715 3.44772 0 4 0H20C20.5523 0 21 0.447716 21 1V23C21 23.5523 20.5523 24 20 24Z"
                  fill="currentColor"
                />
                <path
                  d="M15 14H8M8 14L9 12M8 14L9 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span>Logga Ut</span>
          </a>
        </>
      )}
    </>
  );
}
