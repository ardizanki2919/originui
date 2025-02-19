import { Button } from "@/registry/default/ui/button";
import { EllipsisIcon, FilesIcon, FilmIcon } from "lucide-react";

export default function Component() {
  return (
    <div className="inline-flex -space-x-px rounded-lg shadow-xs rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
      >
        <FilesIcon className="-ms-1 opacity-60" size={16} aria-hidden="true" />
        FilesIcon
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
      >
        <FilmIcon className="-ms-1 opacity-60" size={16} aria-hidden="true" />
        Media
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Menu"
      >
        <EllipsisIcon size={16} aria-hidden="true" />
      </Button>
    </div>
  );
}
