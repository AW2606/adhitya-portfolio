"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-cyan-400 mb-12"
      >
        Contact
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT - Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-6"
        >
          <div className="flex items-center gap-4">
            <Phone className="text-cyan-400" />
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="font-semibold">+62 812 6860 6288</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-cyan-400" />
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="font-semibold break-all md:break-normal">
                adhityawarman20060426@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-cyan-400" />
            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p className="font-semibold">Lampung Selatan</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT - Social Media Links */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-900 p-8 rounded-2xl border border-slate-800 grid sm:grid-cols-2 gap-6"
        >
          {/* Instagram */}
          <a
            href="https://www.instagram.com/adhityawarman26/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-700 p-6 rounded-xl hover:border-cyan-400 transition group"
          >
            <Instagram className="text-cyan-400 mb-3 group-hover:scale-110 transition" />
            <p className="text-gray-400 text-sm">Instagram</p>
            <p className="font-semibold">@adhityawarman26</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/adhitya-warman-a99b5b322/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-700 p-6 rounded-xl hover:border-cyan-400 transition group"
          >
            <Linkedin className="text-cyan-400 mb-3 group-hover:scale-110 transition" />
            <p className="text-gray-400 text-sm">LinkedIn</p>
            <p className="font-semibold">Adhitya Warman</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AW2606"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-700 p-6 rounded-xl hover:border-cyan-400 transition group"
          >
            <Github className="text-cyan-400 mb-3 group-hover:scale-110 transition" />
            <p className="text-gray-400 text-sm">GitHub</p>
            <p className="font-semibold">AW2606</p>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@awxsn_"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-700 p-6 rounded-xl hover:border-cyan-400 transition group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan-400 mb-3 group-hover:scale-110 transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 3v12.5a3.5 3.5 0 1 1-3.5-3.5c.17 0 .34.01.5.04v3.01a1.5 1.5 0 1 0 1.5 1.5V3h1.5c.68 0 1.35.13 1.98.38A4.98 4.98 0 0 0 15 8h2V5.99a3 3 0 0 1-2-2.83V3H9z"/>
            </svg>
            <p className="text-gray-400 text-sm">TikTok</p>
            <p className="font-semibold">AW X SN</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
}