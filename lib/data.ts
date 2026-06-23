export const siteConfig = {
  name: "وليد رفعت",
  title: "وليد رفعت | مطور ويب وحلول رقمية",
  description:
    "أصنع تجارب رقمية جميلة وتفاعلية لا تُنسى مع تركيز قوي على الأداء وتجربة المستخدم.",
  email: "wlydrftm399@gmail.com",
  whatsapp: "https://wa.me/201156484296",
  social: {
    github: "https://github.com/12wale",
    linkedin: "https://www.linkedin.com/in/waleed-refaat-4b4164203",
    facebook: "https://www.facebook.com/profile.php?id=61591079451266",
  },
};

export const typewriterPhrases = [
  "Web Developer",
  "React Enthusiast",
  "I Build Modern Experiences",
  "Turning Ideas Into Digital Products",
];

export const stats = [
  { value: 20, suffix: "+", label: "مشروع" },
  { value: 2, suffix: "+", label: "سنوات خبرة" },
  { value: 100, suffix: "%", label: "شغف" },
  { value: 50, suffix: "+", label: "عميل سعيد" },
];

export const skills = [
  { name: "HTML", icon: "html", percent: 95 },
  { name: "CSS", icon: "css", percent: 92 },
  { name: "JavaScript", icon: "javascript", percent: 90 },
  { name: "TypeScript", icon: "typescript", percent: 88 },
  { name: "React", icon: "react", percent: 92 },
  { name: "Tailwind CSS", icon: "tailwind", percent: 90 },
  { name: "GSAP", icon: "gsap", percent: 85 },
  { name: "Framer Motion", icon: "framer", percent: 87 },
  { name: "Node.js", icon: "nodejs", percent: 80 },
  { name: "Firebase", icon: "firebase", percent: 78 },
  { name: "Git", icon: "git", percent: 88 },
  { name: "GitHub", icon: "github", percent: 90 },
  { name: "Responsive Design", icon: "responsive", percent: 94 },
  { name: "UI/UX", icon: "uiux", percent: 86 },
];

export const services = [
  {
    title: "تطوير مواقع حديثة",
    titleEn: "Modern Website Development",
    description: "بناء مواقع سريعة ومتجاوبة بأحدث التقنيات.",
    details: [
      "تطوير بمحسوسات React & Next.js",
      "تصميم متجاوب 100% مع جميع الأجهزة",
      "لوحات تحكم قابلة للتخصيص",
      "التكامل مع APIs وقواعد البيانات",
    ],
    icon: "code",
  },
  {
    title: "تصميم واجهات",
    titleEn: "UI/UX Design",
    description: "إنشاء واجهات جميلة وجذابة تحكي قصتك.",
    details: [
      "تصميم واجهات مستوحى من أحدث الاتجاهات",
      "تجربة مستخدم مريحة وبديهية",
      "أنظمة تصميم قابلة للتوسع",
      "نماذج أولية وقوالب جاهزة",
    ],
    icon: "palette",
  },
  {
    title: "تحسين الأداء",
    titleEn: "Performance Optimization",
    description: "تحسين السرعة وتجربة المستخدم لأقصى حد.",
    details: [
      "رفع سرعة تحميل الموقع",
      "تحسين SEO والفهرسة",
      "تحسين صور وأصول الموقع",
      "اختبارات أداء دورية",
    ],
    icon: "zap",
  },
];

