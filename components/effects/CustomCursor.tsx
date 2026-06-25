"use client";

import { useEffect, useRef } from "react";
import { Sword } from 'lucide-react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const cursorEl = cursorRef.current;
    const ringEl = ringRef.current;
    if (!cursorEl || !ringEl) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animationFrameId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorEl.style.left = `${mouseX}px`;
      cursorEl.style.top = `${mouseY}px`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ringEl.style.left = `${ringX - 20}px`;
      ringEl.style.top = `${ringY - 20}px`;
      animationFrameId = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      cursorEl.classList.add("hover");
      ringEl.classList.add("hover");
    };

    const onLeave = () => {
      cursorEl.classList.remove("hover");
      ringEl.classList.remove("hover");
    };

    const interactive = document.querySelectorAll("a, button, [data-cursor='hover']");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block">
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="url(#cursor-gradient)" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))" }}
        >
          <defs>
            <linearGradient id="cursor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#00d9ff" />
              <stop offset="100%" stopColor="#ff4ddb" />
            </linearGradient>
          </defs>
          <path d="M14.5 17.5 3 6V3h3l11.5 11.5" />
          <path d="M13 19l6-6 4 4-4 4Z" />
          <path d="m16 16 2 2" />
        </svg>
      </div>
      <div ref={ringRef} className="custom-cursor-ring hidden md:block" />
    </>
  );
}
