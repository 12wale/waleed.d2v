"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timeline } from "@/lib/data";
import { SplitTextReveal, SectionWrapper } from "@/components/ui/SplitTextReveal";

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll(".timeline-item");
    if (!items || !lineRef.current) return;

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 60%",
          scrub: 1,
        },
      }
    );

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <SectionWrapper id="experience">
       <h1 className="text-4xl md:text-5xl font-bold   mb-16 text-center relative z-10">
          <span>رحلتي</span>
        </h1>

      <div ref={containerRef} className="relative max-w-2xl mx-auto">
        <div
          ref={lineRef}
          className="absolute top-0 bottom-0 right-6 md:right-1/2 md:translate-x-1/2 w-0.5 timeline-glow origin-top"
        />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <div
              key={item.year}
              className={`timeline-item relative flex items-start gap-8 ${
                i % 2 === 0 ? "md:flex-row-reverse md:text-left" : "md:flex-row md:text-right"
              }`}
            >
              <div className="absolute right-6 md:right-1/2 md:translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-primary z-10 -translate-y-1" />

              <div className={`flex-1 mr-14 md:mr-0 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 ${
                    item.isFuture
                      ? "bg-accent/20 text-accent"
                      : "bg-primary/20 text-primary"
                  }`}
                >
                  {item.year}
                </span>
                <h3 className="text-lg font-bold font-[family-name:var(--font-alexandria)] mb-1">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
