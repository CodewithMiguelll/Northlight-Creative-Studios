import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Northlight Creative Studios",
  description:
    "Discover our services: frontend engineering, product design, and modern web development tailored to your needs.",
  openGraph: {
    title: "Services | Northlight Creative Studios",
    description:
      "Discover our services: frontend engineering, product design, and modern web development tailored to your needs.",
    url: "https://madebynorthlight.com.ng/services",
    images: [
      {
        url: "https://madebynorthlight.com.ng/assets/og-image-services.png",
        width: 1200,
        height: 630,
        alt: "Northlight Creative Studios - Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Northlight Creative Studios",
    description:
      "Discover our services at The Studio: frontend engineering, product design, and modern web development tailored to your needs.",
    images: ["https://madebynorthlight.com.ng/assets/og-image-services.png"],
  },
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
