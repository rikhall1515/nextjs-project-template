"use client";
import { FaArrowLeft } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { useDashboardContext } from "@/context/dashboard";
import { cn } from "@/lib/utils";

export default function ExpandDashboardSidebar() {
  const dashboardCtx = useDashboardContext();
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "group/item",
          "relative flex h-[3.75rem] w-full items-center rounded-none transition-all",
          "text-xl",
          dashboardCtx.isExpanded ? "gap-2 pl-0 pr-4" : "gap-0 px-6",
          "bg-card text-card-foreground hover:bg-primary hover:text-primary-foreground"
        )}
        onClick={dashboardCtx.toggle}
      >
        <FaArrowLeft className={cn(dashboardCtx.isExpanded ? "rotate-0" : "rotate-180")} />
        <span className={cn(dashboardCtx.isExpanded ? "w-auto opacity-100" : "w-0 opacity-0")}>
          Collapse
        </span>
      </Button>
    </>
  );
}
