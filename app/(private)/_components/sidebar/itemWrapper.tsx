"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useDashboardContext } from "@/context/dashboard";
import { cn } from "@/lib/utils";

type ItemWrapperProps = {
  children: React.ReactNode;
  alert: boolean;
  name: string;
};

export default function ItemWrapper({
  children,
  alert,
  name,
}: ItemWrapperProps) {
  const dashboardCtx = useDashboardContext();
  const pathname = usePathname();
  return (
    <li className="w-full">
      {dashboardCtx.isExpanded ? (
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "group/item",
            "relative flex h-[3.75rem] w-full items-center justify-between rounded-none transition-all",
            "text-xl",
            `/dashboard/${name}` === pathname
              ? "bg-primary text-primary-foreground"
              : "bg-card text-card-foreground hover:bg-primary hover:text-primary-foreground",
            dashboardCtx.isExpanded ? "pl-10 pr-4" : "px-6"
          )}
          aria-label={name}
          asChild
        >
          <Link href={`/dashboard/${name}`}>
            <div
              className={cn(
                "flex items-center",
                dashboardCtx.isExpanded ? "gap-3" : "gap-0"
              )}
            >
              {children}{" "}
              <span
                className={cn(
                  "capitalize",
                  dashboardCtx.isExpanded
                    ? "w-[100%] opacity-100"
                    : "w-[0%] opacity-0"
                )}
              >
                {name}
              </span>
            </div>

            <div
              className={cn(alert ? "bg-primary" : "", "h-2 w-2 rounded-full")}
              aria-hidden="true"
            ></div>
          </Link>
        </Button>
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "group/item",
                "relative flex h-[3.75rem] w-full items-center justify-between rounded-none transition-all",
                "text-xl",
                `/dashboard/${name}` === pathname
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-card-foreground hover:bg-primary hover:text-primary-foreground",
                dashboardCtx.isExpanded ? "pl-10 pr-4" : "px-6"
              )}
              aria-label={name}
              asChild
            >
              <Link href={`/dashboard/${name}`}>
                <div
                  className={cn(
                    "flex items-center",
                    dashboardCtx.isExpanded ? "gap-3" : "gap-0"
                  )}
                >
                  {children}
                  <span
                    className={cn(
                      "capitalize",
                      dashboardCtx.isExpanded
                        ? "w-[100%] opacity-100"
                        : "w-[0%] opacity-0"
                    )}
                  >
                    {name}
                  </span>
                </div>

                <div
                  className={cn(
                    alert ? "bg-primary" : "",
                    "absolute right-2 top-1/2 h-2 w-2 rounded-full"
                  )}
                  aria-hidden="true"
                ></div>
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5} className="capitalize">
            {name}
          </TooltipContent>
        </Tooltip>
      )}
    </li>
  );
}
