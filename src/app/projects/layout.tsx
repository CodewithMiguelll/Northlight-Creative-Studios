import type { ReactNode } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Northlight Creative Studios",
  description:
    "Explore our portfolio of projects — from sleek business websites to interactive experiences.",
};


export default function AboutLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
