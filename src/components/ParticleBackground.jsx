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
          color: { value: "#22d3ee" },
          links: {
            color: "#22d3ee",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 1.2,
            outModes: { default: "bounce" },
          },
          number: { value: 80, density: { enable: true, area: 800 } },
          opacity: {
            value: 0.4,
            random: true,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.2,
            }
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 3 },
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
            }
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
