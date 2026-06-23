"use client";

import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/lib/data";
import { motion } from "framer-motion";

const socialIcons = [
  { icon: GithubIcon, href: siteConfig.social.github, label: "GitHub" },
  { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white/60 text-sm text-center md:text-right">
          صُنع بحب وشغف ❤️ بواسطة وليد رفعت
        </p>

        <div className="flex items-center gap-4">
          {socialIcons.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -3 }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-secondary hover:glow-secondary transition-all"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
