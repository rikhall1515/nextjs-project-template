import Logo from "@/components/logo";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { AcceptAll, AcceptSelection, DenyAll } from "./buttons";
import { ConsentTabController, DetailsTabController } from "./controllers";
import ManageWrapper from "./wrapper";

export default function ManageConsent() {
  return (
    <>
      <ManageWrapper>
        <ScrollArea className="flex h-full w-full flex-col items-center align-baseline">
          <Logo className="mx-auto mb-6 flex-shrink-0" />
          <Tabs defaultValue="Consent" className="flex w-full flex-col items-center">
            <TabsList className="mx-auto mb-6">
              <TabsTrigger value="Consent">Consent</TabsTrigger>
              <TabsTrigger value="Details">Details</TabsTrigger>
              <TabsTrigger value="About">About</TabsTrigger>
            </TabsList>
            <TabsContent value="Consent" id="consentTab">
              <div className="">
                <h3 className="mb-6 px-6 font-bold">This website uses cookies</h3>
                <p className="mb-10 px-6 leading-[1.4]">
                  We use cookies to personalize content and marketing, deliver functionality through
                  social media, och for analyzing traffic. We share, with your consent, information
                  to our partners in social media, marketing, and analytics. They can then use this
                  data in combination with other data that you hae either shared or that they have
                  collected through your usage of their services.
                </p>
                <div className="mb-12 grid w-full grid-cols-1 m:grid-cols-2 md:grid-cols-4">
                  <ConsentTabController name="necessary" />
                  <ConsentTabController name="preferences" />
                  <ConsentTabController name="analytics" />
                  <ConsentTabController name="advertising" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="Details" id="detailsTab" className="box-border w-full">
              <div className="flex flex-col gap-6 px-2">
                <DetailsTabController name="necessary" amount={1}>
                  Necessary cookies help the website function. This includes navigation, and access
                  to secure areas of the site. This website will not function without these cookies.
                </DetailsTabController>
                <DetailsTabController name="preferences" amount={0}>
                  Preference cookies are for remembering information that changes the way that the
                  website works or its appearance. This is primarily for preferences such as
                  language, theme, and more.
                </DetailsTabController>
                <DetailsTabController name="analytics" amount={0}>
                  Analytics cookies help the owners of this website to understand what the visitors
                  are interacting with on the website. It also collects information about the
                  behavior of the users while preserving their anonimity.
                </DetailsTabController>
                <DetailsTabController name="advertising" amount={0}>
                  Marketing cookies track the user&apos;s activity across the website. This helps
                  the owners of the website to recommend better content to the user.
                </DetailsTabController>
              </div>
            </TabsContent>
            <TabsContent value="About" id="aboutTab">
              <h3 className="mb-6 px-6 font-bold">What are cookies?</h3>
              <p className="mb-12 px-6 leading-[1.4]">
                Cookies are small text files that are used by websites to improve the user
                experience.
                <br /> <br />
                Laws and guidelines such as GDPR allow us to store cookies on this device if they
                are strictly necessary for the website to function. For all other cookies we will
                need your explicit consent.
                <br /> <br />
                This website uses only necessary cookies for now. However, we may later store more
                cookies that help us improve the experience for our users.
                <br /> <br />
                You can at any time withdraw your consent to all non-necessary cookies.
                <br /> <br />
                Learn more about us, how you can contact us, and how we handle your personal data in
                our Privacy Policy.
              </p>
            </TabsContent>
          </Tabs>
        </ScrollArea>
        <div className="relative flex w-full flex-shrink-0 flex-col-reverse gap-6  p-6 md:flex-row md:flex-nowrap">
          <div className="absolute -top-[3.75rem] left-0 h-16 w-full bg-gradient-to-b from-[transparent] to-background to-50%"></div>
          <DenyAll />
          <AcceptSelection />
          <AcceptAll />
        </div>
      </ManageWrapper>
    </>
  );
}
