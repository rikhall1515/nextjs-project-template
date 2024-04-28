import { cn } from "@/lib/utils";

import BottomItems from "./botItems";
import ExpandDashboardSidebar from "./expand";
import Items from "./items";
import SidebarWrapper from "./wrapper";

export default function Sidebar() {
  return (
    <>
      <SidebarWrapper>
        <nav className="mt-12 box-border flex h-full w-full flex-col align-baseline">
          <Items />
        </nav>
        <nav className="mt-auto grid w-full">
          <BottomItems />
        </nav>
        <ExpandDashboardSidebar />
      </SidebarWrapper>
      <div
        className={cn(
          "fixed left-0 top-0 z-[10] h-full w-full bg-[#000000] bg-opacity-50 transition-opacity duration-300",
          "pointer-events-none opacity-0 peer-hover/sidebar:opacity-100"
          // isExpanded
          // ? "pointer-events-auto opacity-100"
          // : "pointer-events-none opacity-0",
        )}
        //   onClick$={() => sidebar.toggle()}
      ></div>
    </>
  );
}
