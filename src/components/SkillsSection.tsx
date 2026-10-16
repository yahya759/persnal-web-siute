import { motion } from 'motion/react';
import { Layers, Cpu, Database, BrainCircuit, Code2, Rocket, Wrench } from 'lucide-react';
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
      case 'التطوير والواجهات':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'الاستضافة والنشر':
        return <Rocket className="w-5 h-5 text-blue-400" />;
      case 'أدوات الإنتاج':
        return <Wrench className="w-5 h-5 text-blue-400" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="py-16 md:py-24 border-t border-white/[0.06] relative">
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
            التقنيات ومجالات العمل
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            أدوات مفتوحة المصدر ومنصات متكاملة تم اختيارها لضمان سرعة الاستجابة واستقلالية النظام.
          </p>
        </motion.div>

        {/* One row per group: title on the side, technologies as pills */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {groups.map((group, idx) => (
            <motion.div
              key={group.groupName}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.04, duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-7 px-2 text-right"
            >
              <div className="md:col-span-4 flex items-start gap-4">
                <span className="w-10 h-10 shrink-0 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                  {getGroupIcon(group.groupName)}
                </span>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white">{group.groupName}</h3>
                  <p className="text-sm text-slate-500 leading-6">{group.description}</p>
                </div>
              </div>

              <div className="md:col-span-8 flex flex-wrap content-start gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    title={item.description}
                    className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] hover:border-blue-500/60 transition-colors text-sm text-slate-200"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
