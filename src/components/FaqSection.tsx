import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '../data/faqData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 md:py-32 bg-[#090A0D] border-t border-[#1C202B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4 text-center md:text-left">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-medium">
            COMMON QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.15]">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-neutral-400">
            Clear answers about Canadian currency, production process, scope boundaries, and kickoff steps.
          </p>
        </div>

        <div className="divide-y divide-[#1E2330] border-y border-[#1E2330]">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5 sm:py-6">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full border border-[#2B3040] flex items-center justify-center shrink-0 text-neutral-400 group-hover:border-blue-400 group-hover:text-blue-400 transition-colors">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3 pr-8 text-sm sm:text-base text-neutral-300 leading-relaxed animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
