"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronRight, ChevronLeft, Quote, Sparkles } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionWrapper } from "@/components/ui/SplitTextReveal";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startProgress();
    return () => stopProgress();
  }, []);

  useEffect(() => {
    startProgress();
    return () => stopProgress();
  }, [current]);

  const startProgress = () => {
    stopProgress();
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setDirection(1);
          setCurrent((prev) => (prev + 1) % testimonials.length);
          return 0;
        }
        return prev + 2;
      });
    }, 100);
    intervalRef.current = interval;
  };

  const stopProgress = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const navigate = (dir: number) => {
    stopProgress();
    setDirection(dir);
    setCurrent((prev) => {
      const next = prev + dir;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  const t = testimonials[current];

  return (
    <SectionWrapper id="testimonials">
      <div className="relative">
      {/* Decorative gradient orbs */}
      <div className="absolute top-10 -right-10 w-48 h-48 rounded-full blur-[120px] bg-accent/20 pointer-events-none" />
      <div className="absolute bottom-10 -left-10 w-48 h-48 rounded-full blur-[120px] bg-primary/30 pointer-events-none" />

      <div className="flex items-center justify-center gap-3 mb-4">
        <Sparkles size={28} className="text-primary" />
        <h1 className="text-4xl md:text-5xl font-bold   text-center relative z-10">
          <span>آراء العملاء</span>
        </h1>
        <Sparkles size={28} className="text-secondary" />
      </div>
      <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
        كلام حقيقي من عملائي اللي شرفت العمل معهم
      </p>

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Progress bar */}
        <div className="h-1 bg-white/10 rounded-full mb-8 mx-auto max-w-md">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="glass rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
          >
            {/* Quote icons */}
            <div className="absolute top-8 right-8">
              <Quote size={64} className="text-primary/20" />
            </div>
            <div className="absolute bottom-8 left-8">
              <Quote size={64} className="text-secondary/20" />
            </div>


            <div className="flex items-center justify-center gap-1 mb-8">
              {Array.from({ length: t.rating }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Star size={24} className="fill-accent text-accent" />
              </motion.div>
              ))}
            </div>

            <motion.p
              className="text-white/90 leading-relaxed mb-8 text-lg md:text-2xl font-[family-name:var(--font-alexandria)]"
            >
              &ldquo;{t.review}&rdquo;
            </motion.p>

            <div className="mb-3">
              <span className="px-5 py-2 rounded-full glass text-sm font-semibold bg-gradient-to-r from-primary/20 to-secondary/20 text-secondary border border-primary/30">
                {t.project}
              </span>
            </div>

            <h4 className="font-bold font-[family-name:var(--font-alexandria)] text-2xl mb-1">
              {t.name}
            </h4>
            <p className="text-white/60 text-base">{t.role}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => navigate(-1)}
            className="w-14 h-14 rounded-full glass flex items-center justify-center hover:glow-primary transition-all hover:scale-110"
            aria-label="السابق"
          >
            <ChevronRight size={28} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  stopProgress();
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-3 rounded-full transition-all ${
                  i === current
                    ? "w-10 bg-gradient-to-r from-primary to-secondary"
                    : "w-3 bg-white/20"
                }`}
                aria-label={`شهادة ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => navigate(1)}
            className="w-14 h-14 rounded-full glass flex items-center justify-center hover:glow-primary transition-all hover:scale-110"
            aria-label="التالي"
          >
            <ChevronLeft size={28} />
          </button>
        </div>
      </div>
    </div>
    </SectionWrapper>
  );
}
