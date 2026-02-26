import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  viewport: "width=device-width, initial-scale=1",
  title: "Bharat Money Financial Services",
  description: "Learn stock market & build income with expert guidance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white text-slate-800"}>
        {children}
      </body>
    </html>
  );
}