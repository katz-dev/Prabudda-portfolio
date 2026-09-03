"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { personalInfo } from "@/data/portfolio";
import {
    Menu,
    X,
    User,
    Briefcase,
    FolderGit2,
    Cpu,
    Mail,
    GraduationCap,
    Download
} from "lucide-react";

const navItems = [
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Cpu },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Contact", href: "#contact", icon: Mail },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 200) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const scrollToSection = (href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "-120%", opacity: 0 },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 max-w-7xl mx-auto flex justify-center"
            >
                <nav className="w-full glass-dock rounded-2xl shadow-xl shadow-slate-900/5 dark:shadow-black/40 px-4 sm:px-6 py-3 flex items-center justify-between transition-all">
                    {/* Brand Logo & Live Beacon */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="flex items-center gap-2 group text-left cursor-pointer"
                        >
                            <div>
                                <span className="font-bold text-sm text-slate-900 dark:text-slate-100 block tracking-tight group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                                    Prabudda Perera
                                </span>
                                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono block">
                                    Full-Stack &amp; Support Eng.
                                </span>
                            </div>
                        </button>

                        <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-medium">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Available for hire</span>
                        </div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5"
                            >
                                <item.icon className="w-3.5 h-3.5 text-cyan-500/80" />
                                {item.name}
                            </button>
                        ))}
                    </div>

                    {/* Right Action Icons & Resume CTA */}
                    <div className="flex items-center gap-2">
                        <ThemeToggle />

                        <a
                            href={personalInfo.resume}
                            download="PrabuddaCV.pdf"
                            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#2563EB] hover:bg-blue-600 text-white shadow-sm shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-95"
                        >
                            <Download className="w-3.5 h-3.5" />
                            <span>Resume</span>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden transition-colors"
                            aria-label="Toggle Navigation Menu"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-x-4 top-20 z-40 md:hidden glass-panel rounded-2xl p-5 shadow-2xl space-y-3"
                    >
                        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Navigation</span>
                            <div className="flex items-center gap-1.5 text-emerald-500 text-xs font-medium">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                Available
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors text-left"
                                >
                                    <item.icon className="w-4 h-4 text-cyan-500" />
                                    {item.name}
                                </button>
                            ))}
                        </div>

                        <div className="pt-2">
                            <a
                                href={personalInfo.resume}
                                download="PrabuddaCV.pdf"
                                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-[#2563EB] text-white shadow-md shadow-blue-500/20"
                            >
                                <Download className="w-4 h-4" />
                                Download Full Resume (PDF)
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
