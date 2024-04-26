import { cn } from "@/lib/utils";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section
        className={cn(
          "h-full min-h-[40rem] w-full",
          "py-8 m:py-16 lg:py-24",
          "relative overflow-x-hidden overflow-y-visible"
        )}
      >
        <div
          className={cn(
            "min-h-[40rem] max-w-[30rem] px-6",
            "mx-auto",
            "grid gap-6 py-[7rem]"
          )}
        >
          {children}
        </div>
      </section>
    </>
  );
}
