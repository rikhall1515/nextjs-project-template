"use client";
import { memo } from "react";

import { Button } from "@/components/ui/button";
import { useCookieContext } from "@/context/cookie";

function ButtonCookie() {
  const { toggleChangeConsentMenu } = useCookieContext();
  return (
    <>
      <Button
        asChild
        variant="link"
        onClick={() => toggleChangeConsentMenu()}
        className="h-fit p-0 text-foreground"
      >
        <span>Privacy Settings</span>
      </Button>
    </>
  );
}

export default memo(ButtonCookie);
