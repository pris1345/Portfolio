export default function Skills() {
    return (
       <section
  id="skills"
  className="bg-gray-950 text-white py-20 px-6 md:px-20 relative"
>
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-cyan-400 mb-10">My Skills</h2>
    <p className="text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
      I’m always learning and improving. Here are the technologies and tools I’m most comfortable with.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {[
        { name: "React", icon: "fa-brands fa-react", color: "text-cyan-400" },
        { name: "Tailwind CSS", icon: "fa-solid fa-wind", color: "text-sky-400" },
        { name: "JavaScript", icon: "fa-brands fa-js", color: "text-yellow-400" },
        { name: "Node.js", icon: "fa-brands fa-node", color: "text-green-500" },
        { name: "Git & GitHub", icon: "fa-brands fa-github", color: "text-gray-300" },
        { name: "Html", icon: "fa-brands fa-html5", color: "text-blue-500" },
        { name: "Css", icon: "fa-brands fa-css3", color: "text-blue-500" },
        { name: "Figma", icon: "fa-brands fa-figma", color: "text-pink-500" },
      ].map((skill) => (
        <div
          key={skill.name}
          className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-transform duration-300"
        >
          <div className="flex flex-col items-center gap-4">
            <i className={`${skill.icon} text-5xl ${skill.color}`}></i>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Optional glowing background effect */}
  <div className="absolute -top-10 left-1/2 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
</section>

    )
 
}
