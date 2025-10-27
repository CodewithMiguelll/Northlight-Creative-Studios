import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Northlight Creative Studios",
  description:
    "Let’s connect — reach out to Northlight Creative Studios for collaborations, projects, or to book a call. We’d love to hear from you.",
  keywords: [
    "Northlight Creative Studios",
    "contact Northlight",
    "freelance web designer",
    "hire frontend developer",
    "UI/UX design studio",
    "creative collaborations",
    "web design agency contact",
  ],
  alternates: {
    canonical: "https://madebynorthlight.com.ng/contact",
  },
  openGraph: {
    title: "Contact | Northlight Creative Studios",
    description:
      "Reach out to Northlight Creative Studios for collaborations, design projects, or inquiries. Let’s create something remarkable together.",
    url: "https://madebynorthlight.com.ng/contact",
    siteName: "Northlight Creative Studios",
    images: [
      {
        url: "https://madebynorthlight.com.ng/assets/og-image-contact.png",
        width: 1200,
        height: 630,
        alt: "Northlight Creative Studios Contact Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Northlight Creative Studios",
    description:
      "Let’s connect — reach out to Northlight Creative Studios to start your next creative project.",
    images: ["https://madebynorthlight.com.ng/assets/og-image-contact.png"],
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
