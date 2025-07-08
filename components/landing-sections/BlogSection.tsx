"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "Paret Mining Featured in Global Energy Outlook 2025",
    image: "/founder.jpg",
    excerpt:
      "Our latest offshore drilling success in Haiti earns recognition from the Global Energy Forum. Discover what it means for the future.",
    href: "/blog/global-energy-outlook-2025",
    date: "June 28, 2025",
  },
  {
    title: "Paret Expands Port Logistics Capacity in West Africa",
    image: "/founder.jpg",
    excerpt:
      "With our new terminal upgrade, export capacity triples—positioning Paret as the region’s most reliable logistics hub.",
    href: "/blog/port-logistics-upgrade",
    date: "June 12, 2025",
  },
  {
    title: "Sustainable Mining: Our Commitment Beyond Compliance",
    image: "/founder.jpg",
    excerpt:
      "From ethical sourcing to community development, see how we embed sustainability in every ton we extract.",
    href: "/blog/sustainable-mining-commitment",
    date: "May 24, 2025",
  },
];

const BlogSection = () => {
  return (
    <section
      className="bg-white  md:py-20 py-10 md:px-6 px-4 text-black"
      id="blog"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-10 font-poppins"
        >
          Paret News & Updates
        </motion.h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#f9f9f9] border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 font-inter mb-2">
                  {post.date}
                </p>
                <h3 className="text-lg font-semibold mb-3 font-poppins">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-700 font-inter mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="text-[#00c6ff] font-medium hover:underline font-inter"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
