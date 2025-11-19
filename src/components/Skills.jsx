import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "React", icon: "fa-brands fa-react", color: "text-cyan-400", bgGradient: "from-cyan-500/20 to-blue-500/20" },
    { name: "Tailwind CSS", icon: "fa-solid fa-wind", color: "text-sky-400", bgGradient: "from-sky-500/20 to-cyan-500/20" },
    { name: "JavaScript", icon: "fa-brands fa-js", color: "text-yellow-400", bgGradient: "from-yellow-500/20 to-orange-500/20" },
    { name: "Node.js", icon: "fa-brands fa-node", color: "text-green-500", bgGradient: "from-green-500/20 to-emerald-500/20" },
    { name: "Git & GitHub", icon: "fa-brands fa-github", color: "text-gray-300", bgGradient: "from-gray-500/20 to-slate-500/20" },
    { name: "HTML5", icon: "fa-brands fa-html5", color: "text-orange-500", bgGradient: "from-orange-500/20 to-red-500/20" },
    { name: "CSS3", icon: "fa-brands fa-css3", color: "text-blue-500", bgGradient: "from-blue-500/20 to-indigo-500/20" },
    { name: "Figma", icon: "fa-brands fa-figma", color: "text-pink-500", bgGradient: "from-pink-500/20 to-purple-500/20" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-slate-900/50 via-slate-800/40 to-slate-900/50 text-white py-24 px-6 md:px-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-16 text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm always learning and improving. Here are the technologies and tools I'm most comfortable with.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 }
              }}
              className="group relative"
            >
              <div className={`
                                bg-gradient-to-br ${skill.bgGradient}
                                backdrop-blur-xl border border-white/10
                                p-6 rounded-2xl shadow-xl
                                hover:shadow-2xl hover:shadow-cyan-500/30
                                transition-all duration-300
                                relative overflow-hidden
                            `}>
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="flex flex-col items-center gap-4 relative z-10">
                  <motion.i
                    className={`${skill.icon} text-6xl ${skill.color}`}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  ></motion.i>
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                </div>

                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${skill.bgGradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
