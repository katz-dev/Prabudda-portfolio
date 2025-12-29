"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Code, Globe, Database, Star } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface SkillItem {
    name: string;
}

interface SkillCardProps {
    title: string;
    icon: LucideIcon;
    className: string;
    iconColor: string;
    items: SkillItem[];
    delay: number;
}

export const Skills = () => {
    return (
        <section id="skills" className="py-20 px-6 relative z-10 bg-slate-100/50 dark:bg-black/20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Technical Arsenal</h2>
                    <p className="text-slate-600 dark:text-slate-400">The tools and technologies I use to bring ideas to life.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Frontend */}
                    <SkillCard
                        title="Frontend Development"
                        icon={Code}
                        className="from-blue-500/20 to-blue-600/5"
                        iconColor="text-blue-400"
                        items={skills.frontend}
                        delay={0}
                    />
                    {/* Backend */}
                    <SkillCard
                        title="Backend Development"
                        icon={Globe}
                        className="from-green-500/20 to-green-600/5"
                        iconColor="text-green-400"
                        items={skills.backend}
                        delay={0.2}
                    />
                    {/* Database */}
                    <SkillCard
                        title="Database Technologies"
                        icon={Database}
                        className="from-purple-500/20 to-purple-600/5"
                        iconColor="text-purple-400"
                        items={skills.databases}
                        delay={0.4}
                    />
                    {/* Tools */}
                    <SkillCard
                        title="Tools & Technologies"
                        icon={Star}
                        className="from-yellow-500/20 to-orange-600/5"
                        iconColor="text-yellow-400"
                        items={skills.other}
                        delay={0.6}
                    />
                </div>
            </div>
        </section>
    );
};

const SkillCard = ({ title, icon: Icon, className, iconColor, items, delay }: SkillCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className={`bg-white/60 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/30 rounded-3xl p-8 hover:bg-white/80 dark:hover:bg-slate-800/40 transition-colors shadow-sm`}
        >
            <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${className}`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
                {items.map((skill: SkillItem, idx: number) => (
                    <div
                        key={idx}
                        className="group relative px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-colors cursor-default overflow-hidden"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-r ${className} opacity-0 group-hover:opacity-100 transition-opacity`} />
                        <span className="relative z-10 text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white text-sm font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
