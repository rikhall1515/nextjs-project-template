"use client";
import {
  Book,
  Bot,
  Code2,
  LifeBuoy,
  Settings2,
  SquareTerminal,
  SquareUser,
  Triangle,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { createContext, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import SideBarItem from "./sidebarItem";
import SidebarWrapper from "./wrapper";
export const SidebarContext = createContext({});
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(true);
  const sidebarItems = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1188_136" fill="white">
            <rect y="13.5" width="10.5" height="10.5" rx="1.5" />
          </mask>
          <rect
            y="13.5"
            width="10.5"
            height="10.5"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="4"
            mask="url(#path-1-inside-1_1188_136)"
          />
          <mask id="path-2-inside-2_1188_136" fill="white">
            <rect x="13.5" y="13.5" width="10.5" height="10.5" rx="1.5" />
          </mask>
          <rect
            x="13.5"
            y="13.5"
            width="10.5"
            height="10.5"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="4"
            mask="url(#path-2-inside-2_1188_136)"
          />
          <mask id="path-3-inside-3_1188_136" fill="white">
            <rect x="13.5" width="10.5" height="10.5" rx="1.5" />
          </mask>
          <rect
            x="13.5"
            width="10.5"
            height="10.5"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="4"
            mask="url(#path-3-inside-3_1188_136)"
          />
          <mask id="path-4-inside-4_1188_136" fill="white">
            <rect width="10.5" height="10.5" rx="1.5" />
          </mask>
          <rect
            width="10.5"
            height="10.5"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="4"
            mask="url(#path-4-inside-4_1188_136)"
          />
        </svg>
      ),
      text: "Dashboard",
      active: true,
      alert: false,
      href: "/dashboard/overview",
    },
    {
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3121 8.69765L7.08518 10.8489C7.08518 13.0002 13.539 18.9161 15.6902 18.9161L16.7659 16.2271C16.7659 16.2271 18.6482 17.5884 20.4129 17.9413C22.1776 18.2943 24.2953 18.3783 24.2953 18.3783V24.2943C9.23644 24.2943 1.70703 16.7649 1.70703 1.70605H8.16081C8.16081 1.70605 8.16081 3.85732 8.69863 5.47076C9.23644 7.08421 10.3121 8.69765 10.3121 8.69765Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "Opportunities",
      active: false,
      alert: false,
      href: "/dashboard/opportunities",
    },
    {
      icon: (
        <svg
          width="24"
          height="30"
          viewBox="0 0 24 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.3897 29.0625C6.3897 29.0625 1.21875 22.5 1.21875 18.75C1.21875 11.25 9.1875 7.5 9.1875 7.5C9.1875 7.5 13.875 15 13.875 18.75C13.875 20.625 13.3201 22.1875 12 22.1875C10.6799 22.1875 10.125 20.625 10.125 18.75C10.125 15 14.8125 7.5 14.8125 7.5C14.8125 7.5 22.7812 11.25 22.7812 18.75C22.7812 22.5 17.625 29.0625 17.625 29.0625C17.625 29.0625 14.5 24.375 12.0147 24.375C9.5294 24.375 6.3897 29.0625 6.3897 29.0625Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M7.9375 5L9.1875 7.5L12.0147 12.6562L14.8125 7.5L16.0625 5L12 0.9375L7.9375 5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "My Vizeer",
      active: false,
      alert: false,
      href: "/dashboard/my-vizeer",
    },
    // Add more items as needed
  ];
  const sidebarBottomItems = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.625 14.625C6.44289 16.5942 1.375 17.375 4 20C6.625 22.625 7.4058 17.5571 9.375 18.375C11.3719 19.2044 9 23 12 23C15 23 12.6281 19.2044 14.625 18.375C16.5942 17.5571 17.375 22.625 20 20C22.625 17.375 17.5571 16.5942 18.375 14.625C19.2044 12.6281 23 15 23 12C23 9 19.2044 11.3719 18.375 9.375C17.5571 7.4058 22.625 6.625 20 4C17.375 1.375 16.5942 6.44289 14.625 5.625C12.6281 4.79561 15 1 12 1C9 1 11.3442 4.80711 9.375 5.625C7.4058 6.44289 6.625 1.375 4 4C1.375 6.625 6.42912 7.43898 5.625 9.375C4.82088 11.311 1 9 1 12C1 15 4.79561 12.6281 5.625 14.625Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "Settings",
      active: false,
      alert: false,
      href: "/dashboard/settings",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.00008 9.5L1 10L7 14.5L5 23L12 17L19 23L17 14.5L23 10L15.0001 9.5L12 1L9.00008 9.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "Upgrade",
      active: false,
      alert: false,
      href: "/dashboard/upgrade",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1C5.7868 1 1 5.7868 1 12C1 18.2132 5.7868 23 12 23C18.2132 23 23 18.2132 23 12C23 5.7868 18.2132 1 12 1Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M9 9C9 7.5 10.5355 6.75 12 6.75C13.4645 6.75 15 7.5 15 9C15 10.5 12 12 12 13.5C12 15 12 15 12 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="18" r="1" fill="currentColor" />
        </svg>
      ),
      text: "Help",
      active: false,
      alert: false,
      href: "/dashboard/help",
    },
    {
      icon: (
        <svg
          width="26"
          height="28"
          viewBox="0 0 26 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13.1428V1.14282H24.1429V26.8571H7V20.8571"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.7126 17H1.85547M1.85547 17L3.56975 14.8572M1.85547 17L3.56975 19.1429"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "Log Out",
      active: false,
      alert: false,
      href: "/dashboard/logout",
    },
    // Add more items as needed
  ];
  const pathname = usePathname();
  return (
    <SidebarContext.Provider
      value={{
        isOpen: [isOpen, setIsOpen],
        isExpanded: [isExpanded, setIsExpanded],
      }}
    >
      <SidebarWrapper>
        <ul className="w-full">
          {sidebarItems.map((item, index) => (
            <SideBarItem
              key={index}
              icon={item.icon}
              text={item.text}
              active={item.href === pathname}
              alert={item.alert}
              href={item.href}
            />
          ))}
        </ul>
        <div>
          <ul
            className={cn(
              "w-full",
              "relative mb-24 box-border",
              "after:absolute after:top-[-0.125rem] after:h-[0.125rem] after:w-full",
              "after:via-spacer after:bg-gradient-to-r after:from-card after:via-primary after:via-50% after:to-card"
            )}
          >
            {sidebarBottomItems.map((item, index) => (
              <SideBarItem
                key={index}
                icon={item.icon}
                text={item.text}
                active={item.href === pathname}
                alert={item.alert}
                href={item.href}
              />
            ))}
          </ul>
          <div>
            <button
              className={cn(
                "group/logout hover:bg-item_h flex h-[5rem] w-full items-center gap-3 self-end pl-10 pr-[1.125rem] font-bold transition-all",
                "justify-between"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="relative h-6 w-6">
                  <span className="absolute right-0 top-0 flex h-2 w-2 items-center justify-center rounded-full bg-background">
                    <span className=" bg-green-600 h-1 w-1 rounded-full"></span>
                  </span>
                  <Image
                    alt="Profile for Mark Hanson"
                    width="24"
                    height="24"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ9SURBVHgBfVZJS2NbEK7EOM/iPBFnFJQEx408J1y46ezcuGg3bp9v90BEXT4QuvMDRMGdoOQtVNBFx3lEgwtFVIwj4hhnnLu+6tz05Sb2gcO5J+eer6q++qpudPSHcXV1FfX+/t6q1+v/4q3x4+PDqNPpcOTi6eBp4/l/dHS08zMM3SfARl56eVZhz8D0p8FG+3jp8mVI7wO8lZdVBdwN4DlXG8MzJkf5lefqxcVFq5dxDXgng3Wof3MD0O7uLs3NzVFkZCSZzWZKTEwkPz8/L6P8bldcXFynlwF4zuDftOCPj480PDxMPT09dHNzQwEBAZSbm0sNDQ1UU1NDYWFhpL3z9vb2T3x8/HePAXDOiQQtUeoXb29vqbe3lwYHB8XQ8/MzLpO/vz9FRERQc3MzNTU1CYUKje5oXLw3IycG7DjUDj6IIs0YHx+nkZERMhgMlJ2dTQUFBULX2toabW9vU39/P1VXV1NaWtpvzn8ZAhZEUm1wK+arNpGcMJqdnaXQ0FCyWCxUX18v/L++vtLd3Z2cdXd309LSEqWnp5OPUQWZ69m7L0qI6glKlpeXJaG1tbUUHBws9DCVFBQURMXFxWQymWh9fd1zB2fKdO//BkUWtffK2NjYoKenJ+HabreLgcrKSkmyw+Gg6+trenh4kGcYBo3awUxUGRjcpD2AwfLycmpsbCSWnPC+sLBAWVlZdH5+LqoqKiqSs5SUFKENiVfoVa1GHfP5oQZWVoCCouPjYyorK6OXlxfxHl4jMoBOT0/LGWjUgitTrwVXBnhMSkoil8slz0pRgQ7QFhgYKM9QlgKmNqIMEOekX41Mq2VKTU0VT/f392lxcVGigLoKCwvJaDQSF5NEpeJca8Rl4I2TgY2+rGNAmkNDQ5JgeA6KINGVlRUpNF/AKhwHKLKrOVNziAH9Hx4e0tnZGdlsNpqYmKCjoyMxlpmZSZ/dde9tOhQD83ulzoXysqLvyclJslqtQhVykZeXR+3t7ZSRkeFlQB0Bt5YMIZ2b2A9oVjlE8pRi29raIu4p0pegeSQXzQ6yhEH0p4qKCqESYlAc49EXGxvb7Gl2/OMqSzMKBnBpamqKxsbGxEBLS4tU7v39vcfb+fl5GhgYECdycnIoOTmZ8vPzqaSkBMmXZscqdHq0iY8Fe/kNoDMzM6L/kJAQATs5OZEVqoFsEQ3adHh4uDyjAFHZ7KhUdF1dXWtbW5tVolErhnt8B9PRCTB4i6pFpWK/t7cndQFjCQkJxOHTwcGBFCQaImiNiYmhzc3NTpZ0l4LppzbAdEyw9q/ZSMXl5WUQIlCqGh8bAKEnwVusp6en0vjgNb/n2tnZ+Zer/z81ptc3eXR09HtpaamZL/VJqXPiYEDVIaX4UA/wGoXGRuwcjZlrw6rF8/mvQhmsDiN/e79wBVuYGhNHFwVw9tzJNDn5Nzvnwsrd1vUZxk/Mz5QV1doMyAAAAABJRU5ErkJggg=="
                  />
                </div>
                <span>Mark</span>
              </div>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="6" r="2" fill="currentColor" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <circle cx="12" cy="18" r="2" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
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
    </SidebarContext.Provider>
  );
}

export function Dashboard() {
  return (
    <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <Triangle className="size-5 fill-foreground" />
        </Button>
      </div>
      <nav className="grid gap-1 p-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg bg-muted"
              aria-label="Playground"
            >
              <SquareTerminal className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Playground
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg"
              aria-label="Models"
            >
              <Bot className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Models
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg"
              aria-label="API"
            >
              <Code2 className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            API
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg"
              aria-label="Documentation"
            >
              <Book className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Documentation
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg"
              aria-label="Settings"
            >
              <Settings2 className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Settings
          </TooltipContent>
        </Tooltip>
      </nav>
      <nav className="mt-auto grid gap-1 p-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mt-auto rounded-lg"
              aria-label="Help"
            >
              <LifeBuoy className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Help
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mt-auto rounded-lg"
              aria-label="Account"
            >
              <SquareUser className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Account
          </TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}
