import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christian Garcia | Summer 2026 Sitter & Activity Planner — Lincoln Park",
  description:
    "A thoughtful June–July 2026 babysitting plan for two curious kids who love animals, history, and nature. Designed in Lincoln Park, Chicago, by Christian Garcia.",
  metadataBase: new URL("https://example.com"),
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
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
