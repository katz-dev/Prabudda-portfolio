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
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 inset-x-0 h-16 z-50 bg-background/60 backdrop-blur-md border-b border-border/40 supports-[backdrop-filter]:bg-background/60"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <div
                        className="flex-shrink-0 cursor-pointer font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
                        onClick={() => scrollToSection("#hero")}
                    >
                        &lt;P /&gt;
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-muted-foreground hover:text-foreground hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2"
                                >
                                    <item.icon className="w-4 h-4" />
                                    {item.name}
                                </button>
                            ))}
                            <div className="ml-4">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                        >
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: { opacity: 1, height: "auto" },
                    closed: { opacity: 0, height: 0 },
                }}
                className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border/40"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.href)}
                            className="text-muted-foreground hover:text-foreground hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center gap-3"
                        >
                            <item.icon className="w-5 h-5" />
                            {item.name}
                        </button>
                    ))}
                </div>
            </motion.div>
        </motion.nav>
    );
};
