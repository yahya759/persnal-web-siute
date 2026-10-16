import { 
  Bot, 
  Workflow, 
  MessageSquareCode, 
  Cpu, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

interface AboutServicesSectionProps {
  onOpenContact: () => void;
}

export function AboutServicesSection({ onOpenContact }: AboutServicesSectionProps) {
  const steps = [
    {
      title: "تحليل الاحتياج والاختناقات",
      desc: "دراسة العمليات الحالية وتحديد المهام اليدوية المتكررة التي تستهلك وقت فريقك.",
    },
    {
      title: "تصميم وبناء التدفق الذكي",
      desc: "ربط الأدوات وبناء وكلاء ذكاء اصطناعي مخصصين عبر n8n ونماذج الذكاء الاصطناعي المناسبة.",
    },
    {
      title: "الاختبار والتسليم المستقر",
      desc: "فحص الحالات الواقعية والتأكد من سرعة ودقة الاستجابة وربط النتائج بقواعد بياناتك.",
    },
  ];

  return (
    <div className="space-y-24 border-t border-white/[0.06] pt-20">
      
      {/* About Section ("عني") */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-right">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-blue-400">
              عن المهندس ورؤية العمل
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              أهندس الحلول التقنية لتبسيط العمليات المعقدة
            </h2>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                أنا مهندس ذكاء اصطناعي من غزة. أركز جهدي على تمكين الشركات الصغيرة ورواد الأعمال من استخدام أحدث تقنيات الوكلاء الأذكياء والأتمتة لتخفيف الأعباء التشغيلية وتقليل الخطوات اليدوية المرهقة.
              </p>
              <p>
                أؤمن بأن الحل الأفضل هو الحل الأكثر ملاءمة لاحتياجك الفعلي؛ لذلك لا أعتمد على قوالب جاهزة غير مدروسة، بل أربط أدواتك الحالية (مثل Telegram، Google Workspace، Supabase، وغيرها) لتنسجم في مسار عمل متناغم وسريع.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/20"
              >
                <span>ناقش مشروعك معي</span>
                <ArrowUpRight className="w-4 h-4 rotate-180" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0B0D13] border border-white/[0.08] rounded-3xl p-6 sm:p-8 space-y-5 text-right transition-colors duration-200 hover:border-blue-500/60">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              منهجية التنفيذ
            </h3>
            <div className="space-y-4">
              {steps.map((step, idx) => (
                <div key={step.title} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-slate-200">{step.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Services Section ("الخدمات") */}
      <section id="services" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-right mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-blue-400">
            مجالات التخصص
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            حلول أتمتة وذكاء اصطناعي مصممة خصيصًا لمشروعك
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            نساعدك على نقل الأنشطة اليومية من الإدخال اليدوي المكرر إلى أنظمة ذكية ذاتية العمل.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-[#0B0D13] border border-white/[0.08] p-6 sm:p-7 text-right space-y-4 transition-colors duration-200 hover:border-blue-500/60">
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
              <Bot className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              وكلاء الذكاء الاصطناعي
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              بناء مساعدين ذكيين يفهمون سياق المهام المعقدة، يتفاعلون مع المستندات، وينفذون إجراءات محددة بالاعتماد على أدواتك وقواعد بياناتك.
            </p>
            <div className="pt-2 text-xs text-slate-400 font-mono flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>فهم السياق واستدعاء الدوال</span>
            </div>
          </div>

          <div className="rounded-2xl bg-[#0B0D13] border border-white/[0.08] p-6 sm:p-7 text-right space-y-4 transition-colors duration-200 hover:border-blue-500/60">
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
              <Workflow className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              أتمتة وربط الأنظمة
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              ربط الخدمات والتطبيقات عبر n8n وAPIs لضمان تدفق البيانات بسلاسة وتفادي الإدخال اليدوي المتكرر بين البرامج المختلفة.
            </p>
            <div className="pt-2 text-xs text-slate-400 font-mono flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>مزامنة فورية وتنبيهات مخصصة</span>
            </div>
          </div>

          <div className="rounded-2xl bg-[#0B0D13] border border-white/[0.08] p-6 sm:p-7 text-right space-y-4 transition-colors duration-200 hover:border-blue-500/60">
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
              <MessageSquareCode className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              خدمة العملاء والعمليات
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              تطوير حلول حجز المواعيد الآلية، والردود الذكية على استفسارات العملاء، وتحليل المحادثات لاستخراج تقارير دورية ترفع جودة الخدمة.
            </p>
            <div className="pt-2 text-xs text-slate-400 font-mono flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>استجابة على مدار الساعة وتقارير تحليلية</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
