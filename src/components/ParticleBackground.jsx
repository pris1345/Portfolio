import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          color: { value: "#06b6d4" },
          links: {
            color: "#06b6d4",
            distance: 130,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            outModes: { default: "bounce" },
          },
          number: { value: 70, density: { enable: true, area: 800 } },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
