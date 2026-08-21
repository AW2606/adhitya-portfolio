"use client";

import { useState, useEffect, useRef } from "react";

export default function MyApproach() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      number: "01",
      title: "Understand the Problem",
      desc: "I begin by deeply understanding the core problem, context, and user needs before writing a single line of code.",
      detail: "Contextual Analysis • User Needs • Constraint Identification",
    },
    {
      number: "02",
      title: "Design Clean Systems",
      desc: "I structure scalable architecture and intuitive user experiences with clarity and performance in mind.",
      detail: "System Architecture • Modular Design • Performance First",
    },
    {
      number: "03",
      title: "Build & Refine",
      desc: "I implement modern solutions using efficient tools while continuously refining details for impact.",
      detail: "Clean Implementation • Continuous Refinement • High Precision",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="approach"
      className="py-12 sm:py-24 px-4 sm:px-6 md:px-12 bg-[var(--bg-canvas)] border-b border-[var(--border-line)] relative transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* LEFT SIDE: STICKY TITLE & STEP NAVIGATOR */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <div className="flex items-center gap-4 text-xs font-mono text-[var(--accent-color)] uppercase tracking-widest">
              <span>05 / METHODOLOGY</span>
              <span className="w-12 h-px bg-[var(--accent-color)]" />
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-editorial tracking-tight text-[var(--text-main)] break-words">
              MY <br />
              <span className="italic text-[var(--accent-color)]">APPROACH</span>
            </h2>

            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed max-w-md font-sans">
              A disciplined, engineering-minded workflow focused on clarity, structural integrity, and thoughtful refinement.
            </p>

            {/* STEP INDICATORS */}
            <div className="space-y-3 pt-6 border-t border-[var(--border-line)]">
              {steps.map((s, idx) => (
                <div
                  key={s.number}
                  className={`flex items-center gap-4 text-xs font-mono transition-all duration-300 ${
                    activeStep === idx
                      ? "text-[var(--accent-color)] font-semibold translate-x-2"
                      : "text-[var(--text-light)]"
                  }`}
                >
                  <span className="w-6 font-semibold">{s.number}</span>
                  <span className="uppercase tracking-wider">{s.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: SCROLLING STEP CARDS */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className={`p-8 sm:p-12 border transition-all duration-500 bg-[var(--bg-surface)] ${
                  activeStep === index
                    ? "border-[var(--text-main)] shadow-md scale-[1.01]"
                    : "border-[var(--border-line)] opacity-70"
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl sm:text-5xl font-editorial italic text-[var(--accent-color)]">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest bg-[var(--bg-muted)] px-2.5 py-1 text-[var(--text-muted)]">
                    STEP {step.number}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-editorial text-[var(--text-main)] mb-4">
                  {step.title}
                </h3>

                <p className="text-[var(--text-muted)] text-base leading-relaxed font-sans mb-6">
                  {step.desc}
                </p>

                <div className="pt-4 border-t border-[var(--border-line)] font-mono text-xs text-[var(--text-light)] uppercase tracking-wider">
                  {step.detail}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}