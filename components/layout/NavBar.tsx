"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet"; // Adjust this import path as needed

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSheetOpen(false); // Close sheet on large screen
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed top-0 left-0 z-50 w-full px-6 py-6 font-medium transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-white/10 text-white shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Mobile View: Branding Left, Hamburger Right */}
        <div className="flex items-center justify-between w-full lg:hidden">
          {/* Mobile Brand */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-wide text-white hover:text-[#fbbf24] transition"
          >
            Paret Mining
          </Link>

          {/* Hamburger */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger aria-label="Open Menu">
              <Menu className="w-6 h-6 text-white" />
            </SheetTrigger>
            <SheetContent
              side="top"
              className="bg-black/90 text-white flex flex-col justify-start p-6 space-y-6"
            >
              <nav className="flex flex-col gap-4">
                <MobileNavLink href="/about" label="Who We Are" />
                <MobileNavLink href="/services" label="What We Do" />
                <MobileNavLink href="/royalty-owners" label="Royalty Owners" />
                <MobileNavLink href="/blog" label="Visit Our Blog" />
              </nav>

              <div className="mt-auto pt-6 border-t border-white/10">
                <Link href="/contact" className="block w-full">
                  <Button
                    variant="outline"
                    className="cursor-pointer w-full border-white/30 text-white hover:bg-white/10"
                  >
                    Book a Consultation
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Left Nav (Desktop) */}
        <div className="hidden lg:flex gap-8 items-center z-10">
          <NavLink href="#about" label="Who We Are" />
          <NavLink href="#services" label="What We Do" />
          <NavLink href="/royalty-owners" label="Royalty Owners" />
        </div>

        {/* Center Brand (Desktop) */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <Link
            href="/"
            className="text-xl font-semibold tracking-wide text-white hover:text-[#fbbf24] transition"
          >
            Paret Mining
          </Link>
        </div>

        {/* Right Nav (Desktop) */}
        <div className="hidden lg:flex gap-8 items-center z-10">
          <NavLink href="#blog" label="Visit Our Blog" />
          <Link href="/contact">
            <Button
              variant="outline"
              className="cursor-pointer border-white/30 text-white hover:bg-white/10 transition"
            >
              Book a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="relative group transition-all duration-300">
    <span className="text-white group-hover:text-[#fbbf24] transition-colors">
      {label}
    </span>
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#fbbf24] group-hover:w-full transition-all duration-300" />
  </Link>
);

const MobileNavLink = ({ href, label }: { href: string; label: string }) => (
  <SheetClose asChild>
    <Link
      href={href}
      className="block text-base font-medium px-2 py-2 rounded hover:text-[#fbbf24] transition-colors"
    >
      {label}
    </Link>
  </SheetClose>
);

export default NavBar;
