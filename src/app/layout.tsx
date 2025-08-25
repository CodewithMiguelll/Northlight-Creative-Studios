import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico", 
    apple: "/apple-touch-icon.png", 
  },
  title: "Northlight Creative",
  description:
    "Official website for Northlight Creative, a multidisciplinary freelancing agency focused on web, design, and content.",
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
      </body>
    </html>
  );
}
