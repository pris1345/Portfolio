import { motion } from "framer-motion";

export default function Aboutme() {
  return (
    <section id="Aboutme" className="bg-gradient-to-b from-slate-900/50 via-slate-800/40 to-slate-900/50 text-white py-24 px-6 md:px-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <img
              src="img/my.jpg"
              alt="Brijesh Dahal"
              className="relative rounded-2xl shadow-2xl w-full border-2 border-cyan-500/50 group-hover:border-cyan-400 transition-all duration-300"
            />
          </div>
        </motion.div>

        <motion.div
          className="md:w-2/3 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            <span className="font-semibold text-white">Hello! I'm Brijesh Dahal</span> , a CSIT student with a deep passion for frontend web development and creating clean, modern, and responsive user interfaces.
          </p>
          <p className="text-lg leading-relaxed text-gray-200">
            I enjoy transforming ideas into visually appealing and functional web experiences using <span className="font-semibold text-cyan-400"> React, Tailwind CSS, and other modern frontend tools.</span> My main focus is on building websites that not only look great but also deliver smooth, user-friendly performance across all devices.

            As a developer, I believe every project should solve a real problem — and I take pride in understanding what clients need, then turning those goals into elegant, efficient designs.
          </p>
          <p className="text-lg leading-relaxed text-gray-200">
            I'm constantly learning new technologies and improving my craft to create better, faster, and more intuitive web solutions. My goal is to help individuals and businesses bring their ideas to life on the web through thoughtful design and solid frontend development.
          </p>
          <motion.a
            href="#contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}