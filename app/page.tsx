"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import MyApproach from "@/components/MyApproach";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-[var(--bg-canvas)] text-[var(--text-main)] min-h-screen font-sans selection:bg-[var(--accent-color)] selection:text-white transition-colors duration-500">
      {/* Sticky Navigation */}
      <Navbar />

      <main>
        {/* 01. Hero Section */}
        <Hero />

        {/* 02. About & Synthesis Section */}
        <About />

        {/* 03. Projects Chapter Showcase Section */}
        <Projects />

        {/* 04. Certificates & Honors Animated Carousel Section */}
        <Certificates />

        {/* 05. Methodology / My Approach Section */}
        <MyApproach />

        {/* 06. Tech Stack & Terminal CLI Section */}
        <TechStack />

        {/* 07. Contact & Footer Section */}
        <Contact />
      </main>
    </div>
  );
}