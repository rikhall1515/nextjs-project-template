import ThemeContextProvider from "./theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </>
  );
}
