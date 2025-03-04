
import React, { useEffect, useRef } from "react";

const BackgroundParticles = () => {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const maxParticles = 100;
    const connectionDistance = 100;
    const mouseConnectionDistance = 120;

    let mouse = { x: null, y: null };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const updateMousePosition = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const resetMousePosition = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseleave", resetMousePosition);
        window.addEventListener("resize", resizeCanvas);

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        }

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
                ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles.current = Array.from({ length: maxParticles }, () => new Particle());
        }

        function drawConnections() {
            for (let i = 0; i < particles.current.length; i++) {
                const p1 = particles.current[i];

                for (let j = i + 1; j < particles.current.length; j++) {
                    const p2 = particles.current[j];
                    if (distance(p1, p2) < connectionDistance) {
                        drawLine(p1, p2, "rgba(255, 255, 255, 0.15)", 0.5);
                    }
                }

                if (mouse.x !== null && mouse.y !== null) {
                    if (distanceToMouse(p1) < mouseConnectionDistance) {
                        drawLine(p1, mouse, "rgba(255, 255, 255, 0.5)", 1);
                    }
                }
            }
        }

        function drawLine(p1, p2, color, width) {
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
        }

        function distance(p1, p2) {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            return Math.sqrt(dx * dx + dy * dy);
        }

        function distanceToMouse(p) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
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
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseleave", resetMousePosition);
            window.removeEventListener("resize", resizeCanvas);
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
                pointerEvents: "none",
            }}
        />
    );
};

export default BackgroundParticles;
