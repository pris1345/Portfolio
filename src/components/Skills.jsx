import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "fa-brands fa-react" },
  { name: "Tailwind CSS", icon: "fa-solid fa-wind" },
  { name: "JavaScript", icon: "fa-brands fa-js" },
  { name: "Node.js", icon: "fa-brands fa-node" },
  { name: "Git & GitHub", icon: "fa-brands fa-github" },
  { name: "HTML5", icon: "fa-brands fa-html5" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt" },
  { name: "Figma", icon: "fa-brands fa-figma" },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#F4F4F4] py-28 px-6 md:px-20 border-t border-[#E5E5E5]"
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
          02 — Skills
        </motion.p>

        {/* Heading + subtitle row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.h2
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold text-[#111] leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Tools I work <br />
            <span className="text-[#555]">with daily.</span>
          </motion.h2>

          <motion.p
            className="text-sm text-[#888] leading-relaxed max-w-xs font-light md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Always learning and improving — these are the technologies and tools
            I'm most comfortable with.
          </motion.p>
        </div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-[#E5E5E5]"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ backgroundColor: "#ffffff" }}
              className="group bg-[#F4F4F4] p-8 flex flex-col items-start gap-5 cursor-default transition-colors duration-300"
            >
              {/* Icon */}
              <i
                className={`${skill.icon} text-3xl text-[#aaa] group-hover:text-[#111] transition-colors duration-300`}
              />

              {/* Name */}
              <div>
                <p className="text-[0.8rem] font-medium text-[#111] tracking-tight">
                  {skill.name}
                </p>
                {/* Animated underline */}
                <div className="mt-1.5 h-px w-0 bg-[#111] group-hover:w-6 transition-all duration-400" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
