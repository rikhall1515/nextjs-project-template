import { TabsContent } from "@/components/ui/tabs";

export default function AboutTab() {
  return (
    <>
      <TabsContent value="About" id="aboutTab">
        <h3 className="mb-6 px-6 font-bold">What are cookies?</h3>
        <p className="mb-12 px-6 leading-[1.4]">
          Cookies are small text files that are used by websites to improve the user experience.
          <br /> <br />
          Laws and guidelines such as GDPR allow us to store cookies on this device if they are
          strictly necessary for the website to function. For all other cookies we will need your
          explicit consent.
          <br /> <br />
          This website uses only necessary cookies for now. However, we may later store more cookies
          that help us improve the experience for our users.
          <br /> <br />
          You can at any time withdraw your consent to all non-necessary cookies.
          <br /> <br />
          Learn more about us, how you can contact us, and how we handle your personal data in our
          Privacy Policy.
        </p>
      </TabsContent>
    </>
  );
}
