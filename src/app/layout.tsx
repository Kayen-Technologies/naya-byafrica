import type { Metadata } from "next";
import { Jost, Kumbh_Sans } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naya By Africa",
  description: "African botanicals, elevated for modern self-care.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${kumbhSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-kumbh-sans">{children}</body>
    </html>
  );
}
