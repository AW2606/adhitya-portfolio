export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/70 backdrop-blur-lg border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <h1 className="font-bold text-xl text-cyan-400 tracking-tighter">
          AW.
        </h1>

        {/* NAVIGATION LINKS */}
        <div className="flex items-center space-x-6 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
          
          {/* CTA BUTTON */}
          <a
            href="/cv/adhitya-warman-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 px-4 py-2 rounded-lg text-black font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/10 active:scale-95"
          >
            View CV
          </a>
        </div>
      </div>
    </nav>
  );
}