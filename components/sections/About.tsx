"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "@/components/ui/SplitTextReveal";
import { Zap, Palette, Smartphone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const features = [
    {
      Icon: Zap,
      title: "أداء فائق السرعة",
      description: "موقع سريع وملائم لجميع الأجهزة",
    },
    {
      Icon: Palette,
      title: "تصميم تفاعلي مبهر",
      description: "واجهة جذابة وتفاعلية تترك أثراً",
    },
    {
      Icon: Smartphone,
      title: "تجاوب كامل",
      description: "يعمل بشكل مثالي على جميع أحجام الشاشات",
    },
  ];

  return (
    <SectionWrapper id="about">
      <div ref={containerRef} className="relative">
        {/* Decorative gradient orbs */}
        <div className="absolute top-10 -left-10 w-48 h-48 rounded-full blur-[120px] bg-primary/30 pointer-events-none" />
        <div className="absolute bottom-10 -right-10 w-48 h-48 rounded-full blur-[120px] bg-secondary/20 pointer-events-none" />
        
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold   mb-12 text-center">
            <span>مين أنا؟</span>
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - About Text */}
            <div ref={textRef} className="space-y-6">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed  font-semibold">
                أنا مش مجرد شخص بيكتب كود...
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                أنا مهندس برمجيات متخصص في بناء تجارب رقمية احترافية، سريعة، ومتجاوبة.
                أجمع بين الشغف بالتقنية والتصميم لإنتاج مواقع وتطبيقات تترك أثر حقيقي على المستخدمين.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                كل مشروع أشتغل عليه بكون فرصة لتطبيق أحدث التقنيات والاهتمام بالتفاصيل الصغيرة
                اللي تصنع الفرق في نهاية المطاف.
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
                {["React", "Next.js", "GSAP", "UI/UX", "Tailwind", "TypeScript"].map((tag) => (
                  <span
                    key={tag}
                    className="px-5 py-2 rounded-full glass text-sm text-secondary hover:border-primary/50 hover:border-2 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="glass rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-secondary">
                      <feature.Icon size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                      <p className="text-white/50">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
