"use client";

import { socialLinks } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-[#07111F]/80 backdrop-blur-lg py-12 px-4 sm:px-6 text-xs text-slate-500 dark:text-slate-400">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                
                {/* Brand & Tagline */}
                <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
                    <div className="font-bold text-slate-900 dark:text-white text-sm">
                        <span>Prabudda Perera</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Associate Software Support Engineer · Full-Stack Developer · Security Mindset
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                    {socialLinks.map((social) => {
                        const IconComponent = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                title={social.name}
                            >
                                <IconComponent className="w-4 h-4" />
                            </a>
                        );
                    })}

                    <button
                        onClick={scrollToTop}
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 border border-slate-200 dark:border-slate-700 transition-all ml-2"
                        title="Scroll back to top"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>

            </div>

            <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
                <p>© {new Date().getFullYear()} Prabudda Perera. All rights reserved.</p>
                <p className="flex items-center gap-1">
                    <span>Designed with Next.js 15, TypeScript &amp; Tailwind CSS</span>
                </p>
            </div>
        </footer>
    );
};
