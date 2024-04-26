import { cn } from "@/lib/utils";

export default function SidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <aside
      className={cn(
        "peer/sidebar transition-all",
        "fixed z-[11] box-border hidden h-[100svh] w-[13.75rem] flex-col bg-card md:flex",
        "shadow"
      )}
    >
      <nav className="mt-12 box-border flex h-full w-full flex-col justify-between align-baseline">
        {children}
      </nav>
    </aside>
  );
}
