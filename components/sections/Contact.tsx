"use client";

import { Mail, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SplitTextReveal, SectionWrapper } from "@/components/ui/SplitTextReveal";

const contactLinks = [
  { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}`, value: siteConfig.email },
  { icon: MessageCircle, label: "WhatsApp", href: siteConfig.whatsapp, value: "WhatsApp" },
  { icon: LinkedinIcon, label: "LinkedIn", href: siteConfig.social.linkedin, value: "LinkedIn" },
  { icon: GithubIcon, label: "GitHub", href: siteConfig.social.github, value: "GitHub" },
];

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="relative glass-strong rounded-3xl p-10 md:p-16 text-center overflow-hidden">
        <div className="absolute inset-0 animate-gradient opacity-20 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(0,217,255,0.2), rgba(255,77,219,0.2))",
          }}
        />

        <div className="relative z-10">
         <h1
            className="text-3xl md:text-5xl font-bold  mb-6"
          >
            <span> جاهز نحول فكرتك لحاجة عظيمة؟</span>
           
          </h1>

          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
            لو عندك فكرة أو مشروع، خلينا نحوله لحاجة تستحق الانبهار.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto">
            {contactLinks.map(({ icon: Icon, label, href, value }) => (
              <motion.a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.05 }}
                className="glass rounded-2xl p-4 flex flex-col items-center gap-2 hover:glow-primary transition-shadow"
              >
                <Icon size={22} className="text-secondary" />
                <span className="text-xs text-white/50">{value}</span>
              </motion.a>
            ))}
          </div>

          <MagneticButton href={`mailto:${siteConfig.email}`} className="text-lg px-10 py-4 glow-primary">
            يلا نبدأ
          </MagneticButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
