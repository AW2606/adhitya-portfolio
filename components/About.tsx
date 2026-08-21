"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Layered parallax scroll speeds
  const bgTextY = useTransform(scrollYProgress, [0, 1], [-40, 80]);
  const mainTitleY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -20]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-12 sm:py-24 px-4 sm:px-6 md:px-12 bg-[var(--bg-canvas)] border-b border-[var(--border-line)] overflow-hidden transition-colors duration-500"
    >
      {/* PARALLAX BACKGROUND TEXT LAYER */}
      <motion.div
        style={{ y: bgTextY }}
        className="absolute top-12 left-0 right-0 text-center font-editorial text-[16vw] font-normal text-[var(--text-main)] opacity-[0.03] select-none pointer-events-none leading-none z-0"
      >
        SYNTHESIS
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION HEADER INDEX */}
        <div className="flex items-center gap-4 text-xs font-mono text-[var(--accent-color)] uppercase tracking-widest mb-8 sm:mb-12">
          <span>02 / ABOUT ME</span>
          <span className="w-12 h-px bg-[var(--accent-color)]" />
        </div>

        {/* EDITORIAL DISPLAY STATEMENT */}
        <motion.div style={{ y: mainTitleY }} className="mb-8 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-editorial leading-[0.95] sm:leading-[0.9] tracking-tight text-[var(--text-main)] break-words">
            BETWEEN <br />
            <span className="italic font-normal text-[var(--accent-color)]">LOGIC</span> &{" "}
            <span className="font-sans font-light tracking-tight">CREATIVITY</span>
          </h2>
        </motion.div>

        {/* CONTENT GRID */}
        <motion.div
          style={{ y: contentY }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* LEFT SIDE EDITORIAL CARD */}
          <div className="lg:col-span-7 space-y-8 text-lg sm:text-xl text-[var(--text-main)] leading-relaxed font-sans">
            <div className="p-8 sm:p-10 border border-[var(--border-line)] bg-[var(--bg-surface)] shadow-xs relative">
              <span className="absolute top-0 left-0 translate-y-[-50%] translate-x-6 px-3 py-1 bg-[var(--text-main)] text-[var(--bg-canvas)] font-mono text-[10px] uppercase tracking-widest">
                STATEMENT
              </span>
              
              <p className="text-[var(--text-main)] font-medium leading-relaxed">
                As an Informatics Engineering student at{" "}
                <span className="text-[var(--accent-color)] font-semibold">ITERA</span> with certifications in{" "}
                <span className="text-[var(--accent-color)] font-semibold">
                  BSI Financial Literacy & BPJPH Halal Process
                </span>
                , I bridge the gap between technical logic and digital creativity. I am driven by a passion for building seamless web experiences and exploring the endless possibilities of digital innovation.
              </p>

              <p className="text-[var(--text-muted)] text-base mt-6 leading-relaxed">
                I combine technical problem-solving with creative storytelling through writing and videography to build impactful digital experiences.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE HIGHLIGHT & TECH BADGES */}
          <div className="lg:col-span-5 space-y-8">
            {/* Highlight Box */}
            <div className="p-8 border border-[var(--text-main)] bg-[var(--bg-muted)] relative">
              <p className="text-[var(--accent-color)] font-mono text-xs font-semibold uppercase tracking-widest mb-3">
                Creative Technologist Mindset
              </p>
              <p className="text-[var(--text-main)] text-lg font-editorial italic leading-snug">
                "Blending engineering precision with artistic expression."
              </p>
            </div>

            {/* Tech Focus Badges */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-light)] mb-4">
                FOCUS AREAS
              </p>
              <div className="flex flex-wrap gap-2">
                {["Frontend", "UI/UX", "Storytelling", "Problem Solving"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-xs font-mono uppercase tracking-wider bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-main)] hover:border-[var(--text-main)] transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}