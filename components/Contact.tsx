"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Linkedin, Github, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="pt-20 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 bg-[var(--bg-canvas)] border-b border-[var(--border-line)] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER INDEX */}
        <div className="flex items-center gap-4 text-xs font-mono text-[var(--accent-color)] uppercase tracking-widest mb-12">
          <span>07 / GET IN TOUCH</span>
          <span className="w-12 h-px bg-[var(--accent-color)]" />
        </div>

        {/* LARGE EDITORIAL CLOSING STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20 pb-12 sm:pb-16 border-b border-[var(--border-line)]"
        >
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-editorial leading-[0.95] sm:leading-[0.9] tracking-tight text-[var(--text-main)] break-words">
            LET'S BUILD <br />
            <span className="italic font-normal text-[var(--accent-color)]">SOMETHING</span> <br />
            <span className="font-sans font-light">MEANINGFUL.</span>
          </h2>
        </motion.div>

        {/* CONTACT & SOCIAL GRID */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: DIRECT CONTACT DETAILS */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-light)] mb-4">
              DIRECT CONTACT
            </h3>

            {/* EMAIL */}
            <a
              href="mailto:adhityawarman20060426@gmail.com"
              className="p-6 border border-[var(--border-line)] bg-[var(--bg-surface)] flex items-start gap-4 hover:border-[var(--text-main)] transition-colors block group shadow-xs"
            >
              <Mail className="w-5 h-5 text-[var(--accent-color)] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-mono text-[var(--text-light)] uppercase tracking-wider">Email</p>
                <p className="font-sans text-base font-semibold text-[var(--text-main)] group-hover:text-[var(--accent-color)] transition-colors mt-1 break-all">
                  adhityawarman20060426@gmail.com
                </p>
              </div>
            </a>

            {/* LOCATION */}
            <div className="p-6 border border-[var(--border-line)] bg-[var(--bg-surface)] flex items-start gap-4 shadow-xs">
              <MapPin className="w-5 h-5 text-[var(--accent-color)] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-mono text-[var(--text-light)] uppercase tracking-wider">Location</p>
                <p className="font-sans text-base font-semibold text-[var(--text-main)] mt-1">
                  Lampung Selatan, Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: SOCIAL CHANNELS */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-light)] mb-4">
              SOCIAL CHANNELS
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/adhityawarman26/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border border-[var(--border-line)] bg-[var(--bg-surface)] hover:border-[var(--text-main)] transition-all group flex flex-col justify-between active:scale-95 shadow-xs"
              >
                <div className="flex justify-between items-center mb-4">
                  <Instagram className="w-5 h-5 text-[var(--accent-color)]" />
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-light)] group-hover:text-[var(--accent-color)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--text-light)] uppercase">Instagram</p>
                  <p className="font-sans text-base font-semibold text-[var(--text-main)] group-hover:text-[var(--accent-color)] transition-colors">
                    @adhityawarman26
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/adhitya-warman-a99b5b322/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border border-[var(--border-line)] bg-[var(--bg-surface)] hover:border-[var(--text-main)] transition-all group flex flex-col justify-between active:scale-95 shadow-xs"
              >
                <div className="flex justify-between items-center mb-4">
                  <Linkedin className="w-5 h-5 text-[var(--accent-color)]" />
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-light)] group-hover:text-[var(--accent-color)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--text-light)] uppercase">LinkedIn</p>
                  <p className="font-sans text-base font-semibold text-[var(--text-main)] group-hover:text-[var(--accent-color)] transition-colors">
                    Adhitya Warman
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/AW2606"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border border-[var(--border-line)] bg-[var(--bg-surface)] hover:border-[var(--text-main)] transition-all group flex flex-col justify-between active:scale-95 shadow-xs"
              >
                <div className="flex justify-between items-center mb-4">
                  <Github className="w-5 h-5 text-[var(--accent-color)]" />
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-light)] group-hover:text-[var(--accent-color)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--text-light)] uppercase">GitHub</p>
                  <p className="font-sans text-base font-semibold text-[var(--text-main)] group-hover:text-[var(--accent-color)] transition-colors">
                    AW2606
                  </p>
                </div>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@awxsn_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border border-[var(--border-line)] bg-[var(--bg-surface)] hover:border-[var(--text-main)] transition-all group flex flex-col justify-between active:scale-95 shadow-xs"
              >
                <div className="flex justify-between items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[var(--accent-color)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 3v12.5a3.5 3.5 0 1 1-3.5-3.5c.17 0 .34.01.5.04v3.01a1.5 1.5 0 1 0 1.5 1.5V3h1.5c.68 0 1.35.13 1.98.38A4.98 4.98 0 0 0 15 8h2V5.99a3 3 0 0 1-2-2.83V3H9z"/>
                  </svg>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-light)] group-hover:text-[var(--accent-color)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--text-light)] uppercase">TikTok</p>
                  <p className="font-sans text-base font-semibold text-[var(--text-main)] group-hover:text-[var(--accent-color)] transition-colors">
                    AW X SN
                  </p>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* MINIMAL FOOTER */}
        <div className="pt-16 mt-20 border-t border-[var(--border-line)] flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-[var(--text-light)] uppercase">
          <p>© 2026 ADHITYA WARMAN. ALL RIGHTS RESERVED.</p>
          <p>INFORMATICS ENGINEERING — ITERA</p>
        </div>

      </div>
    </section>
  );
}