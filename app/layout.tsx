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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.variable} ${inter.variable} font-sans`}>
        <NavBar />
        <StickyLogo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
