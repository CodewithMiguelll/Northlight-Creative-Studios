import type { ReactNode } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Northlight Creative Studios",
  description:
    "Northlight Creative Studios is run by Chikaima Miguel Uwakwe — a frontend developer and product designer blending creativity and code to craft bold, modern web experiences.",
};


export default function AboutLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
