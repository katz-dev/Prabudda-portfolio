"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/data/portfolio";
import { Briefcase, MapPin, Calendar, GraduationCap, ChevronRight } from "lucide-react";

export const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4 sm:px-6 relative z-10 bg-slate-50 dark:bg-black/10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Professional Journey</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">My ongoing quest to build better web and gaming experiences.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Education Column */}
                    <div className="lg:col-span-1 space-y-8">
                        <h3 className="text-2xl font-bold text-blue-400 flex items-center gap-3 mb-8">
                            <GraduationCap className="w-8 h-8" />
                            Education
                        </h3>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm border border-slate-200 dark:border-slate-700/30 rounded-2xl p-6 hover:bg-white/80 dark:hover:bg-slate-800/60 transition-colors shadow-sm"
                        >
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{education.degree}</h4>
                            <p className="text-blue-600 dark:text-blue-300 mb-2">{education.institution}</p>
                            <div className="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-400">
                                <span className="flex items-center gap-2"><MapPin className="w-3 h-3" /> {education.location}</span>
                                <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {education.period}</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Experience Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <h3 className="text-2xl font-bold text-emerald-400 flex items-center gap-3 mb-8">
                            <Briefcase className="w-8 h-8" />
                            Experience
                        </h3>

                        <div className="space-y-8 relative">
                            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-300 dark:bg-slate-700/50" />

                            {experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative pl-12"
                                >
                                    {/* Dot on timeline */}
                                    <div className="absolute left-[11px] top-6 w-3 h-3 bg-emerald-500 rounded-full ring-4 ring-slate-900 shadow-lg shadow-emerald-500/20" />

                                    <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm border border-slate-200 dark:border-slate-700/30 rounded-2xl p-6 hover:bg-white/80 dark:hover:bg-slate-800/60 transition-colors group shadow-sm">
                                        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 mb-4">
                                            <div>
                                                <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">{exp.title}</h4>
                                                <p className="text-lg text-emerald-600/80 dark:text-emerald-300/80">{exp.company}</p>
                                            </div>
                                            <div className="text-sm text-slate-600 dark:text-slate-400 bg-slate-200/50 dark:bg-slate-700/30 px-3 py-1 rounded-full self-start">
                                                {exp.period}
                                            </div>
                                        </div>
                                        <ul className="space-y-2">
                                            {exp.description.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                                    <ChevronRight className="w-4 h-4 text-emerald-500/50 mt-1 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
