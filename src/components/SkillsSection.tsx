import { motion } from 'motion/react';
import { Layers, Cpu, Database, BrainCircuit } from 'lucide-react';
import { TechGroup } from '../data/portfolioData';

interface SkillsSectionProps {
  groups: TechGroup[];
}

export function SkillsSection({ groups }: SkillsSectionProps) {
  const getGroupIcon = (name: string) => {
    switch (name) {
      case 'بناء الحلول':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'النماذج والخدمات':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'البيانات والتكامل':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'مفاهيم الذكاء الاصطناعي':
        return <BrainCircuit className="w-5 h-5 text-blue-400" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-400" />;
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
          className="space-y-3 text-right mb-12"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-blue-400">
            المنظومة التقنية
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            التقنيات ومجالات العمل
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            أدوات مفتوحة المصدر ومنصات متكاملة تم اختيارها لضمان سرعة الاستجابة واستقلالية النظام.
          </p>
        </motion.div>

        {/* 4 Tech Groups Grid across full width with motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {groups.map((group, idx) => (
            <motion.div
              key={group.groupName}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.09, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.6)' }}
              className="rounded-2xl bg-[#0B0D13] border border-white/[0.08] p-6 sm:p-7 text-right space-y-5 transition-all duration-200 cursor-default"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                  {getGroupIcon(group.groupName)}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {group.groupName}
                  </h3>
                  <span className="text-xs text-slate-400">{group.description}</span>
                </div>
              </div>

              {/* Technologies clean tags list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-3 rounded-xl bg-[#0F121A] border border-white/[0.05] hover:border-white/10 transition-colors space-y-1"
                  >
                    <span className="font-semibold text-white text-xs sm:text-sm block">
                      {item.name}
                    </span>
                    {item.description && (
                      <p className="text-[11px] text-slate-400 leading-snug">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
