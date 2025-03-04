
import React, { useEffect, useRef } from "react";

const InteractiveBackground = () => {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const maxParticles = 100;
    const connectionDistance = 120;
    const mouseConnectionDistance = 100;

    let mouseX = null;
    let mouseY = null;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        window.addEventListener("mouseleave", () => {
            mouseX = null;
            mouseY = null;
        });

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        });

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.velocityX = (Math.random() - 0.5) * 0.5;
                this.velocityY = (Math.random() - 0.5) * 0.5;
                this.life = Math.random() * 300 + 300;
            }

            update() {
                this.x += this.velocityX;
                this.y += this.velocityY;

                if (this.x <= 0 || this.x >= canvas.width) this.velocityX *= -1;
                if (this.y <= 0 || this.y >= canvas.height) this.velocityY *= -1;

                this.life--;
            }

            draw() {
                ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles.current = Array.from({ length: maxParticles }, () => new Particle());
        }

        function drawConnections() {
            particles.current.forEach((p1, i) => {
                for (let j = i + 1; j < particles.current.length; j++) {
                    const p2 = particles.current[j];
                    const dist = distance(p1, p2);
                    if (dist < connectionDistance) {
                        drawLine(p1.x, p1.y, p2.x, p2.y, "rgba(255, 255, 255, 0.15)", 0.5);
                    }
                }

                if (mouseX !== null && mouseY !== null) {
                    const distToMouse = Math.sqrt(
                        (p1.x - mouseX) ** 2 + (p1.y - mouseY) ** 2
                    );
                    if (distToMouse < mouseConnectionDistance) {
                        drawLine(p1.x, p1.y, mouseX, mouseY, "rgba(255, 255, 255, 0.7)", 1);
                    }
                }
            });
        }

        function drawLine(x1, y1, x2, y2, color, width) {
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }

        function distance(p1, p2) {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            return Math.sqrt(dx * dx + dy * dy);
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.current = particles.current.filter(p => p.life > 0);
            while (particles.current.length < maxParticles) {
                particles.current.push(new Particle());
            }

            particles.current.forEach(p => {
                p.update();
                p.draw();
            });

            drawConnections();

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
                zIndex: -1,
                pointerEvents: "none"
            }}
        />
    );
};

export default InteractiveBackground;
