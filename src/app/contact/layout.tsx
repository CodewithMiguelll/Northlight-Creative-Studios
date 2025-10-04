import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Northlight Creative Studios",
  description:
    "Let’s connect — reach out to The Studio for collaborations, projects, or to book a call.",

  alternates: {
    canonical: "https://madebynorthlight.com.ng/contact",
  },

  openGraph: {
    title: "Contact | Northlight Creative Studios",
    description:
      "Let’s connect — reach out to The Studio for collaborations, projects, or to book a call.",
    url: "https://madebynorthlight.com.ng/contact",
    siteName: "Northlight Creative Studios",
    images: [
      {
        url: "https://madebynorthlight.com.ng/og-image.png",
        width: 1200,
        height: 630,
        alt: "Northlight Creative Studios Contact Page",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact | Northlight Creative Studios",
    description:
      "Let’s connect — reach out to The Studio for collaborations, projects, or to book a call.",
    images: ["https://madebynorthlight.com.ng/og-image.png"],
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
