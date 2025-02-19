import { Button } from "@/registry/default/ui/button";
import { ArrowRightIcon, CircleAlert, XIcon } from "lucide-react";

export default function Component() {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element.
    <div className="border-border bg-background z-50 max-w-[400px] rounded-lg border px-4 py-3 shadow-lg">
      <div className="flex gap-2">
        <div className="flex grow gap-3">
          <CircleAlert className="mt-0.5 shrink-0 text-red-500" size={16} aria-hidden="true" />
          <div className="flex grow justify-between gap-12">
            <p className="text-sm">An error occurred!</p>
            <a href="#" className="group text-sm font-medium whitespace-nowrap">
              Link
              <ArrowRightIcon
                className="ms-1 -mt-0.5 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          aria-label="Close banner"
        >
          <XIcon
            size={16}
            className="opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
}
