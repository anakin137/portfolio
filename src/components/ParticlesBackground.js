
import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "#0a0a0a"
                    }
                },
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            area: 800
                        }
                    },
                    color: {
                        value: "#ffffff"
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.5,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        outModes: {
                            default: "out"
                        }
                    },
                    shape: {
                        type: "circle"
                    },
                    opacity: {
                        value: 0.7
                    },
                    size: {
                        value: { min: 1, max: 3 }
                    }
                },
                detectRetina: true
            }}
        />
    );
}

export default ParticlesBackground;
