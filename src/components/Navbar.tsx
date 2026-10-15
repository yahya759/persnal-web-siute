import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  name: string;
  onOpenContact: () => void;
  onOpenSettings: () => void;
}

export function Navbar({ name, onOpenContact, onOpenSettings }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'services', 'projects', 'guides', 'contact'];
      const scrollY = window.scrollY;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#08090C]/90 border-b border-white/[0.06]"
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-6 sm:gap-8 h-20">
          
          {/* Zone 1 (RTL: Right): Brand Title / Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-3 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20 transition-transform duration-200"
              >
                <span className="font-mono tracking-wider">YM</span>
              </motion.div>
              <div className="flex flex-col text-right">
                <span className="text-lg font-bold text-white tracking-tight whitespace-nowrap">
                  {name}
                </span>
                <span className="text-xs text-blue-400 font-medium">مهندس ذكاء اصطناعي</span>
              </div>
            </a>
          </div>

          {/* Zone 2 (Center): Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a 
              href="#about" 
              className={`hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 py-1 relative ${
                activeSection === 'about' ? 'text-blue-400 font-semibold' : ''
              }`}
            >
              عنّي
              {activeSection === 'about' && (
                <motion.span 
                  layoutId="activeNav"
                  className="absolute bottom-0 inset-x-0 h-0.5 bg-blue-500 rounded-full" 
                />
              )}
            </a>
            <a 
              href="#services" 
              className={`hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 py-1 relative ${
                activeSection === 'services' ? 'text-blue-400 font-semibold' : ''
              }`}
            >
              الخدمات
              {activeSection === 'services' && (
                <motion.span 
                  layoutId="activeNav"
                  className="absolute bottom-0 inset-x-0 h-0.5 bg-blue-500 rounded-full" 
                />
              )}
            </a>
            <a 
              href="#projects" 
              className={`hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 py-1 relative ${
                activeSection === 'projects' ? 'text-blue-400 font-semibold' : ''
              }`}
            >
              المشاريع
              {activeSection === 'projects' && (
                <motion.span 
                  layoutId="activeNav"
                  className="absolute bottom-0 inset-x-0 h-0.5 bg-blue-500 rounded-full" 
                />
              )}
            </a>
            <a 
              href="#guides" 
              className={`hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 py-1 relative ${
                activeSection === 'guides' ? 'text-blue-400 font-semibold' : ''
              }`}
            >
              الموارد
              {activeSection === 'guides' && (
                <motion.span 
                  layoutId="activeNav"
                  className="absolute bottom-0 inset-x-0 h-0.5 bg-blue-500 rounded-full" 
                />
              )}
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                onOpenContact();
              }}
              className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              التواصل
            </a>
          </nav>

          {/* Zone 3 (RTL: Left): 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSettings}
              title="تعديل الاسم"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
              aria-label="تعديل الاسم"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
            </button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-600/25 whitespace-nowrap shrink-0"
            >
              <span>تواصل لمشروعك</span>
              <ArrowUpRight className="w-4 h-4 rotate-180" />
            </motion.button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white md:hidden rounded-lg hover:bg-white/[0.05]"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/[0.06] bg-[#0A0C11] px-4 pt-4 pb-6 space-y-3 text-right overflow-hidden"
          >
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-blue-400 hover:bg-white/[0.03] rounded-lg"
            >
              عنّي
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-blue-400 hover:bg-white/[0.03] rounded-lg"
            >
              الخدمات
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-blue-400 hover:bg-white/[0.03] rounded-lg"
            >
              المشاريع
            </a>
            <a
              href="#guides"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-blue-400 hover:bg-white/[0.03] rounded-lg"
            >
              الموارد
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-blue-400 hover:bg-white/[0.03] rounded-lg"
            >
              التواصل
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl"
              >
                تواصل لمشروعك
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
