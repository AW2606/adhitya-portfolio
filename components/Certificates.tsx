"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Award, ShieldCheck, Bookmark, Maximize2, X, ZoomIn } from "lucide-react";

interface Certificate {
  id: string;
  number: string;
  title: string;
  category: string;
  issuer: string;
  date: string;
  badge: string;
  description: string;
  image?: string;
}

export default function Certificates() {
  const certificates: Certificate[] = [
    {
      id: "ossn-2023",
      number: "01",
      title: "Medali Emas — Olimpiade Sains & Statistika Nasional 2023",
      category: "NATIONAL SCIENCE OLYMPIAD",
      issuer: "YPI / OSSN Indonesia",
      date: "April 2023",
      badge: "GOLD MEDALIST",
      description:
        "Penghargaan Peraih Medali Emas bidang Informatika tingkat SMA/MA/SMK dengan Predikat A+ pada ajang Olimpiade Sains dan Statistika Nasional 2023.",
      image: "/sertif/PIAGAM OSSN.jpg",
    },
    {
      id: "ksn-2023",
      number: "02",
      title: "Medali Emas — Kejuaraan Sains Nasional (KSN) 2023",
      category: "NATIONAL SCIENCE OLYMPIAD",
      issuer: "PUSKANAS Indonesia",
      date: "April 2023",
      badge: "GOLD MEDALIST",
      description:
        "Piagam Penghargaan Peraih Medali Emas bidang Teknologi dan Informasi dengan Predikat A+ pada Kejuaraan Sains Nasional (KSN) 2023.",
      image: "/sertif/mydocument (1)-1.png",
    },
    {
      id: "iysho-2023",
      number: "03",
      title: "Medali Emas — Indonesian Youth Science & Health Olympiad",
      category: "NATIONAL COMPETITION",
      issuer: "PRESTIGE Cerdas Indonesia",
      date: "April 2023",
      badge: "GOLD MEDALIST",
      description:
        "Piagam Penghargaan Peraih Medali Emas bidang Informatika dengan Predikat A+ pada ajang Indonesian Youth Science and Health Olympiad 2023.",
      image: "/sertif/Piagam IYSHO 2023-1.png",
    },
    {
      id: "ospenas-2023",
      number: "04",
      title: "Olimpiade Sains & Kesehatan Hardiknas (OSPENAS) 2023",
      category: "NATIONAL COMPETITION",
      issuer: "PRESMANESIA",
      date: "Mei 2023",
      badge: "OSPENAS 2023",
      description:
        "Sertifikat Peserta Aktif Ajang Olimpiade Sains Tingkat Nasional bidang Teknologi dan Informasi pada Hari Pendidikan Nasional 2023.",
      image: "/sertif/mydocument (2)-1.png",
    },
    {
      id: "fospan-2023",
      number: "05",
      title: "Festival Olimpiade Sains & Prestasi Akademik Nasional",
      category: "NATIONAL OLYMPIAD",
      issuer: "Braindicator Indonesia",
      date: "Mei 2023",
      badge: "FOSPAN 2023",
      description:
        "Sertifikat Peserta Aktif Kompetisi Tingkat Nasional Festival Olimpiade Sains dan Prestasi Akademik Nasional (FOSPAN) 2023 Bidang Informatika.",
      image: "/sertif/cert_Informatika - FOSPAN 2023-1.png",
    },
    {
      id: "p3h-kemenag",
      number: "06",
      title: "Pelatihan Pendamping Proses Produk Halal (P3H)",
      category: "MINISTRY TRAINING & ITERA",
      issuer: "BPJPH Kemenag RI & ITERA",
      date: "Maret 2026",
      badge: "BPJPH CERTIFIED",
      description:
        "Sertifikat Tanda Lulus Pelatihan Pendampingan Jaminan Produk Halal (20 Jam) yang diselenggarakan oleh BPJPH Kementerian Agama RI bersama ITERA.",
      image: "/sertif/Sertifikat-Pelatihan-4f1ff5ce-db0f-44a2-bdbf-a840c406450d-1.png",
    },
    {
      id: "casio-teacher",
      number: "07",
      title: "CASIO Education 2nd Math Competition West Sumatra",
      category: "TECHNICAL COMPETITION",
      issuer: "CASIO Education & Disdik Sumbar",
      date: "September 2022",
      badge: "CASIO COMPETITION",
      description:
        "Sertifikat Peserta Competition CLASSWIZ Mathematics & Technology yang diselenggarakan oleh CASIO Education Indonesia dan Dinas Pendidikan Sumbar.",
      image: "/sertif/SERTIFIKAT CASIO-1.png",
    },
    {
      id: "asprak-dtd",
      number: "08",
      title: "Asisten Praktikum Dasar Teknologi Digital (DTD)",
      category: "ACADEMIC LAB ASSISTANT",
      issuer: "Pusat TPB ITERA",
      date: "Gasal 2025/2026",
      badge: "ASPRAK DTD",
      description:
        "Sertifikat Resmi Asisten Praktikum Mata Kuliah Dasar Teknologi Digital (UI/UX & Web Development) TPB ITERA Semester Gasal 2025/2026.",
      image: "/sertif/Adhitya Warman_Sertifikat AsprakDTD_Gasal25-26-1.png",
    },
    {
      id: "asprak-pk",
      number: "09",
      title: "Asisten Praktikum Pengenalan Komputasi (PK)",
      category: "ACADEMIC LAB ASSISTANT",
      issuer: "Pusat TPB ITERA",
      date: "Genap 2025/2026",
      badge: "ASPRAK PK",
      description:
        "Sertifikat Resmi Asisten Praktikum Mata Kuliah Pengenalan Komputasi TPB ITERA Semester Genap 2025/2026.",
      image: "/sertif/Adhitya Warman_Sertifikat AsprakPK_Genap25-26-1.png",
    },
    {
      id: "hmif-mengabdi",
      number: "10",
      title: "Volunteer HMIF Mengabdi — Literasi, Kebudayaan & Teknologi",
      category: "ORGANIZATION & SERVICE",
      issuer: "HMIF ITERA",
      date: "September 2025",
      badge: "HMIF VOLUNTEER",
      description:
        "Sertifikat Apresiasi atas partisipasi aktif dan dedikasi sebagai Volunteer HMIF Mengabdi bertema Literasi, Kebudayaan, dan Teknologi.",
      image: "/sertif/Adhitya Warman.png",
    },
    {
      id: "last-party-tb2",
      number: "11",
      title: "Ketua Pelaksana 'The Last Party' TPB ITERA",
      category: "LEADERSHIP & MANAGEMENT",
      issuer: "Program Lurah Asrama TPB ITERA",
      date: "Desember 2024",
      badge: "PROJECT LEADER",
      description:
        "Sertifikat Penghargaan sebagai Ketua Pelaksana kegiatan The Last Party diselenggarakan oleh Lurah & Wakil Lurah TB2 Asrama TPB ITERA.",
      image: "/sertif/IMG-20241220-WA0000.jpg",
    },
    {
      id: "volunteer-ao-2025",
      number: "12",
      title: "Volunteer Asrama Olympic x OASITER 2025",
      category: "CAMPUS EVENT VOLUNTEER",
      issuer: "Asrama Mahasiswa TPB ITERA",
      date: "Mei 2025",
      badge: "EVENT VOLUNTEER",
      description:
        "Sertifikat Penghargaan sebagai Volunteer Perlombaan Basket pada ajang Asrama Olympic x OASITER Asrama Mahasiswa TPB ITERA.",
      image: "/sertif/(Bulk 1) Sertifikat Volunteer AO - 10.png",
    },
    {
      id: "rw-asrama-tb2",
      number: "13",
      title: "Pengurus RW Lantai 3 Asrama TB-2 ITERA",
      category: "CAMPUS RESIDENTIAL LEADERSHIP",
      issuer: "Koordinator Asrama ITERA",
      date: "Periode 2024/2025",
      badge: "RESIDENTIAL LEADER",
      description:
        "Sertifikat Penghargaan atas dedikasi dan tanggung jawab menjabat sebagai RW Lantai 3 TB-2 Semester 2 Institut Teknologi Sumatera.",
      image: "/sertif/(Bulk 1) Sertifikat RWwakil rw 2025 - 26.png",
    },
    {
      id: "bsi-ramadan-2026",
      number: "14",
      title: "Talkshow Literasi Keuangan Syariah BSI 2026",
      category: "FINANCIAL LITERACY & SEMINAR",
      issuer: "PT Bank Syariah Indonesia Tbk",
      date: "Ramadan 2026",
      badge: "BSI LITERACY",
      description:
        "Sertifikat Peserta Talkshow Literasi Keuangan Syariah 'Generasi Emas Melek Finansial: Keuangan Syariah untuk Indonesia Maju' diselenggarakan oleh BSI dan Danantara Indonesia.",
      image: "/sertif/BSI.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const activeCert = certificates[currentIndex];

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
      if (modalOpen) {
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, currentIndex]);

  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    }),
  };

  return (
    <section id="certificates" className="py-12 sm:py-24 px-4 sm:px-6 md:px-12 bg-[var(--bg-canvas)] border-b border-[var(--border-line)] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER INDEX */}
        <div className="flex items-center justify-between mb-6 sm:mb-10 pb-4 border-b border-[var(--border-line)]">
          <div className="flex items-center gap-3 text-[11px] sm:text-xs font-mono text-[var(--accent-color)] uppercase tracking-widest">
            <span>04 / CERTIFICATES & HONORS</span>
            <span className="w-8 sm:w-12 h-px bg-[var(--accent-color)]" />
          </div>
          <span className="text-[11px] sm:text-xs font-mono text-[var(--text-light)] uppercase tracking-wider">
            [{currentIndex + 1} / {certificates.length}]
          </span>
        </div>

        {/* SECTION TITLE */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-editorial tracking-tight text-[var(--text-main)] leading-tight break-words">
            HONORS & <span className="italic text-[var(--accent-color)]">CERTIFICATES</span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base mt-2 sm:mt-3 max-w-xl font-sans">
            Verified national awards, academic certifications, government training credentials, and competitive achievements. Click image for full preview.
          </p>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div className="relative border border-[var(--border-line)] bg-[var(--bg-surface)] p-5 sm:p-8 md:p-12 shadow-xs">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeCert.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center"
            >
              {/* LEFT COLUMN: CERTIFICATE DETAILS */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                <div className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs text-[var(--text-light)] uppercase tracking-widest flex-wrap">
                  <span className="text-[var(--accent-color)] font-semibold">[{activeCert.number}]</span>
                  <span>/</span>
                  <span className="break-words">{activeCert.category}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-editorial tracking-tight text-[var(--text-main)] leading-snug sm:leading-tight break-words">
                  {activeCert.title}
                </h3>

                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed font-sans">
                  {activeCert.description}
                </p>

                {/* METADATA TAGS */}
                <div className="flex flex-wrap gap-2.5 sm:gap-4 pt-1 sm:pt-2 font-mono text-[11px] sm:text-xs">
                  <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-[var(--bg-muted)] border border-[var(--border-line)] text-[var(--text-main)] max-w-full break-words">
                    <span className="text-[var(--text-light)]">ISSUER: </span>
                    <span className="font-semibold">{activeCert.issuer}</span>
                  </div>
                  <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-[var(--bg-muted)] border border-[var(--border-line)] text-[var(--text-main)]">
                    <span className="text-[var(--text-light)]">DATE: </span>
                    <span className="font-semibold">{activeCert.date}</span>
                  </div>
                </div>

                {/* PREVIEW TRIGGER BUTTON */}
                <div className="pt-2">
                  <button
                    onClick={() => setModalOpen(true)}
                    type="button"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--text-main)] bg-[var(--bg-canvas)] text-[var(--text-main)] font-mono text-xs uppercase tracking-wider hover:bg-[var(--text-main)] hover:text-[var(--bg-canvas)] transition-all duration-300 cursor-pointer active:scale-95"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                    <span>PREVIEW CERTIFICATE</span>
                  </button>
                </div>
              </div>

              {/* RIGHT COLUMN: CERTIFICATE IMAGE DISPLAY (CLICKABLE FOR POPUP) */}
              <div className="lg:col-span-6 w-full">
                <div
                  onClick={() => setModalOpen(true)}
                  className="relative w-full h-[240px] sm:h-[340px] md:h-[400px] border border-[var(--border-line)] bg-[var(--bg-muted)] overflow-hidden shadow-2xs group flex flex-col justify-center items-center cursor-pointer transition-all duration-300 hover:border-[var(--text-main)]"
                >
                  {activeCert.image ? (
                    <div className="relative w-full h-full p-1.5 sm:p-2">
                      <Image
                        src={activeCert.image}
                        alt={activeCert.title}
                        fill
                        className="object-contain filter contrast-105 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                      {/* OVERLAY HOVER BADGE */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-mono text-xs uppercase tracking-widest">
                        <Maximize2 className="w-5 h-5 text-[var(--accent-color)]" />
                        <span>CLICK FOR PREVIEW</span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden bg-[var(--bg-muted)]">
                      <div className="flex justify-between items-start mb-6">
                        <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--accent-color)]" />
                        <span className="px-2.5 py-1 bg-[var(--accent-color)] text-white font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                          {activeCert.badge}
                        </span>
                      </div>

                      <div className="space-y-3 sm:space-y-4 my-4 sm:my-6">
                        <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-[var(--text-light)]">
                          <ShieldCheck className="w-4 h-4 text-[var(--accent-color)]" />
                          <span>OFFICIAL CREDENTIAL</span>
                        </div>
                        <p className="font-editorial italic text-xl sm:text-2xl text-[var(--text-main)] leading-snug">
                          "{activeCert.title}"
                        </p>
                      </div>

                      <div className="pt-4 sm:pt-6 border-t border-[var(--border-line)] flex items-center justify-between font-mono text-[11px] sm:text-xs text-[var(--text-light)]">
                        <span>{activeCert.issuer}</span>
                        <div className="flex items-center gap-1">
                          <Bookmark className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                          <span>VERIFIED</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* BOTTOM CONTROLS & PAGINATION BAR */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-[var(--border-line)]">
            
            {/* COUNTER */}
            <div className="text-xs font-mono text-[var(--text-light)] tracking-wider">
              CERTIFICATE <span className="text-[var(--accent-color)] font-semibold">0{currentIndex + 1}</span> / 0{certificates.length}
            </div>

            {/* DOTS PAGINATION */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {certificates.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? "w-6 sm:w-8 bg-[var(--accent-color)]"
                      : "w-1.5 sm:w-2 bg-[var(--border-line)] hover:bg-[var(--text-muted)]"
                  }`}
                />
              ))}
            </div>

            {/* BOTTOM NEXT & PREV BUTTONS */}
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-stretch sm:justify-end">
              <button
                onClick={prevSlide}
                aria-label="Previous Certificate"
                type="button"
                className="flex-1 sm:flex-none px-4 py-2.5 border border-[var(--border-line)] bg-[var(--bg-canvas)] text-[var(--text-main)] hover:border-[var(--text-main)] hover:text-[var(--accent-color)] active:scale-95 transition-all duration-300 shadow-2xs group cursor-pointer flex items-center justify-center gap-1.5 font-mono text-xs uppercase tracking-wider"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                <span>PREV</span>
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Certificate"
                type="button"
                className="flex-1 sm:flex-none px-4 py-2.5 border border-[var(--border-line)] bg-[var(--bg-canvas)] text-[var(--text-main)] hover:border-[var(--text-main)] hover:text-[var(--accent-color)] active:scale-95 transition-all duration-300 shadow-2xs group cursor-pointer flex items-center justify-center gap-1.5 font-mono text-xs uppercase tracking-wider"
              >
                <span>NEXT</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* FULL-SCREEN EDITORIAL LIGHTBOX / MODAL PREVIEW */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 overflow-hidden select-none"
          >
            {/* TOP BAR */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex items-start justify-between gap-4 pb-3 border-b border-white/10 text-white w-full max-w-6xl mx-auto shrink-0"
            >
              <div className="space-y-1 min-w-0 flex-1">
                <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-[var(--accent-color)] uppercase tracking-widest whitespace-nowrap overflow-hidden">
                  <span className="px-2 py-0.5 bg-[var(--accent-color)]/15 border border-[var(--accent-color)]/30 text-[var(--accent-color)] font-semibold shrink-0">
                    {activeCert.number} / {certificates.length}
                  </span>
                  <span className="text-white/40 font-normal shrink-0">•</span>
                  <span className="text-white/70 truncate">{activeCert.category}</span>
                </div>
                <h4 className="text-sm sm:text-lg font-editorial text-white tracking-tight leading-snug truncate">
                  {activeCert.title}
                </h4>
              </div>

              {/* SLEEK ROUND CLOSE BUTTON */}
              <button
                onClick={() => setModalOpen(false)}
                type="button"
                aria-label="Close preview"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white hover:text-black active:scale-95 transition-all duration-300 flex items-center justify-center shrink-0 cursor-pointer"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* CENTER IMAGE DISPLAY AREA (UNOBSTRUCTED) */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex-1 my-2 sm:my-4 flex items-center justify-center w-full max-w-6xl mx-auto overflow-hidden"
            >
              <div className="relative w-full h-[68vh] sm:h-[76vh] flex items-center justify-center">
                {activeCert.image ? (
                  <Image
                    src={activeCert.image}
                    alt={activeCert.title}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="100vw"
                    priority
                  />
                ) : (
                  <div className="p-6 sm:p-12 border border-white/20 bg-neutral-900 text-white max-w-xl w-full text-center space-y-4 rounded-sm">
                    <Award className="w-12 h-12 text-[var(--accent-color)] mx-auto" />
                    <span className="px-3 py-1 bg-[var(--accent-color)] text-white font-mono text-xs uppercase tracking-widest inline-block">
                      {activeCert.badge}
                    </span>
                    <h3 className="font-editorial italic text-2xl sm:text-3xl text-white">
                      "{activeCert.title}"
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-neutral-300">
                      {activeCert.description}
                    </p>
                    <p className="font-mono text-[11px] text-neutral-400">
                      ISSUER: {activeCert.issuer} ({activeCert.date})
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* FLOATING BOTTOM CONTROLS & INFO BAR */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="pt-3 border-t border-white/10 text-white/80 font-mono text-xs flex flex-col sm:flex-row items-center justify-between gap-3 w-full max-w-6xl mx-auto shrink-0"
            >
              <div className="text-[11px] sm:text-xs text-white/70 text-center sm:text-left">
                {activeCert.issuer} • <span className="text-[var(--accent-color)]">{activeCert.date}</span>
              </div>

              {/* IN-MODAL NAV CONTROLS */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  type="button"
                  aria-label="Previous certificate"
                  className="px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)] active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>PREV</span>
                </button>

                <span className="text-[11px] text-white/60 font-semibold px-2">
                  {currentIndex + 1} / {certificates.length}
                </span>

                <button
                  onClick={nextSlide}
                  type="button"
                  aria-label="Next certificate"
                  className="px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)] active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>NEXT</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
