import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="/blue.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-white px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-cyan-400">Brijesh Dahal</span>
        </motion.h1>
        <motion.div
          className="text-2xl md:text-3xl font-semibold mb-4 h-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              2000,
              'UI/UX Designer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-cyan-400"
          />
        </motion.div>
        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          A passionate Developer focused on building responsive, efficient, and creative digital solutions.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#contact"
            className="border-2 border-cyan-400 text-cyan-400 font-semibold px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
