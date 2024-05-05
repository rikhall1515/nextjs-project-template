import CookieFormContextProvider from "@/context/cookie/form";
import { cn } from "@/lib/utils";

import ChangeMenu from "./changeMenu";
import ManageConsent from "./manage";
import CookieToast from "./toast";

export default function CookieTray() {
  return (
    <>
      <div className={cn("transition-all")}>
        <CookieFormContextProvider>
          <ManageConsent />
        </CookieFormContextProvider>
        <ChangeMenu />
        <CookieToast />
      </div>
    </>
  );
}
