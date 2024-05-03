"use client";
import { useSidebarContext } from "@/context/sidebar";
import { cn } from "@/lib/utils";

export default function BackDrop() {
  const sidebar = useSidebarContext();
  return (
    <>
      <div
        className={cn(
          "fixed left-0 top-0 z-[10] h-full w-full bg-[#000000] bg-opacity-70 backdrop-blur backdrop-brightness-50 transition-opacity duration-300 dark:backdrop-brightness-100",
          sidebar.isExpanded ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={sidebar.toggle}
      ></div>
    </>
  );
}
