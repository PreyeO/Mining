"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 font-poppins">Paret Mining</h3>
          <p className="text-sm text-white/70 font-inter leading-relaxed">
            Fueling growth, powering nations. As an approved Chevron Petroleum
            distributor, we lead with innovation, excellence, and integrity.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4 font-poppins">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm font-inter text-white/80">
            <li>
              <Link href="/about" className="hover:text-[#00c6ff] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-[#00c6ff] transition"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/expertise"
                className="hover:text-[#00c6ff] transition"
              >
                Expertise
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#00c6ff] transition">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4 font-poppins">Resources</h4>
          <ul className="space-y-3 text-sm font-inter text-white/80">
            <li>
              <Link href="/blog" className="hover:text-[#00c6ff] transition">
                Blog & Updates
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-[#00c6ff] transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-[#00c6ff] transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[#00c6ff] transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact + Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4 font-poppins">
            Contact Us
          </h4>
          <p className="text-sm font-inter text-white/80 mb-4">
            Email:{" "}
            <a
              href="mailto:info@paretmining.com"
              className="hover:text-[#00c6ff]"
            >
              info@paretmining.com
            </a>
            <br />
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:text-[#00c6ff]">
              +1 (234) 567-890
            </a>
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href="#"
              className="hover:text-[#00c6ff]"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              className="hover:text-[#00c6ff]"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="#"
              className="hover:text-[#00c6ff]"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/60 font-inter">
        &copy; {new Date().getFullYear()} Paret Mining. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
