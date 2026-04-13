import type { Metadata } from "next";
import { Fraunces, Manrope, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";

const titleFont = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const hindiFont = Noto_Serif_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari", "latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "NyayaSetu | न्याय सबके लिए",
  description:
    "AI-powered legal aid for every Indian. Understand any legal document with a three-voice AI Sabha.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${titleFont.variable} ${bodyFont.variable} ${hindiFont.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
