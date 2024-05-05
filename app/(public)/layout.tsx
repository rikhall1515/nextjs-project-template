import CookieBanner from "@/components/cookies";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CookieContextProvider from "@/context/cookie";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="content">{children}</main>
      <CookieContextProvider>
        <Footer />
        <CookieBanner />
      </CookieContextProvider>
    </>
  );
}
