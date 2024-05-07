import CookieBanner from "@/components/cookies";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CookieMenuContextProvider from "@/context/cookie/menu";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CookieMenuContextProvider>
        <Header />
        <CookieBanner />
        <main id="content">{children}</main>

        <Footer />
      </CookieMenuContextProvider>
    </>
  );
}
