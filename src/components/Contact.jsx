import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    label: "GitHub",
    handle: "@pris1345",
    href: "https://github.com/pris1345",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    handle: "Brijesh Dahal",
    href: "https://www.linkedin.com/in/brijesh-d-9a2a03399/",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    handle: "brizesh.d",
    href: "",
    icon: FaInstagram,
  },
];

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("brizeshd@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="bg-[#111] py-28 px-6 md:px-20 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          className="text-[0.65rem] uppercase tracking-[0.3em] text-white/30 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          04 — Contact
        </motion.p>

        {/* Big CTA heading */}
        <motion.h2
          className="font-display text-[clamp(3rem,9vw,8rem)] font-semibold text-white leading-[0.95] tracking-tight mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Let's build
          <br />
          <span className="text-white/30">something.</span>
        </motion.h2>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-16" />

        {/* Bottom row — email + socials */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          {/* Email block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/30 mb-3">
              Say hello
            </p>
            <button
              onClick={handleCopyEmail}
              className="group flex items-center gap-3 text-white text-lg md:text-2xl font-light tracking-tight hover:text-white/60 transition-colors duration-300"
            >
              brizeshd@gmail.com
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-[0.6rem] uppercase tracking-[0.15em] text-white/40 border border-white/20 px-2 py-1"
                  >
                    Copied!
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-[0.6rem] uppercase tracking-[0.15em] text-white/20 border border-white/10 px-2 py-1 group-hover:border-white/30 group-hover:text-white/40 transition-all duration-300"
                  >
                    Copy
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socials.map(({ label, handle, href, icon: Icon }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-white/40 hover:text-white transition-colors duration-300"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.5 }}
              >
                <Icon className="text-lg flex-shrink-0" />
                <div className="flex items-center gap-3">
                  <span className="text-[0.65rem] uppercase tracking-[0.15em]">
                    {label}
                  </span>
                  <span className="h-px w-0 bg-white/30 group-hover:w-8 transition-all duration-300" />
                  <span className="text-[0.75rem] text-white/20 group-hover:text-white/50 transition-colors duration-300">
                    {handle}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Footer line */}
        <motion.div
          className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/20">
            © 2025 Brijesh Dahal
          </p>
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/20">
            Designed & Built by Brijesh
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
