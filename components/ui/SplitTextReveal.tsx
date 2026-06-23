"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SplitTextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export function SplitTextReveal({
  children,
  className = "",
  as: Tag = "h2",
  delay = 0,
}: SplitTextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = children.split(" ");
    el.innerHTML = words
      .map(
        (word) =>
          `<span class="split-char"><span class="split-char-inner">${word}</span></span>`
      )
      .join(" ");

    const chars = el.querySelectorAll(".split-char-inner");

    gsap.set(chars, { y: "100%", opacity: 0 });

    gsap.to(chars, {
      y: "0%",
      opacity: 1,
      duration: 0.8,
      stagger: 0.05,
      ease: "power3.out",
      delay,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, [children, delay]);

  return <Tag ref={ref as never} className={className} />;
}

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section id={id} ref={ref} className={`section-padding max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
}
