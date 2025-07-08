"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Where is Paret Mining headquartered?",
    answer:
      "We are headquartered in the United States of America, with a strong global footprint across 25+ countries.",
  },
  {
    question: "What does it mean to be a Chevron distributor?",
    answer:
      "Paret Mining is officially approved by Chevron Petroleum to distribute premium oil and fuel products both domestically and internationally.",
  },
  {
    question: "What industries does Paret support?",
    answer:
      "We serve sectors including oil & gas, power, logistics, refining, mining, infrastructure, and more.",
  },
  {
    question: "How can I partner with Paret Mining?",
    answer:
      "You can visit our contact page and fill out the inquiry form to initiate a conversation with our team.",
  },
  {
    question: "Is Paret committed to sustainability?",
    answer:
      "Absolutely. Sustainability is embedded in our operations — from ethical mining to community impact.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-[#0f1111] text-white py-20 px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins"
        >
          Frequently Asked Questions
        </motion.h2>

        <Accordion
          type="single"
          collapsible
          className="space-y-4 divide-y divide-white/10 border border-white/10 rounded-xl bg-white/5 p-4 backdrop-blur-sm"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-white font-inter text-[17px] font-medium px-2 py-3">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/80 px-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
