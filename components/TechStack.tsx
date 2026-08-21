"use client";

import { useState } from "react";
import { Terminal, Check, Copy } from "lucide-react";

export default function TechStack() {
  const [copied, setCopied] = useState(false);
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const techList = [
    "C++",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "DOCS",
    "Spreadsheet",
    "Git & GitHub",
    "Python",
  ];

  const copyTerminalOutput = () => {
    const text = `whoami: Adhitya Warman\nskills: C++, Java, HTML, CSS, JavaScript, React, Python\ncurrently_learning: Fullstack Development\nhonors:\n- BSI Financial Literacy Talkshow (Gebyar Ramadan 2026)\n- 3rd Place Provincial Videography Competition`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tech-stack" className="py-12 sm:py-24 px-4 sm:px-6 md:px-12 bg-[var(--bg-canvas)] border-b border-[var(--border-line)] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER INDEX */}
        <div className="flex items-center gap-4 text-xs font-mono text-[var(--accent-color)] uppercase tracking-widest mb-8 sm:mb-12">
          <span>06 / TECHNICAL STACK & CLI</span>
          <span className="w-12 h-px bg-[var(--accent-color)]" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* LEFT SIDE: TECH GRID */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-editorial tracking-tight text-[var(--text-main)] break-words">
              TECH <span className="italic text-[var(--accent-color)]">STACK</span>
            </h2>

            <p className="text-[var(--text-muted)] text-base leading-relaxed font-sans">
              Core technologies, frameworks, tools, and technical competencies utilized across software engineering and creative digital projects.
            </p>

            {/* REFINED TECHNICAL MONOSPACE GRID */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {techList.map((tech) => (
                <div
                  key={tech}
                  onMouseEnter={() => setActiveTech(tech)}
                  onMouseLeave={() => setActiveTech(null)}
                  className={`p-4 border font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-default flex items-center justify-between ${
                    activeTech === tech
                      ? "bg-[var(--text-main)] text-[var(--bg-canvas)] border-[var(--text-main)] translate-x-1"
                      : "bg-[var(--bg-surface)] text-[var(--text-main)] border-[var(--border-line)] hover:border-[var(--text-main)]"
                  }`}
                >
                  <span>{tech}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${activeTech === tech ? "bg-[var(--accent-color)]" : "bg-[var(--text-light)]"}`} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: HIGHLY POLISHED IDE TERMINAL */}
          <div className="lg:col-span-7">
            <div className="border border-[#121212] bg-[#121212] text-[#FAF9F5] rounded-none shadow-lg overflow-hidden font-mono">
              {/* TERMINAL HEADER BAR */}
              <div className="flex justify-between items-center px-5 py-3 border-b border-[#2A2A2A] bg-[#1A1A1A]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#E04F26]" />
                  <span className="text-xs text-[#8E8D88] uppercase tracking-wider">
                    adhitya@itera:~ (cli)
                  </span>
                </div>
                <button
                  onClick={copyTerminalOutput}
                  className="flex items-center gap-1.5 text-[11px] text-[#8E8D88] hover:text-[#FAF9F5] active:scale-95 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY ALL</span>
                    </>
                  )}
                </button>
              </div>

              {/* TERMINAL BODY */}
              <div className="p-4 sm:p-6 text-xs sm:text-sm space-y-5 leading-relaxed text-[#D0D0D0] overflow-x-auto">
                {/* $ whoami */}
                <div>
                  <div className="flex items-center gap-2 text-[#E04F26]">
                    <span>$</span>
                    <span className="text-[#FAF9F5]">whoami</span>
                  </div>
                  <p className="text-[#FAF9F5] pl-4 pt-1 font-semibold">
                    Adhitya Warman
                  </p>
                </div>

                {/* $ skills --list */}
                <div>
                  <div className="flex items-center gap-2 text-[#E04F26]">
                    <span>$</span>
                    <span className="text-[#FAF9F5]">skills --list</span>
                  </div>
                  <p className="text-[#A0A0A0] pl-4 pt-1">
                    C++, Java, HTML, CSS, JavaScript, React, Python
                  </p>
                </div>

                {/* $ currently_learning */}
                <div>
                  <div className="flex items-center gap-2 text-[#E04F26]">
                    <span>$</span>
                    <span className="text-[#FAF9F5]">currently_learning</span>
                  </div>
                  <p className="text-[#A0A0A0] pl-4 pt-1">
                    Fullstack Development
                  </p>
                </div>

                {/* $ get_honors */}
                <div>
                  <div className="flex items-center gap-2 text-[#E04F26]">
                    <span>$</span>
                    <span className="text-[#FAF9F5]">get_honors</span>
                  </div>
                  <div className="pl-4 pt-1 space-y-1 text-[#FAF9F5]">
                    <p className="flex items-center gap-2">
                      <span className="text-[#E04F26]">★</span>
                      <span>BSI Financial Literacy Talkshow 2026</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#E04F26]">★</span>
                      <span>3rd Place Provincial Videography Competition</span>
                    </p>
                  </div>
                </div>

                {/* BLINKING CURSOR PROMPT */}
                <div className="pt-2 flex items-center gap-2 text-[#E04F26]">
                  <span>$</span>
                  <span className="w-2 h-4 bg-[#E04F26] inline-block animate-pulse" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
