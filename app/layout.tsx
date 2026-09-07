import "./globals.css";
import { Inter, Sora } from "next/font/google";
import type { Metadata, Viewport } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bharat Money Financial Services | Investment & Wealth Advisory",
  description:
    "Expert financial guidance, investment solutions and stock-market education to help you build lasting wealth. Motilal Oswal partner, trusted since 1987.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060f22",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-white text-slate-800 antialiased">{children}</body>
    </html>
  );
}
