"use client";

import { motion } from "framer-motion";
import { aboutNarrative } from "@/data/portfolio";
import {
    Shield,
    Terminal,
    Server,
    Code2,
    Database,
    Cpu
} from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-24 px-4 sm:px-6 relative z-10">
            <div className="max-w-6xl mx-auto space-y-16">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-3"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#2563EB] dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                        <span>Engineered for Reliability</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                        About My Engineering Journey
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Bridging high-stakes enterprise software support, modern full-stack web applications, and a defense-in-depth cybersecurity philosophy.
                    </p>
                </motion.div>

                {/* Main Storytelling Narrative Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Left Column: Rich Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 space-y-6 flex flex-col justify-between"
                    >
                        <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                                <Terminal className="w-5 h-5 text-cyan-500" />
                                Turning Messy Problems Into Scalable Solutions
                            </h3>

                            {aboutNarrative.paragraphs.map((para, idx) => (
                                <p key={idx} className="leading-relaxed font-light">
                                    {para}
                                </p>
                            ))}
                        </div>

                        {/* Core Pillars */}
                        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium">
                            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                                <Shield className="w-4 h-4 text-cyan-500 shrink-0" />
                                <span>Security First</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                                <Server className="w-4 h-4 text-blue-500 shrink-0" />
                                <span>Zero-Downtime</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                                <Database className="w-4 h-4 text-emerald-500 shrink-0" />
                                <span>Data Integrity</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Key Focus Areas & Background */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 flex flex-col gap-5 justify-between"
                    >
                        {/* Focus Card 1 */}
                        <div className="glass-panel rounded-2xl p-6 hover:border-cyan-500/40 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 dark:text-blue-400">
                                    <Server className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                                        Enterprise Support &amp; Integration
                                    </h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                        ADMS terminal provisioning, biometric hardware-to-cloud synchronization, and Python automated database migration scripts for Futura HRIS at VFT Holdings.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Focus Card 2 */}
                        <div className="glass-panel rounded-2xl p-6 hover:border-cyan-500/40 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                                    <Code2 className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                                        Modern Full-Stack Applications
                                    </h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Next.js App Router, React 19, Server Actions, NestJS modular microservices, Tebex &amp; PayPal headless payments, and Discord OAuth2.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Focus Card 3 */}
                        <div className="glass-panel rounded-2xl p-6 hover:border-cyan-500/40 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                                    <Cpu className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                                        FiveM &amp; High-Throughput Servers
                                    </h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                        6+ years architecting multiplayer game servers with QB-Core, QBOX, custom Lua logic, anti-DDoS packet filtering, and Dokploy Linux deployments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Animated Statistics Banner (4 Key Metrics) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
                >
                    {aboutNarrative.stats.map((stat, index) => (
                        <div
                            key={index}
                            className="glass-panel rounded-2xl p-6 text-center group hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 shadow-md shadow-slate-900/5 dark:shadow-black/20"
                        >
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4] group-hover:scale-105 transition-transform duration-300">
                                {stat.value}
                            </div>
                            <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-2">
                                {stat.label}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                {stat.sublabel}
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};
