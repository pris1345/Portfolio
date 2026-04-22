import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #D1D1D1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Soft radial fade in center so content stays clean */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,_white_40%,_transparent_100%)] pointer-events-none" />

      {/* Ghost watermark name */}
      <motion.span
        className="absolute select-none pointer-events-none font-display font-semibold text-[#111]/[0.04] text-[clamp(5rem,18vw,16rem)] leading-none whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.2 }}
      >
        Brijesh Dahal
      </motion.span>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl w-full text-center">
        {/* Name */}
        <motion.h1
          className="font-display text-[clamp(3rem,9vw,7rem)] font-semibold text-[#111] leading-[1.0] tracking-tight mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          Brijesh
          <span className="text-[#555]">Dahal</span>
        </motion.h1>

        <motion.div
          className="h-8 mb-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <span className="text-xs tracking-widest text-[#ccc]">—</span>
          <TypeAnimation
            sequence={["Frontend Developer", 2200, "UI / UX Designer", 2200]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
            className="text-xs uppercase tracking-[0.2em] text-[#888]"
          />
          <span className="text-xs tracking-widest text-[#ccc]">—</span>
        </motion.div>

        {/* Bio */}
        <motion.p
          className="text-sm md:text-base text-[#888] leading-relaxed max-w-xl mx-auto mb-12 font-light"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
        >
          Focused on building responsive, thoughtful digital experiences — where
          clean code meets considered design.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="text-[0.7rem] uppercase tracking-[0.12em] font-medium bg-[#111] text-white px-7 py-3 hover:bg-[#333] transition-colors duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="text-[0.7rem] uppercase tracking-[0.12em] font-medium text-[#111] border border-[#E5E5E5] px-7 py-3 hover:border-[#111] transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <span className="text-[0.6rem] uppercase tracking-[0.25em] text-[#ccc]">
            Scroll
          </span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-[#ccc] to-transparent"
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
