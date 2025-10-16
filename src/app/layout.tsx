import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://madebynorthlight.com.ng"),
  title: {
    default: "Northlight Creative Studios",
    template: "%s | Northlight Creative Studios",
  },
  description:
    "Official website for Northlight Creative Studios, a multidisciplinary freelancing agency focused on web, design, and content.",
  keywords: [
    "Northlight Creative Studios",
    "web design agency",
    "frontend developer",
    "creative studio",
    "freelance web developer",
    "UI UX design",
    "branding",
    "modern web development",
  ],
  icons: {
    icon: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },
  openGraph: {
    title: "Northlight Creative Studios",
    description:
      "Official website for Northlight Creative Studios — guiding brands and businesses toward creative excellence.",
    url: "https://madebynorthlight.com.ng",
    siteName: "Northlight Creative Studios",
    images: [
      {
        url: "/assets/og-image-default.png",
        width: 1200,
        height: 630,
        alt: "Northlight Creative Studios OG image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northlight Creative Studios",
    description:
      "Guiding brands and businesses toward creative excellence through design and modern web development.",
    images: ["/assets/og-image-default.png"],
  },
  alternates: {
    canonical: "https://www.madebynorthlight.com.ng",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#fdfcff] to-[#f3eefb]">
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
