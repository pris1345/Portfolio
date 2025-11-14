import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
  id="home"
  className="relative h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('img/my.jpg')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
  <div className="relative z-10 text-white px-6">
    <h1 className="text-5xl md:text-6xl font-bold mb-4">
      Hi, I’m <span className="text-cyan-400">Brijesh Dahal</span>
    </h1>
    <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl mx-auto">
      A passionate Developer focused on building responsive, efficient, and creative digital solutions.
    </p>
    <div className="flex justify-center gap-4">
      <a
        href="#projects"
        className="bg-cyan-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-cyan-400 transition"
      >
        View My Work
      </a>
      <a
        href="#contact"
        className="border border-cyan-500 text-cyan-400 font-semibold px-6 py-3 rounded-lg hover:bg-cyan-500 hover:text-black transition"
      >
        Contact Me
      </a>
    </div>
  </div>
</section>

  );
}
