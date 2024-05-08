"use client";
import { useHeaderAPIContext } from "@/context/sidebar";
import { cn } from "@/lib/utils";

export default function BackDrop() {
  const { toggleSidebarDialog } = useHeaderAPIContext();
  return (
    <>
      <div
        className={cn(
          "pointer-events-none opacity-0 peer-open/dialog:pointer-events-auto peer-open/dialog:opacity-100",
          "fixed bottom-0 left-0 right-0 top-0 z-[10] h-[100vh] w-full bg-background/70 backdrop-brightness-50 transition-all duration-300 dark:backdrop-brightness-100",
          "!bg-no-repeat object-cover"
        )}
        onClick={toggleSidebarDialog}
      ></div>
    </>
  );
}
