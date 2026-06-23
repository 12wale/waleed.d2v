"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Palette,
  Globe,
  FileCode,
  Layers,
  Atom,
  Wind,
  Zap,
  Box,
  Flame,
  GitBranch,
  Smartphone,
  Paintbrush,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { skills } from "@/lib/data";
import { SplitTextReveal, SectionWrapper } from "@/components/ui/SplitTextReveal";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  html: Code2,
  css: Palette,
  javascript: FileCode,
  typescript: FileCode,
  react: Atom,
  tailwind: Wind,
  gsap: Zap,
  framer: Box,
  nodejs: Layers,
  firebase: Flame,
  git: GitBranch,
  github: GithubIcon,
  responsive: Smartphone,
  uiux: Paintbrush,
};

export function Skills() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".skill-card");
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, rotationX: 15 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <SectionWrapper id="skills">
      <h1 className="text-4xl md:text-6xl font-bold   mb-16 text-center">
        <span>الأسلحة اللي بشتغل بيها ⚡</span>
      </h1>

      <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
        {skills.map((skill) => {
          const Icon = iconMap[skill.icon] || Globe;
          return (
            <div
              key={skill.name}
              className="skill-card glass rounded-2xl p-5 text-center group cursor-default"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/20 flex items-center justify-center group-hover:glow-primary transition-shadow">
                <Icon size={22} className="text-secondary" />
              </div>
              <h3 className="text-sm font-semibold text-white/90 mb-2">{skill.name}</h3>
            
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
