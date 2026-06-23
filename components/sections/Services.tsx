"use client";

import { useRef, useEffect, MouseEvent } from "react";
import { Code2, Palette, Zap, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);
import { SectionWrapper } from "@/components/ui/SplitTextReveal";

const iconMap = {
  code: Code2,
  palette: Palette,
  zap: Zap,
};

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`service-card glass rounded-3xl p-8 transition-transform duration-300 hover:glow-primary ${className}`}
    >
      {children}
    </div>
  );
}

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".service-card");
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <SectionWrapper id="services">
      <div className="relative">
        {/* Decorative gradient orbs */}
        <div className="absolute top-10 -right-10 w-48 h-48 rounded-full blur-[120px] bg-accent/20 pointer-events-none" />
        <div className="absolute bottom-10 -left-10 w-48 h-48 rounded-full blur-[120px] bg-primary/30 pointer-events-none" />

        <h1 className="text-4xl md:text-5xl font-bold   mb-16 text-center relative z-10">
          <span>إيه اللي أقدر أعمله؟</span>
        </h1>

        <div ref={containerRef} className="grid md:grid-cols-3 gap-8 relative z-10">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <TiltCard key={service.titleEn}>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-secondary text-xs font-semibold">
                    {service.titleEn}
                  </div>
                </div>

                <h3 className="text-xl font-bold font-[family-name:var(--font-alexandria)] mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white/80 mb-2">ماذا تشمل؟</h4>
                  {service.details?.map((detail, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-white/50 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
