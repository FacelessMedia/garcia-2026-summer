import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Summer 2026 with Rory & Bellamy · Christian Garcia",
  description:
    "A four-week starter plan for the Leahy kids. One theme per week — zoology, planets, nature, marine biology — two outings a week, a steady daily rhythm, and no hour-by-hour scheduling.",
  metadataBase: new URL("https://garcia-2026-summer.vercel.app"),
  openGraph: {
    title: "Summer 2026 with the Leahy kids — Christian Garcia",
    description:
      "Four weekly themes, two outings a week, daily piano + reading + outside time. A skim-able starter plan, easy to edit.",
    type: "website",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
