import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function JumpToContent() {
  return (
    <>
      <Button
        asChild
        className={cn(
          "absolute left-0 top-0 z-50 block -translate-y-[200%] rounded-none rounded-br-md transition-all",
          "focus-visible:translate-y-0"
        )}
      >
        <a href="#content">Skip to Content</a>
      </Button>
    </>
  );
}
