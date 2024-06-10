import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GTagScript from "@/components/GTagScript";
import { Analytics } from "@vercel/analytics/react"

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Segun Oroyo",
  description: "My portfolio developed by me",
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
      </head>
      <body className={manrope.className}>
        {children}
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
