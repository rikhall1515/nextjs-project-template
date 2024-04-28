"use client";
import { FaCircleQuestion, FaGear, FaUser } from "react-icons/fa6";

import { useDashboardContext } from "@/context/dashboard";
import { cn } from "@/lib/utils";

import ItemWrapper from "./itemWrapper";

export default function BottomItems() {
  const dashboardCtx = useDashboardContext();
  return (
    <>
      <ul
        className={cn(
          "relative mb-24 box-border",
          dashboardCtx.isExpanded ? "w-full" : "w-16",
          "after:absolute after:top-[-0.125rem] after:h-[0.125rem] after:w-full",
          "after:via-spacer after:bg-gradient-to-r after:from-card after:via-primary after:via-50% after:to-card"
        )}
      >
        <ItemWrapper name="settings" alert={false}>
          <div className="w-6">
            <FaGear />
          </div>
        </ItemWrapper>{" "}
        <ItemWrapper name="help" alert={false}>
          <div className="w-6">
            <FaCircleQuestion />
          </div>
        </ItemWrapper>
        <ItemWrapper name="account" alert={false}>
          <div className="w-6">
            <FaUser />
          </div>
        </ItemWrapper>
      </ul>
    </>
  );
}
