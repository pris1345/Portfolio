import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";
import Aboutme from "./components/Aboutme";
export default function App() {
  return (
    <div className="animate-gradient min-h-screen">
      <div className="backdrop-blur-md bg-slate-950/55 min-h-screen">
        <Navbar />
        <Hero />
         <Aboutme />
        <Skills />
        <Projects />
        <Contact />
        <ParticleBackground />
       
      </div>
    </div>
  );
}
