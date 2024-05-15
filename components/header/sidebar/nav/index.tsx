import { FaBoxArchive, FaFileLines, FaPassport } from "react-icons/fa6";

import { cn } from "@/lib/utils";

import Privacy from "./privacy";
import { SidebarItem } from "./sidebarItem";
export default function Nav() {
  return (
    <>
      <nav aria-label="In-page jump links" className="flex h-auto w-full flex-col font-bold">
        {/* <LoginDashboard /> */}
        <ul className="w-full">
          <li
            className={cn(
              "relative w-full",
              // "after:absolute after:bottom-[-0.125rem] after:h-[0.125rem] after:w-full",
              // "after:bg-gradient-to-r after:from-border after:to-background after:to-50%",
              "before:absolute before:top-[-0.125rem] before:h-[0.125rem] before:w-full",
              "before:bg-gradient-to-r before:from-border before:to-background before:to-50%"
            )}
          >
            <SidebarItem href="/archive">
              <div className="ml-[2.125rem] w-6 fill-[inherit] stroke-[inherit]">
                <FaBoxArchive className="h-6 w-6" />
              </div>
              <span>Archive</span>
            </SidebarItem>
          </li>
          <li
            className={cn(
              "relative w-full",
              "after:absolute after:bottom-[-0.125rem] after:h-[0.125rem] after:w-full",
              "after:bg-gradient-to-r after:from-border after:to-background after:to-50%",
              "before:absolute before:top-[-0.125rem] before:h-[0.125rem] before:w-full",
              "before:bg-gradient-to-r before:from-border before:to-background before:to-50%"
            )}
          >
            <SidebarItem href="/terms">
              <div className="ml-[2.125rem] w-6 fill-[inherit] stroke-[inherit]">
                <FaFileLines className="h-6 w-6" />
              </div>
              <span>Terms of Service</span>
            </SidebarItem>
          </li>
          <li
            className={cn(
              "relative w-full",
              "after:absolute after:bottom-[-0.125rem] after:h-[0.125rem] after:w-full",
              "after:bg-gradient-to-r after:from-border after:to-background after:to-50%"
              // "before:absolute before:top-[-0.125rem] before:h-[0.125rem] before:w-full",
              // "before:bg-gradient-to-r before:from-border before:to-background before:to-50%"
            )}
          >
            <Privacy>
              <div className="ml-[2.125rem] w-6">
                <FaPassport className="h-6 w-6" />
              </div>
              <span>Privacy</span>
            </Privacy>
          </li>
        </ul>
      </nav>
    </>
  );
}
