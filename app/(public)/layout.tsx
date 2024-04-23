import CookieBanner from "@/components/cookies";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="content">{children}</main>
      <Footer />
      <CookieBanner />
    </>
  );
}
