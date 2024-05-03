"use client";
import { FaBoxArchive, FaFileLines } from "react-icons/fa6";

import LogOut from "./logout";
import Privacy from "./privacy";
import SidebarItem from "./sidebarItem";
export default function Nav() {
  return (
    <>
      <nav aria-label="In-page jump links" className="flex h-auto w-full flex-col font-bold">
        {/* <LoginDashboard /> */}
        <ul className="w-full">
          <li className="w-full border-t-2 border-border">
            <SidebarItem href="/archive" text="Archive">
              <FaBoxArchive className="h-6 w-6" />
            </SidebarItem>
          </li>
          <li className="w-full border-t-2 border-border">
            <SidebarItem href="/terms" text="Terms of Service">
              <FaFileLines className="h-6 w-6" />
            </SidebarItem>
          </li>
          <li className="w-full border-y-2 border-border">
            <Privacy />
          </li>
        </ul>
        <LogOut />
      </nav>
    </>
  );
}
