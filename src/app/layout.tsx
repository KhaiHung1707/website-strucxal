import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Doto } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Strucxal Studio — Design & web development for modern brands",
    template: "%s — Strucxal Studio",
  },
  description:
    "Strucxal is a boutique studio building fast, beautiful, conversion-focused websites for e-commerce, SaaS, and global brands.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${jetbrainsMono.variable} ${doto.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
