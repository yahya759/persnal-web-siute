import { motion } from 'motion/react';
import { MessageCircle, Instagram, ArrowUpRight, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  headline: string;
  whatsappLink: string;
  instagramLink: string;
  onOpenContact: () => void;
}

export function CtaSection({
  headline,
  whatsappLink,
  instagramLink,
  onOpenContact,
}: CtaSectionProps) {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/[0.06] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.20) 0%, rgba(14,165,233,0.08) 35%, transparent 70%)'
        }}
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl mx-auto rounded-3xl bg-[radial-gradient(ellipse_at_50%_0%,rgba(37,99,235,0.22),transparent_65%),linear-gradient(#0B0D14,#0B0D14)] border border-white/[0.08] p-8 sm:p-12 lg:p-16 space-y-8 shadow-2xl"
        >
          
          <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center mx-auto text-blue-400">
            <Sparkles className="w-6 h-6" />
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight leading-snug">
              {headline}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              سواء كانت مهمة يومية متكررة أو فكرة لوكيل ذكاء اصطناعي مخصص، يسعدني مناقشة الفكرة واقتراح الهيكلية الأنسب لها.
            </p>
          </div>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            
            {/* Primary WhatsApp Action */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl transition-all shadow-lg shadow-emerald-600/25 whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5" />
              <span>محادثة واتساب</span>
              <ArrowUpRight className="w-4 h-4 rotate-180" />
            </motion.a>

            {/* Instagram Link (Temporary) */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-[#141822] hover:bg-[#1C212E] border border-white/[0.08] rounded-xl transition-all whitespace-nowrap"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>إنستغرام</span>
            </motion.a>

            {/* Form modal button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-blue-400 hover:text-blue-300 hover:bg-white/[0.04] rounded-xl transition-all"
            >
              <span>تفاصيل التواصل وخيارات المشروع</span>
            </motion.button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
