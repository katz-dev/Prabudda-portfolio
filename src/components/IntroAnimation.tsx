"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Cpu, Sparkles } from "lucide-react";

export const IntroAnimation = ({ onComplete }: { onComplete?: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState("INITIALIZING SECURE PROTOCOLS...");
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Prevent body scrolling during intro animation
        document.body.style.overflow = "hidden";
        window.scrollTo(0, 0);

        const statusStages = [
            { threshold: 20, text: "CONNECTING ADMS & BIOMETRIC MESH..." },
            { threshold: 45, text: "COMPILING NEXT.JS SERVER ACTIONS..." },
            { threshold: 75, text: "HARDENING CLOUDFLARE DEFENSE LAYER..." },
            { threshold: 92, text: "CALIBRATING ENTERPRISE TELEMETRY..." },
            { threshold: 100, text: "SYSTEM ACTIVE · WELCOME" },
        ];

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                const increment = Math.floor(Math.random() * 8) + 4;
                const nextVal = Math.min(prev + increment, 100);

                const currentStage = statusStages.find((s) => nextVal <= s.threshold);
                if (currentStage) {
                    setStatusText(currentStage.text);
                }

                return nextVal;
            });
        }, 55);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            const timeout = setTimeout(() => {
                setIsVisible(false);
                document.body.style.overflow = "";
                window.scrollTo({ top: 0, behavior: "instant" });
                onComplete?.();
            }, 500);

            return () => clearTimeout(timeout);
        }
    }, [progress, onComplete]);

    const handleSkip = () => {
        setIsVisible(false);
        document.body.style.overflow = "";
        window.scrollTo({ top: 0, behavior: "instant" });
        onComplete?.();
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07111F] text-slate-100 select-none px-4"
                >
                    {/* Background Cyber Grid */}
                    <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
                    <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

                    {/* Central Terminal Hologram */}
                    <motion.div
                        initial={{ scale: 0.92, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="relative z-10 w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#0B1626]/90 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl shadow-cyan-950/40 text-center space-y-6"
                    >
                        {/* Header Badge */}
                        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                <span className="ml-2 text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                                    <Terminal className="w-3.5 h-3.5" /> prabudda.sys/boot
                                </span>
                            </div>

                            <button
                                onClick={handleSkip}
                                className="text-[11px] font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800/60 hover:bg-slate-700/60 transition-colors cursor-pointer"
                            >
                                Esc to Skip
                            </button>
                        </div>

                        {/* Title & Identity */}
                        <div className="space-y-1.5 pt-2">
                            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono">
                                PRABUDDA PERERA
                            </h2>
                            <p className="text-xs sm:text-sm text-cyan-400 font-mono tracking-wide">
                                FULL-STACK · SOFTWARE SUPPORT · CYBERSECURITY
                            </p>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                            <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-slate-700/40">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-full"
                                    style={{ width: `${progress}%` }}
                                    transition={{ ease: "easeOut" }}
                                />
                            </div>

                            <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                                <span className="text-[11px] text-cyan-300 animate-pulse">{statusText}</span>
                                <span className="font-bold text-white">{progress}%</span>
                            </div>
                        </div>

                        {/* Telemetry Chips */}
                        <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] font-mono text-slate-400 border-t border-slate-800/80">
                            <div className="flex items-center justify-center gap-1 py-1 rounded bg-slate-900/60 border border-slate-800">
                                <Shield className="w-3 h-3 text-cyan-400" />
                                <span>SECURE</span>
                            </div>
                            <div className="flex items-center justify-center gap-1 py-1 rounded bg-slate-900/60 border border-slate-800">
                                <Cpu className="w-3 h-3 text-blue-400" />
                                <span>6+ YRS</span>
                            </div>
                            <div className="flex items-center justify-center gap-1 py-1 rounded bg-slate-900/60 border border-slate-800">
                                <Sparkles className="w-3 h-3 text-emerald-400" />
                                <span>ONLINE</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
