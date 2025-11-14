export default function Aboutme() {
  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/3">
          <img
            src="img/my.jpg"
            alt="Brijesh Dahal"
            className="rounded-2xl shadow-lg w-full border-4 border-cyan-500"
          />
        </div>

        <div className="md:w-2/3 space-y-5">
          <h2 className="text-4xl font-bold text-cyan-400">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            <span className="font-semibold text-white">Hello! I’m Brijesh Dahal</span> , a CSIT student with a deep passion for frontend web development and creating clean, modern, and responsive user interfaces.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            I enjoy transforming ideas into visually appealing and functional web experiences using <span className="font-semibold text-white"> React, Tailwind CSS, and other modern frontend tools.</span> My main focus is on building websites that not only look great but also deliver smooth, user-friendly performance across all devices.

            As a developer, I believe every project should solve a real problem — and I take pride in understanding what clients need, then turning those goals into elegant, efficient designs.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            I’m constantly learning new technologies and improving my craft to create better, faster, and more intuitive web solutions. My goal is to help individuals and businesses bring their ideas to life on the web through thoughtful design and solid frontend development.
          </p>
          <a
            href="#contact"
            className="inline-block bg-cyan-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-all"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>

  )
}