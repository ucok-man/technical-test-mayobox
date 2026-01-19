import { cn } from "@/lib/utils";
import * as React from "react";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // === Base (match Input & Select) ===
        "w-full h-full min-h-24",
        "rounded-3xl",
        "border border-primary",
        "bg-transparent",

        // Typography
        "text-lg font-jakarta-sans",
        "placeholder:text-brand-dark-200 placeholder:font-jakarta-sans",

        // Spacing
        "px-6 py-4",

        // Interaction
        "shadow-xs outline-none",
        "transition-[color,box-shadow]",
        "selection:bg-primary selection:text-white",

        // Resize control (optional, tapi recommended)
        "resize-none",

        // Disabled
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",

        className
      )}
      {...props}
    />
  );
}

export { Textarea };
