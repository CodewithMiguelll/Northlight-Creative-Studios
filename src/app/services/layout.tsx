import type { ReactNode } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Northlight Creative Studios",
  description:
    "Discover our services: frontend engineering, product design, and modern web development tailored to your needs.",
};


export default function AboutLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
