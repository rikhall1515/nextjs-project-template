"use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  //NavigationMenuItem,
  //NavigationMenuLink,
  NavigationMenuList,
  //navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
// import { cn } from "@/lib/utils";

export default function Nav() {
  // const router = usePathname();
  return (
    <>
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList className="gap-6">
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
          {/* <NavigationMenuItem>
            <Link href="/archive" legacyBehavior passHref className="">
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "font-bold",
                  "data-[active]:bg-primary"
                )}
                active={"/archive" === router}
              >
                Archive
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
          {/* <NavigationMenuItem>
            <Link href="/trendy" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "font-bold")}
              >
                What&apos;s Trendy
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
