# Potential ideas for new sidebar feature

```tsx
"use client";
import { useCallback, useRef, useEffect } from "react";

import { useHeaderContext } from "@/context/header";
import { useSidebarContext } from "@/context/sidebar";
import { useMenuBtnRefContext } from "@/context/sidebar/btnRef";
import { cn } from "@/lib/utils";

export default function InnerWrapper({ children }: { children: React.ReactNode }) {
  const { isAtTop } = useHeaderContext();
  const { isExpanded, toggle, sidebarRef } = useSidebarContext();
  const { mainMenuBtnRef } = useMenuBtnRefContext();
  const touchStartXRef = useRef(0);
  const animationFrameIdRef = useRef<number | null>(0); // Ref to store the animation frame ID
  const touchEndXRef = useRef(0);

  const directionAdjustedValue = useCallback((end: number, start: number) => {
    if (end > start) {
      return 100 - Math.exp(-0.04 * (end - start) + 4.6);
    }
    return -40 + Math.exp(-0.04 * (start - end) + 3.8);
  }, []);

  const handleTouchStart = useCallback(function handleTouchStart(this: HTMLElement, e: TouchEvent) {
    touchStartXRef.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchMove = useCallback(
    function handleTouchMove(this: HTMLElement, e: TouchEvent) {
      touchEndXRef.current = e.targetTouches[0].clientX;
      // Cancel any existing animation frame requests
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }

      // Request a new animation frame
      animationFrameIdRef.current = requestAnimationFrame(() => {
        if (sidebarRef.current) {
          sidebarRef.current.style.transform = `translateX(${directionAdjustedValue(touchEndXRef.current, touchStartXRef.current)}px)`;
        }
      });
    },
    [sidebarRef, directionAdjustedValue]
  );

  const handleTouchEnd = useCallback(() => {
    // Cancel the animation frame request when touch ends
    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
    }
    if (Math.abs(touchEndXRef.current - touchStartXRef.current) > 100) {
      toggle();
    }
    // Optional: reset transform or update based on final state
    if (sidebarRef.current) {
      sidebarRef.current.style.transform = "";
    }
  }, [sidebarRef, toggle]);

  // Clean up animation frames on component unmount
  useEffect(() => {
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [isExpanded]);
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    // Adding event listeners
    sidebar.addEventListener("touchstart", handleTouchStart);
    sidebar.addEventListener("touchmove", handleTouchMove);
    sidebar.addEventListener("touchend", handleTouchEnd);

    // Cleanup function
    return () => {
      sidebar.removeEventListener("touchstart", handleTouchStart);
      sidebar.removeEventListener("touchmove", handleTouchMove);
      sidebar.removeEventListener("touchend", handleTouchEnd);

      // Cancel any lingering animation frame requests
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd, sidebarRef]);
  return (
    <>
      <div
        className={cn(
          "fixed bottom-0 right-0 top-0 z-[29]",
          "ease-customEase h-[100svh] w-[6.5rem] transition-all duration-500",
          "bg-white outline-none",
          isExpanded
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        )}
      />
      <aside
        className={cn(
          "fixed bottom-0 right-0 top-0 z-[29]",
          "ease-customEase h-[100svh] w-[100vw] transition-all duration-500 md:w-[20rem]",
          "bg-white outline-none",
          isExpanded
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0",
          isAtTop ? "pt-[1.625rem]" : ""
        )}
        aria-label="Sidebar navigation menu"
        aria-hidden={!isExpanded}
        onKeyDown={(e) => {
          if (e.code === "Escape" && mainMenuBtnRef.current) {
            toggle();
            mainMenuBtnRef.current.focus();
          }
        }}
        // onTouchStart={handleTouchStart}
        // onTouchMove={handleTouchMove}
        // onTouchEnd={handleTouchEnd}
        ref={sidebarRef}
      >
        {children}
      </aside>
    </>
  );
}
```

The above code demonstrates sidebar functionality for assigning
and unassigning event listeners for touch-based closing.
