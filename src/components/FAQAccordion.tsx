import React, { useState } from 'react';
import { FAQItem } from '../types';
import { DEFAULT_FAQS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mt-10 md:mt-14 max-w-xl mx-auto px-4 pb-12">
      {/* FAQ Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#1c1d21] shadow-xs">
          <HelpCircle className="w-5 h-5 stroke-[2.2]" />
        </div>
        <h2 className="text-xl md:text-2xl font-extrabold text-[#1c1d21] tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Accordion container */}
      <div className="space-y-4">
        {DEFAULT_FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white border border-neutral-100 rounded-[22px] overflow-hidden transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.03)]"
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full text-left px-5 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
              >
                <span className="font-bold text-[#c26d60] text-sm md:text-base leading-snug hover:text-[#b05c50] transition-colors">
                  {faq.question}
                </span>
                <span className="text-[#c26d60] shrink-0 bg-[#faf1ec] w-7 h-7 rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </motion.div>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-5 pt-1 text-sm md:text-base text-neutral-600 leading-relaxed border-t border-dashed border-neutral-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
