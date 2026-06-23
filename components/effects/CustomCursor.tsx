"use client";

import { useEffect, useRef } from "react";
import { Sword } from 'lucide-react';
import cursor from '@/public/cursor.png'
import Image from "next/image";
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
        <Image src={cursor} alt="cursor" width={32} height={32} />
      </div>
      <div ref={ringRef} className="custom-cursor-ring hidden md:block" />
    </>
  );
}
