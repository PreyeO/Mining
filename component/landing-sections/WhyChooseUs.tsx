"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
  "Approved Chevron Petroleum Distributor",
  "Global Operations Across 25+ Countries",
  "20+ Years of Excellence & Innovation",
  "Sustainable and Responsible Mining Practices",
  "World-Class Logistics and Port Infrastructure",
  "Commitment to Quality, Safety & Compliance",
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white text-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center font-poppins mb-6"
        >
          Why Choose Paret?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-lg text-gray-700 font-inter max-w-2xl mx-auto mb-12"
        >
          At Paret, we combine global reach with deep expertise and a strong
          commitment to sustainable and impactful industrial growth.
        </motion.p>

        {/* Bullet Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 text-gray-800"
            >
              <CheckCircle className="text-[#00c6ff] mt-1" size={20} />
              <p className="font-inter">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
