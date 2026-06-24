"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Sparkles } from "lucide-react";
import { faqs } from "@/lib/data";
import { SectionWrapper } from "@/components/ui/SplitTextReveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq">
      <div className="relative">
        {/* Decorative gradient orbs */}
        <div className="absolute top-10 -left-10 w-48 h-48 rounded-full blur-[120px] bg-primary/30 pointer-events-none" />
        <div className="absolute bottom-10 -right-10 w-48 h-48 rounded-full blur-[120px] bg-accent/20 pointer-events-none" />

        <div className="flex items-center justify-center gap-3 mb-4">
          <HelpCircle size={28} className="text-secondary" />
          <h1 className="text-4xl md:text-5xl font-bold   text-center relative z-10">
            <span>أسئلة شائعة</span>
          </h1>
          <Sparkles size={28} className="text-primary" />
        </div>
        <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
          إجابات لأكثر الأسئلة شيوعًا حول خدماتي وطريقة العمل
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="glass rounded-2xl overflow-hidden hover:glow-secondary transition-all duration-300">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-right min-h-[60px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary text-lg">{i + 1}</span>
                      </div>
                      <span className="font-semibold text-white/90 text-base md:text-lg">{faq.questionAr}</span>
                    </div>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                          <Minus size={22} className="text-white" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                          <Plus size={22} className="text-secondary" />
                        </div>
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6">
                          <div className="border-t border-white/10 pt-4">
                            <p className="text-white/70 leading-relaxed">
                              {faq.answerAr}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
