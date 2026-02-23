"use client"

import { motion } from "framer-motion"

export default function MyApproach() {
  const steps = [
    {
      number: "01",
      title: "Understand the Problem",
      desc: "I begin by deeply understanding the core problem, context, and user needs before writing a single line of code.",
    },
    {
      number: "02",
      title: "Design Clean Systems",
      desc: "I structure scalable architecture and intuitive user experiences with clarity and performance in mind.",
    },
    {
      number: "03",
      title: "Build & Refine",
      desc: "I implement modern solutions using efficient tools while continuously refining details for impact.",
    },
  ]

  return (
    <section className="relative py-28 px-6 bg-slate-950 overflow-hidden">

      {/* Subtle Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-20 text-center bg-gradient-to-r 
                     from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          My Approach
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 
                         rounded-3xl p-8 shadow-xl relative overflow-hidden"
            >
              {/* Number */}
              <div className="text-6xl font-bold text-cyan-500/20 mb-6">
                {step.number}
              </div>

              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {step.title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm">
                {step.desc}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                              transition duration-500 bg-gradient-to-br 
                              from-cyan-500/10 to-indigo-500/10" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}