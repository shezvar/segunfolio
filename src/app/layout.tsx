import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GTagScript from "@/components/GTagScript";
import { Analytics } from "@vercel/analytics/react"

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Segun Oroyo",
  description: "Portfolio developed by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <GTagScript />
        {/* <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="7d7c3cef-fc79-4c45-9d61-543c9d63a22e"  type="text/javascript"></script> */}
      </head>
      <body className={manrope.className}>
        {children}
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
