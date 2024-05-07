"use client";
import { memo } from "react";

import { Button } from "@/components/ui/button";
import { useCookieMenuAPIContext } from "@/context/cookie/menu";

function ButtonCookie() {
  const { toggleManageConsentMenu } = useCookieMenuAPIContext();
  return (
    <>
      <Button
        variant="link"
        onClick={toggleManageConsentMenu}
        className="h-fit p-0 text-foreground"
      >
        <span>Privacy Settings</span>
      </Button>
    </>
  );
}

export default memo(ButtonCookie);
