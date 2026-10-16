import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../data/portfolioData';

interface FaqSectionProps {
  faqs: FaqItem[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'download-free': true,
  });

  const toggleFaq = (id: string) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="py-16 md:py-24 border-t border-white/[0.06] relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 text-right mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            الأسئلة الشائعة
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            إجابات موجزة ومباشرة حول تنزيل التدفقات ومتطلبات تشغيلها على أجهزتك وسيرفراتك.
          </p>
        </motion.div>

        {/* FAQ: one column, plain rows */}
        <div className="max-w-3xl divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {faqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div key={faq.id}>
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-5 text-right flex items-center justify-between gap-4 group"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm sm:text-base text-slate-400 leading-8 text-right max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
