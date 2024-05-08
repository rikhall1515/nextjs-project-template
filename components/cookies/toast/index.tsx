import { env } from "@/env/client";

import { AcceptAll, DenyAll, ManageCookies, PrivacyPolicy } from "./buttons";
import Wrapper from "./wrapper";

export default function CookieToast() {
  return (
    <>
      <Wrapper>
        <p className="max-w-[60ch] leading-[1.3]">
          {env.NEXT_PUBLIC_SITE_NAME} uses cookies to improve the website and your user experience,
          read more in the <PrivacyPolicy />.
        </p>
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <AcceptAll />
          <DenyAll />
          <ManageCookies />
        </div>
      </Wrapper>
    </>
  );
}
