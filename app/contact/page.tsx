"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative bg-black text-white px-6 py-28 min-h-screen overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#00c6ff]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00c6ff]/10 rounded-full blur-3xl -z-10" />

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-poppins"
        >
          Let’s Build the Future{" "}
          <span className="text-[#00c6ff]">Together</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4 font-inter"
        >
          Connect with our team to explore new opportunities, strategic
          partnerships, or press inquiries.
        </motion.p>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto bg-[#f9fafb] rounded-2xl shadow-md border border-gray-200 p-10 md:p-14">
        <form className="space-y-8">
          <div className="relative">
            <input
              type="text"
              id="name"
              required
              className="peer w-full px-4 pt-5 pb-2 rounded-md bg-gray-100 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#00c6ff]"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#00c6ff]"
            >
              Full Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              required
              className="peer w-full px-4 pt-5 pb-2 rounded-md bg-gray-100 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#00c6ff]"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#00c6ff]"
            >
              Email Address
            </label>
          </div>

          <div className="relative">
            <textarea
              id="message"
              rows={5}
              required
              className="peer w-full px-4 pt-5 pb-2 rounded-md bg-gray-100 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#00c6ff]"
              placeholder=" "
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#00c6ff]"
            >
              Your Message
            </label>
          </div>

          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-[#00c6ff] hover:bg-[#00b4e0] text-white font-semibold px-10 py-3 rounded-full transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Email CTA */}
      <div className="mt-12 text-center text-gray-500 text-sm font-inter">
        Prefer email? Reach us directly at{" "}
        <a
          href="mailto:info@paretmining.com"
          className="text-[#00c6ff] hover:underline font-medium"
        >
          info@paretmining.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
