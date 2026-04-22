// import { motion } from "framer-motion";

// export default function Aboutme() {
//   return (
//     <section id="Aboutme" className="bg-gradient-to-b from-slate-900/50 via-slate-800/40 to-slate-900/50 text-white py-24 px-6 md:px-20 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
//         <motion.div
//           className="md:w-1/3"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="relative group">
//             <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
//             <img
//               src="img/my.jpg"
//               alt="Brijesh Dahal"
//               className="relative rounded-2xl shadow-2xl w-full border-2 border-cyan-500/50 group-hover:border-cyan-400 transition-all duration-300"
//             />
//           </div>
//         </motion.div>

//         <motion.div
//           className="md:w-2/3 space-y-6"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//             About Me
//           </h2>
//           <p className="text-lg leading-relaxed text-gray-200">
//             <span className="font-semibold text-white">Hello! I'm Brijesh Dahal</span> , a CSIT student with a deep passion for frontend web development and creating clean, modern, and responsive user interfaces.
//           </p>
//           <p className="text-lg leading-relaxed text-gray-200">
//             I enjoy transforming ideas into visually appealing and functional web experiences using <span className="font-semibold text-cyan-400"> React, Tailwind CSS, and other modern frontend tools.</span> My main focus is on building websites that not only look great but also deliver smooth, user-friendly performance across all devices.

//             As a developer, I believe every project should solve a real problem — and I take pride in understanding what clients need, then turning those goals into elegant, efficient designs.
//           </p>
//           <p className="text-lg leading-relaxed text-gray-200">
//             I'm constantly learning new technologies and improving my craft to create better, faster, and more intuitive web solutions. My goal is to help individuals and businesses bring their ideas to life on the web through thoughtful design and solid frontend development.
//           </p>
//           <motion.a
//             href="#contact"
//             className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Let's Connect
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";

export default function Aboutme() {
  return (
    <section
      id="Aboutme"
      className="bg-white py-28 px-6 md:px-20 border-t border-[#E5E5E5]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          className="text-[0.65rem] uppercase tracking-[0.3em] text-[#888] mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          01 — About Me
        </motion.p>

        <div className="flex flex-col md:flex-row items-start gap-16">
          {/* Image */}
          <motion.div
            className="md:w-1/3 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Offset border frame */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#E5E5E5] z-0" />
              <img
                src="img/my.jpg"
                alt="Brijesh Dahal"
                className="relative z-10 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Quick facts below image */}
            <div className="mt-8 space-y-3 border-t border-[#E5E5E5] pt-6">
              {[
                { label: "Based in", value: "Nepal" },
                { label: "Focus", value: "Frontend Development" },
                { label: "Status", value: "Open to opportunities" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center"
                >
                  <span className="text-[0.65rem] uppercase tracking-[0.15em] text-[#aaa]">
                    {item.label}
                  </span>
                  <span className="text-[0.75rem] text-[#111] font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="md:w-2/3 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold text-[#111] leading-[1.05] tracking-tight mb-10">
              Crafting clean,
              <br />
              <span className="text-[#555]">thoughtful interfaces.</span>
            </h2>

            <div className="space-y-5 text-[0.92rem] text-[#555] leading-[1.85] font-light max-w-xl">
              <p>
                I'm{" "}
                <span className="text-[#111] font-medium">Brijesh Dahal</span>,
                a CSIT student with a deep passion for frontend web development
                and building clean, modern, and responsive user interfaces.
              </p>
              <p>
                I enjoy transforming ideas into functional web experiences using{" "}
                <span className="text-[#111] font-medium">
                  React, Tailwind CSS,
                </span>{" "}
                and other modern frontend tools. My focus is on websites that
                look great and deliver smooth, user-friendly performance across
                all devices.
              </p>
              <p>
                I believe every project should solve a real problem. I take
                pride in understanding what clients need, then turning those
                goals into elegant, efficient designs — constantly learning and
                improving to build better, faster, and more intuitive solutions.
              </p>
            </div>

            {/* Divider */}
            <div className="w-12 h-px bg-[#E5E5E5] my-8" />

            {/* CTA */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.12em] font-medium text-[#111] border border-[#111] px-7 py-3 hover:bg-[#111] hover:text-white transition-all duration-300 group"
              whileTap={{ scale: 0.97 }}
            >
              Let's Connect
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
