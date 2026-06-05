import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Brand Brokers – For The Creators, By The Creators",
  description: "Where Creators Meet Performance. Where Brands Meet Results.",
  icons: {
    icon: "/logo/logo-black.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} style={{ overflowX: "hidden" }}>
      <body style={{ overflowX: "hidden", maxWidth: "100vw", position: "relative" }}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
