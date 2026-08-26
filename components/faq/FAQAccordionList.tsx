"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/data/faq";

interface FAQAccordionListProps {
  items: FAQItem[];
}

export default function FAQAccordionList({ items }: FAQAccordionListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((faq, index) => (
        <div
          key={faq.question}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all hover:border-primary-200"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
          >
            <span className="text-lg font-bold text-gray-800 pr-8">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-6 h-6 text-primary-500 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
