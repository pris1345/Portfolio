import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Wildfire Prediction System",
      img: "img/forest.png",
      desc: "A web app predicting forest fire risk across Nepal using machine learning ( FastAPI + React).",
      code: "https://github.com/pris1345/Forest_Fire_Prediction",
    },
    {
      title: "Portfolio Website",
      img: "img/port.png",
      desc: "My personal portfolio showcasing projects, skills, and resume — built with React + Tailwind.",
      code: "https://github.com/pris1345/Portfolio",
    },
    // {
    //   title: "UI/UX Figma Design",
    //   img: "img/ui.png",
    //   desc: "A complete UI/UX design for a modern web application created in Figma.",
    //   code: "",
    // }
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-slate-900/50 via-slate-800/40 to-slate-900/50 text-white py-24 px-6 md:px-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-16 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of my recent projects that showcase my skills and creativity.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-left flex-grow flex flex-col">
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 flex-grow leading-relaxed">{project.desc}</p>
                  <div className="flex justify-between">
                    <motion.a
                      href={project.code}
                      target="_blank"
                      className="border-2 border-cyan-500 text-cyan-400 font-semibold px-6 py-2 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Code
                    </motion.a>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
