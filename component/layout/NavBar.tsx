"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        {/* Left Nav Links */}
        <div className="flex gap-8 items-center z-10">
          <NavLink href="/about" label="Who We Are" />
          <NavLink href="/services" label="What We Do" />
          <NavLink href="/royalty-owners" label="Royalty Owners" />
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <NavLink href="/" label="Home" />
        </div>

        {/* Right Nav Links + CTA */}
        <div className="flex gap-8 items-center z-10">
          <NavLink href="/blog" label="Visit Our Blog" />
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 transition"
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

export default NavBar;
