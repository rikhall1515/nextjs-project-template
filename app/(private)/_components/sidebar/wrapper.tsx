"use client";
import { useDashboardContext } from "@/context/dashboard";
import { cn } from "@/lib/utils";

export default function SidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const dashboardCtx = useDashboardContext();
  return (
    <aside
      className={cn(
        "peer/sidebar transition-all",
        "fixed z-[11] box-border hidden h-[100svh] flex-col bg-card md:flex",
        "shadow",
        dashboardCtx.isExpanded ? "w-[13.75rem]" : "w-16"
      )}
    >
      {children}
    </aside>
  );
}
