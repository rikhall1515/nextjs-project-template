"use client";
import { useHeaderAPIContext } from "@/context/sidebar";
import { cn } from "@/lib/utils";

export default function InnerMenuButton() {
  const { toggleSidebarDialog } = useHeaderAPIContext();
  return (
    <>
      <button
        aria-expanded={true}
        aria-label={"Close menu"}
        onClick={toggleSidebarDialog}
        className={cn("relative z-[30] mr-6 fill-[inherit] p-6")}
        onKeyDown={(e) => {
          if (e.code === "Escape") toggleSidebarDialog();
        }}
        aria-haspopup="menu"
        aria-controls="sidebarMenuNav"
      >
        <div className={cn("menuBtn opened h-6 w-6")}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </>
  );
}
