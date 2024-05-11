import { cn } from "@/lib/utils";

import SearchButton from "./searchBtn";

export default function TopBar() {
  return (
    <>
      <div
        className={cn(
          "relative box-border flex items-center justify-between",
          "mb-12 h-[4.5rem] w-full",
          "after:absolute after:bottom-[-0.125rem] after:h-[0.125rem] after:w-full",
          "via-50% after:bg-gradient-to-r after:from-background after:via-primary after:to-background"
        )}
      >
        <SearchButton />
      </div>
    </>
  );
}
