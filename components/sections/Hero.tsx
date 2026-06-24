"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import heroimg from "@/public/heroimg.png";
import gsap from "gsap";
import { Code, Sparkles, ArrowLeft } from "lucide-react";

// Deterministic pseudo-random number generator for consistent particles
const seededRandom = (seed: number) => {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

const COLORS = ["#8B5CF6", "#00D9FF", "#FF4DDB", "#00FFC6"];
const generateParticles = () => {
  const random = seededRandom(12345); // Fixed seed for consistency
  return Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: random() * 100,
    y: random() * 100,
    s: random() * 3 + 1,
    d: random() * 20 + 8,
    dl: random() * 12,
    c: COLORS[i % 4],
  }));
};
const PTCLS = generateParticles();

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PTCLS.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            background: p.c,
            boxShadow: `0 0 ${p.s * 5}px ${p.c}`,
            opacity: 0.55,
            animationDuration: `${p.d}s`,
            animationDelay: `${p.dl}s`,
          }}
        />
      ))}
    </div>
  );
}

function MagneticBtn({
  children,
  href,
  className,
  style,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const el = useRef<HTMLAnchorElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = el.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.38;
    const dy = (e.clientY - cy) * 0.38;
    el.current!.style.transform = `translate(${dx}px,${dy}px) scale(1.04)`;
  }, []);

  const onLeave = useCallback(() => {
    if (el.current)
      el.current.style.transform = "translate(0,0) scale(1)";
  }, []);

  return (
    <a
      ref={el}
      href={href ?? "#"}
      className={className}
      style={{ transition: "transform 0.35s cubic-bezier(.23,1,.32,1)", ...style }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </a>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const q = gsap.utils.selector(el);

    // 1. Initial State for GSAP Reveal
    gsap.set(q(".hero-title"), { opacity: 0 });
    gsap.set(q(".hero-title span"), { y: 60, opacity: 0 });
    gsap.set(q(".hero-subtitle"), { y: 30, opacity: 0 });
    gsap.set(q(".hero-para"), { y: 30, opacity: 0 });
    gsap.set(q(".hero-buttons"), { y: 20, opacity: 0 });
    gsap.set(q(".hero-img-wrap"), { scale: 0.85, opacity: 0, rotate: -2 });
    gsap.set(q(".hero-badge"), { scale: 0, opacity: 0 });

    // 2. Intro Animation Timeline
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.to(q(".hero-title"), { opacity: 1, duration: 0.2 })
      .to(q(".hero-title span"), { y: 0, opacity: 1, duration: 1.2, stagger: 0.1 }, "-=0.1")
      .to(q(".hero-subtitle"), { y: 0, opacity: 1, duration: 0.8 }, "-=0.8")
      .to(q(".hero-para"), { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
      .to(q(".hero-buttons"), { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
      .to(
        q(".hero-img-wrap"),
        { scale: 1, opacity: 1, rotate: 0, duration: 1.5, ease: "back.out(1.2)" },
        "-=1.2"
      )
      .to(
        q(".hero-badge"),
        { scale: 1, opacity: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.7)" },
        "-=0.8"
      );

    // 3. Continuous Organic Floating
    const floatTl = gsap.timeline({ repeat: -1, yoyo: true });
    floatTl.to(q(".hero-img-wrap"), {
      y: -12,
      duration: 3,
      ease: "power1.inOut",
    });

    const badges = q(".hero-badge");
    badges.forEach((badge, index) => {
      gsap.to(badge, {
        y: index % 2 === 0 ? -8 : 8,
        duration: 2.5 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.3,
      });
    });

    // 4. Mouse Interactive Parallax depth
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xNorm = clientX / innerWidth - 0.5;
      const yNorm = clientY / innerHeight - 0.5;

      // Image Wrapper rotates & translates slightly based on mouse
      gsap.to(q(".hero-img-wrap"), {
        x: xNorm * 30,
        y: yNorm * 30 - 6,
        rotateX: -yNorm * 8,
        rotateY: xNorm * 8,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto",
      });

      // Badges translate in the opposite direction or with higher magnitude for depth
      badges.forEach((badge, index) => {
        const factor = (index + 1.5) * 20; // different speed layers
        gsap.to(badge, {
          x: -xNorm * factor,
          y: -yNorm * factor,
          duration: 1 + index * 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      tl.kill();
      floatTl.kill();
      badges.forEach((b) => gsap.killTweensOf(b));
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative  max-w-full min-h-screen overflow-x-hidden flex items-center justify-center py-24 lg:py-0">
      {/* layered background */}
      <div className="absolute w-full inset-0 bg-[#0B0D17]" />
      <div
        className="absolute inset-0 animate-bg-breathe"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 15% 50%,rgba(139,92,246,0.3) 0%,transparent 60%)," +
            "radial-gradient(ellipse 65% 55% at 85% 45%,rgba(0,217,255,0.22) 0%,transparent 60%)," +
            "radial-gradient(ellipse 55% 50% at 50% 92%,rgba(255,77,219,0.2) 0%,transparent 60%)",
        }}
      />
      {/* glowing grid lines */}
      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.7) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(139,92,246,0.7) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      {/* diagonal accent lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg,rgba(0,217,255,0.8) 0,rgba(0,217,255,0.8) 1px,transparent 0,transparent 50%)",
          backgroundSize: "30px 30px",
        }}
      />
      <Particles />

      {/* content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 min-h-screen pt-12 lg:pt-0 pb-6 lg:pb-0">
          
          {/* Right Text Column (In RTL first child is on the right) */}
          <div className="flex-1 text-center lg:text-right w-full">
            <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-bold font-[family-name:var(--font-alexandria)] text-white leading-tight">
              <span className="inline-block  ">أهلاً،</span> <span className="inline-block  ">أنا</span>{" "}
              <span className="  block mt-2 font-black text-5xl sm:text-6xl md:text-8xl">وليد رفعت</span>
            </h1>

            <h2 className="hero-subtitle text-lg sm:text-xl md:text-2xl font-bold text-secondary mt-6 font-[family-name:var(--font-cairo)]">
              مطور تطبيقات ويب متكاملة
            </h2>

            <p className="hero-para mt-6 text-base sm:text-lg text-white/70 max-w-xl leading-relaxed font-[family-name:var(--font-cairo)] lg:ml-auto">
              أقوم بتحويل الأفكار المبتكرة إلى تجارب رقمية تفاعلية لا تُنسى. متخصص في بناء مواقع وتطبيقات ويب فائقة السرعة وعصرية باستخدام React و Next.js مع التركيز الكامل على الأداء وتجربة المستخدم المميزة.
            </p>

            <div className="hero-buttons mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <MagneticBtn
                href="#projects"
                className="btn-primary glow-primary flex items-center justify-center gap-2 group text-base sm:text-base font-[family-name:var(--font-cairo)] min-h-[48px] px-6"
              >
                <span>تصفح أعمالي</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              </MagneticBtn>

              <MagneticBtn
                href="#contact"
                className="btn-secondary flex items-center justify-center gap-2 text-base sm:text-base font-[family-name:var(--font-cairo)] min-h-[48px] px-6"
              >
                <span>تواصل معي</span>
              </MagneticBtn>
            </div>
          </div>

          {/* Left Image Column (In RTL second child is on the left) */}
          <div className="flex-1 flex justify-center lg:justify-start mt-8 lg:mt-0">
            {/* Positioning Context Wrapper (w-fit ensures it fits the image size exactly) */}
            <div className="relative w-fit" style={{ perspective: 1000 }}>
              
              {/* Outer Blur Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent opacity-25 blur-3xl scale-95 pointer-events-none" />

              {/* Main Image Wrap */}
              <div className="hero-img-wrap relative p-2.5 sm:p-3 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md glow-secondary transition-shadow duration-300">
                <Image
                  src={heroimg}
                  alt="وليد رفعت"
                  priority
                  className="
                    w-[240px]
                    sm:w-[350px]
                    md:w-[420px]
                    lg:w-[600px]
                    h-auto
                    rounded-[2rem]
                    object-cover
                    select-none
                    pointer-events-none
                  "
                />
              </div>

              {/* Floating Badges */}
              {/* Badge 1: Top Right */}
              <div className="hero-badge absolute -translate-y-11 top-4 right-2 sm:-top-4 sm:-right-6 md:-right-8 glass rounded-xl sm:rounded-2xl p-2 sm:p-4 flex items-center gap-1.5 sm:gap-3 shadow-2xl border border-white/15 scale-75 sm:scale-90 md:scale-100 origin-right">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary glow-primary shrink-0">
                  <Code className="w-3.5 sm:w-5 h-3.5 sm:h-5" />
                </div>
                <div className="text-right">
                  <p className="text-[8px] sm:text-[10px] text-white/50 font-[family-name:var(--font-cairo)]">التخصص</p>
                  <p className="text-[10px] sm:text-sm font-bold text-white font-[family-name:var(--font-cairo)] whitespace-nowrap">مطور Full-Stack</p>
                </div>
              </div>

              {/* Badge 2: Bottom Left */}
              <div className="hero-badge absolute bottom-4 left-2 sm:-bottom-4 sm:-left-6 md:-left-8 glass rounded-xl sm:rounded-2xl p-2 sm:p-4 flex items-center gap-1.5 sm:gap-3 shadow-2xl border border-white/15 scale-75 sm:scale-90 md:scale-100 origin-left">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary glow-secondary shrink-0">
                  <Sparkles className="w-3.5 sm:w-5 h-3.5 sm:h-5" />
                </div>
                <div className="text-right">
                  <p className="text-[8px] sm:text-[10px] text-white/50 font-[family-name:var(--font-cairo)]">الخبرة</p>
                  <p className="text-[10px] sm:text-sm font-bold text-white font-[family-name:var(--font-cairo)] whitespace-nowrap">+2 سنوات عمل</p>
                </div>
              </div>

              {/* Badge 3: Top Left / Floating Skill */}
              <div className="hero-badge absolute -top-4 left-2 sm:-top-8 sm:left-10 md:left-12 glass rounded-full px-2.5 py-1 sm:px-4 sm:py-2 flex items-center gap-1 sm:gap-2 border border-white/15 text-[9px] sm:text-xs font-semibold text-turquoise scale-75 sm:scale-90 md:scale-100 origin-top-left">
                <span className="w-1 sm:w-2 h-1 sm:h-2 rounded-full bg-turquoise animate-pulse" />
                <span className="font-[family-name:var(--font-cairo)]">React & Next.js</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* floating accent orbs */}
      <div
        className="absolute top-1/4 left-8 w-72 h-72 rounded-full blur-[100px] opacity-20 pointer-events-none animate-float-slow"
        style={{ background: "#8B5CF6" }}
      />
      <div
        className="absolute bottom-1/4 right-8 w-56 h-56 rounded-full blur-[90px] opacity-15 pointer-events-none animate-float-slow"
        style={{ background: "#00D9FF", animationDelay: "3s" }}
      />
    </section>
  );
}