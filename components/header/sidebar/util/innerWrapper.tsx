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

  /**
   * Exponentially decays the difference between end and start,
   * inversed depending on which is biggerr, towards 100 or 40.
   *
   * This means that when dragging the sidebar menu to the left, it
   * will only go 40px left before stopping after further dragging.
   *
   * If you drag it towards the right, it will go 100px in that direction
   * before stopping.
   *
   * @argument {number} end
   * @argument {number} start
   * @returns {number}
   */
  const directionAdjustedValue = useCallback((end: number, start: number) => {
    if (end > start) {
      return 100 - Math.exp(-0.04 * (end - start) + 4.6); //exponential decay towards 100px
    }
    return -40 + Math.exp(-0.04 * (start - end) + 3.8); //exponential decay towards 40px
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
    // The difference between where the touch ends and begins needs to be greater than
    // 100 in either direction.
    if (Math.abs(touchEndXRef.current - touchStartXRef.current) > 100) {
      toggle();
    }
    // Reset transform so that the base classes kick into effect as normal
    if (sidebarRef.current) {
      sidebarRef.current.style.transform = "";
    }
  }, [sidebarRef, toggle]);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    // Adding event listeners. PreventDefault not needed so they are passive.
    sidebar.addEventListener("touchstart", handleTouchStart, { passive: true });
    sidebar.addEventListener("touchmove", handleTouchMove, { passive: true });
    sidebar.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Cleanup function, makes sure that listeners are garbage collected
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
          "h-[100svh] w-[6.5rem] transition-all duration-500 ease-customEase",
          "bg-background outline-none",
          isExpanded
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        )}
      />
      <aside
        className={cn(
          "fixed bottom-0 right-0 top-0 z-[29]",
          "h-[100svh] w-[100vw] transition-all duration-500 ease-customEase md:w-[20rem]",
          "bg-background outline-none",
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
        ref={sidebarRef}
      >
        {children}
      </aside>
    </>
  );
}
