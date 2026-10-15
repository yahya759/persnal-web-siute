import { motion } from 'motion/react';
import { 
  Bot, 
  Workflow, 
  CalendarCheck, 
  BarChart3, 
  Network,
  ArrowUpRight
} from 'lucide-react';
import { ServiceItem } from '../data/portfolioData';

interface ServicesSectionProps {
  services: ServiceItem[];
  onOpenContact: () => void;
}

export function ServicesSection({ services, onOpenContact }: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'bot':
        return <Bot className="w-5 h-5 text-blue-400" />;
      case 'workflow':
        return <Workflow className="w-5 h-5 text-blue-400" />;
      case 'customer':
        return <CalendarCheck className="w-5 h-5 text-blue-400" />;
      case 'analysis':
        return <BarChart3 className="w-5 h-5 text-blue-400" />;
      case 'integration':
        return <Network className="w-5 h-5 text-blue-400" />;
      default:
        return <Bot className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 border-t border-white/[0.06] relative">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-right"
        >
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-blue-400">
              مجالات الخدمة
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              كيف أساعد عملك؟
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              حلول عملية مبنية لتقليل الاختناقات التشغيلية ومضاعفة إنتاجية فريقك عبر الأتمتة والوكلاء الأذكياء.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-[#0F1219] hover:bg-[#161B26] border border-white/[0.08] rounded-xl transition-all self-start md:self-auto shrink-0"
          >
            <span>طلب استشارة لمشروعك</span>
            <ArrowUpRight className="w-3.5 h-3.5 rotate-180 text-blue-400" />
          </motion.button>
        </motion.div>

        {/* 5 Cards Grid across full width with staggered animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.6)' }}
              className="group rounded-2xl bg-[#0B0D13] border border-white/[0.08] p-6 flex flex-col justify-between text-right transition-all duration-200 hover:shadow-xl hover:shadow-blue-900/10 cursor-default"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:scale-105 transition-all">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {service.tags && (
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                  {service.tags.map((tag, idx) => (
                    <span key={tag} className="inline-flex items-center">
                      <span className="hover:text-slate-200">{tag}</span>
                      {idx < service.tags!.length - 1 && (
                        <span className="mx-1 text-slate-600 select-none">·</span>
                      )}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
