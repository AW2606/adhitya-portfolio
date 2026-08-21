import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/context/ThemeContext";

const serifFont = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adhitya Warman — Informatics Engineering & Creative Technologist",
  description: "Portfolio of Adhitya Warman, Informatics Engineering student at ITERA and BSI Scholarship Awardee (Batch 5). Building clean, scalable, and meaningful digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable} scroll-smooth`}
    >
      <body className="bg-[var(--bg-canvas)] text-[var(--text-main)] font-sans antialiased selection:bg-[var(--accent-color)] selection:text-white relative overflow-x-hidden min-h-screen">
        <ThemeProvider>
          {/* Subtle background grid lines for editorial structure */}
          <div className="fixed inset-0 bg-editorial-grid pointer-events-none z-0 opacity-40" />
          
          <div className="relative z-10">
            {children}
          </div>
          
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}