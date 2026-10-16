import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Instagram, Copy, Check, ExternalLink } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappLink: string;
  instagramLink: string;
  onUpdateWhatsappLink?: (link: string) => void;
}

export function ContactModal({
  isOpen,
  onClose,
  whatsappLink,
  instagramLink,
}: ContactModalProps) {
  const [copiedWa, setCopiedWa] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(whatsappLink);
    setCopiedWa(true);
    setTimeout(() => setCopiedWa(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.93, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg my-8 rounded-3xl bg-[#0C0E14] border border-white/10 p-6 sm:p-8 text-right space-y-6 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-right">
                <h3 className="text-xl font-bold text-white">تواصل لمشروعك</h3>
                <p className="text-xs text-slate-400">ناقش فكرة الأتمتة أو وكيل الذكاء الاصطناعي المناسب لعملك</p>
              </div>
            </div>

            {/* Contact Invitation Headline */}
            <div className="p-4 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-slate-200 text-sm font-medium leading-relaxed text-right">
              «عندك عملية تستهلك وقتك؟ احكيلي عنها ونشوف كيف ممكن نبسطها.»
            </div>

            {/* Social channels: WhatsApp & Instagram */}
            <div className="space-y-3">
              {/* WhatsApp Action */}
              <div className="p-4 rounded-2xl bg-[#080A0F] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4" />
                    <span>واتساب</span>
                  </span>
                  <button
                    onClick={handleCopyLink}
                    className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    {copiedWa ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedWa ? 'تم النسخ' : 'نسخ'}</span>
                  </button>
                </div>

                <p className="text-xs text-slate-400 font-mono break-all line-clamp-1" dir="ltr">
                  +972 59 774 1299
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>محادثة واتساب المباشرة</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Instagram Action */}
              <div className="p-4 rounded-2xl bg-[#080A0F] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-pink-400 font-semibold flex items-center gap-1.5">
                    <Instagram className="w-4 h-4" />
                    <span>إنستغرام</span>
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono" dir="ltr">@yahya._.musa</span>
                </div>

                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 rounded-xl transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>صفحة إنستغرام</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end pt-2 border-t border-white/[0.08]">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
              >
                إغلاق
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
