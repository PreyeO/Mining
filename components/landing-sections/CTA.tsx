"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-[#f2f2f2] text-black  md:py-20 py-10 md:px-6 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-poppins mb-6"
        >
          Ready to Take the Next Step?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl font-inter mb-10 text-gray-700"
        >
          Let’s work together to build something extraordinary. Whether {`it's`}{" "}
          powering industries, exploring new terrains, or expanding
          infrastructure. At Paret, every partnership is a step toward legacy.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/contact">
            <span className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-[#222] transition font-inter">
              Let’s Talk
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
