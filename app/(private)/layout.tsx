import { TooltipProvider } from "@/components/ui/tooltip";
import DashboardContextProvider from "@/context/dashboard";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TooltipProvider>
        <DashboardContextProvider>{children}</DashboardContextProvider>
      </TooltipProvider>
    </>
  );
}
