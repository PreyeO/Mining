"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";

const stats = [
  { label: "Countries Served", value: 25, suffix: "+" },
  { label: "Barrels Delivered", value: 10, suffix: "M+" },
  { label: "Global Clients", value: 1200, suffix: "+" },
  { label: "Years of Excellence", value: 20, suffix: "+" },
];

const Impact = () => {
  return (
    <section className="bg-[#0f1111] text-white  md:py-20 py-10 md:px-6 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-poppins">
          Our Impact
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 font-inter max-w-2xl mx-auto">
          Paret Mining is an approved Chevron Petroleum distributor, delivering
          quality oil and fuel products across domestic and international
          markets. We uphold the highest standards and exceed expectations
          through strategic partnerships and consistent excellence.
        </p>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-[#00c6ff]">
                <CountUp end={stat.value} duration={2} enableScrollSpy />
                {stat.suffix}
              </h3>
              <p className="text-white/70 mt-2 font-inter">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Chevron Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Image
            src="/Chevron.png"
            alt="Chevron Logo"
            width={160}
            height={50}
            className="mx-auto object-contain opacity-90"
          />
          <p className="mt-4 text-white/70 font-inter text-sm md:text-base">
            Proudly an Approved Chevron Petroleum Distributor
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
