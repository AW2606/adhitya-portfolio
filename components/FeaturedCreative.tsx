"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturedCreative() {
  return (
    <section className="relative py-28 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-cyan-400 mb-16 text-center"
        >
          Featured Creative Work
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* ===== WEB NOVEL CARD (LOCAL HOVER EFFECT) ===== */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="group relative rounded-2xl p-8 border border-slate-800 shadow-xl cursor-pointer overflow-hidden bg-slate-900"
          >
            {/* Local Dreamy Hover Background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
                            bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-black" />

            {/* Local Glow Effect */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 
                            rounded-full blur-[120px] opacity-0 group-hover:opacity-100 
                            transition duration-700" />

            <div className="relative z-10">
              <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/novel-preview.JPG"
                  alt="Web Novel Preview"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2 transition-colors duration-500 
                             group-hover:text-purple-300">
                Web Novel Platform
              </h3>

              <p className="text-gray-400 text-sm transition-colors duration-500 
                            group-hover:text-gray-300">
                A personal storytelling space filled with poems,
                memories, and emotional narratives.
              </p>

              <div className="mt-6">
                <a
                  href="https://aw2606.github.io/Novel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition text-sm font-medium"
                >
                  Visit Web Novel →
                </a>
              </div>
            </div>
          </motion.div>

          {/* ===== TECH PROJECT CARD ===== */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl group"
          >
            <div className="relative z-10">
              <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/tech-preview.png"
                  alt="Tech Project"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                Tech Development Project
              </h3>

              <p className="text-gray-400 text-sm">
                Bridging creativity and code to power the modern web.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}