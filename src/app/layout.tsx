import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/header";
import {Footer} from "@/components/footer";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico", 
    apple: "/apple-touch-icon.png", 
  },
  title: "Northlight Creative Studios",
  description:
    "Official website for Northlight Creative Studios, a multidisciplinary freelancing agency focused on web, design, and content.",
};

        
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
