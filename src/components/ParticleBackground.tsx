"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mousePositionRef = useRef({ x: 0, y: 0 });
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePositionRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const particleCount = 60;
        const isDark = resolvedTheme === 'dark';

        const canvasParticles = Array.from({ length: particleCount }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 0.5,
            speedX: Math.random() * 0.5 - 0.25,
            speedY: Math.random() * 0.5 - 0.25,
            opacity: Math.random() * 0.6 + 0.2,
            color: Math.random() > 0.5
                ? (isDark ? 'hsl(217, 91%, 60%, 0.3)' : 'hsl(217, 91%, 40%, 0.3)') // Blueish
                : (isDark ? 'hsl(220, 100%, 70%, 0.3)' : 'hsl(220, 100%, 50%, 0.3)'),
            pulse: Math.random() * 0.02 + 0.01
        }));

        let time = 0;
        let animationFrameId: number;

        const animate = () => {
            time += 0.01;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            canvasParticles.forEach((particle) => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                const dx = mousePositionRef.current.x - particle.x;
                const dy = mousePositionRef.current.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    particle.x -= dx * 0.02;
                    particle.y -= dy * 0.02;
                }

                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

                const pulse = Math.sin(time * particle.pulse) * 0.5 + 0.5;
                const currentOpacity = particle.opacity * (0.5 + pulse * 0.5);

                ctx.save();
                ctx.globalAlpha = currentOpacity;
                ctx.fillStyle = particle.color;
                ctx.shadowColor = particle.color;
                ctx.shadowBlur = particle.size * 2;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
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
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
};
