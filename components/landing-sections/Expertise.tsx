"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const expertiseData = [
  {
    title: "Calcium Carbonate Mining",
    description:
      "Extraction and supply of premium-grade calcium carbonate for industrial and commercial applications.",
    href: "/expertise/calcium-carbonate-mining",
  },
  {
    title: "Power Generation",
    description:
      "Innovative energy solutions powering industries and communities with efficiency and sustainability.",
    href: "/expertise/power-generation",
  },
  {
    title: "Oil & Gas Exploration & Production",
    description:
      "Upstream operations delivering energy security through precise exploration and advanced production techniques.",
    href: "/expertise/oil-gas-exploration",
  },
  {
    title: "Oil Refining",
    description:
      "Refining crude into clean, high-grade fuels that meet global standards for performance and sustainability.",
    href: "/expertise/oil-refining",
  },
  {
    title: "Iron & Tin Ore Mining & Supply",
    description:
      "Reliable sourcing and delivery of key industrial ores driving infrastructure and manufacturing development.",
    href: "/expertise/ore-mining-supply",
  },
  {
    title: "Ports & Logistics",
    description:
      "Comprehensive port services and logistics support, ensuring smooth, secure, and efficient global operations.",
    href: "/expertise/ports-logistics",
  },
];

const Expertise = () => {
  return (
    <section
      className="bg-white md:py-20 py-10 md:px-6 px-4 text-black"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-poppins">
          Our Expertise
        </h2>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#f9f9f9] rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#0e0e0e] mb-3 font-poppins">
                {item.title}
              </h3>
              <p className="text-[15px] text-[#444] font-inter leading-relaxed mb-6">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="text-[#00c6ff] font-medium hover:underline font-inter"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
