import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Northlight Creative Studios",
  description:
    "Explore Northlight Creative Studios’ portfolio — modern websites, intuitive interfaces, and immersive digital experiences built with React, Next.js, and artistic precision.",
  keywords: [
    "Northlight Creative Studios",
    "portfolio",
    "web design agency",
    "frontend developer portfolio",
    "React projects",
    "Next.js websites",
    "UI/UX design portfolio",
    "creative studio work",
    "modern web design",
  ],
  alternates: {
    canonical: "https://madebynorthlight.com.ng/projects",
  },
  openGraph: {
    title: "Projects | Northlight Creative Studios",
    description:
      "Discover the creative and technical work of Northlight Creative Studios — a fusion of design, code, and storytelling in every project.",
    url: "https://madebynorthlight.com.ng/projects",
    siteName: "Northlight Creative Studios",
    images: [
      {
        url: "https://madebynorthlight.com.ng/assets/og-image-projects.png",
        width: 1200,
        height: 630,
        alt: "Northlight Creative Studios portfolio projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Northlight Creative Studios",
    description:
      "See how Northlight Creative Studios blends design and development to craft standout digital experiences.",
    images: ["https://madebynorthlight.com.ng/assets/og-image-projects.png"],
  },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
