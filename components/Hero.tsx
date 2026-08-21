"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Github, Download } from "lucide-react";
import TypingText from "./TypingText";

export default function Hero() {
  const { scrollY } = useScroll();

  // Smooth scroll scale down & shift upward
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.92]);
  const heroY = useTransform(scrollY, [0, 400], [0, -60]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  return (
    <section className="relative min-h-screen flex flex-col justify-between px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 pb-8 sm:pb-12 overflow-hidden border-b border-[var(--border-line)] bg-[var(--bg-canvas)] transition-colors duration-500">
      {/* Editorial Watermark / Background Depth */}
      <div className="absolute top-1/4 right-0 text-[18vw] font-editorial text-[var(--text-main)] opacity-[0.03] select-none pointer-events-none leading-none z-0">
        ITERA
      </div>

      <motion.div
        style={{ scale: heroScale, y: heroY, opacity: heroOpacity }}
        className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center"
      >
        {/* METADATA BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--border-line)] text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase mb-8"
        >
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent-color)]" />
            <span>2026 EDITION</span>
          </div>
          <div>INFORMATICS ENGINEERING</div>
          <div>ITERA / INDONESIA</div>
        </motion.div>

        {/* HERO CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* HUGE DISPLAY TYPOGRAPHY */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-editorial leading-[0.9] sm:leading-[0.85] tracking-tight text-[var(--text-main)] break-words">
                ADHITYA <br />
                <span className="italic font-normal text-[var(--accent-color)]">WARMAN</span>
              </h1>
            </motion.div>

            {/* INTRO TEXT & TYPING */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-xl text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed font-sans min-h-[3.5rem]"
            >
              <TypingText text="Building clean, scalable, and meaningful digital products." />
            </motion.div>

            {/* CTA ACTION BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap gap-4 items-center"
            >
              <a
                href="https://github.com/AW2606"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--text-main)] bg-[var(--text-main)] text-[var(--bg-canvas)] font-mono text-xs uppercase tracking-widest hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)] hover:text-white active:scale-95 transition-all duration-300 shadow-xs"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              {/* DIRECT DOWNLOAD CV BUTTON */}
              <a
                href="/cv/cv-adhitya-warman.pdf"
                download="cv-adhitya-warman.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-line)] bg-[var(--bg-surface)] text-[var(--text-main)] font-mono text-xs uppercase tracking-widest hover:border-[var(--text-main)] hover:text-[var(--accent-color)] active:scale-95 transition-all duration-300"
              >
                <Download className="w-4 h-4 text-[var(--accent-color)]" />
                <span>Download CV</span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE PROFILE PORTRAIT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end"
          >
            <div className="relative w-48 h-60 sm:w-64 sm:h-80 border border-[var(--border-line)] p-2 bg-[var(--bg-surface)] shadow-md group">
              <div className="relative w-full h-full overflow-hidden bg-[var(--bg-muted)]">
                <Image
                  src="/images/adhitya.png"
                  alt="Adhitya Warman"
                  fill
                  priority
                  className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-[var(--text-main)] text-[var(--bg-canvas)] font-mono text-[10px] px-2.5 py-1 uppercase tracking-widest">
                CREATIVE TECH
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* FOOTER SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="max-w-7xl mx-auto w-full pt-8 flex justify-between items-end text-xs font-mono text-[var(--text-light)] uppercase tracking-wider border-t border-[var(--border-line)] mt-12 relative z-10"
      >
        <div className="flex items-center gap-2 text-[var(--text-muted)]">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[var(--accent-color)]" />
          <span>SCROLL TO EXPLORE</span>
        </div>
        <div className="hidden sm:block text-[var(--text-light)]">
          [01 / 06 SECTIONS]
        </div>
      </motion.div>
    </section>
  );
}
