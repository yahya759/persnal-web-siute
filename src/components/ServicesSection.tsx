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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-right"
        >
          <div className="space-y-3">
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

        {/* Services as a quiet list: one row per service */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-7 px-2 text-right transition-colors hover:bg-white/[0.02]"
            >
              <div className="md:col-span-4 flex items-center gap-4">
                <span className="w-10 h-10 shrink-0 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:border-blue-500/60 transition-colors">
                  {getIcon(service.iconName)}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">{service.title}</h3>
              </div>

              <p className="md:col-span-5 text-sm sm:text-base text-slate-400 leading-7">
                {service.description}
              </p>

              {service.tags && (
                <div className="md:col-span-3 flex flex-wrap gap-2 md:justify-start">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-white/[0.04] text-xs text-slate-400">
                      {tag}
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
