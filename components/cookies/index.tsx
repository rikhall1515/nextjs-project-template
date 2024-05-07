import CookieContextProvider from "@/context/cookie";
import CookieFormContextProvider from "@/context/cookie/form";
import { cn } from "@/lib/utils";

import ManageConsent from "./manage";
import CookieToast from "./toast";

export default function CookieTray() {
  return (
    <>
      <CookieContextProvider>
        <div className={cn("transition-all")}>
          <CookieFormContextProvider>
            <ManageConsent />
          </CookieFormContextProvider>
          <CookieToast />
        </div>
      </CookieContextProvider>
    </>
  );
}
