import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section id="contact" className="py-20 bg-gray-900 text-center text-white">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-400 mb-8">Let’s connect or collaborate!</p>

      <div className="flex justify-center space-x-8 text-3xl text-gray-400">
        <a
          href="https://github.com/pris1345"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <FaGithub />
        </a>

        {/* <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <FaLinkedin />
        </a> */}

        <button
          onClick={() => setShowEmail(true)}
          className="hover:text-white transition-colors"
          title="Click to view email"
        >
          <FaEnvelope />
        </button>
      </div>

      <AnimatePresence>
        {showEmail && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-20 right-1/4  bg-gray-800 border border-gray-700 px-6 py-4 rounded-xl shadow-lg"
          >
            <p className="text-lg font-semibold">
              📧 brizeshd@gmail.com
            </p>
            <button
              onClick={() => setShowEmail(false)}
              className="mt-3 text-sm text-gray-400 hover:text-white transition"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;
