export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  note?: string;
  status: 'free' | 'paid';
  priceLabel?: string;
  buyUrl?: string;
  technologies: string[];
  workflowType?: string;
  repoUrl: string;
  downloadUrl: string;
  problemSolved?: string;
  functionSummary?: string;
  steps?: string[];
  requirements?: string[];
  n8nImportGuide?: string;
  workflowNodes?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'bot' | 'workflow' | 'customer' | 'analysis' | 'integration' | 'crm';
  tags?: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TechGroup {
  groupName: string;
  description: string;
  items: {
    name: string;
    description?: string;
  }[];
}

export interface GuideItem {
  id: string;
  title: string;
  contentType: 'دليل ميداني' | 'دليل تطبيقي' | 'أداة تقييم تفاعلية' | 'مقارنة معمارية';
  readTime?: string;
  shortDescription: string;
  fullContent?: {
    summary: string;
    sections: {
      heading: string;
      body: string;
      bulletPoints?: string[];
    }[];
    checklist?: {
      question: string;
      weight: number;
    }[];
  };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TechItem {
  name: string;
  role: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: 'bot' | 'network' | 'customer';
}

export const initialPortfolioConfig = {
  name: "يحيى موسى",
  initials: "YM",
  roleTitle: "مهندس ذكاء اصطناعي",
  roleSub: "AI Engineer",
  headline: "أبني حلول ذكاء اصطناعي تساعد الأعمال الصغيرة على إنجاز المزيد بوقت أقل",
  bio: "مهندس ذكاء اصطناعي من غزة. أبني وكلاء ذكيين وأربط الأدوات والأنظمة بما يناسب احتياج كل مشروع.",
  personalNote: "توقفت مشاريعي مع بداية الحرب في غزة عام 2023، وعدت إلى العمل مع الهدنة.",
  aboutMainText: "أساعد الشركات الصغيرة على تبسيط عملياتها، وتقليل الاختناقات، وتوفير الوقت من خلال حلول الذكاء الاصطناعي والأتمتة. توقفت مشاريعي مع بداية الحرب عام 2023، وعدت إلى العمل مع الهدنة.",
  aboutSupportingLine: "أهتم ببناء حلول عملية تناسب احتياج العمل، من الوكلاء الذكيين وربط الأنظمة إلى أتمتة المهام اليومية.",
  ctaHeadline: "عندك عملية تستهلك وقتك؟ احكيلي عنها ونشوف كيف ممكن نبسطها.",
  whatsappLink: "https://wa.me/972597741299?text=" + encodeURIComponent("مرحبًا يحيى، اطلعت على موقعك وأرغب في مناقشة عملية تستهلك وقتنا لنرى كيف يمكن تبسيطها وأتمتتها."),
  whatsappPlaceholder: "[رابط واتساب]",
  instagramLink: "https://www.instagram.com/yahya._.musa/",
  instagramPlaceholder: "[رابط إنستغرام]",
  githubWorkflowsUrl: "https://github.com/yahya759/n8n/tree/main/workflows",
  defaultPhotoUrl: "/بورتريه سينمائي لرجل واثق.png",
};

export const featureCardsData: FeatureCard[] = [
  {
    id: "agents",
    title: "وكلاء الذكاء الاصطناعي",
    description: "مساعدين ذكيين يفهمون المهام ويتعاملون مع الأدوات والبيانات.",
    iconName: "bot",
  },
  {
    id: "automation",
    title: "أتمتة وربط الأنظمة",
    description: "حلول تربط الخدمات وتقلل الخطوات اليدوية.",
    iconName: "network",
  },
  {
    id: "operations",
    title: "حلول لخدمة العملاء والعمليات",
    description: "مثل الحجز، الرد على العملاء، وتحليل محادثات الدعم.",
    iconName: "customer",
  },
];

export const techStackData: TechItem[] = [
  { name: "n8n", role: "أتمتة وبناء تدفقات العمل (Workflows)" },
  { name: "AI Agents", role: "وكلاء مستقلين لتنفيذ المهام المعقدة" },
  { name: "APIs", role: "ربط الخدمات والأنظمة السحابية" },
  { name: "MCP", role: "Model Context Protocol للأدوات" },
  { name: "Supabase", role: "قواعد البيانات والتخزين المدار" },
  { name: "Groq", role: "استدلال ذكاء اصطناعي فائق السرعة" },
];

export const servicesData: ServiceItem[] = [
  {
    id: "ai-agent",
    title: "وكيل ذكي يشتغل عنك",
    description: "وكيل بيرد على عملائك، وبيستقبل الطلبات والحجوزات على واتساب وتيليجرام، بدون ما تكون قدام الموبايل.",
    iconName: "bot",
    tags: ["واتساب", "تيليجرام", "حجوزات"],
  },
  {
    id: "process-automation",
    title: "أتمتة الشغل المتكرر",
    description: "الطلبات والفواتير والجداول والتقارير بتمشي لحالها، بدل ما تعملها بإيدك كل يوم.",
    iconName: "workflow",
    tags: ["n8n", "Google Sheets", "تقارير تلقائية"],
  },
  {
    id: "custom-crm",
    title: "CRM على مقاسك",
    description: "عملاؤك وطلباتك ومتابعاتك بمكان واحد، بدل الدفاتر والرسائل المبعثرة.",
    iconName: "crm",
    tags: ["لوحة تحكم", "متابعة العملاء", "Supabase"],
  },
  {
    id: "tools-integration",
    title: "ربط كل أدواتك بوكيل واحد",
    description: "واتساب والجداول والتقويم والإيميل بتتوصل ببعض، والوكيل بينفذ عنك.",
    iconName: "integration",
    tags: ["MCP", "APIs", "Webhooks"],
  },
];

export const processStepsData: ProcessStep[] = [
  {
    number: "01",
    title: "فهم احتياج العمل والمهام التي تستهلك الوقت",
    description: "جلسة استماع وتدقيق للمهام اليدوية المتكررة ونقاط الاختناق التي تبطئ إنجاز العمل اليومي.",
  },
  {
    number: "02",
    title: "تحديد فرص استخدام الذكاء الاصطناعي أو الأتمتة",
    description: "اختيار النموذج الأنسب: هل نحتاج تدفق أتمتة مباشر أم وكيلاً ذكيًا يفهم السياق ويتخذ القرارات؟",
  },
  {
    number: "03",
    title: "بناء الحل وربط الأدوات المناسبة",
    description: "تصميم الـWorkflow على n8n وربط واجهات البرمجة وقواعد البيانات ونماذج الاستدلال السريعة.",
  },
  {
    number: "04",
    title: "شرح طريقة الاستخدام والتشغيل",
    description: "تسليم ملف التدفق وشرح خطوات استيراده وتشغيله في بيئة عملك مع دليل الإعدادات والمدخلات.",
  },
];

export const techGroupsData: TechGroup[] = [
  {
    groupName: "بناء الحلول",
    description: "منصات الأتمتة وبروتوكولات الربط المتقدمة",
    items: [
      { name: "n8n", description: "منصة الأتمتة وسير العمل مفتوحة المصدر" },
      { name: "AI Agents", description: "وكلاء ذكاء اصطناعي للمهام متعددة الخطوات" },
      { name: "APIs", description: "ربط واجهات برمجة التطبيقات السحابية" },
      { name: "MCP", description: "Model Context Protocol لربط النماذج بالأدوات" },
    ],
  },
  {
    groupName: "النماذج والخدمات",
    description: "محركات الذكاء الاصطناعي والاستدلال فائق السرعة",
    items: [
      { name: "Groq", description: "استدلال LPU فائق السرعة بزمن استجابة منخفض" },
      { name: "Fireworks AI", description: "تشغيل نماذج مفتوحة المصدر بسرعة وتكلفة منخفضة" },
      { name: "Jina.ai", description: "قراءة صفحات الويب واستخراج المحتوى للبحث الدلالي" },
    ],
  },
  {
    groupName: "البيانات والتكامل",
    description: "قواعد البيانات وقنوات التواصل وتطبيقات الإنتاجية",
    items: [
      { name: "Supabase", description: "قاعدة بيانات PostgreSQL وسجلات مدارة" },
      { name: "Google Sheets", description: "مزامنة الجداول واستخراج البيانات" },
      { name: "Google Calendar", description: "جدولة المواعيد وحجز الجلسات تلقائيًا" },
      { name: "Telegram", description: "قناة استقبال وتفاعل مباشر مع المستخدمين" },
      { name: "WhatsApp", description: "أتمتة المحادثات والحجوزات عبر واتساب" },
    ],
  },
  {
    groupName: "مفاهيم الذكاء الاصطناعي",
    description: "المعمارية البرمجية والهندسة التوليدية الحديثة",
    items: [
      { name: "RAG", description: "استرجاع المعلومات والبحث الدلالي المعزز" },
      { name: "ReAct", description: "التفكير التفاعلي واتخاذ الإجراءات بالتسلسل" },
      { name: "السياق (Context)", description: "إدارة الذاكرة والنافذة السياقية" },
      { name: "استخدام الأدوات (Tool Calling)", description: "تمكين النماذج من تشغيل دوال برمجية" },
    ],
  },
  {
    groupName: "التطوير والواجهات",
    description: "بناء تطبيقات ويب كاملة من الواجهة إلى الخادم",
    items: [
      { name: "React", description: "بناء واجهات تفاعلية حديثة" },
      { name: "TypeScript", description: "كود آمن وقابل للصيانة" },
      { name: "Vite", description: "بيئة تطوير وبناء سريعة" },
      { name: "Next.js", description: "تطبيقات ويب كاملة مع رندر من جهة الخادم" },
    ],
  },
  {
    groupName: "الاستضافة والنشر",
    description: "منصات نشر سريعة وموثوقة للمشاريع",
    items: [
      { name: "Vercel", description: "نشر تلقائي للواجهات والتطبيقات" },
      { name: "Cloudflare", description: "استضافة وشبكة توصيل وحماية" },
      { name: "Netlify", description: "نشر المواقع والدوال الخلفية" },
      { name: "Render", description: "استضافة الخوادم والخدمات الخلفية" },
    ],
  },
  {
    groupName: "أدوات الإنتاج",
    description: "أدوات مساعدة للمحتوى والتحليل والوسائط",
    items: [
      { name: "FFmpeg", description: "معالجة الفيديو واستخراج الإطارات" },
      { name: "Windsor.ai", description: "تجميع وتحليل بيانات التسويق والسوشيال" },
      { name: "Higgsfield", description: "توليد صور وفيديو بالذكاء الاصطناعي" },
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "restaurant-booking",
    title: "Restaurant Booking",
    category: "خدمة العملاء والحجوزات",
    description: "مساعد حجز عبر Telegram يجمع تفاصيل الطلب ويتصل بـGoogle Calendar.",
    status: "free",
    priceLabel: "مجاني",
    technologies: ["n8n", "Telegram API", "Google Calendar", "AI Agent"],
    repoUrl: "https://github.com/yahya759/n8n/tree/main/workflows",
    downloadUrl: "https://raw.githubusercontent.com/yahya759/n8n/main/workflows/restaurant-booking.json",
    problemSolved: "فقدان طلبات الحجز أثناء أوقات الذروة وتأخر التأكيد اليدوي للمواعيد.",
    functionSummary: "يتلقى المساعد رسائل العملاء عبر Telegram، يفهم التاريخ والوقت وعدد الأفراد، يتأكد من توافر الأوقات عبر Google Calendar، ويسجل الحجز فورًا مع إرسال تأكيد للمستخدم.",
    steps: [
      "استقبال رسالة العميل عبر Telegram Webhook",
      "تحليل تفاصيل الحجز بواسطة وكيل الذكاء الاصطناعي",
      "الاستعلام عن الأوقات المتاحة في تقويم Google",
      "حجز الموعد وإرسال رسالة التأكيد المباشرة للعميل",
    ],
    requirements: [
      "حساب Telegram Bot عبر BotFather",
      "حساب Google Cloud مفعّل به Calendar API",
      "خادم n8n (محلي أو سحابي)",
    ],
    n8nImportGuide: "في واجهة n8n، انقر على زر (Import from File / URL)، الصق ملف الـJSON، ثم اربط مفاتيح Telegram وGoogle Calendar في عقد الاعتماد (Credentials).",
    workflowNodes: ["Telegram Trigger", "AI Agent", "Google Calendar Node", "Response Formatter"],
  },
  {
    id: "community-voice",
    title: "صوت المجتمع — تصنيف الشكاوى",
    category: "تحليل المحادثات والطلبات",
    description: "يستقبل الشكوى، يصنفها بالذكاء الاصطناعي، ويحفظها في Supabase.",
    status: "free",
    priceLabel: "مجاني",
    technologies: ["n8n", "Supabase", "Text Classification", "Webhooks"],
    repoUrl: "https://github.com/yahya759/n8n/tree/main/workflows",
    downloadUrl: "https://raw.githubusercontent.com/yahya759/n8n/main/workflows/community-complaints.json",
    problemSolved: "تراكم الشكاوى والمقترحات الورقية أو العشوائية وصعوبة فرزها وتوجيهها للمسؤول المختص.",
    functionSummary: "يستقبل الشكاوى فور ورودها من النموذج أو الرسائل، يحلل نص الشكوى ويحدد أولويتها وتصنيفها وقسمها المعني، ثم يخزن السجل المنظم في جدول Supabase لتسهيل المتابعة.",
    steps: [
      "استلام نص الشكوى عبر Webhook أو نموذج",
      "تحليل وتصنيف المحتوى وتحديد درجة الإلحاح بالذكاء الاصطناعي",
      "إنشاء سجل مهيكل في قاعدة بيانات Supabase",
      "إشعار المشرفين تلقائيًا بحالة الشكوى الجديدة",
    ],
    requirements: [
      "مشروع Supabase مع مفتاح API وعنوان URL",
      "نموذج استدلال للذكاء الاصطناعي (مثل Groq)",
      "تثبيت n8n",
    ],
    n8nImportGuide: "استورد الـWorkflow، حدد رابط مشروع Supabase وأنشئ جدول الشكاوى باستخدام الـSQL المرفق، ثم فعّل الـWebhook.",
    workflowNodes: ["Webhook Trigger", "LLM Classifier", "Supabase Insert Node", "Notification Router"],
  },
  {
    id: "support-weekly-analytics",
    title: "تحليل أسبوعي لمحادثات الدعم",
    category: "تحليل المحادثات والطلبات",
    description: "يحلل محادثات الدعم، يحفظ النتائج، وينشئ ملخصًا أسبوعيًا.",
    status: "free",
    priceLabel: "مجاني",
    technologies: ["n8n", "LLM Analysis", "Data Aggregation", "Telegram Alerts"],
    repoUrl: "https://github.com/yahya759/n8n/tree/main/workflows",
    downloadUrl: "https://raw.githubusercontent.com/yahya759/n8n/main/workflows/weekly-support-analytics.json",
    problemSolved: "صعوبة استخلاص التغذية الراجعة من مئات محادثات خدمة العملاء الأسبوعية دون قراءتها يدويًا.",
    functionSummary: "يعمل التدفق أسبوعيًا وبشكل مجدول لجلب كافة رسائل الدعم المنتهية، يحلل أبرز الاستفسارات والمشاكل المتكررة ومستوى الرضا، ثم يرسل ملخصًا تنفيذيًا لمدير العمليات.",
    steps: [
      "تشغيل التدفق دوريًا عبر Schedule Trigger أسبوعي",
      "جلب محادثات الدعم المكتملة وتجميعها",
      "معالجة واستخلاص الأنماط ونقاط الاحتكاك عبر النموذج",
      "إرسال تقرير تنفيذي موجز عبر Telegram أو البريد",
    ],
    requirements: [
      "مصدر بيانات محادثات الدعم (Database أو CRM)",
      "قناة إشعار Telegram أو بريد إلكتروني",
    ],
    n8nImportGuide: "استورد الـWorkflow، عدّل إعدادات الـSchedule إلى الوقت المفضل (مثلاً صباح كل أحد)، واربط الاعتمادات لقناة الإشعار.",
    workflowNodes: ["Cron Trigger", "Fetch Messages", "Analytics LLM", "Executive Reporter"],
  },
  {
    id: "email-classifier",
    title: "تصنيف البريد الإلكتروني",
    category: "أتمتة العمليات",
    description: "يصنف رسائل Gmail بالذكاء الاصطناعي، ويحفظ النتائج ويرسل ملخصًا عبر Telegram.",
    status: "free",
    priceLabel: "مجاني",
    technologies: ["n8n", "Gmail API", "Telegram Bot", "LLM Processing"],
    repoUrl: "https://github.com/yahya759/n8n/tree/main/workflows",
    downloadUrl: "https://raw.githubusercontent.com/yahya759/n8n/main/workflows/gmail-classifier.json",
    problemSolved: "تكدس صندوق البريد الوارد وفوات الرسائل ذات الأولوية العالية بين الرسائل الإعلانية والروتينية.",
    functionSummary: "يراقب وصول الرسائل الجديدة إلى Gmail، يحدد صنفها (عرض سعر، فواتير، استفسار مهم، ترويجي)، يطبق التسميات تلقائيًا في Gmail، ويبعث إشعارًا فوريًا بالرسائل الحرجة عبر Telegram.",
    steps: [
      "الاستماع لرسائل البريد الوارد الجديدة في Gmail",
      "قراءة المحتوى واستخلاص الغرض والأهمية بواسطة الذكاء الاصطناعي",
      "تطبيق التسميات (Labels) المناسبة في بريدك",
      "توليد ملخص وإرساله فورًا إلى هاتفك عبر Telegram",
    ],
    requirements: [
      "صلاحية Gmail OAuth2 في n8n",
      "مفتاح بوت Telegram",
    ],
    n8nImportGuide: "حمّل ملف الـJSON، استورده في n8n، اربط حساب Google عبر OAuth2 المدمج في n8n، ثم شغّل الـWorkflow.",
    workflowNodes: ["Gmail Trigger", "Prompt Classifier", "Gmail Label Update", "Telegram Alert"],
  },
  {
    id: "smart-assistant",
    title: "مساعدك الذكي",
    category: "حلول الذكاء الاصطناعي والوكلاء",
    description: "مساعد Telegram متصل بأدوات Gmail وGoogle Calendar وSupabase.",
    status: "free",
    priceLabel: "مجاني",
    technologies: ["n8n", "AI Agent (ReAct)", "Telegram Bot", "Tool Calling"],
    repoUrl: "https://github.com/yahya759/n8n/tree/main/workflows",
    downloadUrl: "https://raw.githubusercontent.com/yahya759/n8n/main/workflows/smart-assistant.json",
    problemSolved: "تشتت المهام الشخصية والمهنية بين عدة تطبيقات منفصلة وحاجة المستخدم لمنسق رقمي موحد.",
    functionSummary: "وكيل ذكاء اصطناعي تفاعلي على Telegram تستطيع التحدث معه بلغتك الطبيعية، ليقوم بالبحث في رسائلك، أو جدولة مواعيدك، أو استرجاع بياناتك المخزنة في Supabase وتنفيذها فورًا.",
    steps: [
      "استقبال الأمر الصوتي أو النصي عبر Telegram",
      "تفكير الوكيل الذكي (Reasoning) لتحديد الأدوات اللازمة",
      "استدعاء دوال Gmail أو Calendar أو Supabase آليًا",
      "إرجاع النتيجة للمستخدم بلغة عربية سلسلة وطبيعية",
    ],
    requirements: [
      "خادم n8n مع دعم AI Agent Node",
      "اعتمادات Google Workspace وSupabase",
      "Telegram Bot API Token",
    ],
    n8nImportGuide: "استورد التدفق إلى n8n 1.0+، أضف الأدوات المربوطة بعقد الـAgent، ثم اختبر المساعد مباشرة من هاتفك.",
    workflowNodes: ["Telegram Webhook", "LangChain ReAct Agent", "Calendar Tool", "Gmail Tool", "Supabase Tool"],
  },
  {
    id: "project-idea-validator",
    title: "مشروع فكرة",
    category: "حلول الذكاء الاصطناعي والوكلاء",
    description: "يحلل فكرة مشروع، ويبحث عن المنافسين، ويقترح ميزات، ثم يجهز تقريرًا.",
    status: "free",
    priceLabel: "مجاني",
    technologies: ["n8n", "Web Search API", "LLM Synthesis", "Markdown/PDF Export"],
    repoUrl: "https://github.com/yahya759/n8n/tree/main/workflows",
    downloadUrl: "https://raw.githubusercontent.com/yahya759/n8n/main/workflows/idea-validator.json",
    problemSolved: "قضاء أيام في البحث اليدوي الأولي عن أفكار المشاريع ودراسة المنافسين دون هيكل واضح.",
    functionSummary: "يستقبل الفكرة الأولية، يقوم بالبحث الآلي عن الحلول المشابهة في السوق، يحلل نقاط القوة والضعف، يقترح ميزات تنافسية فارقة، ويصيغ تقرير دراسة جدوى مبدئي منظم.",
    steps: [
      "استقبال وصف الفكرة والجمهور المستهدف",
      "البحث الشبكي الآلي واستخراج بيانات المنافسين",
      "توليد المقارنة التحليلية واقتراح الميزات التنافسية",
      "تجهيز تقرير متكامل قابل للمشاركة والتنزيل",
    ],
    requirements: [
      "مفتاح محرك بحث (Search API أو Serper)",
      "مفتاح نموذج ذكاء اصطناعي عالي القدرة التحليلية",
    ],
    n8nImportGuide: "قم باستيراد الـWorkflow، أضف مفتاح البحث ومفتاح نموذج LLM، ثم أرسل فكرتك عبر الـForm المدمج.",
    workflowNodes: ["Form Trigger", "Search Engine Tool", "Market Analyst Agent", "Report Generator"],
  },
  {
    id: "linkedin-daily-publisher",
    title: "نشر محتوى LinkedIn يوميًا",
    category: "أتمتة العمليات",
    description: "يبحث عن محتوى مناسب وينشره تلقائيًا على LinkedIn.",
    status: "free",
    priceLabel: "مجاني",
    technologies: ["n8n", "LinkedIn API", "RSS/News Feed", "AI Content Writer"],
    repoUrl: "https://github.com/yahya759/n8n/tree/main/workflows",
    downloadUrl: "https://raw.githubusercontent.com/yahya759/n8n/main/workflows/linkedin-daily-publisher.json",
    problemSolved: "انقطاع التواجد المهني على LinkedIn بسبب الانشغال اليومي وصعوبة كتابة المنشورات بانتظام.",
    functionSummary: "يبحث في خلاصات الأخبار والمصادر المختارة عن موضوعات تقنية قيّمة، يصيغ منشورًا مهنيًا جذابًا باللغة المناسبة مع وسوم مدروسة، وينشره أو يجدوله على حسابك الشخصي.",
    steps: [
      "جلب أحدث التدوينات والأخبار من مصادرك المفضلة",
      "صياغة مسودة المنشور الاحترافي بواسطة الذكاء الاصطناعي",
      "التأكد من التنسيق والوسوم وملاءمة المعايير",
      "النشر المباشر عبر LinkedIn API في الأوقات المحددة",
    ],
    requirements: [
      "تطبيق LinkedIn مطور ومصرّح للنشر (LinkedIn OAuth2)",
      "تغذية RSS أو مواضيع اهتمام محددة",
    ],
    n8nImportGuide: "استورد الـWorkflow، اربط حسابك على LinkedIn في n8n، وحدد مواعيد النشر اليومية في عقد الـSchedule.",
    workflowNodes: ["Daily Timer", "RSS Ingestion", "Copywriter LLM", "LinkedIn Post Node"],
  },
  {
    id: "arabic-children-stories",
    title: "قصص عربية للأطفال على Telegram",
    category: "حلول الذكاء الاصطناعي والوكلاء",
    description: "سير عمل لإنشاء قصص عربية للأطفال وإرسالها عبر Telegram.",
    status: "free",
    priceLabel: "مجاني",
    technologies: ["n8n", "Creative AI", "Telegram Bot", "Prompt Engineering"],
    repoUrl: "https://github.com/yahya759/n8n/tree/main/workflows",
    downloadUrl: "https://raw.githubusercontent.com/yahya759/n8n/main/workflows/arabic-kids-stories.json",
    problemSolved: "قلة المحتوى القصصي العربي الهادف للأطفال والمتاح بأسلوب تفاعلي سهل الوصول للأهل.",
    functionSummary: "سير عمل مبتكر يتيح اختيار الفئة العمرية والقيمة التربوية المرادة، ليقوم بتأليف قصة عربية مشوقة ومضبوطة لغويًا ومقسمة إلى مشاهد، ثم يرسلها للأهل أو لقناة Telegram بانتظام.",
    steps: [
      "استقبال موضوع القصة والقيمة التربوية المنشودة",
      "تأليف القصة بلغة عربية فصيحة ومناسبة لعمر الطفل",
      "تقسيم القصة وتنسيقها مع رموز تعبيرية محببة",
      "إرسال القصة إلى قناة أو محادثة Telegram",
    ],
    requirements: [
      "بوت Telegram مخصص للقصص",
      "مفتاح نموذج ذكاء اصطناعي داعم للعربية بجودة عالية",
    ],
    n8nImportGuide: "استورد التدفق، اضبط الفئة العمرية الافتراضية، واربط رمز الـTelegram Bot، ثم شغّل الإرسال التجريبي.",
    workflowNodes: ["Telegram Command Trigger", "Storyteller Engine", "Text Formatter", "Telegram Send Message"],
  },
  {
    id: "geo-visibility-bot",
    title: "GEO Visibility Bot",
    category: "ربط الأدوات والأنظمة",
    description: "يحلل محتوى موقع ويب ويرسل تقريرًا. اذكر بوضوح أن مقارنة ChatGPT وPerplexity وGemini في النسخة الحالية محاكاة وليست قياسًا مباشرًا.",
    note: "توضيح شفاف وإخلاء مسؤولية: مقارنة ChatGPT وPerplexity وGemini في النسخة الحالية محاكاة وليست قياسًا مباشرًا.",
    status: "free",
    priceLabel: "مجاني",
    technologies: ["n8n", "Web Scraping", "Multi-Model Simulation", "Reporting"],
    repoUrl: "https://github.com/yahya759/n8n/tree/main/workflows",
    downloadUrl: "https://raw.githubusercontent.com/yahya759/n8n/main/workflows/geo-visibility-bot.json",
    problemSolved: "غياب أدوات قياس واضحة لمدى ظهور العلامات التجارية في إجابات محركات البحث التوليدي الحديثة.",
    functionSummary: "يقوم التدفق بزيارة موقع الويب واستخراج نصوصه وهيكليته، ثم يُجري محاكاة افتراضية لطريقة قراءة نماذج الذكاء الاصطناعي للمحتوى ومدى وضوح خدمات الشركة للإجابة عن أسئلة الباحثين.",
    steps: [
      "استقبال رابط الموقع وفحص صفحاته الرئيسية",
      "تنظيف المحتوى واستخراج الكلمات المفتاحية والكيانات",
      "محاكاة استجابة النماذج (ChatGPT / Perplexity / Gemini) وفق قواعد معدة مسبقًا",
      "توليد تقرير إرشادي يوضح فرص التحسين",
    ],
    requirements: [
      "خادم n8n مع إمكانية الوصول إلى شبكة الإنترنت لتصفح الروابط",
      "مفتاح نموذج لتحليل النصوص",
    ],
    n8nImportGuide: "استورد الـWorkflow، ضع رابط الموقع المراد اختباره، وسيقوم التدفق بإرسال تقرير التحليل المحاكى مباشرة.",
    workflowNodes: ["HTTP Web Fetcher", "HTML Parser", "GEO Simulator Agent", "Report Generator"],
  },
];

export const guidesData: GuideItem[] = [
  {
    id: "practical-field-guide-2026",
    title: "Practical Field Guide 2026",
    contentType: "دليل ميداني",
    readTime: "7 دقائق قراءة",
    shortDescription: "تحويل مهمة متكررة إلى وكيل عملي للشركات خطوة بخطوة.",
    fullContent: {
      summary: "دليل تطبيقي شامل للمؤسسين والمديرين لتحويل العمليات اليدوية المجهدة إلى وكلاء أذكياء يعملون باستقلالية ودقة.",
      sections: [
        {
          heading: "1. معيار اختيار المهمة المناسبة للتحويل",
          body: "ليست كل مهمة بحاجة لوكيل ذكاء اصطناعي. الوكيل يلمع في المهام التي تتطلب فهمًا مرنًا للنصوص وتستدعي اتخاذ قرارات متفرعة بين عدة أدوات.",
          bulletPoints: [
            "المهمة تتكرر يوميًا وتأخذ أكثر من 45 دقيقة من وقت الفريق.",
            "المدخلات غير مهيكلة (رسائل واتساب، بريد إلكتروني، استفسارات غير محددة).",
            "هناك قواعد عمل واضحة يمكن للوكيل الاستناد إليها عند اتخاذ القرار.",
          ],
        },
        {
          heading: "2. تفكيك المهمة إلى أدوات (Tools) وقواعد (Rules)",
          body: "بدلاً من إعطاء الوكيل تعليمات عامة مبهمة، قسّم المهمة إلى: أداة قراءة (مثل قراءة بريد)، أداة قرار (تصنيف الحالة)، وأداة تنفيذ (كتابة رد أو تحديث جدول).",
        },
        {
          heading: "3. اختبار الحالات الشاذة (Edge Cases)",
          body: "تأكد من وجود مسار رجوع بشري (Human-in-the-loop) عند مواجهة مهمة غير واضحة أو ذات حساسية عالية.",
        },
      ],
    },
  },
  {
    id: "how-to-build-ai-agent",
    title: "كيف تبني AI Agent مناسبًا لشغلك",
    contentType: "دليل تطبيقي",
    readTime: "5 دقائق قراءة",
    shortDescription: "دليل لاختيار البنية المعمارية والأدوات المناسبة لنطاق عملك.",
    fullContent: {
      summary: "خارطة طريق واضحة لاختيار الأدوات ومحركات الاستدلال لشركتك دون تعقيدات أو تكاليف غير مبررة.",
      sections: [
        {
          heading: "الفرق بين السير التقليدي والوكيل المستقل",
          body: "الأتمتة التقليدية مثل (IF This THEN That) تنفذ أوامر صلبة. الوكيل الذكي (AI Agent) يستطيع التفكير وإعادة المحاولة واختيار الأداة المناسبة وفق معطيات اللحظة.",
        },
        {
          heading: "متى تستخدم n8n ومتى تحتاج برمجة خاصة؟",
          body: "n8n يوفر 90% من سرعة الإطلاق للأعمال الصغيرة والمتوسطة، حيث يجمع بين واجهات السحب والإفلات وقوة كتابة دوال JavaScript المخصصة والاتصال بالـAPIs.",
        },
        {
          heading: "حماية البيانات وخصوصية العملاء",
          body: "احرص على عدم تمرير بيانات العملاء الحساسة بدون تشفير، واستخدم نماذج ذات سياسات صارمة بعدم تدريب النماذج على بياناتك التشغيلية.",
        },
      ],
    },
  },
  {
    id: "readiness-evaluation-tool",
    title: "هل الوكيل جاهز للتجربة؟ أداة لتقييم الجاهزية",
    contentType: "أداة تقييم تفاعلية",
    readTime: "أداة فحص تفاعلية",
    shortDescription: "أداة لتقييم الجاهزية والتحقق من اكتمال متطلبات إطلاق الوكيل.",
    fullContent: {
      summary: "قائمة فحص عملية (Checklist) تساعدك على التأكد من جاهزية وكيلك الذكي قبل تسليمه للعمل الفعلي مع العملاء.",
      sections: [
        {
          heading: "معايير الجاهزية التشغيلية",
          body: "أجب عن الأسئلة التالية لمعرفة نسبة اكتمال وكيلك وجاهزيته للإطلاق الميداني الآمن.",
        },
      ],
      checklist: [
        { question: "هل تم تحديد حدود وصلاحيات الوكيل بوضوح داخل الـPrompt الرئيسي؟", weight: 20 },
        { question: "هل تم اختبار تعامل الوكيل مع رسائل غامضة أو خارج التخصص؟", weight: 20 },
        { question: "هل توجد آلية إشعار بشري في حال فشل أي أداة أو واجهة برمجية؟", weight: 20 },
        { question: "هل تم فحص تكلفة الاستدلال (Tokens) وسرعة الاستجابة تحت الضغط؟", weight: 20 },
        { question: "هل تم توثيق خطوات استيراد الـWorkflow ومتطلبات اعتماداته؟", weight: 20 },
      ],
    },
  },
  {
    id: "traditional-vs-ai-agent",
    title: "الفرق بين الأتمتة التقليدية والوكيل الذكي",
    contentType: "مقارنة معمارية",
    readTime: "4 دقائق قراءة",
    shortDescription: "مقارنة عملية توضح متى تحتاج أتمتة بسيطة ومتى يكون الوكيل الذكي ضرورة.",
    fullContent: {
      summary: "مقارنة مباشرة تمنع هدر الميزانيات على تقنيات لا يحتاجها مشروعك، وتوضح الخيار الأمثل لكل نوع من العمليات.",
      sections: [
        {
          heading: "الأتمتة التقليدية (Deterministic Workflows)",
          body: "مثالية للمهام الثابتة تمامًا: نقل صف من Google Sheet إلى Supabase، إرسال بريد عند إتمام دفع، نسخ ملف يوميًا. ميزتها السرعة الفائقة والتكلفة الصفرية والاستقرار المطلق.",
        },
        {
          heading: "الوكلاء الأذكياء (Autonomous Agents)",
          body: "ضرورية عندما تكون المدخلات غير متوقعة: عميل يسأل بلهجة عامية عن منتج بديل، استخراج بيانات من فاتورة مصورة غير قياسية، أو صياغة رد مخصص يراعي مشاعر العميل الغاضب.",
        },
        {
          heading: "النهج الهجين (Hybrid Approach)",
          body: "هو النهج الذي أبنيه لغالبية العملاء: استخدام الأتمتة التقليدية في المسار الأساسي لخفض التكلفة وضمان السرعة، وتفعيل وكيل الذكاء الاصطناعي فقط في النقاط التي تتطلب فهمًا وقرارًا ذكيًا.",
        },
      ],
    },
  },
];

export const faqsData: FaqItem[] = [
  {
    id: "download-free",
    question: "كيف أنزّل مشروعًا مجانيًا؟",
    answer: "في قسم «مشاريع مختارة»، اضغط على زر «التفاصيل» الخاص بالمشروع الذي تريده، وستجد زر «تنزيل الـWorkflow» المباشر بصيغة JSON، بالإضافة إلى رابط المستودع على GitHub لمعاينة الكود.",
  },
  {
    id: "run-requirements",
    question: "ما الذي أحتاجه لتشغيل Workflow؟",
    answer: "تحتاج إلى نسخة من n8n (يمكن تثبيتها مجانًا على حاسوبك عبر Docker أو استضافتها سحابيًا)، بالإضافة إلى مفاتيح واجهات البرمجة (API Keys) الخاصة بالخدمات التي يتصل بها التدفق (مثل Telegram Bot Token أو Supabase).",
  },
  {
    id: "customization",
    question: "هل يمكن تخصيص الحل لاحتياج عملي؟",
    answer: "نعم، كافة التدفقات مصممة لتكون قابلة للتعديل والتوسعة بالكامل. يمكنك تعديل حقول البيانات، ربط بريدك أو أدواتك الخاصة، أو تغيير المنطق ليناسب طبيعة سير العمل في شركتك.",
  },
  {
    id: "request-project",
    question: "كيف أطلب مشروعًا أو خدمة؟",
    answer: "يمكنك التواصل معي مباشرة عبر زر «تواصل لمشروعك» أو رابط واتساب وإنستغرام المتاحين في الصفحة، لنناقش طبيعة المهمة اليدوية التي تستهلك وقت فريقك ونحدد الحل والتدفق الأنسب لها.",
  },
];
