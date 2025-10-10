import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Northlight Creative Studios",
  description:
    "Discover the portfolio of Northlight Creative Studios — modern websites, UI/UX design, and interactive projects built with React, Next.js, and creative design thinking.",
  keywords: [
    "Northlight Creative Studios",
    "portfolio",
    "web design projects",
    "frontend development",
    "UI/UX case studies",
    "Next.js websites",
    "creative studio work",
  ],
  alternates: {
    canonical: "https://madebynorthlight.com.ng/projects",
  },
  openGraph: {
    title: "Projects | Northlight Creative Studios",
    description:
      "Browse projects by Northlight Creative Studios — sleek websites, UI/UX design, and frontend development with React and Next.js.",
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Northlight Creative Studios",
    description:
      "See the latest web projects and design showcases from Northlight Creative Studios.",
    images: ["https://madebynorthlight.com.ng/assets/og-image-projects.png"],
  },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
