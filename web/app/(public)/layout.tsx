import Navbar from "@/components/navbar";
import { PropsWithChildren } from "react";

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
