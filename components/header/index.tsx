import SidebarContextProvider from "@/context/sidebar";
import { cn } from "@/lib/utils";

import Logo from "./logo";
import Nav from "./menu";
import Sidebar from "./sidebar";
import JumpToContent from "./util/jumpToContent";
import HeaderWrapper from "./util/wrapper";

export default function Header() {
  return (
    <>
      <JumpToContent />
      <SidebarContextProvider>
        <HeaderWrapper>
          <div
            className={cn(
              "flex items-center justify-between",
              "h-full w-full max-w-[103rem]",
              "pxPage mx-auto"
            )}
          >
            <div className="flex items-center gap-12">
              <Logo />
              <Nav />
            </div>
            <Sidebar />
          </div>
        </HeaderWrapper>
      </SidebarContextProvider>
    </>
  );
}
