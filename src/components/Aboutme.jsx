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
