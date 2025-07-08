"use client";

import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import StickyLogo from "@/components/ui/sticky-logo";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Paret Mining | Global Mining & Energy Solutions",
  description:
    "With over $80B in assets under management, Paret Mining delivers cutting-edge mining, energy, and infrastructure services with excellence, innovation, and sustainability.",
  keywords: [
    "Paret Mining",
    "Mining",
    "Energy",
    "Infrastructure",
    "Global Mining Company",
    "Sustainable Mining",
  ],
  authors: [{ name: "Paret Mining" }],
  creator: "Paret Mining",
  themeColor: "#000000",
  openGraph: {
    type: "website",
    url: "https://www.paret-mining.vercel.app", // Replace with your domain
    title: "Paret Mining | Global Mining & Energy Solutions",
    description:
      "We deliver cutting-edge mining, energy, and infrastructure services with innovation and sustainability.",
    siteName: "Paret Mining",
    images: [
      {
        url: "/logo.png", // Place your preview banner here ideally (1200x630)
        width: 1200,
        height: 630,
        alt: "Paret Mining Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paret Mining | Global Mining & Energy Solutions",
    description:
      "We deliver cutting-edge mining, energy, and infrastructure services with innovation and sustainability.",
    images: ["/logo.png"], // Can be a larger image if needed
    creator: "@paretmining", // Optional: your Twitter handle
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans`}>
        <NavBar />
        <StickyLogo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
