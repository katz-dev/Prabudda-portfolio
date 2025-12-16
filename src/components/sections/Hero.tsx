"use client";

import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { ArrowDown, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
    const [typedText, setTypedText] = useState("");
    const textToType = personalInfo.title;

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setTypedText(textToType.slice(0, index + 1));
            index++;
            if (index > textToType.length) clearInterval(intervalId);
        }, 100);
        return () => clearInterval(intervalId);
    }, [textToType]);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative z-10 pt-16">
            <div className="text-center max-w-5xl mx-auto w-full">

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent mb-6 tracking-tight drop-shadow-sm"
                >
                    {personalInfo.name}
                </motion.h1>

                {/* Separator */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="h-1.5 w-24 sm:w-32 mx-auto bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full mb-8"
                />

                {/* Typed Title */}
                <div className="text-xl sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8 font-light min-h-[2.5rem] tracking-wide">
                    {typedText}
                    <span className="animate-pulse text-emerald-400">|</span>
                </div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-12 text-slate-600 dark:text-slate-400"
                >
                    <div className="flex items-center gap-2 justify-center hover:text-blue-400 transition-colors">
                        <Mail className="w-5 h-5" />
                        <span className="text-base">{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center hover:text-emerald-400 transition-colors">
                        <Phone className="w-5 h-5" />
                        <span className="text-base">{personalInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center hover:text-purple-400 transition-colors">
                        <MapPin className="w-5 h-5" />
                        <span className="text-base">{personalInfo.location}</span>
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex justify-center gap-6"
                >
                    {socialLinks.map((social) => {
                        const IconComponent = social.icon;
                        return (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-12 h-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white hover:bg-slate-700/80 hover:border-slate-500/50 transition-colors shadow-lg shadow-black/5 dark:shadow-black/20`}
                                title={social.name}
                            >
                                <IconComponent className="w-6 h-6" />
                            </motion.a>
                        );
                    })}
                </motion.div>

                {/* Scroll Down Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 dark:text-slate-500"
                >
                    <ArrowDown className="w-6 h-6" />
                </motion.div>

            </div>
        </section>
    );
};
