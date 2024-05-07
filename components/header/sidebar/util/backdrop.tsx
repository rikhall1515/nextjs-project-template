"use client";
import { useHeaderAPIContext, useSidebarExpandedContext } from "@/context/sidebar";
import { cn } from "@/lib/utils";

export default function BackDrop() {
  const { isExpanded } = useSidebarExpandedContext();
  const { toggle } = useHeaderAPIContext();
  return (
    <>
      <div
        className={cn(
          "fixed left-0 top-0 z-[10] h-full w-full bg-[#000000] bg-opacity-70 backdrop-blur backdrop-brightness-50 transition-opacity duration-300 dark:backdrop-brightness-100",
          isExpanded ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={toggle}
      ></div>
    </>
  );
}
