import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { SkillsSection } from './components/SkillsSection';
import { GuidesSection } from './components/GuidesSection';
import { CtaSection } from './components/CtaSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { DataCustomizerModal } from './components/DataCustomizerModal';
import {
  initialPortfolioConfig,
  featureCardsData,
  techStackData,
  servicesData,
  processStepsData,
  techGroupsData,
  projectsData,
  guidesData,
  faqsData,
} from './data/portfolioData';

export default function App() {
  const [name, setName] = useState<string>(initialPortfolioConfig.name);

  const [whatsappLink, setWhatsappLink] = useState<string>(initialPortfolioConfig.whatsappLink);

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Remove values older versions of the site saved in the browser (e.g. the old placeholder WhatsApp link)
  useEffect(() => {
    try {
      localStorage.removeItem('portfolio_name');
      localStorage.removeItem('portfolio_wa_link');
    } catch {
      /* storage unavailable */
    }
  }, []);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-slate-100 font-sans flex flex-col selection:bg-blue-600 selection:text-white relative">
      {/* خلفية واحدة فقط موحدة لكامل الموقع بشبكة خطوط بيضاء نقية */}
      <div 
        className="fixed inset-0 pointer-events-none bg-grid-white z-0" 
        aria-hidden="true"
      />

      {/* Top Bar (3 zones compliant) */}
      <Navbar
        name={name}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenSettings={() => setIsCustomizerOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Preserved Core Hero Section (kept exactly as designed with centered photo) */}
        <HeroSection
          name={name}
          roleTitle={initialPortfolioConfig.roleTitle}
          roleSub={initialPortfolioConfig.roleSub}
          headline={initialPortfolioConfig.headline}
          bio={initialPortfolioConfig.bio}
          personalNote={initialPortfolioConfig.personalNote}
          userPhotoUrl={initialPortfolioConfig.defaultPhotoUrl}
          featureCards={featureCardsData}
          techStack={techStackData}
          onOpenContact={() => setIsContactOpen(true)}
          onScrollToProjects={handleScrollToProjects}
          onOpenNameEdit={() => setIsCustomizerOpen(true)}
        />

        {/* 1. قسم عنّي */}
        <AboutSection
          mainText={initialPortfolioConfig.aboutMainText}
          supportingLine={initialPortfolioConfig.aboutSupportingLine}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 2. قسم الخدمات («كيف أساعد عملك؟») */}
        <ServicesSection
          services={servicesData}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 3 & 4. قسم المشاريع المختارة وقالب تفاصيل المشروع والتنزيل */}
        <ProjectsSection
          projects={projectsData}
          githubWorkflowsUrl={initialPortfolioConfig.githubWorkflowsUrl}
        />

        {/* 5. قسم طريقة العمل («من المشكلة إلى الحل») */}
        <ProcessSection
          steps={processStepsData}
        />

        {/* 6. قسم المهارات والتقنيات («التقنيات ومجالات العمل») */}
        <SkillsSection
          groups={techGroupsData}
        />

        {/* 7. قسم الأدلة والموارد («أدلة وموارد عملية») */}
        <GuidesSection
          guides={guidesData}
        />

        {/* 8. قسم التنزيل والتواصل (دعوة التواصل وأيقونات واتساب وإنستغرام) */}
        <CtaSection
          headline={initialPortfolioConfig.ctaHeadline}
          whatsappLink={whatsappLink}
          instagramLink={initialPortfolioConfig.instagramLink}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 9. قسم الأسئلة الشائعة */}
        <FaqSection
          faqs={faqsData}
        />
      </main>

      {/* التذييل */}
      <Footer
        name={name}
        roleTitle={initialPortfolioConfig.roleTitle}
        githubUrl={initialPortfolioConfig.githubWorkflowsUrl}
        whatsappLink={whatsappLink}
        instagramLink={initialPortfolioConfig.instagramLink}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* النوافذ التفاعلية */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        whatsappLink={whatsappLink}
        instagramLink={initialPortfolioConfig.instagramLink}
        onUpdateWhatsappLink={(newLink) => setWhatsappLink(newLink)}
      />

      <DataCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        currentName={name}
        onSaveName={(newName) => setName(newName)}
      />
    </div>
  );
}
