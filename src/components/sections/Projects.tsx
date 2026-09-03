"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/portfolio";
import Image from "next/image";
import {
    FolderGit2,
    Github,
    CheckCircle2,
    AlertCircle,
    ArrowUpRight,
    Star,
    Briefcase
} from "lucide-react";

export const Projects = () => {
    const [filter, setFilter] = useState<string>("all");

    const categories = [
        { id: "all", label: "All Work" },
        { id: "fullstack", label: "Full Stack Applications" },
        { id: "support", label: "Software Support & Systems" },
        { id: "fivem", label: "FiveM & Game Dev" },
        { id: "security", label: "Security & Hardening" },
    ];

    const filteredProjects = filter === "all"
        ? projectsData
        : projectsData.filter(p => p.categoryTag === filter);

    return (
        <section id="projects" className="py-24 px-4 sm:px-6 relative z-10">
            <div className="max-w-7xl mx-auto space-y-16">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-3"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#2563EB] dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                        <FolderGit2 className="w-3.5 h-3.5" />
                        <span>Featured Case Studies</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Production Engineering Work
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Real-world software systems solving complex transactional, integration, and security challenges.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                                filter === cat.id
                                    ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/25"
                                    : "glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.article
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.3 }}
                                className="glass-panel rounded-3xl overflow-hidden flex flex-col justify-between hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 group shadow-xl shadow-slate-900/5 dark:shadow-black/25"
                            >
                                <div>
                                    {/* Image Preview Container */}
                                    <div className="relative w-full aspect-[16/9] bg-[#0A1322] overflow-hidden border-b border-slate-200 dark:border-slate-800">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                        
                                        {/* Category Badge overlay */}
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#07111F]/90 text-cyan-400 border border-cyan-500/30 backdrop-blur-md shadow-lg">
                                                {project.category}
                                            </span>
                                        </div>

                                        {project.featured && (
                                            <div className="absolute top-4 right-4 z-10">
                                                <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/90 text-white shadow-lg">
                                                    <Star className="w-3 h-3 fill-white" /> Featured
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Body */}
                                    <div className="p-6 sm:p-8 space-y-6">
                                        {/* Title & Subtitle */}
                                        <div>
                                            {"roleTag" in project && project.roleTag && (
                                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 text-xs font-semibold mb-2.5">
                                                    <Briefcase className="w-3.5 h-3.5" />
                                                    <span>{project.roleTag}</span>
                                                </div>
                                            )}
                                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-cyan-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm font-medium text-[#2563EB] dark:text-cyan-400/90 mt-1">
                                                {project.subtitle}
                                            </p>
                                        </div>

                                        {/* Description */}
                                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                                            {project.description}
                                        </p>

                                        {/* Technology Stack Pills */}
                                        <div className="space-y-1.5">
                                            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                                                Technology Stack
                                            </span>
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.technologies.map((tech, tIdx) => (
                                                    <span
                                                        key={tIdx}
                                                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Key Features */}
                                        <div className="space-y-2">
                                            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                                                Key Architecture Features
                                            </span>
                                            <ul className="space-y-1.5">
                                                {project.features.slice(0, 3).map((feature, fIdx) => (
                                                    <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Challenges Solved Callout */}
                                        <div className="p-4 rounded-2xl bg-cyan-500/5 dark:bg-cyan-500/5 border border-cyan-500/20 space-y-2">
                                            <div className="flex items-center gap-2 text-xs font-bold text-cyan-700 dark:text-cyan-300">
                                                <AlertCircle className="w-4 h-4 text-cyan-500 shrink-0" />
                                                <span>Challenges Solved</span>
                                            </div>
                                            <ul className="space-y-1">
                                                {project.challengesSolved.slice(0, 2).map((challenge, cIdx) => (
                                                    <li key={cIdx} className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                                        • {challenge}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Action Buttons: Demo & GitHub */}
                                <div className="p-6 sm:p-8 pt-0 border-t border-slate-200/60 dark:border-slate-800/60 mt-4 flex items-center justify-between gap-3">
                                    {"isSupportCaseStudy" in project && project.isSupportCaseStudy ? (
                                        <>
                                            <a
                                                href="#experience"
                                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-colors"
                                            >
                                                <Briefcase className="w-4 h-4 text-blue-500" />
                                                <span>VFT Experience Details</span>
                                            </a>

                                            <a
                                                href="#experience"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#2563EB] hover:bg-blue-600 text-white shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-95"
                                            >
                                                <span>Software Support Timeline</span>
                                                <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                        </>
                                    ) : (
                                        <>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span>Source Code</span>
                                            </a>

                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#2563EB] hover:bg-blue-600 text-white shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-95"
                                            >
                                                <span>View Project</span>
                                                <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                        </>
                                    )}
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
};
