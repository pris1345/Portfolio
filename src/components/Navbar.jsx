import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <nav className="fixed w-full top-0 z-50 bg-slate-950/40 backdrop-blur-xl flex justify-between items-center px-6 md:px-10 py-4 border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5">
            <motion.h1
                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
            >
                Brijesh Dahal
            </motion.h1>
            <div className="flex gap-4 md:gap-6 text-gray-300 text-sm md:text-base">
                <motion.a
                    href="#skills"
                    className="hover:text-cyan-400 transition-colors relative group"
                    whileHover={{ y: -2 }}
                >
                    Skills
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
                <motion.a
                    href="#projects"
                    className="hover:text-cyan-400 transition-colors relative group"
                    whileHover={{ y: -2 }}
                >
                    Projects
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
                <motion.a
                    href="#contact"
                    className="hover:text-cyan-400 transition-colors relative group"
                    whileHover={{ y: -2 }}
                >
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
                <motion.a
                    href="/Resume_BRIJESH_DAHAL.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-400 transition-colors relative group"
                    whileHover={{ y: -2 }}
                >
                    CV
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
                <motion.a
                    href="#Aboutme"
                    className="hover:text-cyan-400 transition-colors relative group"
                    whileHover={{ y: -2 }}
                >
                    AboutMe
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
            </div>
        </nav>
    );
}
