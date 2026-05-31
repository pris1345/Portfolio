import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Movie_Search",
    img: "img/Movie.png",
    desc: "A movie search web page to browse, search, and save favorite movies using OMDb API — built with React, Tailwind CSS, Context API, and React Router.",
    tags: ["React", "Tailwind CSS"],
    code: "https://github.com/pris1345/Movie_search",
    demo: "https://movie-search-ashen-nu.vercel.app/",
  },
  {
    number: "02",
    title: "E-Commerce Platform",
    img: "img/ecommerce.png",
    desc: "A full e-commerce website for different products along with a complete product catalog.",
    tags: ["React", "Tailwind CSS"],
    code: "https://github.com/pris1345/Ecom",
    demo: "https://pris1345.github.io/E-commerce/",
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

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.12em] font-medium text-[#111] border border-[#111] px-5 py-2.5 hover:bg-[#111] hover:text-white transition-all duration-300 group/btn"
                    >
                      Demo
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
