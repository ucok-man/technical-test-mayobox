import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MaxWidthWrapper({ children, className }: Props) {
  return (
    <div className={cn("mx-auto w-full max-w-350 px-3 xl:px-0", className)}>
      {children}
    </div>
  );
}
