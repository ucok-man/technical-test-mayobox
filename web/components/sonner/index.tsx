"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = (props: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4 text-primary" />,
        info: <InfoIcon className="size-4 text-secondary" />,
        warning: (
          <TriangleAlertIcon className="size-4 text-brand-tertiary-500" />
        ),
        error: <OctagonXIcon className="size-4 text-destructive" />,
        loading: <Loader2Icon className="size-4 animate-spin text-primary" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            "border border-border bg-popover text-popover-foreground shadow-brand-glass rounded-5xl",
          title: "font-semibold",
          description: "text-sm opacity-90",
          actionButton: "bg-primary text-primary-foreground rounded-full px-3",
          cancelButton: "bg-brand-white-200 text-foreground rounded-full px-3",
        },
      }}
      style={
        {
          /* Base */
          "--normal-bg": "var(--color-background)",
          "--normal-text": "var(--color-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius-5xl)",

          /* Status */
          "--success-bg": "var(--color-brand-primary-50)",
          "--success-text": "var(--color-brand-dark-500)",
          "--success-border": "var(--color-brand-primary-200)",

          "--error-bg":
            "color-mix(in oklab, var(--color-destructive) 10%, white)",
          "--error-text": "var(--color-brand-dark-500)",
          "--error-border": "var(--color-destructive)",

          "--info-bg": "color-mix(in oklab, var(--color-secondary) 15%, white)",
          "--info-text": "var(--color-brand-dark-500)",
          "--info-border": "var(--color-secondary)",

          "--warning-bg": "var(--color-brand-tertiary-500)",
          "--warning-text": "var(--color-brand-dark-500)",
          "--warning-border": "var(--color-brand-tertiary-500)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
