import { cn } from "@/lib/utils";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section
        className={cn(
          "h-full min-h-[40rem] w-full",
          "py-8 m:py-16 lg:py-24",
          "relative overflow-x-hidden overflow-y-visible",
          "bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
        )}
      >
        <div
          className={cn(
            "min-h-[40rem] w-full max-w-[103rem]",
            "pxPage mx-auto",
            "flex flex-col items-center justify-center py-[7rem]"
          )}
        >
          {children}
        </div>
      </section>
    </>
  );
}
