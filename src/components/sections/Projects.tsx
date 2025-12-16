"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { Code, ExternalLink, Star, Layers } from "lucide-react";

export const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 via-white to-purple-300 bg-clip-text text-transparent mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">A selection of my best work.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white/80 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-colors shadow-lg dark:shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="p-8 relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-purple-500/20 rounded-xl">
                                        <Code className="w-8 h-8 text-purple-400" />
                                    </div>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white hover:bg-purple-100 dark:hover:bg-purple-600 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed line-clamp-3 hover:line-clamp-none transition-all">{project.description}</p>

                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                                        <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">
                                            <Layers className="w-4 h-4" /> Key Features
                                        </h4>
                                        <ul className="space-y-1">
                                            {project.features.slice(0, 3).map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-500">
                                                    <Star className="w-3 h-3 text-yellow-500/50 mt-0.5 shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
