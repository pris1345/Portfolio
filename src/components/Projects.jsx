export default function Projects() {
  return (
   <section id="projects" className="bg-gray-900 text-white py-20 px-6 md:px-20">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-cyan-400 mb-12">My Projects</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "Wildfire Prediction System",
          img: "img/forest.png",
          desc: "A web app predicting forest fire risk across Nepal using machine learning ( FastAPI + React).",
          code: "https://github.com/pris1345/Forest_Fire_Prediction",
        },
        {
          title: "Portfolio Website",
          img: "img/portfolio.png",
          desc: "My personal portfolio showcasing projects, skills, and resume — built with React + Tailwind.",
          code: "https://github.com/pris1345/Portfolio",
        },
      ].map((project) => (
        <div
          key={project.title}
          className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-left">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.desc}</p>
            <div className="flex justify-between">
              <a
                href={project.code}
                target="_blank"
                className="border border-cyan-500 text-cyan-400 font-semibold px-4 py-2 rounded-lg hover:bg-cyan-500 hover:text-black transition"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
