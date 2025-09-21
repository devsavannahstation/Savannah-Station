import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { Cormorant, Proza_Libre } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const prozaLibre = Proza_Libre({
  variable: "--font-proza-libre",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "The Savannah Station - Historic Event Center",
  description:
    "Experience unforgettable moments at The Savannah Station, a historic event center in the heart of Savannah, Georgia.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${prozaLibre.variable} font-sans antialiased`}
      >
        <main>
          <Suspense fallback={null}>{children}</Suspense>
        </main>

        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
