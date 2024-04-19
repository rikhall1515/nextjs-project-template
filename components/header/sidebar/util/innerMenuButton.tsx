"use client";
import { useSidebarContext } from "@/context/sidebar";
import { cn } from "@/lib/utils";

export default function InnerMenuButton() {
  const sidebar = useSidebarContext();
  return (
    <>
      <button
        aria-expanded={sidebar.isExpanded}
        aria-label={sidebar.isExpanded ? "Close menu" : "Open menu"}
        className={cn(
          "flex h-[4.5rem] min-w-[4.5rem] items-center justify-center",
          "m:mr-6 p-6 transition-all",
          "bg-white fill-black"
        )}
        onClick={() => {
          sidebar.toggle();
        }}
        ref={sidebar.btnInSidebarRef}
        tabIndex={sidebar.isExpanded ? 0 : -1}
      >
        <div className="h-6 w-6 flex-shrink-0">
          <svg
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
          </svg>
        </div>
      </button>
    </>
  );
}
