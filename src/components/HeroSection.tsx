import { WorkflowBackdrop } from './WorkflowBackdrop';
import React from 'react';
import { motion, Variants } from 'motion/react';
import { 
  Bot, 
  Workflow, 
  MessageSquareCode, 
  ArrowUpRight, 
  FolderGit2, 
  Sparkles, 
  Info 
} from 'lucide-react';
import { FeatureCard, TechItem } from '../data/portfolioData';

interface HeroSectionProps {
  name: string;
  roleTitle: string;
  roleSub: string;
  headline: string;
  bio: string;
  personalNote: string;
  userPhotoUrl?: string | null;
  featureCards: FeatureCard[];
  techStack: TechItem[];
  onOpenContact: () => void;
  onScrollToProjects: () => void;
  onOpenNameEdit: () => void;
}

export function HeroSection({
  name,
  roleTitle,
  roleSub,
  headline,
  bio,
  personalNote,
  userPhotoUrl,
  featureCards,
  techStack,
  onOpenContact,
  onScrollToProjects,
  onOpenNameEdit,
}: HeroSectionProps) {

  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'bot':
        return <Bot className="w-5 h-5 text-blue-400" />;
      case 'network':
        return <Workflow className="w-5 h-5 text-blue-400" />;
      case 'customer':
        return <MessageSquareCode className="w-5 h-5 text-blue-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  // Entrance variants for opening sequence
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemFadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative pt-4 pb-16 md:pt-8 md:pb-44 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 45% 55% at 24% 38%, rgba(37,99,235,0.20), transparent 70%)' }}
      />
      <WorkflowBackdrop />
      {/* Background ambient lighting */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.45, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] pointer-events-none blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, rgba(29,78,216,0.08) 45%, transparent 70%)'
        }}
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative">
        {/* Top 2-Column Split: Text Right, Photo Left in RTL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Right Column (Text Hierarchy) */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col items-start text-right space-y-6"
            >
              
              {/* Name & Role: quiet identity line */}
              <motion.div variants={itemFadeUp} className="flex items-center gap-3 text-slate-400">
                <span className="text-lg sm:text-xl font-semibold text-white">{name}</span>
                <span className="w-px h-4 bg-white/20" aria-hidden="true" />
                <span className="text-sm sm:text-base">{roleTitle}</span>
              </motion.div>

              {/* Main Headline: the single focal point */}
              <motion.h1
                variants={itemFadeUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.35] text-white max-w-2xl text-balance"
              >
                {headline}
              </motion.h1>

              {/* Short Bio */}
              <motion.p
                variants={itemFadeUp}
                className="text-slate-400 text-base sm:text-lg leading-8 max-w-xl"
              >
                {bio}
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                variants={itemFadeUp}
                className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
              >
                {/* Primary Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenContact}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-600/30 whitespace-nowrap"
                >
                  <span>تواصل لمشروعك</span>
                  <ArrowUpRight className="w-4 h-4 rotate-180" />
                </motion.button>

                {/* Secondary Button */}
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: '#1A202C' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onScrollToProjects}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 bg-[#141822] hover:text-white border border-white/[0.08] rounded-xl transition-all whitespace-nowrap"
                >
                  <FolderGit2 className="w-4 h-4 text-slate-400" />
                  <span>شاهد مشاريعي</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Left Column (Personal Photo Frame with Yahya's Real Portrait Centered) */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[850/1024] rounded-3xl bg-[#090B10] border border-white/[0.08] p-3 sm:p-3.5 flex flex-col items-center justify-center overflow-hidden shadow-2xl group"
              >
                
                {/* Electric Blue Radial Glow inside the photo card */}
                <motion.div 
                  animate={{ 
                    opacity: [0.55, 0.75, 0.55],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.35) 0%, rgba(29, 78, 216, 0.14) 45%, rgba(9, 11, 16, 0) 75%)'
                  }}
                  aria-hidden="true"
                />

                {/* Portrait Display - Centered in true position with full face and eyes visible */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center bg-[#07080C]">
                  <img 
                    src={userPhotoUrl || "/بورتريه سينمائي لرجل واثق.png"} 
                    alt="صورة يحيى موسى - مهندس ذكاء اصطناعي"
                    onError={(e) => {
                      e.currentTarget.src = '/yahya_mousa_portrait.png';
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </motion.div>
            </div>

          </div>

          {/* Three quiet highlights (no boxes) */}
          <div className="mt-14 pt-10 border-t border-white/[0.06] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {featureCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                className="text-right space-y-2"
              >
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">{getCardIcon(card.iconName)}</span>
                  <h3 className="text-base font-semibold text-white">{card.title}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-7">{card.description}</p>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
}
