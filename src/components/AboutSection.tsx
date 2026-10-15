import { motion } from 'motion/react';
import { ArrowUpRight, Compass, Target } from 'lucide-react';

interface AboutSectionProps {
  mainText: string;
  supportingLine: string;
  onOpenContact: () => void;
}

export function AboutSection({ mainText, supportingLine, onOpenContact }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-white/[0.06] relative">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Subtle background ambient */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none opacity-20 blur-3xl -z-10"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)'
          }}
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main textual statement */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 text-right space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
              <Compass className="w-3.5 h-3.5" />
              <span>عنّي</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
              مهندس ذكاء اصطناعي وأتمتة للأعمال
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              {mainText}
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#0E1119] border border-white/[0.08] text-slate-300 text-sm sm:text-base leading-relaxed flex items-start gap-3 transition-colors duration-200 hover:border-blue-500/60">
              <Target className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <p>{supportingLine}</p>
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-600/25"
              >
                <span>ناقش مشروعك معي</span>
                <ArrowUpRight className="w-4 h-4 rotate-180" />
              </motion.button>
            </div>
          </motion.div>

          {/* Core Principles Card */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-4 bg-[#0A0C12] border border-white/[0.08] rounded-3xl p-6 sm:p-8 space-y-5 text-right shadow-xl transition-colors duration-200 hover:border-blue-500/60"
          >
            <h3 className="text-base font-bold text-white pb-3 border-b border-white/[0.06]">
              مبادئ العمل
            </h3>
            
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="space-y-1">
                <span className="font-semibold text-white block">الحلول الواقعية أولاً</span>
                <p className="text-slate-400 leading-relaxed">
                  التركيز على النتيجة الفعلية للعمل بدلاً من التعقيد البرمجي غير المبرر.
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-white/[0.04]">
                <span className="font-semibold text-white block">تقليل العمل اليدوي</span>
                <p className="text-slate-400 leading-relaxed">
                  أتمتة المهام اليومية المتكررة لتمكين فريقك من التركيز على النمو.
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-white/[0.04]">
                <span className="font-semibold text-white block">استقلالية الأدوات</span>
                <p className="text-slate-400 leading-relaxed">
                  تسليم تدفقات عمل واضحة قابلة للتشغيل والتوسعة بسهولة دون قيود.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
