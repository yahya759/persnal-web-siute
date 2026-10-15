import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  ChevronLeft, 
  CheckSquare, 
  FileText, 
  Scale, 
  X, 
  CheckCircle2 
} from 'lucide-react';
import { GuideItem } from '../data/portfolioData';

interface GuidesSectionProps {
  guides: GuideItem[];
}

export function GuidesSection({ guides }: GuidesSectionProps) {
  const [activeGuide, setActiveGuide] = useState<GuideItem | null>(null);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const getGuideIcon = (type: string) => {
    switch (type) {
      case 'دليل ميداني':
        return <BookOpen className="w-4 h-4 text-blue-400" />;
      case 'دليل تطبيقي':
        return <FileText className="w-4 h-4 text-blue-400" />;
      case 'أداة تقييم تفاعلية':
        return <CheckSquare className="w-4 h-4 text-blue-400" />;
      case 'مقارنة معمارية':
        return <Scale className="w-4 h-4 text-blue-400" />;
      default:
        return <BookOpen className="w-4 h-4 text-blue-400" />;
    }
  };

  const handleToggleCheck = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const calculateScore = (checklist: { weight: number }[]) => {
    return checklist.reduce((acc, item, idx) => {
      return acc + (checkedItems[idx] ? item.weight : 0);
    }, 0);
  };

  return (
    <section id="guides" className="py-16 md:py-24 border-t border-white/[0.06] relative">
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
            المعرفة والمراجع
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            أدلة وموارد عملية
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            إرشادات معمارية ونماذج تقييم عملية لمساعدتك على اتخاذ القرارات التقنية الصحيحة قبل بناء أي وكيل أو أتمتة.
          </p>
        </motion.div>

        {/* Guides Cards Grid across full width with motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {guides.map((guide, idx) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.4)' }}
              className="group rounded-2xl bg-[#0B0D13] border border-white/[0.08] p-6 sm:p-7 text-right flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-blue-900/10 cursor-default"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
                    {getGuideIcon(guide.contentType)}
                    <span>{guide.contentType}</span>
                  </span>
                  {guide.readTime && (
                    <span className="text-xs text-slate-500 font-mono">
                      {guide.readTime}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {guide.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {guide.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <button
                  onClick={() => {
                    setActiveGuide(guide);
                    setCheckedItems({});
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>افتح الدليل</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guide Reader / Evaluation Modal with AnimatePresence */}
        <AnimatePresence>
          {activeGuide && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveGuide(null)}
                className="fixed inset-0 bg-black/85 backdrop-blur-sm"
              />

              <motion.div 
                initial={{ opacity: 0, scale: 0.93, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93, y: 15 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-2xl my-8 rounded-3xl bg-[#0C0E14] border border-white/10 p-6 sm:p-8 text-right space-y-6 shadow-2xl"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <button
                    onClick={() => setActiveGuide(null)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="text-right">
                    <span className="text-xs text-blue-400 font-medium">{activeGuide.contentType}</span>
                    <h3 className="text-xl font-bold text-white">{activeGuide.title}</h3>
                  </div>
                </div>

                {/* Guide Content */}
                <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeGuide.fullContent?.summary && (
                    <p className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20 text-slate-200 font-medium leading-relaxed">
                      {activeGuide.fullContent.summary}
                    </p>
                  )}

                  {activeGuide.fullContent?.sections.map((sec, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="text-base font-bold text-white">{sec.heading}</h4>
                      <p className="text-slate-300 leading-relaxed">{sec.body}</p>
                      {sec.bulletPoints && (
                        <ul className="list-disc list-inside space-y-1 text-slate-400 pr-2">
                          {sec.bulletPoints.map((bp, bidx) => (
                            <li key={bidx}>{bp}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                  {/* If Interactive Checklist */}
                  {activeGuide.fullContent?.checklist && (
                    <div className="space-y-4 pt-2">
                      <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#08090C] border border-white/[0.08]">
                        <span className="text-xs font-semibold text-slate-300">درجة الجاهزية التشغيلية:</span>
                        <span className="text-base font-bold text-blue-400 font-mono">
                          {calculateScore(activeGuide.fullContent.checklist)} / 100
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {activeGuide.fullContent.checklist.map((item, cidx) => (
                          <div
                            key={cidx}
                            onClick={() => handleToggleCheck(cidx)}
                            className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 text-right ${
                              checkedItems[cidx]
                                ? 'bg-blue-600/15 border-blue-500/40 text-white'
                                : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:border-white/15'
                            }`}
                          >
                            <span className="text-xs leading-relaxed">{item.question}</span>
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                              checkedItems[cidx] ? 'bg-blue-600 border-blue-500 text-white' : 'border-white/20'
                            }`}>
                              {checkedItems[cidx] && <CheckCircle2 className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Close Button */}
                <div className="flex justify-end pt-4 border-t border-white/[0.08]">
                  <button
                    onClick={() => setActiveGuide(null)}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl"
                  >
                    إغلاق الدليل
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
