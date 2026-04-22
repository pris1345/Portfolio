// import { motion } from "framer-motion";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Wildfire Prediction System",
//       img: "img/forest.png",
//       desc: "A web app predicting forest fire risk across Nepal using machine learning ( FastAPI + React).",
//       code: "https://github.com/pris1345/Forest_Fire_Prediction",
//     },

//     {
//       title: "E-commerce",
//       img: "img/ecom.png",
//       desc: "A E-commerce website for differenet products along with it's catalog.",
//       code: "https://github.com/pris1345/E-commerce",
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       className="bg-gradient-to-b from-slate-900/50 via-slate-800/40 to-slate-900/50 text-white py-24 px-6 md:px-20 relative overflow-hidden"
//     >
//       {/* Background decoration */}
//       <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

//       <div className="max-w-6xl mx-auto text-center relative z-10">
//         <motion.h2
//           className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           My Projects
//         </motion.h2>
//         <motion.p
//           className="text-gray-300 mb-16 text-lg max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           Here are some of my recent projects that showcase my skills and
//           creativity.
//         </motion.p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               whileHover={{ y: -10 }}
//               className="group relative"
//             >
//               <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 h-full flex flex-col">
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={project.img}
//                     alt={project.title}
//                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 </div>
//                 <div className="p-6 text-left flex-grow flex flex-col">
//                   <h3 className="text-2xl font-semibold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
//                     {project.desc}
//                   </p>
//                   <div className="flex justify-between">
//                     <motion.a
//                       href={project.code}
//                       target="_blank"
//                       className="border-2 border-cyan-500 text-cyan-400 font-semibold px-6 py-2 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       View Code
//                     </motion.a>
//                   </div>
//                 </div>
//                 {/* Glow effect */}
//                 <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Wildfire Prediction System",
    img: "img/forest.png",
    desc: "A web app predicting forest fire risk across Nepal using machine learning — built with FastAPI and React.",
    tags: ["React", "FastAPI", "Machine Learning"],
    code: "https://github.com/pris1345/Forest_Fire_Prediction",
  },
  {
    number: "02",
    title: "E-Commerce Platform",
    img: "img/ecom.png",
    desc: "A full e-commerce website for different products along with a complete product catalog.",
    tags: ["React", "Tailwind CSS"],
    code: "https://github.com/pris1345/E-commerce",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
          03 — Projects
        </motion.p>

        {/* Heading row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.h2
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold text-[#111] leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Selected <br />
            <span className="text-[#555]">work.</span>
          </motion.h2>

          <motion.p
            className="text-sm text-[#888] leading-relaxed max-w-xs font-light md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            A few recent projects that showcase my skills and approach to
            building for the web.
          </motion.p>
        </div>

        {/* Projects list */}
        <div className="flex flex-col gap-px bg-[#E5E5E5]">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group bg-white hover:bg-[#F4F4F4] transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row gap-0">
                {/* Image */}
                <div className="md:w-2/5 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-56 md:h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    {/* Number + title */}
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#ccc] mt-1">
                        {project.number}
                      </span>
                      <div className="flex gap-2 flex-wrap justify-end">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[0.6rem] uppercase tracking-[0.12em] text-[#888] border border-[#E5E5E5] px-2.5 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#111] leading-tight tracking-tight mb-4">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#888] leading-relaxed font-light max-w-sm">
                      {project.desc}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex items-center gap-6">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.12em] font-medium text-[#111] border border-[#111] px-5 py-2.5 hover:bg-[#111] hover:text-white transition-all duration-300 group/btn"
                    >
                      View Code
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          className="mt-12 flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="h-px flex-1 bg-[#E5E5E5]" />
          <a
            href="https://github.com/pris1345"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888] hover:text-[#111] transition-colors duration-200 flex items-center gap-2"
          >
            <i className="fa-brands fa-github text-sm" />
            More on GitHub
          </a>
          <div className="h-px flex-1 bg-[#E5E5E5]" />
        </motion.div>
      </div>
    </section>
  );
}
