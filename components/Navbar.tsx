"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "projects", "certificates", "approach", "tech-stack", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 250 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");

    // Close mobile menu drawer first
    setMobileMenuOpen(false);

    // Defer scroll calculation until drawer collapses to prevent height shift miscalculations
    setTimeout(() => {
      if (!targetId || targetId === "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("");
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        setActiveSection(targetId);
        window.history.pushState(null, "", href);
      }
    }, 150);
  };

  const navLinks = [
    { name: "About", href: "#about", num: "02" },
    { name: "Projects", href: "#projects", num: "03" },
    { name: "Certificates", href: "#certificates", num: "04" },
    { name: "Approach", href: "#approach", num: "05" },
    { name: "Tech Stack", href: "#tech-stack", num: "06" },
    { name: "Contact", href: "#contact", num: "07" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? "bg-[var(--bg-canvas)]/95 backdrop-blur-md border-b border-[var(--border-line)] py-3.5 shadow-xs"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
        {/* BRAND MARK */}
        <a
          href="#"
          className="group flex items-center gap-2 font-mono tracking-wider uppercase text-[var(--text-main)] font-semibold text-xs shrink-0"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent-color)] group-hover:scale-125 transition-transform duration-300" />
          <span className="truncate">ADHITYA WARMAN</span>
          <span className="text-[var(--text-light)] font-normal hidden sm:inline">
            / 2026
          </span>
        </a>

        {/* CONTROLS & NAVIGATION */}
        <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-8">
          {/* DESKTOP JUMP LINKS (LG SCREENS 1024PX+) */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-mono tracking-wider uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors duration-300 hover:text-[var(--accent-color)] ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[var(--accent-color)] font-semibold"
                    : "text-[var(--text-muted)]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* THEME SWITCHER BUTTON */}
          <button
            onClick={toggleTheme}
            type="button"
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            className="flex items-center gap-2 px-3 py-1.5 border border-[var(--border-line)] bg-[var(--bg-surface)] text-[var(--text-main)] hover:border-[var(--text-main)] active:scale-95 transition-all duration-300 shadow-2xs group cursor-pointer"
          >
            {theme === "light" ? (
              <>
                <Moon className="w-3.5 h-3.5 text-[var(--text-main)] group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-mono text-[11px] uppercase tracking-wider hidden sm:inline">Dark</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-[var(--accent-color)] group-hover:rotate-45 transition-transform duration-300" />
                <span className="font-mono text-[11px] uppercase tracking-wider hidden sm:inline">Light</span>
              </>
            )}
          </button>

          {/* VIEW CV CTA BUTTON */}
          <a
            href="/cv/cv-adhitya-warman.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 border border-[var(--text-main)] text-[var(--text-main)] font-mono text-xs font-medium uppercase tracking-wider hover:bg-[var(--text-main)] hover:text-[var(--bg-canvas)] active:scale-95 transition-all duration-300 shrink-0"
          >
            <span>View CV</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* MOBILE & TABLET HAMBURGER MENU BUTTON (< 1024PX) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="lg:hidden p-1.5 border border-[var(--border-line)] bg-[var(--bg-surface)] text-[var(--text-main)] hover:border-[var(--text-main)] active:scale-95 transition-all duration-300 cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[var(--accent-color)]" />
            ) : (
              <Menu className="w-5 h-5 text-[var(--text-main)]" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE & TABLET EXPANDABLE DRAWER OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-[var(--bg-canvas)] border-b border-[var(--border-line)] px-4 sm:px-6 md:px-12 py-6 shadow-md"
          >
            <div className="max-w-7xl mx-auto space-y-4">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-color)] pb-2 border-b border-[var(--border-line)]">
                // NAVIGATION MENU
              </p>

              <nav className="grid gap-3 pt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between p-3 border font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-98 ${
                      activeSection === link.href.replace("#", "")
                        ? "bg-[var(--text-main)] text-[var(--bg-canvas)] border-[var(--text-main)] font-semibold"
                        : "bg-[var(--bg-surface)] text-[var(--text-main)] border-[var(--border-line)] hover:border-[var(--text-main)]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] opacity-70">[{link.num}]</span>
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-[var(--border-line)] flex items-center justify-between font-mono text-[11px] text-[var(--text-light)] uppercase">
                <span>INFORMATICS — ITERA</span>
                <span>2026 EDITION</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}