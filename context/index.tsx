import CookieContextProvider from "./cookie";
import SidebarContextProvider from "./sidebar";
import ThemeContextProvider from "./theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeContextProvider>
        <SidebarContextProvider>
          <CookieContextProvider>{children}</CookieContextProvider>
        </SidebarContextProvider>
      </ThemeContextProvider>
    </>
  );
}
