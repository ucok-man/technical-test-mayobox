import { cn } from "@/lib/utils";
import Link from "next/link";

const LEFT_ITEMS = [
  { label: "Robux Gamepass", href: "#" },
  { label: "Item Gamepass", href: "#" },
  { label: "Game Lainya", href: "#" },
];

const RIGHT_ITEMS = [
  { label: "Beli Robux Via Login", href: "#" },
  { label: "Check Pesanan", href: "#" },
];

type Props = {
  className?: string;
};

export default function ContentDesktop({ className }: Props) {
  return (
    <div className={cn("flex w-full justify-between items-center", className)}>
      {/* Left */}
      <div className="text-primary flex items-center gap-6">
        {LEFT_ITEMS.map(({ href, label }) => (
          <Link
            href={href}
            key={label}
            className="hover:underline hover:underline-offset-4 hover:text-primary/85"
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="text-primary flex items-center gap-6">
        {RIGHT_ITEMS.map(({ href, label }) => (
          <Link
            href={href}
            key={label}
            className="hover:underline hover:underline-offset-4 hover:text-primary/85"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
