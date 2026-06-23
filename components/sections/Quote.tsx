"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote as QuoteIcon, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Quote() {
  const ref = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || !ref.current) return;

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.to(".quote-float", {
      y: -20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.8,
    });
  }, []);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="quote-float absolute top-1/4 right-1/4 w-40 h-40 rounded-full blur-[120px] bg-primary/20 pointer-events-none" />
      <div className="quote-float absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full blur-[120px] bg-secondary/15 pointer-events-none" />

      <blockquote className="max-w-5xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Sparkles size={32} className="text-primary" />
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50"></div>
        </div>

        {/* Quote icons */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="hidden md:block">
            <QuoteIcon size={48} className="text-primary/20 rotate-180" />
          </div>
          <div ref={textRef} className="relative">
            <p
              className="text-2xl md:text-4xl lg:text-5xl font-bold  leading-relaxed gradient-text  "
            >
              &ldquo;التفاصيل هي ما تحول الموقع العادي إلى تجربة لا تُنسى.&rdquo;
            </p>
            <p
              className="text-lg md:text-2xl text-white/40 mt-4 font-[family-name:var(--font-alexandria)]"
            >
              &ldquo;Details are what transform an ordinary website into a memorable experience.&rdquo;
            </p>
          </div>
          <div className="hidden md:block">
            <QuoteIcon size={48} className="text-secondary/20" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary/50"></div>
          <Sparkles size={32} className="text-secondary" />
        </div>
      </blockquote>
    </section>
  );
}
