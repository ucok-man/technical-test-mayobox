import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground  file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        // "aria-invalid:border-destructive",

        "placeholder:font-jakarta-sans placeholder:text-brand-dark-200 placeholder:text-lg text-lg h-16 w-full min-w-0 rounded-full border border-primary py-1.5 px-6 shadow-xs selection:bg-primary selection:text-white transition-[color,box-shadow] outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Input };
