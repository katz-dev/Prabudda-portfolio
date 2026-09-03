"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    pulse: number;
}

export const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mousePositionRef = useRef({ x: -1000, y: -1000 });
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePositionRef.current = { x: e.clientX, y: e.clientY };
        };
        const handleMouseLeave = () => {
            mousePositionRef.current = { x: -1000, y: -1000 };
        };
        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const isDark = resolvedTheme === "dark";
        const particleCount = Math.min(Math.floor(window.innerWidth / 24), 65);

        const particles: Particle[] = Array.from({ length: particleCount }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.4,
            speedY: (Math.random() - 0.5) * 0.4,
            opacity: Math.random() * 0.4 + 0.15,
            pulse: Math.random() * 0.02 + 0.01
        }));

        let time = 0;

        const animate = () => {
            time += 0.01;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const nodeColor = isDark ? "6, 182, 212" : "37, 99, 235"; // Cyan in dark, Blue in light
            const lineColor = isDark ? "6, 182, 212" : "37, 99, 235";

            // Draw connecting lines between close particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        const alpha = (1 - dist / 120) * (isDark ? 0.12 : 0.08);
                        ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
                        ctx.lineWidth = 0.75;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw and update particles
            particles.forEach((p) => {
                p.x += p.speedX;
                p.y += p.speedY;

                // Mouse interaction - gentle deflection
                const dx = mousePositionRef.current.x - p.x;
                const dy = mousePositionRef.current.y - p.y;
                const mouseDist = Math.sqrt(dx * dx + dy * dy);

                if (mouseDist < 140) {
                    p.x -= dx * 0.015;
                    p.y -= dy * 0.015;
                }

                // Bounce at edges
                if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

                const pulse = Math.sin(time * p.pulse) * 0.3 + 0.7;
                const alpha = p.opacity * pulse;

                ctx.save();
                ctx.fillStyle = `rgba(${nodeColor}, ${alpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [resolvedTheme]);

    return (
        <>
            {/* Ambient Background Grid */}
            <div className="fixed inset-0 pointer-events-none bg-cyber-grid z-0" />
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-0 opacity-80"
            />
        </>
    );
};
