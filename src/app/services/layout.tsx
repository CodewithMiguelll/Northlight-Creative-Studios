import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Northlight Creative Studios",
  description:
    "Explore the creative and technical services of Northlight Creative Studios — from frontend engineering to UI/UX design, branding, and full-stack web development tailored to your vision.",
  keywords: [
    "Northlight Creative Studios",
    "web development services",
    "frontend engineering",
    "UI/UX design",
    "product design",
    "branding and identity",
    "Next.js developer",
    "creative web agency",
    "modern website design",
  ],
  alternates: {
    canonical: "https://madebynorthlight.com.ng/services",
  },
  openGraph: {
    title: "Services | Northlight Creative Studios",
    description:
      "From concept to code — Northlight Creative Studios offers design, development, and digital craftsmanship that elevate brands and experiences.",
    url: "https://madebynorthlight.com.ng/services",
    siteName: "Northlight Creative Studios",
    images: [
      {
        url: "https://madebynorthlight.com.ng/assets/og-image-services.png",
        width: 1200,
        height: 630,
        alt: "Northlight Creative Studios - Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Northlight Creative Studios",
    description:
      "Frontend engineering, product design, and branding — Northlight Creative Studios crafts modern, meaningful digital experiences.",
    images: ["https://madebynorthlight.com.ng/assets/og-image-services.png"],
  },
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
