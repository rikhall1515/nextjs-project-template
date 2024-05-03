"use client";
import { FaWindowClose } from "react-icons/fa";
import { FaCheck, FaLock } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { useCookieContext } from "@/context/cookie";
import { resetCookieConsentValue } from "@/lib/cookie/utils";
import { cn } from "@/lib/utils";

export default function ChangeMenu() {
  const cookie = useCookieContext();
  return (
    <>
      <div
        className={cn(
          cookie.isChangeConsentMenuOpen ? "pointer-events-auto" : "pointer-events-none",
          "fixed bottom-0 left-0 z-[5] min-h-[26.25rem] w-full px-6"
        )}
      >
        <div
          className={cn(
            "transition-all",
            cookie.isChangeConsentMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0",
            "mb-6 flex min-h-[26.25rem] w-full flex-col bg-background shadow md:w-[30rem]"
          )}
        >
          <div className="flex items-center justify-between border-b-2 border-border px-6 py-6 font-bold">
            <span>Cookies settings</span>
            <button
              className="h-4 w-4"
              onClick={() => {
                cookie.toggleChangeConsentMenu();
              }}
            >
              <FaWindowClose />
            </button>
          </div>
          <div className="h-full px-6 pb-12 pt-10">
            <span className="mb-10 block font-bold">Current Consent</span>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-3">
                <div>
                  <FaLock />
                </div>
                <span>Necessary</span>
              </li>
              <li className="flex items-center gap-3">
                <div>
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                    <FaCheck className={cookie.preferences ? "block" : "hidden"} />
                    <MdClose className={cookie.preferences ? "hidden" : "block"} />
                  </div>
                </div>
                <span>Preferences</span>
              </li>
              <li className="flex items-center gap-3">
                <div>
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                    <FaCheck className={cookie.analytics ? "block" : "hidden"} />
                    <MdClose className={cookie.analytics ? "hidden" : "block"} />
                  </div>
                </div>
                <span>Analytics</span>
              </li>
              <li className="flex items-center gap-3">
                <div>
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                    <FaCheck className={cookie.advertising ? "block" : "hidden"} />
                    <MdClose className={cookie.advertising ? "hidden" : "block"} />
                  </div>
                </div>
                <span>Advertising</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col-reverse gap-3 px-6 pb-6 md:flex-row">
            <Button
              onClick={() => {
                cookie.toggleSelectCookies(false, false, false, false);
                resetCookieConsentValue();
              }}
              variant="outline"
            >
              Remove Consent
            </Button>
            <Button
              onClick={() => {
                cookie.toggleChangeConsentMenu();
                cookie.toggleManageConsentMenu();
                cookie.toggleSelectCookies(
                  cookie.preferences,
                  cookie.analytics,
                  cookie.advertising,
                  false
                );
                resetCookieConsentValue();
              }}
            >
              Change Consent
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
