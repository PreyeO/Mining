"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

// Typewriter Component
const Typewriter = ({ phrases }: { phrases: string[] }) => {
  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const speed = isDeleting ? 30 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setCurrentText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f97316] ">
      {currentText}
      <span className="text-white/70 animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-[#0e0e0e]/70 text-white overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.35] z-0"
        src="test.mp4"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212]/60 via-black/30 to-transparent z-10" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:mt-12 mt-20 relative z-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-8 md:px-16 py-14 md:py-20 shadow-xl max-w-4xl w-full text-center"
      >
        {/* Static + Typewriter Heading */}
        <h1 className=" md:hidden font-poppins text-[32px] md:text-[52px] font-bold leading-[1.2] tracking-tight">
          Empowering Global Industries with <br />
          <Typewriter phrases={["Mining", "Energy", "Infrastructure"]} /> <br />
          Solutions
        </h1>
        <h1 className="hidden md:block font-poppins text-[32px] md:text-[52px] font-bold leading-[1.2] tracking-tight">
          Empowering Global Industries with{" "}
          <Typewriter phrases={["Mining", "Energy", "Infrastructure"]} />{" "}
          Solutions
        </h1>

        {/* Description */}
        <p className="font-inter mt-8 text-white/80 text-[17px] leading-[1.7] max-w-2xl mx-auto">
          With over{" "}
          <span className="font-semibold text-[#00c6ff]">$80B in assets</span>{" "}
          under management,
          <span className="text-[#00c6ff]"> Paret Mining</span> is redefining
          the global standard in mineral, fuel, and industrial resource delivery
          with innovation at its core.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mt-10 font-inter">
          <Link href="#impact" className="">
            <Button className="hover:scale-[1.05] px-8 py-6 cursor-pointer bg-[#00c6ff] text-black rounded-full hover:bg-[#00b4e0] transition-colors duration-300 font-semibold">
              Explore Our Capabilities
            </Button>
          </Link>
          <Link href="#projects" className="">
            <Button className=" hover:scale-[1.05]  bg-white/10 px-8 py-6 cursor-pointer border border-white/30 text-white rounded-full transition-colors duration-300 font-semibold">
              View Project Portfolio
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
