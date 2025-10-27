import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Northlight Creative Studios",
  description:
    "Northlight Creative Studios is led by Chikaima Miguel Uwakwe — a frontend developer and product designer blending creativity and code to craft bold, modern web experiences.",
  keywords: [
    "Northlight Creative Studios",
    "frontend developer",
    "product designer",
    "web design",
    "creative web experiences",
    "UI/UX design",
    "coding",
    "JavaScript",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Chikaima Miguel Uwakwe" }],
  openGraph: {
    title: "About | Northlight Creative Studios",
    description:
      "Learn more about Northlight Creative Studios — led by frontend developer and product designer Chikaima Miguel Uwakwe.",
    url: "https://madebynorthlight.com.ng/about",
    siteName: "Northlight Creative Studios",
    images: [
      {
        url: "https://madebynorthlight.com.ng/assets/og-image-default.png",
        width: 1200,
        height: 630,
        alt: "Northlight Creative Studios banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Northlight Creative Studios",
    description:
      "Discover the creative vision behind Northlight — where design meets development.",
    images: ["https://madebynorthlight.com.ng/assets/og-image-default.png"],
  },
  alternates: {
    canonical: "https://madebynorthlight.com.ng/about",
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
