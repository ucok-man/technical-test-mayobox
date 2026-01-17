import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { ReactNode } from "react";

const outerCard = cva(
  "p-0.5 w-fit bg-linear-to-br from-brand-primary-100 to-brand-primary-500",
  {
    variants: {
      radius: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        xxl: "rounded-2xl",
        xxxl: "rounded-3xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      radius: "xxxl",
    },
  }
);

const innerCard = cva("bg-brand-primary-50", {
  variants: {
    radius: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      xxl: "rounded-2xl",
      xxxl: "rounded-3xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    radius: "xxxl",
  },
});

type Props = {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof outerCard>;

export default function FeatureCard({ children, radius, className }: Props) {
  return (
    <div className={clsx(outerCard({ radius }), className)}>
      <div className={innerCard({ radius })}>{children}</div>
    </div>
  );
}
