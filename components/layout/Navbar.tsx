"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import logo from "@/public/logo.png"
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-none ${
        scrolled ? "glass lg:w-[1200px] w-11/12 mx-auto lg:mx-auto mt-3 rounded-4xl transition-all duration-500 py-3 bg-primary/20" : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center justify-center w-[48px] h-[48px]">
          <Image src={logo} alt="logo" width={44} height={44} className="w-[44px] h-[44px] object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-white transition-colors relative group px-3 py-2"
            >
              {link.label}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-to-l from-primary to-secondary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white w-[48px] h-[48px] flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="القائمة"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-white py-4 px-4 rounded-xl hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
