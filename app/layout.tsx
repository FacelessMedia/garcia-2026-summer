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
  title: "Christian Garcia | Summer 2026 Sitter & Activity Planner — Lincoln Park",
  description:
    "A thoughtful June–July 2026 babysitting plan for two curious kids who love animals, history, and nature. Designed in Lincoln Park, Chicago, by Christian Garcia.",
  metadataBase: new URL("https://garcia-2026-summer.vercel.app"),
  openGraph: {
    title: "Christian Garcia — Summer 2026 Sample Agenda",
    description:
      "Themed weeks of animals, history, and nature across Lincoln Park and beyond. A flexible plan, ready to customize.",
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
