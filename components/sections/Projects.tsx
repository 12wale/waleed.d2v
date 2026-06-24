"use client";

import { useRef, useEffect, MouseEvent } from "react";
import Image from "next/image";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import gsap from "gsap";
import { projects } from "@/lib/data";
import { SectionWrapper } from "@/components/ui/SplitTextReveal";

function ProjectCard({
  project,
}: {
  project: (typeof projects)[0];
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = "perspective(1000px) rotateY(0) rotateX(0)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="project-card glass rounded-3xl overflow-hidden group transition-transform duration-500"
    >
      <div className="relative h-56 md:h-64 overflow-hidden">
        <Image
          src={project.previewUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-bg-dark/30 to-transparent" />
      </div>

      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-alexandria)] mb-3">
          {project.title}
        </h3>
        <p className="text-white/60 mb-4 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full text-xs glass text-secondary">
              {t}
            </span>
          ))}
        </div>

        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white/80 mb-3">{project.featuresTitle}</h4>
            <div className="space-y-2">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/50 text-xs">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm text-white/80 hover:text-secondary transition-colors min-h-[48px] px-3 rounded-xl hover:bg-white/5"
          >
            <ExternalLink size={20} />
            معاينة
          </a>
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm text-white/80 hover:text-secondary transition-colors min-h-[48px] px-3 rounded-xl hover:bg-white/5"
            >
              <GithubIcon size={20} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".project-card");
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.2,
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
    <SectionWrapper id="projects">
      <h1 className="text-4xl md:text-5xl font-bold   mb-16 text-center">
        <span>شوية من شغلي 🔥</span>
      </h1>

      <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
