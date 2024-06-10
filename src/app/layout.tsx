import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      <body className={manrope.className}>
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}