const SHOT = (url: string) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=630`;

export const projects = [
  {
    id: "sun-and-soil",
    name: "Sun and Soil",
    title: "منصة Sun and Soil",
    url: "https://sunandsoilegypt.com",
    previewUrl: SHOT("https://sunandsoilegypt.com"),
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    description: "مشروع مستقل — منصة MERN كاملة لشركة مصرية لتصدير الأعشاب تضم موقع عميل متجاوب مع قائمة المنتجات وملف تعريفي للشركة وخدمات التصدير.",
    featuresTitle: "الميزات الرئيسية",
    features: [
      "لوحة تحكم إدارية كاملة لإدارة المحتوى والمنتجات والطلبات",
      "مصادقة آمنة مع تحكم وصول بناءً على الأدوار",
      "موقع متجاه للعميل متجاوب 100%",
    ],
    liveUrl: "https://sunandsoilegypt.com",
    codeUrl: null,
    colSpan: "",
  },
  {
    id: "sustaingrc",
    name: "SustainGRC",
    title: "منصة SustainGRC",
    url: "https://sustaingrc.com",
    previewUrl: SHOT("https://sustaingrc.com"),
    tags: ["React.js", "Tailwind CSS", "REST APIs"],
    description: "مشروع تدريبي في LevelUp ESG — منصة SaaS لإدارة الامتثال والمنظمة البيئية والاجتماعية والحوكمة (ESG) تضم مكونات React معيارية وقابلة لإعادة الاستخدام تعمل على تشغيل لوحات التحكم الديناميكية وتقارير الامتثال.",
    featuresTitle: "النقاط الرئيسية",
    features: [
      "مكونات معيارية وقابلة لإعادة الاستخدام تتبع أفضل الممارسات",
      "التكامل مع REST API لوحات تحكم امتثال ديناميكية",
      "تحسين الاتساق في واجهة المستخدم والتجاوب عبر الأجهزة",
    ],
    liveUrl: "https://sustaingrc.com",
    codeUrl: null,
    colSpan: "",
  },
  {
    id: "your-shop",
    name: "Your Shop",
    title: "متجر Your Shop",
    url: "https://ecommerce-app-seven-lake.vercel.app",
    previewUrl: SHOT("https://ecommerce-app-seven-lake.vercel.app"),
    tags: ["React.js", "Tailwind CSS", "Zustand"],
    description: "تطبيق تجارة إلكترونية متجاوب بالكامل مع قوائم المنتجات وسلة التسوق ومصادقة المستخدم — إدارة الحالة العالمية بكفاءة باستخدام Zustand (فبراير 2025).",
    featuresTitle: "الميزات الرئيسية",
    features: [
      "تحديثات واجهة المستخدم المتفائلة مع الحالة العالمية Zustand",
      "تحسين عرض المكونات وأداء واجهة المستخدم",
    ],
    liveUrl: "https://ecommerce-app-seven-lake.vercel.app",
    codeUrl: "https://github.com/12wale/Ecommerce-app",
    colSpan: "",
  },
  {
    id: "ajyad",
    name: "Ajyad – Holy Journeys",
    title: "منصة Ajyad للرحلات المقدسة",
    url: "https://ajyad-holy-journeys.vercel.app",
    previewUrl: SHOT("https://ajyad-holy-journeys.vercel.app"),
    tags: ["React.js", "Next.js", "Tailwind CSS"],
    description: "مشروع مستقل — منصة سفر احترافية لشركة Ajyad المتخصصة في باقات الحج والعمرة للحجاج المسلمين. تضم قوائم الباقات والخطط الزمنية والحجز عبر الإنترنت.",
    featuresTitle: "الميزات الرئيسية",
    features: [
      "قوائم باقات الحج والعمرة مع خطط زمنية مفصلة",
      "تصميم متجاوب بالكامل محسن لجميع الأجهزة",
      "واجهة مستخدم نظيفة بناءً على الثقة مصممة للسفر الروحي",
    ],
    liveUrl: "https://ajyad-holy-journeys.vercel.app",
    codeUrl: null,
    colSpan: "",
  },
  {
    id: "jabalawi",
    name: "Jabalawi – Spiritual Retreats",
    title: "مطعم Jabalawi",
    url: "https://jabalawi.vercel.app/",
    previewUrl: SHOT("https://jabalawi.vercel.app/"),
    tags: ["React.js", "Next.js", "Tailwind CSS"],
    description: "موقع مطعم حديث ومتجاوب مصمم باستخدام React وTailwind CSS. يضم المشروع حركات سلسة وواجهة مستخدم أنيقة وقوائم طعام مصنفة وتجربة مستخدم محسنة عبر جميع الأجهزة. مصمم ليعكس هوية المطعم مع تقديم أداء عالي وتصفح سلس.",
    featuresTitle: "الميزات الرئيسية",
    features: [
      "قائمة طعام تفاعلية وجذابة بصريًا",
      "تصفح سهل وبديهي بين الأقسام",
      "قسم الأطباق المميزة لبرمجة الوجبات الخاصة",
    ],
    liveUrl: "https://jabalawi.vercel.app/",
    codeUrl: null,
    colSpan: "",
  },
];

export const timeline = [
  {
    year: "2024",
    title: "بداية رحلة البرمجة",
    description: "Started programming journey.",
  },
  {
    year: "2025",
    title: "التركيز على React وتطوير الواجهات",
    description: "Focused on React and UI development.",
  },
  {
    year: "2026",
    title: "مشاريع حقيقية والعمل الحر",
    description: "Built real-world projects and started freelancing.",
  },
  {
    year: "المستقبل",
    title: "بناء منتجات رقمية أكبر",
    description: "Building larger digital products.",
    isFuture: true,
  },
];

export const testimonials = [
  {
    name: "أحمد محمد",
    role: "صاحب شركة Sun and Soil",
    project: "منصة Sun and Soil",
    rating: 5,
    review:
      "وليد مطور ممتاز! سلّمني موقعًا كامل للشركة يفوق توقعاتي. لوحة التحكم سهلة الاستخدام، والموقع سريع ومتجاوب بشكل مثالي. الاهتمام بالتفاصيل والأداء كان مذهلاً.",
  },
  {
    name: "د/أحمد شوقي",
    role: "مدير تنفيذي LevelUp ESG",
    project: "منصة SustainGRC",
    rating: 5,
    review:
      "تعاملت مع وليد على مشروع SustainGRC والنتيجة كانت رائعة! واجهة المستخدم احترافية، والتعاون كان سلس وممتاز. أنصح به بشدة لأي مشروع رقمي!",
  },
  {
    name: "محمد حسن",
    role: "رائد أعمال - متجر Your Shop",
    project: "متجر Your Shop",
    rating: 5,
    review:
      "الموقع التجاري اللي عمله لي غيّر شكل مشروعي بالكامل! ميزة Zustand جعلت التصفح سلس، والتصميم جذاب للعملاء. احترافية عالية وتواصل ممتاز طوال الوقت.",
  },
  {
    name: "عبد الرحمن عوني",
    role: "مؤسس Ajyad للرحلات",
    project: "منصة Ajyad",
    rating: 5,
    review:
      "شكرًا لوليد على منصة Ajyad الرائعة! التصميم يعكس هوية الرحلات المقدسة بشكل جميل، والواجهة سهلة للعملاء. الحجاج الآن يحجزون بسهولة!",
  },
  {
    name: "يوسف كمال",
    role: "مالك مطعم Jabalawi",
    project: "مطعم Jabalawi",
    rating: 5,
    review:
      "موقع مطعم Jabalawi أصبح تجربة جديدة لزبائننا! القوائم الالكترونية واضحة، والتصميم أنيق وذو رائحة مطعم. الحجوزات زادت بشكل كبير منذ إطلاق الموقع!",
  },
];

export const faqs = [
  {
    question: "What technologies do you use?",
    questionAr: "إيه التقنيات اللي بتستخدمها؟",
    answerAr:
      "بشتغل بـ React و Next.js و TypeScript و Tailwind CSS و GSAP و Framer Motion و Node.js و Firebase و MongoDB حسب احتياج المشروع.",
  },
  {
    question: "Are your websites responsive?",
    questionAr: "هل مواقعك متجاوبة؟",
    answerAr:
      "أكيد! كل موقع بعمله متجاوب بالكامل وبيشتغل بشكل مثالي على الموبايل والتابلت والديسكتوب — بختبر على جميع الأجهزة قبل التسليم.",
  },
  {
    question: "Can you build websites from scratch?",
    questionAr: "هل تقدر تبني موقع من الصفر؟",
    answerAr:
      "طبعًا! من التصميم (UI/UX) للتطوير للنشر — بقدر أبني موقعك من الصفر بالكامل حسب رؤيتك وتوقعاتك.",
  },
  {
    question: "Do you provide support after delivery?",
    questionAr: "هل بتقدم دعم بعد التسليم؟",
    answerAr:
      "أيوه بقدم دعم فني بعد التسليم، وأي تعديلات أو تحديثات تحتاجها — بكون متاح للتواصل طوال الوقت.",
  },
  {
    question: "How long does a project take?",
    questionAr: "كم بيتأخذ المشروع؟",
    answerAr:
      "يعتمد على حجم وتعقيد المشروع! موقع بسيط بياخد من 1-2 أسابيع، وموقع كامل بياخد من 1-3 شهور — بنحدد الجدول الزمني معًا قبل البداية.",
  },
  {
    question: "Do you offer SEO optimization?",
    questionAr: "هل بتقدم تحسين محركات البحث SEO؟",
    answerAr:
      "أكيد! جميع مواقعي مُحسّنة لـ SEO من البداية — سرعة تحميل عالية، وسوم meta صحيحة، وهيكل مناسب لمحركات البحث.",
  },
  {
    question: "Can you work with my existing design?",
    questionAr: "هل تقدر تشتغل على تصميم موجود؟",
    answerAr:
      "طبعًا! بقدر أشتغل على تصميمك اللي عندك (Figma, PSD, etc.) أو أطور على تصميم موجود أو أطوره من الصفر — المرحله لك.",
  },
  {
    question: "What about payment methods?",
    questionAr: "إيه طرق الدفع؟",
    answerAr:
      "بقبل طرق دفع متعددة، وبقسم الدفعة إلى دفعات متتالية حسب مراحل المشروع — عشان تكون مريح لك وتتحكم في التقدم.",
  },
];

export const navLinks = [
  { href: "#hero", label: "الرئيسية" },
  { href: "#about", label: "عني" },
  { href: "#skills", label: "مهاراتي" },
  { href: "#projects", label: "أعمالي" },
  { href: "#contact", label: "تواصل" },
];
