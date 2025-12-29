"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X, Code, User, Briefcase, FolderGit2, Cpu, Mail } from "lucide-react";

const navItems = [
    { name: "Home", href: "#hero", icon: Code },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Skills", href: "#skills", icon: Cpu },
    { name: "Contact", href: "#contact", icon: Mail },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const scrollToSection = (href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // height of navbar
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
        <motion.div
            variants={{
                visible: { y: 0 },
                hidden: { y: "-150%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
        >
            <nav className="relative backdrop-blur-2xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-full shadow-2xl shadow-black/10 dark:shadow-black/40 px-6 py-3">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent dark:from-white/5 dark:via-white/2 dark:to-transparent rounded-full pointer-events-none" />
                
                <div className="relative flex items-center justify-between">
                    {/* Logo */}
                    <div
                        className="flex-shrink-0 cursor-pointer font-bold text-xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
                        onClick={() => scrollToSection("#hero")}
                    >
                        &lt;P /&gt;
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-foreground/70 hover:text-foreground hover:bg-white/20 dark:hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
                                >
                                    <item.icon className="w-4 h-4" />
                                    {item.name}
                                </button>
                            ))}
                            <div className="ml-2 pl-2 border-l border-white/20">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden gap-2 items-center">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-full text-foreground hover:bg-white/20 dark:hover:bg-white/10 focus:outline-none transition-all duration-300"
                        >
                            {isOpen ? <X className="block h-5 w-5" /> : <Menu className="block h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: { opacity: 1, height: "auto", marginTop: 12 },
                    closed: { opacity: 0, height: 0, marginTop: 0 },
                }}
                className="md:hidden overflow-hidden backdrop-blur-2xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl shadow-black/10 dark:shadow-black/40"
            >
                {/* Glassmorphism overlay for mobile menu */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent dark:from-white/5 dark:via-white/2 dark:to-transparent rounded-3xl pointer-events-none" />
                
                <div className="relative px-4 py-4 space-y-2">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.href)}
                            className="text-foreground/70 hover:text-foreground hover:bg-white/20 dark:hover:bg-white/10 block px-4 py-3 rounded-2xl text-base font-medium w-full text-left flex items-center gap-3 transition-all duration-300"
                        >
                            <item.icon className="w-5 h-5" />
                            {item.name}
                        </button>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};
