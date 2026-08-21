"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Video, FileCheck } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Web Novel Platform",
      category: "CREATIVE WRITING & WEB PLATFORM",
      description:
        "A personal storytelling space filled with poems, memories, and emotional narratives. Creative writing website built with HTML & CSS and deployed via GitHub Pages.",
      tech: ["HTML", "CSS", "GitHub Pages", "Storytelling"],
      link: "https://aw2606.github.io/Novel/",
      image: "/novel-preview.JPG",
    },
    {
      number: "02",
      title: "DTD17 Web Project",
      category: "INTERACTIVE UI DEVELOPMENT",
      description:
        "Interactive structured UI deployed using Vercel. Bridging creativity and code to power the modern web.",
      tech: ["UI Development", "Vercel", "Frontend Engineering"],
      image: "/tech-preview.png",
    },
    {
      number: "03",
      title: "Automatic Assignment Correction System",
      category: "PYTHON AUTOMATION & ALGORITHMS",
      description:
        "A Python-based automated grading tool designed to streamline the evaluation process. Utilizing string matching and logical validation to ensure precise and objective assignment scoring.",
      tech: ["Python", "Automated Evaluation", "String Matching", "Validation"],
    },
    {
      number: "04",
      title: "Videography Competition",
      category: "CREATIVE MEDIA & DIRECTION",
      description: "3rd place provincial videography competition as crew and actor.",
      tech: ["Videography", "Acting", "Crew & Direction", "Provincial Award"],
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-24 px-4 sm:px-6 md:px-12 bg-[var(--bg-canvas)] border-b border-[var(--border-line)] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER INDEX */}
        <div className="flex items-center justify-between mb-8 sm:mb-12 pb-4 sm:pb-6 border-b border-[var(--border-line)]">
          <div className="flex items-center gap-3 text-xs font-mono text-[var(--accent-color)] uppercase tracking-widest">
            <span>03 / SELECTED WORKS</span>
            <span className="w-8 sm:w-12 h-px bg-[var(--accent-color)]" />
          </div>
          <span className="text-[11px] sm:text-xs font-mono text-[var(--text-light)] uppercase tracking-wider hidden sm:inline">
            CHAPTERS 01 — 04
          </span>
        </div>

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl lg:text-7xl font-editorial tracking-tight text-[var(--text-main)] mb-8 sm:mb-16 break-words"
        >
          FEATURED <span className="italic text-[var(--accent-color)]">PROJECTS</span>
        </motion.h2>

        {/* EDITORIAL CHAPTER SHOWCASES */}
        <div className="space-y-10 sm:space-y-16 lg:space-y-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="group grid lg:grid-cols-12 gap-6 lg:gap-12 items-center pb-10 sm:pb-16 border-b border-[var(--border-line)] last:border-b-0"
            >
              {/* LEFT SIDE: PROJECT DETAILS */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-6 order-2 lg:order-1">
                <div className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs text-[var(--text-light)] tracking-widest uppercase flex-wrap">
                  <span className="text-[var(--accent-color)] font-semibold">[{project.number}]</span>
                  <span>/</span>
                  <span className="break-words">{project.category}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-editorial tracking-tight text-[var(--text-main)] group-hover:text-[var(--accent-color)] transition-colors duration-300 break-words">
                  {project.title}
                </h3>

                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider bg-[var(--bg-muted)] text-[var(--text-main)] border border-[var(--border-line)] max-w-full break-words"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINK BUTTON */}
                {project.link && (
                  <div className="pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[var(--text-main)] uppercase tracking-widest group-hover:text-[var(--accent-color)] transition-colors duration-300"
                    >
                      <span>VISIT PROJECT</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-[var(--accent-color)]" />
                    </a>
                  </div>
                )}
              </div>

              {/* RIGHT SIDE: VISUAL SHOWCASE */}
              <div className="lg:col-span-7 order-1 lg:order-2 w-full overflow-hidden">
                <div className="relative w-full overflow-hidden border border-[var(--border-line)] bg-[var(--bg-surface)] p-2 sm:p-3 shadow-2xs">
                  {project.image ? (
                    <div className="relative w-full h-[220px] sm:h-[340px] md:h-[400px] overflow-hidden bg-[var(--bg-muted)]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ) : project.number === "03" ? (
                    <div className="w-full h-full min-h-[260px] bg-[#121212] p-4 sm:p-8 font-mono text-xs text-[#FAF9F5] flex flex-col justify-between border border-[#121212] overflow-x-auto max-w-full">
                      <div className="flex justify-between items-center border-b border-[#333333] pb-3 text-[#8E8D88] gap-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <FileCheck className="w-4 h-4 text-[#E04F26]" />
                          <span>grader_engine.py</span>
                        </div>
                        <span className="text-[9px] uppercase bg-[#222222] px-2 py-0.5 text-[#FAF9F5]">
                          Python System
                        </span>
                      </div>

                      <div className="space-y-2.5 my-4 font-mono text-[11px] sm:text-xs overflow-x-auto">
                        <p className="text-[#8E8D88]"># Automated Grading Algorithm</p>
                        <p>
                          <span className="text-[#E04F26]">def</span> evaluate(submission):
                        </p>
                        <p className="pl-3 sm:pl-4 text-[#A0A0A0]">
                          score = calculate_similarity(submission, rubric)
                        </p>
                        <p className="pl-3 sm:pl-4 text-[#A0A0A0]">
                          validation = verify_constraints(submission)
                        </p>
                        <p className="pl-3 sm:pl-4 text-[#E04F26]">return</p>
                        <p className="pl-6 sm:pl-8 text-green-400">
                          &#123;"score": score, "valid": validation, "status": "PASSED"&#125;
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#333333] flex justify-between items-center text-[10px] sm:text-[11px] text-[#8E8D88]">
                        <span>STATUS: READY</span>
                        <span className="text-[#E04F26]">100% ACCURACY</span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full min-h-[260px] bg-[var(--bg-muted)] p-5 sm:p-8 flex flex-col justify-between border border-[var(--border-line)] relative overflow-hidden transition-colors duration-500">
                      <div className="flex justify-between items-center text-xs font-mono text-[var(--text-muted)] gap-2">
                        <div className="flex items-center gap-2">
                          <Video className="w-4 h-4 text-[var(--accent-color)]" />
                          <span>CINEMATIC PRODUCTION</span>
                        </div>
                        <span className="px-2 py-0.5 bg-[var(--accent-color)] text-white text-[9px] sm:text-[10px] uppercase font-bold tracking-widest shrink-0">
                          3RD PLACE
                        </span>
                      </div>

                      <div className="my-4 sm:my-6 space-y-2 sm:space-y-3">
                        <h4 className="text-2xl sm:text-3xl font-editorial italic text-[var(--text-main)]">
                          Provincial Media Award
                        </h4>
                        <p className="text-xs sm:text-sm font-sans text-[var(--text-muted)] max-w-md">
                          Combining visual storytelling, camera operations, and performative performance in a high-stakes competition.
                        </p>
                      </div>

                      <div className="flex items-center justify-between font-mono text-[11px] sm:text-xs text-[var(--text-light)] pt-3 border-t border-[var(--border-line)]">
                        <span>ROLE: CREW & ACTOR</span>
                        <span>PROVINCIAL LEVEL</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
