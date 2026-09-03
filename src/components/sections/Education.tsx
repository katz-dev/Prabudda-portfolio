"use client";

import { motion } from "framer-motion";
import { educationData } from "@/data/portfolio";
import {
    GraduationCap,
    Calendar,
    MapPin,
    CheckCircle2
} from "lucide-react";

export const Education = () => {
    return (
        <section id="education" className="py-24 px-4 sm:px-6 relative z-10">
            <div className="max-w-6xl mx-auto space-y-16">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-3"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#2563EB] dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>Academic Credentials</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Education &amp; Foundations
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Specialized training in computer security, cryptographic principles, software algorithms, and system architecture.
                    </p>
                </motion.div>

                {/* Education Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {educationData.map((edu, idx) => {
                        const IconComponent = edu.icon;
                        const isPrimary = idx === 0;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className={`glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 relative shadow-lg shadow-slate-900/5 dark:shadow-black/20 ${
                                    isPrimary ? "ring-2 ring-[#2563EB]/40 dark:ring-cyan-500/40" : ""
                                }`}
                            >
                                <div className="space-y-5">
                                    {/* Badge & Icon */}
                                    <div className="flex items-center justify-between">
                                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-[#2563EB] dark:text-cyan-400 border border-blue-500/20">
                                            {edu.badge}
                                        </span>
                                    </div>

                                    {/* Degree & Institution */}
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-sm font-semibold text-[#2563EB] dark:text-cyan-400/90 mt-1">
                                            {edu.institution}
                                        </p>
                                    </div>

                                    {/* Period & Location Meta */}
                                    <div className="flex flex-col gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                                            {edu.period}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                                            {edu.location}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                                        {edu.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="pt-2 space-y-1.5 border-t border-slate-200 dark:border-slate-800">
                                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                                            Core Modules &amp; Focus
                                        </span>
                                        {edu.highlights.map((item, hIdx) => (
                                            <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};
