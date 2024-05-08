import { FaBoxArchive, FaFileLines, FaPassport } from "react-icons/fa6";

import Privacy from "./privacy";
import { SidebarItem } from "./sidebarItem";
export default function Nav() {
  return (
    <>
      <nav aria-label="In-page jump links" className="flex h-auto w-full flex-col font-bold">
        {/* <LoginDashboard /> */}
        <ul className="w-full">
          <li className="w-full border-t-2 border-border">
            <SidebarItem href="/archive">
              <div className="ml-[2.125rem] w-6 fill-[inherit] stroke-[inherit]">
                <FaBoxArchive className="h-6 w-6" />
              </div>
              <span>Archive</span>
            </SidebarItem>
          </li>
          <li className="w-full border-t-2 border-border">
            <SidebarItem href="/terms">
              <div className="ml-[2.125rem] w-6 fill-[inherit] stroke-[inherit]">
                <FaFileLines className="h-6 w-6" />
              </div>
              <span>Terms of Service</span>
            </SidebarItem>
          </li>
          <li className="w-full border-y-2 border-border">
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
