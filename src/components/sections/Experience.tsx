"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/data/portfolio";
import {
    Briefcase,
    Calendar,
    MapPin,
    CheckCircle2,
    Building2
} from "lucide-react";

export const Experience = () => {
    const [selectedCompany, setSelectedCompany] = useState<string>("all");

    const filteredExperiences = selectedCompany === "all"
        ? experienceData
        : experienceData.filter(exp => exp.company.toLowerCase().includes(selectedCompany.toLowerCase()));

    return (
        <section id="experience" className="py-24 px-4 sm:px-6 relative z-10">
            <div className="max-w-6xl mx-auto space-y-16">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-3"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#2563EB] dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>Proven Track Record</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Professional Experience
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                        From enterprise HRIS biometric systems to cloud SaaS marketplaces and high-concurrency game server infrastructure.
                    </p>
                </motion.div>

                {/* Company Filter Pills */}
                <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
                    <button
                        onClick={() => setSelectedCompany("all")}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                            selectedCompany === "all"
                                ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/25"
                                : "glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                        }`}
                    >
                        All Experience ({experienceData.length})
                    </button>
                    <button
                        onClick={() => setSelectedCompany("VFT HOLDINGS")}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                            selectedCompany === "VFT HOLDINGS"
                                ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/25"
                                : "glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                        }`}
                    >
                        VFT Holdings (HRIS &amp; ADMS)
                    </button>
                    <button
                        onClick={() => setSelectedCompany("XFaction")}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                            selectedCompany === "XFaction"
                                ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/25"
                                : "glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                        }`}
                    >
                        XFaction (Full-Stack &amp; FiveM)
                    </button>
                    <button
                        onClick={() => setSelectedCompany("Fiverr")}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                            selectedCompany === "Fiverr"
                                ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/25"
                                : "glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                        }`}
                    >
                        Fiverr (6+ Years Freelance)
                    </button>
                </div>

                {/* Interactive Timeline Container */}
                <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 sm:ml-8 space-y-12 pl-6 sm:pl-10">
                    {filteredExperiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="relative group"
                        >
                            {/* Timeline Node Point with Ripple */}
                            <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-white dark:bg-[#07111F] border-4 border-[#2563EB] group-hover:border-cyan-400 group-hover:scale-125 transition-all shadow-md shadow-blue-500/30" />

                            {/* Experience Card */}
                            <div className="glass-panel rounded-3xl p-6 sm:p-8 hover:border-cyan-500/40 transition-all duration-300 space-y-6 shadow-lg shadow-slate-900/5 dark:shadow-black/20">
                                
                                {/* Header: Role, Company, Period & Badge */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800/80">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                                                {exp.badge}
                                            </span>
                                            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                                                {exp.type}
                                            </span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-cyan-400 transition-colors">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                                            <Building2 className="w-4 h-4 text-blue-500" />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono shrink-0">
                                        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/60 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700/60">
                                            <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Highlights */}
                                <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                                    {exp.highlights.map((highlight, hIdx) => {
                                        const [title, ...descParts] = highlight.split(":");
                                        const desc = descParts.join(":");
                                        return (
                                            <li key={hIdx} className="flex items-start gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                                                <span>
                                                    {desc ? (
                                                        <>
                                                            <strong className="text-slate-900 dark:text-white font-semibold">{title}:</strong>
                                                            <span className="text-slate-600 dark:text-slate-300">{desc}</span>
                                                        </>
                                                    ) : (
                                                        <span>{highlight}</span>
                                                    )}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/* Technologies Used */}
                                <div className="pt-2 flex flex-wrap gap-1.5">
                                    {exp.technologies.map((tech, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
