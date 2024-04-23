"use client";

import { CookieConsent } from "react-cookie-consent";

import { useCookieContext } from "@/context/cookie";

export default function CookieBanner() {
  const consent = useCookieContext();

  return consent.hasConsentValue ? (
    <></>
  ) : (
    <>
      <CookieConsent
        enableDeclineButton
        sameSite="strict"
        flipButtons
        cookieName="giftistguide_consent"
        buttonText="Accept all"
        declineButtonText="Decline all"
        onAccept={() => {
          consent.setHasConsentValue(true);
        }}
        onDecline={() => {
          consent.setHasConsentValue(true);
        }}
        style={{
          background: "hsl(var(--popover))",
          color: "hsl(var(--popover-foreground))",
          borderTop: "1px hsl(var(--border))",
        }}
        buttonStyle={{
          background: "hsl(var(--primary))",
          color: "hsl(var(--primary-foreground))",
          borderRadius: "0.35rem",
        }}
        declineButtonStyle={{
          border: "1px hsl(var(--ring))",
          background: "hsl(var(--secondary))",
          color: "hsl(var(--secondary-foreground))",
        }}
        buttonClasses=""
        declineButtonClasses=""
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  );
}
