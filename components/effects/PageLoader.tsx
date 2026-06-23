"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import logo from "@/public/logo.png"
import Image from "next/image";
export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoading(false),
    });

    tl.fromTo(
      ".loader-text",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    )
      .fromTo(
        ".loader-bar",
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: "power2.inOut" },
        "-=0.2"
      )
      .to(".loader-screen", {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
        delay: 0.3,
      });
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-screen">
      <div className="flex flex-col items-center gap-6">
        <span className="loader-text gradient-text">
          <Image src={logo} alt="logo" width={120} height={120} className="w-[120px] h-[120px] object-contain" />
        </span>
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="loader-bar h-full rounded-full origin-right"
            style={{
              background: "linear-gradient(90deg, #8B5CF6, #00D9FF, #FF4DDB)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
