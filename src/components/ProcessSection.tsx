import { motion } from 'motion/react';
import { 
  Search, 
  Lightbulb, 
  Workflow, 
  BookCheck, 
  ArrowLeft 
} from 'lucide-react';
import { ProcessStep } from '../data/portfolioData';

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-blue-400" />;
      case 1:
        return <Lightbulb className="w-5 h-5 text-blue-400" />;
      case 2:
        return <Workflow className="w-5 h-5 text-blue-400" />;
      case 3:
        return <BookCheck className="w-5 h-5 text-blue-400" />;
      default:
        return <Workflow className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="py-16 md:py-24 border-t border-white/[0.06] relative">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 text-right mb-14"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-blue-400">
            طريقة العمل
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            من المشكلة إلى الحل
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            منهجية واضحة ومباشرة من أربع خطوات لتحويل المهام اليدوية المجهدة إلى أنظمة مستقرة.
          </p>
        </motion.div>

        {/* 4 Steps Interactive Visual Flow with staggered entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.35)' }}
              className="relative group rounded-2xl bg-[#0B0D13] border border-white/[0.08] p-6 text-right flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-blue-900/10 cursor-default"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600/20 transition-all">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-2xl font-mono font-bold text-slate-600 group-hover:text-blue-400 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute -left-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[#08090C] border border-white/10 items-center justify-center text-blue-400">
                  <ArrowLeft className="w-3.5 h-3.5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
