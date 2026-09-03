"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "@/data/portfolio";
import { Cpu } from "lucide-react";
import { TechLogo } from "@/components/TechLogo";

export const Skills = () => {
    const [activeTab, setActiveTab] = useState<string>("all");

    const filteredCategories = activeTab === "all"
        ? skillsData.categories
        : skillsData.categories.filter(cat => cat.id === activeTab);

    return (
        <section id="skills" className="py-24 px-4 sm:px-6 relative z-10">
            <div className="max-w-6xl mx-auto space-y-12">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-3"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#2563EB] dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>Technical Arsenal &amp; Capabilities</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Specialized Technologies
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Battle-tested across enterprise software support systems, modern SaaS applications, and high-performance game servers.
                    </p>
                </motion.div>

                {/* Filter Navigation Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
                    <button
                        onClick={() => setActiveTab("all")}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                            activeTab === "all"
                                ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/25"
                                : "glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                        }`}
                    >
                        All Stacks ({skillsData.categories.reduce((acc, cat) => acc + cat.skills.length, 0)})
                    </button>
                    {skillsData.categories.map((cat) => {
                        const Icon = cat.icon;
                        const isSelected = activeTab === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                                    isSelected
                                        ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/25"
                                        : "glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                                }`}
                            >
                                <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-cyan-500"}`} />
                                {cat.title.split(" ")[0]}
                            </button>
                        );
                    })}
                </div>

                {/* Skills Cards Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredCategories.map((category) => {
                            const IconComponent = category.icon;
                            return (
                                <motion.div
                                    layout
                                    key={category.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 group shadow-md shadow-slate-900/5 dark:shadow-black/20"
                                >
                                    <div>
                                        {/* Header with Icon */}
                                        <div className="flex items-center gap-3.5 mb-4">
                                            <div className="w-11 h-11 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20 group-hover:scale-105 transition-transform">
                                                <IconComponent className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                                                    {category.title}
                                                </h3>
                                                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                                                    {category.skills.length} core competencies
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                            {category.description}
                                        </p>

                                        {/* Skills Chips */}
                                        <div className="space-y-3">
                                            {category.skills.map((skill, sIdx) => (
                                                <div
                                                    key={sIdx}
                                                    className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 flex flex-col gap-1.5 hover:border-cyan-500/30 transition-colors"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-semibold text-xs text-slate-800 dark:text-slate-100 flex items-center gap-2">
                                                            <div className="w-6 h-6 rounded-lg bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/60 flex items-center justify-center p-0.5 shadow-sm shrink-0">
                                                                <TechLogo name={skill.name} size={15} />
                                                            </div>
                                                            <span>{skill.name}</span>
                                                        </span>
                                                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                                                            {skill.level}
                                                        </span>
                                                    </div>

                                                    <div className="flex flex-wrap gap-1">
                                                        {skill.tags.map((tag, tIdx) => (
                                                            <span
                                                                key={tIdx}
                                                                className="text-[10px] text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded bg-white/60 dark:bg-slate-800/60"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
};
