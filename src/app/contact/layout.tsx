import type { ReactNode } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Northlight Creative Studios",
  description:
    "Let’s connect — reach out to The Studio for collaborations, projects, or to book a call.",
};


export default function AboutLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
