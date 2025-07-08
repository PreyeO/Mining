"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FounderMessage = () => {
  return (
    <section className="bg-[#121212] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/founder.jpg" // replace with actual image
            alt="Emmanuel Paret"
            width={500}
            height={600}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-[#00c6ff]">
            A Word from Our Founder
          </h2>
          <p className="text-lg text-white/80 font-inter leading-relaxed mb-6">
            “When we began this journey over a decade ago, we weren’t just
            chasing minerals, we were pursuing impact. Today, Paret Mining
            stands not only as a global resource powerhouse but as a
            generational mission to redefine excellence in energy,
            infrastructure, and trade.
          </p>
          <p className="text-lg text-white/80 font-inter leading-relaxed mb-6">
            We believe that the future belongs to those bold enough to build it.
            And at Paret, we build with vision, integrity, and the resilience of
            our people.”
          </p>
          <p className="font-semibold text-white font-inter mb-2">
            — Emmanuel Paret
          </p>
          <p className="text-white/60 text-sm font-inter italic">
            Founder & Group CEO, Paret Mining
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Discover Our Story
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderMessage;
