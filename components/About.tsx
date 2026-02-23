"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 bg-slate-950 overflow-hidden">

      {/* Subtle Glow Background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[180px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r 
                     from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 
                     rounded-3xl p-10 shadow-2xl"
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            I am an Informatics Engineering student at 
            <span className="text-cyan-400 font-medium">
              {" "}Institut Teknologi Sumatera
            </span>{" "}
            with strong interest in web development, system logic,
            and digital innovation.
          </p>

          <p className="text-gray-400 leading-relaxed mt-6">
            I combine technical problem-solving with creative storytelling
            through writing and videography to build impactful digital experiences.
          </p>

          {/* Highlight Box */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r 
                          from-cyan-500/10 to-indigo-500/10 
                          border border-cyan-500/20">
            <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              Creative Technologist Mindset
            </p>
            <p className="text-gray-300 mt-3">
              Blending engineering precision with artistic expression.
            </p>
          </div>

          {/* Tech Tags */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["Frontend", "UI/UX", "Storytelling", "Problem Solving"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm rounded-full 
                             bg-slate-800 border border-slate-700 
                             text-gray-300 hover:border-cyan-400 
                             transition"
                >
                  {tag}
                </span>
              )
            )}
          </div>

        </motion.div>
      </div>
    </section>
  )
}