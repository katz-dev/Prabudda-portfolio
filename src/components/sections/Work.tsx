"use client";

import { motion } from "framer-motion";
import { Hammer, Clock } from "lucide-react";

export const Work = () => {
    return (
        <section id="work" className="py-20 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                        My Work
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">Professional projects and case studies.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 p-12 text-center"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
                    <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full" />
                            <div className="relative bg-white dark:bg-slate-800 p-6 rounded-full shadow-xl border border-purple-100 dark:border-purple-900/50">
                                <Hammer className="w-12 h-12 text-purple-500 animate-pulse" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                                Coming Soon
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                                I&apos;m currently curating a selection of my professional work and case studies. Check back soon for detailed insights into my process and results.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-800">
                            <Clock className="w-4 h-4" />
                            <span>In Progress</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
