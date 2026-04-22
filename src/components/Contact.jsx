// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// function Contact() {
//   const [showEmail, setShowEmail] = useState(false);

//   return (
//     <section id="contact" className="py-24 bg-gradient-to-b from-slate-900/50 via-slate-800/40 to-slate-900/50 text-center text-white relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

//       <div className="max-w-4xl mx-auto relative z-10 px-6">
//         <motion.h2
//           className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           Contact Me
//         </motion.h2>
//         <motion.p
//           className="text-gray-300 mb-12 text-lg"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           Let's connect or collaborate!
//         </motion.p>

//         <motion.div
//           className="flex justify-center space-x-8 text-4xl"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <motion.a
//             href="https://github.com/pris1345"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 hover:text-white transition-colors relative group"
//             whileHover={{ scale: 1.2, y: -5 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <FaGithub />
//             <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//               GitHub
//             </span>
//           </motion.a>

//           <motion.a
//             href="https://www.linkedin.com/in/brijesh-d-9a2a03399/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 hover:text-white transition-colors relative group"
//             whileHover={{ scale: 1.2, y: -5 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <FaLinkedin />
//             <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//               Linkedin
//             </span>
//           </motion.a>

//           <motion.button
//             onClick={() => setShowEmail(true)}
//             className="text-gray-400 hover:text-white transition-colors relative group"
//             title="Click to view email"
//             whileHover={{ scale: 1.2, y: -5 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <FaEnvelope />
//             <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//               Email
//             </span>
//           </motion.button>
//         </motion.div>

//         <AnimatePresence>
//           {showEmail && (
//             <motion.div
//               initial={{ opacity: 0, y: 10, scale: 0.9 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: 10, scale: 0.9 }}
//               className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-cyan-500/30 px-8 py-6 rounded-xl shadow-2xl shadow-cyan-500/20"
//             >
//               <p className="text-lg font-semibold text-cyan-400 mb-4">
//                 brizeshd@gmail.com
//               </p>
//               <motion.button
//                 onClick={() => setShowEmail(false)}
//                 className="text-sm text-gray-400 hover:text-white transition-colors bg-slate-700/50 px-4 py-2 rounded-lg hover:bg-slate-600/50"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Close
//               </motion.button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }

// export default Contact;
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
