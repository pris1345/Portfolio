export default function Navbar() {
    return (
        <nav className="fixed w-full top-0 z-50 bg-black/30 backdrop-blur-xl flex justify-between items-center px-10 py-4 border-b border-cyan-500/30">
            <h1 className="text-2xl font-bold text-cyan-400">Brijesh Dahal</h1>
            <div className="flex gap-6 text-gray-300">
                <a href="#skills" className="hover:text-cyan-400">Skills</a>
                <a href="#projects" className="hover:text-cyan-400">Projects</a>
                <a href="#contact" className="hover:text-cyan-400">Contact</a>
                <a
                    href="/BRIJESH DAHAL.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-400 transition-colors"
                >
                    CV
                </a>
                <a href="#Aboutme" className="hover:text-cyan-400">AboutMe</a>
            </div>
        </nav>
    );
}
