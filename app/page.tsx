"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import TypingText from "@/components/TypingText";
import Contact from "@/components/Contact";
import FeaturedCreative from "@/components/FeaturedCreative";
import About from "@/components/About";
import MyApproach from "@/components/MyApproach";

export default function Home() {
  // Logika Parallax untuk Gambar Hero
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white selection:bg-cyan-500/30">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
            {/* LEFT SIDE CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-cyan-400">Adhitya Warman</span>
              </h1>
              
              <div className="mt-6 text-lg text-gray-400 min-h-[1.5em]">
                <TypingText text="Building clean, scalable, and meaningful digital products." />
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://github.com/AW2606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-400 px-6 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition-all"
                >
                  GitHub
                </a>
                <a
                  href="/cv/adhitya-warman-cv.pdf"
                  target="_blank"
                  className="bg-cyan-500 px-6 py-2 rounded-lg text-black font-semibold hover:bg-cyan-400 transition-all"
                >
                  Download CV
                </a>
              </div>
            </motion.div>

            {/* RIGHT SIDE - IMAGE WITH PARALLAX */}
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/20">
                <Image
                  src="/images/adhitya.png"
                  alt="Adhitya Warman"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. FEATURED CREATIVE WORK */}
        <FeaturedCreative />

        {/* 3. ABOUT SECTION */}
        <About />

        {/* 4. PROJECTS SECTION */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-10 text-cyan-400">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8 perspective-1000">
              <ProjectCard
                title="Web Novel"
                description="Creative writing website built with HTML & CSS and deployed via GitHub Pages."
                link="https://aw2606.github.io/Novel/"
              />
              <ProjectCard
                title="DTD17 Web Project"
                description="Interactive structured UI deployed using Vercel."
              />
              <ProjectCard
                title="Automatic Assignment Correction System"
                description="A Python-based automated grading tool designed to streamline the evaluation process. Utilizing string matching and logical validation to ensure precise and objective assignment scoring."
              />
              <ProjectCard
                title="Videography Competition"
                description="3rd place provincial videography competition as crew and actor."
              />
            </div>
          </motion.div>
        </section>

        {/* 5. MY APPROACH (Modular Component) */}
        <MyApproach />

        {/* 6. TECH STACK SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-10 text-cyan-400">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "C++", "HTML", "CSS", "JavaScript",
                "DOCS", "Spreadsheet", "Git & GitHub", "Python"
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center hover:border-cyan-400 transition-colors cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 7. CONTACT SECTION */}
        <Contact />

        {/* 8. TERMINAL SECTION */}
<section className="max-w-4xl mx-auto px-6 py-24 pb-40">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="bg-black rounded-xl p-6 font-mono text-sm md:text-base text-green-400 border border-slate-800 shadow-2xl">
      <div className="flex gap-2 mb-4 border-b border-slate-800 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="space-y-2">
        <p><span className="text-blue-400">$</span> whoami</p>
        <p className="text-white">Adhitya Warman</p>
        
        <p className="pt-2"><span className="text-blue-400">$</span> skills --list</p>
        <p className="text-white">C++, HTML, CSS, JavaScript, Python</p>
        
        <p className="pt-2"><span className="text-blue-400">$</span> currently_learning</p>
        <p className="text-white">Fullstack Development</p>

        {/* --- TAMBAHAN BAGIAN AWARDEE --- */}
        <p className="pt-2"><span className="text-blue-400">$</span> get_honors</p>
        <p className="text-white">
          <span className="text-yellow-400">★</span> BSI Scholarship Awardee Batch 5
        </p>
        <p className="text-white">
          <span className="text-yellow-400">★</span> 3rd Place Provincial Videography Competition
        </p>
        {/* ------------------------------- */}

        <p className="pt-2 animate-pulse">
          <span className="text-blue-400">$</span>
          <span className="ml-2 w-2 h-5 bg-green-400 inline-block align-middle"></span>
        </p>
      </div>
    </div>
  </motion.div>
</section>
      </main>
    </>
  );
}