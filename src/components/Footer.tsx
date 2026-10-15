import { MessageCircle, Instagram, GitFork, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  name: string;
  roleTitle: string;
  githubUrl: string;
  whatsappLink: string;
  instagramLink: string;
  onOpenContact: () => void;
}

export function Footer({
  name,
  roleTitle,
  githubUrl,
  whatsappLink,
  instagramLink,
  onOpenContact,
}: FooterProps) {
  return (
    <footer className="border-t border-white/[0.06] bg-[#07080B] py-14">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-right">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="font-bold text-white text-lg">{name}</span>
              <span className="text-slate-600">·</span>
              <span className="text-xs text-blue-400 font-semibold">{roleTitle}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              أساعد الشركات الصغيرة على تبسيط عملياتها وأتمتة المهام اليومية باستخدام وكلاء الذكاء الاصطناعي وn8n.
            </p>
          </div>

          {/* Section links: عنّي، الخدمات، المشاريع، الموارد، التواصل */}
          <div className="md:col-span-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-300">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              عنّي
            </a>
            <a href="#services" className="hover:text-blue-400 transition-colors">
              الخدمات
            </a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              المشاريع
            </a>
            <a href="#guides" className="hover:text-blue-400 transition-colors">
              الموارد
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onOpenContact();
              }}
              className="hover:text-blue-400 transition-colors"
            >
              التواصل
            </a>
          </div>

          {/* Social Links (WhatsApp, Instagram, GitHub) */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-emerald-600/20 text-slate-400 hover:text-emerald-400 border border-white/[0.06] transition-colors"
              title="واتساب [رابط مؤقت]"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-pink-600/20 text-slate-400 hover:text-pink-400 border border-white/[0.06] transition-colors"
              title="إنستغرام [رابط مؤقت]"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.06] transition-colors"
              title="GitHub Workflows"
            >
              <GitFork className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>تواصل</span>
              <ArrowUpRight className="w-3.5 h-3.5 rotate-180" />
            </button>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600">
          <span>
            {name} · {roleTitle}
          </span>
          <span>
            جميع الحقوق محفوظة © {new Date().getFullYear()} · غزة
          </span>
        </div>

      </div>
    </footer>
  );
}
