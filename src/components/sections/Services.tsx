"use client";

import { motion } from "framer-motion";
import { services } from "@/data/portfolio";

export const Services = () => {
    return (
        <section className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">What I Offer</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Comprehensive development services tailored to your needs.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-3xl bg-white/60 dark:bg-slate-800/20 border border-slate-200 dark:border-slate-700/30 hover:bg-white/80 dark:hover:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-600/50 transition-all duration-300 shadow-sm"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8 text-blue-500 dark:text-blue-400 group-hover:text-blue-400 dark:group-hover:text-blue-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{service.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>
                                        <ul className="space-y-1">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="text-xs text-slate-500 flex items-center gap-2">
                                                    <span className="w-1 h-1 bg-blue-500 rounded-full" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
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
