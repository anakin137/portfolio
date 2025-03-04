
import React, { useEffect, useRef } from "react";

const InteractiveBackground = () => {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const maxParticles = 120;
    const connectionDistance = 120;
    const mouseConnectionDistance = 150;

    const mouse = { x: undefined, y: undefined };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener("mousemove", (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        });

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        });

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 5 + 1;
                this.baseX = x;
                this.baseY = y;
                this.velocityX = (Math.random() - 0.5) * 1;
                this.velocityY = (Math.random() - 0.5) * 1;
                this.life = Math.random() * 200 + 200;
            }

            update() {
                this.x += this.velocityX;
                this.y += this.velocityY;

                if (this.x <= 0 || this.x >= canvas.width) this.velocityX *= -1;
                if (this.y <= 0 || this.y >= canvas.height) this.velocityY *= -1;

                this.life -= 1;

                this.velocityX += (Math.random() - 0.5) * 0.1;
                this.velocityY += (Math.random() - 0.5) * 0.1;
            }

            draw() {
                ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles.current = [];
            for (let i = 0; i < maxParticles; i++) {
                particles.current.push(new Particle(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height
                ));
            }
        }

        function connectParticles() {
            for (let a = 0; a < particles.current.length; a++) {
                const p1 = particles.current[a];

                const mouseDist = Math.sqrt((p1.x - mouse.x) ** 2 + (p1.y - mouse.y) ** 2);
                if (mouseDist < mouseConnectionDistance) {
                    ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }

                for (let b = a + 1; b < particles.current.length; b++) {
                    const p2 = particles.current[b];
                    const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);

                    if (distance < connectionDistance) {
                        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
                        ctx.lineWidth = 0.7;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
        }

        function regenerateParticles() {
            particles.current = particles.current.filter(p => p.life > 0);

            while (particles.current.length < maxParticles) {
                particles.current.push(new Particle(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height
                ));
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.current.forEach(p => {
                p.update();
                p.draw();
            });

            connectParticles();
            regenerateParticles();

            requestAnimationFrame(animate);
        }

        initParticles();
        animate();

        return () => {
            window.removeEventListener("mousemove", () => {});
            window.removeEventListener("resize", () => {});
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: -1
            }}
        ></canvas>
    );
};

export default InteractiveBackground;
