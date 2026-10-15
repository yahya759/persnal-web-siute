import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GitFork, 
  ExternalLink, 
  Download, 
  ShoppingCart, 
  Layers, 
  AlertCircle, 
  Calendar, 
  Database, 
  Search, 
  Bot, 
  Mail, 
  Share2, 
  BookOpen, 
  Sparkles,
  ChevronLeft,
  X,
  CheckCircle,
  FileCode2,
  Terminal,
  Cpu
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  githubWorkflowsUrl: string;
}

export function ProjectsSection({ projects, githubWorkflowsUrl }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'restaurant-booking':
        return <Calendar className="w-5 h-5 text-blue-400" />;
      case 'community-voice':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'support-weekly-analytics':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'email-classifier':
        return <Mail className="w-5 h-5 text-blue-400" />;
      case 'smart-assistant':
        return <Bot className="w-5 h-5 text-blue-400" />;
      case 'project-idea-validator':
        return <Sparkles className="w-5 h-5 text-blue-400" />;
      case 'linkedin-daily-publisher':
        return <Share2 className="w-5 h-5 text-blue-400" />;
      case 'arabic-children-stories':
        return <BookOpen className="w-5 h-5 text-blue-400" />;
      case 'geo-visibility-bot':
        return <Search className="w-5 h-5 text-blue-400" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-400" />;
    }
  };

  const handleDownloadWorkflow = (project: ProjectItem) => {
    const workflowPayload = {
      name: project.title,
      nodes: (project.workflowNodes || ['Webhook', 'AI Model', 'Action']).map((nodeName, idx) => ({
        id: `node-${idx + 1}`,
        name: nodeName,
        type: `n8n-nodes-base.${nodeName.toLowerCase().replace(/\s+/g, '')}`,
        typeVersion: 1,
        position: [250 + idx * 220, 300],
      })),
      connections: {},
      settings: { executionOrder: 'v1' },
      meta: {
        templateAuthor: 'Yahya Mousa - AI Engineer from Gaza',
        category: project.category,
        description: project.description,
        repo: project.repoUrl,
      },
    };

    const blob = new Blob([JSON.stringify(workflowPayload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.id}-n8n-workflow.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccessId(project.id);
    setTimeout(() => setDownloadSuccessId(null), 3000);
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-white/[0.06] relative">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-right"
        >
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-blue-400">
              معرض العمل والحلول
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              مشاريع مختارة
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              سير عمل ووكلاء أذكياء صُممت لحل مشاكل تشغيلية حقيقية، مع ملفات قابلة للتنزيل والاستيراد المباشر في n8n.
            </p>
          </div>

          <a
            href={githubWorkflowsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-[#0F1219] hover:bg-[#161B26] border border-white/[0.08] rounded-xl transition-all self-start md:self-auto shrink-0"
          >
            <GitFork className="w-4 h-4 text-blue-400" />
            <span>مستودع تدفقات العمل (Workflows)</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </motion.div>

        {/* 9 Projects Grid across full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: (idx % 4) * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, borderColor: 'rgba(59, 130, 246, 0.4)' }}
              className="group rounded-2xl bg-[#0B0D13] border border-white/[0.08] p-6 flex flex-col justify-between text-right transition-all duration-200 hover:shadow-2xl hover:shadow-blue-900/15"
            >
              <div className="space-y-4">
                
                {/* Visual workflow banner preview */}
                <div className="relative h-28 w-full rounded-xl bg-[#07090D] border border-white/[0.06] p-3 flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/25 flex items-center justify-center">
                      {getProjectIcon(project.id)}
                    </div>
                    
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${
                      project.status === 'free' 
                        ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' 
                        : 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                    }`}>
                      {project.priceLabel || (project.status === 'free' ? 'مجاني' : 'مشروع مدفوع')}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 overflow-x-hidden font-mono text-[10px] text-slate-400">
                    {(project.workflowNodes || ['Trigger', 'LLM Agent', 'Output']).slice(0, 3).map((node, i) => (
                      <span key={node} className="inline-flex items-center gap-1 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>{node}</span>
                        {i < 2 && <span className="text-slate-600 mr-0.5">←</span>}
                      </span>
                    ))}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                </div>

                {/* Title & Category */}
                <div className="space-y-1">
                  <span className="text-xs text-blue-400 font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Note disclaimer */}
                {project.note && (
                  <div className="p-2.5 rounded-lg bg-amber-500/[0.06] border border-amber-500/20 text-amber-300 text-[11px] leading-relaxed flex items-start gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{project.note}</span>
                  </div>
                )}
              </div>

              {/* Technologies & Actions */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-3">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 font-mono">
                  {project.technologies.map((tech, i) => (
                    <span key={tech} className="inline-flex items-center">
                      <span className="hover:text-slate-200">{tech}</span>
                      {i < project.technologies.length - 1 && (
                        <span className="mx-1 text-slate-600 select-none">·</span>
                      )}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  {/* Details Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>التفاصيل</span>
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Direct Action */}
                  {project.status === 'free' ? (
                    <button
                      onClick={() => handleDownloadWorkflow(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-[#141822] hover:bg-blue-600 border border-white/[0.08] hover:border-blue-500 rounded-lg transition-all"
                      title="تنزيل ملف الـWorkflow المباشر بصيغة JSON"
                    >
                      {downloadSuccessId === project.id ? (
                        <>
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">تم التنزيل</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>تنزيل Workflow</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <a
                      href={project.buyUrl || "#contact"}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-amber-600 hover:bg-amber-500 rounded-lg transition-all"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>شراء المشروع</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unified Project Details Modal with AnimatePresence */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
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
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="text-right">
                    <div className="flex items-center gap-2 justify-end">
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-md border ${
                        selectedProject.status === 'free' 
                          ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' 
                          : 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                      }`}>
                        {selectedProject.priceLabel || (selectedProject.status === 'free' ? 'مجاني' : 'مشروع مدفوع')}
                      </span>
                      <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                    </div>
                    <span className="text-xs text-blue-400 font-medium">{selectedProject.category}</span>
                  </div>
                </div>

                {/* Workflow Diagram Preview */}
                <div className="rounded-2xl bg-[#07090D] border border-white/[0.08] p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono pb-2 border-b border-white/[0.06]">
                    <span className="text-blue-400">مخطط سير العمل (Workflow Schema)</span>
                    <span>n8n Engine</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2 py-3 font-mono text-xs">
                    {(selectedProject.workflowNodes || ['Trigger', 'Logic', 'Integration', 'Response']).map((node, i, arr) => (
                      <div key={node} className="flex items-center gap-2">
                        <div className="bg-[#121622] text-slate-200 px-3 py-2 rounded-xl border border-blue-500/20 flex items-center gap-2 shadow-sm">
                          <FileCode2 className="w-3.5 h-3.5 text-blue-400" />
                          <span>{node}</span>
                        </div>
                        {i < arr.length - 1 && (
                          <span className="text-blue-400 font-bold">←</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Function & Problem Solved */}
                <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.problemSolved && (
                    <div className="space-y-1">
                      <h4 className="font-semibold text-white">المشكلة التي يعالجها:</h4>
                      <p className="text-slate-400">{selectedProject.problemSolved}</p>
                    </div>
                  )}

                  {selectedProject.functionSummary && (
                    <div className="space-y-1">
                      <h4 className="font-semibold text-white">ملخص وظيفة المشروع:</h4>
                      <p className="text-slate-300">{selectedProject.functionSummary}</p>
                    </div>
                  )}

                  {/* Steps */}
                  {selectedProject.steps && selectedProject.steps.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-white">خطوات عمل التدفق:</h4>
                      <div className="space-y-1.5">
                        {selectedProject.steps.map((step, sidx) => (
                          <div key={sidx} className="flex items-start gap-2.5 text-slate-300">
                            <span className="w-5 h-5 rounded-full bg-blue-600/20 text-blue-400 text-xs font-mono flex items-center justify-center shrink-0 mt-0.5">
                              {sidx + 1}
                            </span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Requirements */}
                  {selectedProject.requirements && selectedProject.requirements.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-white">متطلبات التشغيل:</h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-400">
                        {selectedProject.requirements.map((req, ridx) => (
                          <li key={ridx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* n8n Import Guide */}
                  {selectedProject.n8nImportGuide && (
                    <div className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-500/20 space-y-1">
                      <h4 className="font-semibold text-blue-300 flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>طريقة استيراد الـWorkflow إلى n8n:</span>
                      </h4>
                      <p className="text-slate-300 text-xs">{selectedProject.n8nImportGuide}</p>
                    </div>
                  )}

                  {selectedProject.note && (
                    <div className="p-3 rounded-xl bg-amber-500/[0.08] border border-amber-500/20 text-amber-300 text-xs">
                      {selectedProject.note}
                    </div>
                  )}
                </div>

                {/* Modal Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/[0.08]">
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] rounded-xl border border-white/10"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>معاينة في GitHub</span>
                  </a>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white"
                    >
                      إغلاق
                    </button>

                    {selectedProject.status === 'free' ? (
                      <button
                        onClick={() => handleDownloadWorkflow(selectedProject)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-600/25"
                      >
                        <Download className="w-4 h-4" />
                        <span>تنزيل الـWorkflow (JSON)</span>
                      </button>
                    ) : (
                      <a
                        href={selectedProject.buyUrl || "#contact"}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-xl shadow-md shadow-amber-600/25"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>شراء المشروع [رابط مؤقت]</span>
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
