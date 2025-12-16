"use client";

import { motion } from "framer-motion";
import { summary } from "@/data/portfolio";

export const About = () => {
    return (
        <section id="about" className="py-20 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent mb-4">
                        About Me
                    </h2>
                    <div className="h-1 w-20 mx-auto bg-blue-500 rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 dark:border-slate-700/50 rounded-3xl p-8 sm:p-12 shadow-xl shadow-black/5 dark:shadow-black/20 ring-1 ring-black/5 dark:ring-white/10"
                >
                    <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed text-center font-light">
                        {summary}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
