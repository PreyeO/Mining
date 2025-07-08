"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Haiti Deep Drilling Operation",
    image: "/project5.jpg",
    location: "Haiti",
    description:
      "Successful offshore drilling project with advanced tech and sustainable methods, producing high-yield crude efficiently.",
    href: "/projects/haiti-drilling",
  },
  {
    title: "Dominican Republic Oil Field",
    image: "/project2.jpeg",
    location: "Dominican Republic",
    description:
      "Strategic exploration and extraction in challenging terrain, supplying fuel for over 5,000+ industries.",
    href: "/projects/dominican-oil",
  },
  {
    title: "Calcium Carbonate Plant",
    image: "/project3.jpg",
    location: "Dubai",
    description:
      "Cutting-edge facility refining high-grade calcium carbonate for pharmaceuticals and manufacturing.",
    href: "/projects/calcium-carbonate",
  },
  {
    title: "Logistics Terminal Expansion",
    image: "/project6.jpg",
    location: "Kentucky",
    description:
      "Integrated logistics hub expansion to support bulk mineral exports with world-class storage and shipping facilities.",
    href: "/projects/logistics-expansion",
  },
  {
    title: "Iron Ore Mining & Supply",
    image: "/project1.jpg",
    location: "Benin Port",
    description:
      "Integrated logistics hub expansion to support bulk mineral exports with world-class storage and shipping facilities.",
    href: "/projects/logistics-expansion",
  },
  {
    title: "Power Generation Facility",
    image: "/project4.jpg",
    location: "Benin Port",
    description:
      "Integrated logistics hub expansion to support bulk mineral exports with world-class storage and shipping facilities.",
    href: "/projects/logistics-expansion",
  },
];

const Projects = () => {
  return (
    <section
      className="bg-[#0f1111] text-white  md:py-20 py-10 md:px-6 px-4"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-poppins">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-poppins">
                  {project.title}
                </h3>
                <p className="text-sm text-[#00c6ff] mb-1 font-inter">
                  {project.location}
                </p>
                <p className="text-white/80 text-sm mb-4 font-inter">
                  {project.description}
                </p>
                <Link
                  href={project.href}
                  className="text-[#00c6ff] font-medium hover:underline font-inter"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
