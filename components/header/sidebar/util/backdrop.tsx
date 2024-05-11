"use client";
import { useSidebarContext } from "@/context/sidebar";
import { cn } from "@/lib/utils";

export default function BackDrop() {
  const { isExpanded, toggle } = useSidebarContext();
  return (
    <>
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 top-0 z-[10] h-[100vh] w-full bg-background/50 backdrop-blur backdrop-brightness-100 transition-opacity duration-300",
          isExpanded ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={toggle}
      ></div>
    </>
  );
}
