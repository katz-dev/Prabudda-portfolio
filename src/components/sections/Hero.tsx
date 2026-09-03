"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import {
    ArrowRight,
    Download,
    Mail,
    Shield,
    CheckCircle2,
    MapPin,
    Layers,
    Cpu
} from "lucide-react";

export const Hero = () => {
    const scrollToSection = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <section id="hero" className="min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-20 pb-8 sm:pt-24 sm:pb-12 px-4 sm:px-6 relative z-10">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

                {/* Left Column: Personal Brand Identity & Action CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="lg:col-span-7 space-y-6 text-left"
                >
                    {/* Status Pill Badge */}
                    <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wide">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        <Shield className="w-3.5 h-3.5" />
                        <span>Security-Minded Full-Stack &amp; Support Engineer</span>
                    </div>

                    {/* Name */}
                    <div>
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
                            Prabudda <span className="text-[#2563EB] dark:text-[#38BDF8]">Perera</span>
                        </h1>
                    </div>

                    {/* Multi-role Titles */}
                    <div className="space-y-1 text-base sm:text-xl font-medium text-slate-700 dark:text-slate-300">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="text-[#2563EB] dark:text-cyan-400 font-semibold">Associate Software Support Engineer</span>
                            <span className="text-slate-400 hidden sm:inline">•</span>
                            <span className="text-slate-800 dark:text-slate-200">Full-Stack Developer</span>
                            <span className="text-slate-400 hidden sm:inline">•</span>
                            <span className="text-slate-600 dark:text-slate-400">Security Enthusiast</span>
                        </div>
                    </div>

                    {/* Core Brand Value Statement */}
                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                        &ldquo;Building secure, scalable digital experiences through full-stack engineering, automation, and problem solving.&rdquo;
                    </p>

                    {/* Key Competency Micro-Pills */}
                    <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-600 dark:text-slate-300">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 font-mono">
                            <CheckCircle2 className="w-3 h-3 text-cyan-500" /> 6+ Years Experience
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 font-mono">
                            <Layers className="w-3 h-3 text-blue-500" /> Enterprise HRIS &amp; ADMS
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 font-mono">
                            <Cpu className="w-3 h-3 text-purple-500" /> FiveM Architecture
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 font-mono">
                            <MapPin className="w-3 h-3 text-rose-500" /> Sri Lanka
                        </span>
                    </div>

                    {/* The 3 Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
                        {/* Primary Button: View My Work */}
                        <button
                            onClick={() => scrollToSection("#projects")}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#2563EB] hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                        >
                            <span>View My Work</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>

                        {/* Secondary Button: Download Resume */}
                        <a
                            href={personalInfo.resume}
                            download="PrabuddaCV.pdf"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                        >
                            <Download className="w-4 h-4 text-cyan-500" />
                            <span>Download Resume</span>
                        </a>

                        {/* Third Button: Let's Connect */}
                        <button
                            onClick={() => scrollToSection("#contact")}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-100 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                        >
                            <Mail className="w-4 h-4 text-blue-500" />
                            <span>Let&apos;s Connect</span>
                        </button>
                    </div>
                </motion.div>

                {/* Right Column: Unique Interactive Visual Terminal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="lg:col-span-5 w-full"
                >
                    <InteractiveTerminal />
                </motion.div>

            </div>
        </section>
    );
};
