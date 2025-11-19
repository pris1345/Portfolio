import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900/50 via-slate-800/40 to-slate-900/50 text-center text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10 px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's connect or collaborate!
        </motion.p>

        <motion.div
          className="flex justify-center space-x-8 text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/pris1345"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors relative group"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              GitHub
            </span>
          </motion.a>

          <motion.button
            onClick={() => setShowEmail(true)}
            className="text-gray-400 hover:text-white transition-colors relative group"
            title="Click to view email"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Email
            </span>
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {showEmail && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-cyan-500/30 px-8 py-6 rounded-xl shadow-2xl shadow-cyan-500/20"
            >
              <p className="text-lg font-semibold text-cyan-400 mb-4">
                brizeshd@gmail.com
              </p>
              <motion.button
                onClick={() => setShowEmail(false)}
                className="text-sm text-gray-400 hover:text-white transition-colors bg-slate-700/50 px-4 py-2 rounded-lg hover:bg-slate-600/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Contact;
