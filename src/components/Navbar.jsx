import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#Aboutme" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-xs uppercase tracking-[0.2em] text-[#888] hover:text-[#111] transition-colors duration-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/Resume_BRIJESH_DAHAL (2).pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-xs uppercase tracking-[0.1em] font-medium text-[#111] border border-[#111] px-5 py-2.5 hover:bg-[#111] hover:text-white transition-all duration-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.07 }}
            >
              CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-500
                    ${
                      scrolled
                        ? "h-14 bg-white/90 backdrop-blur-md border-b border-[#E5E5E5]"
                        : "h-[70px] bg-transparent border-b border-transparent"
                    }`}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Logo */}
        <motion.a
          href="#"
          className="font-display text-xl md:text-2xl font-semibold text-[#111] tracking-tight"
          whileHover={{ opacity: 0.6 }}
          transition={{ duration: 0.2 }}
        >
          Brijesh <span className="text-[#555]">Dahal</span>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="relative text-[0.7rem] uppercase tracking-[0.14em] text-[#888] hover:text-[#111] transition-colors duration-200 group pb-0.5"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#111] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <motion.a
            href="/Resume_BRIJESH_DAHAL (2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.7rem] uppercase tracking-[0.1em] font-medium text-[#111] border border-[#111] px-4 py-2 hover:bg-[#111] hover:text-white transition-all duration-200"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.4 }}
          >
            CV
          </motion.a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden z-50 flex flex-col gap-[5px] p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-[#111] transition-transform duration-300 ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-[#111] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-[#111] transition-transform duration-300 ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`}
          />
        </button>
      </motion.nav>
    </>
  );
}
