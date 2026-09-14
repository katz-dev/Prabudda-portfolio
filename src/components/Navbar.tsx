"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence, type Variants } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { personalInfo, socialLinks } from "@/data/portfolio";
import {
    Menu,
    X,
    User,
    Briefcase,
    FolderGit2,
    Cpu,
    Mail,
    GraduationCap,
    Download,
    ChevronRight,
    Sparkles
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
    const [activeSection, setActiveSection] = useState<string>("");
    const { scrollY } = useScroll();

    // Hide navbar on scroll down, show on scroll up (disabled when mobile menu is open)
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 160 && !isOpen) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // Track active section for navigation highlight
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => item.href.substring(1));
            const scrollPosition = window.scrollY + 120;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (scrollPosition >= sectionTop) {
                        setActiveSection(`#${sections[i]}`);
                        return;
                    }
                }
            }
            if (window.scrollY < 200) {
                setActiveSection("");
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Close mobile drawer on desktop resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const scrollToSection = (href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 85;
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

    const drawerVariants: Variants = {
        hidden: { opacity: 0, y: -16, scale: 0.97 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 380,
                damping: 32,
                staggerChildren: 0.04,
                delayChildren: 0.05,
            },
        },
        exit: {
            opacity: 0,
            y: -14,
            scale: 0.97,
            transition: { duration: 0.18, ease: "easeInOut" },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
    };

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "-125%", opacity: 0 },
                }}
                animate={hidden && !isOpen ? "hidden" : "visible"}
                transition={{ duration: 0.32, ease: "easeInOut" }}
                className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 max-w-7xl mx-auto flex justify-center"
            >
                <nav className="w-full glass-dock rounded-2xl shadow-xl shadow-slate-900/5 dark:shadow-black/40 px-3.5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all">
                    {/* Brand Logo & Live Beacon */}
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="flex items-center gap-2 group text-left cursor-pointer min-w-0"
                            aria-label="Back to top"
                        >
                            <div className="min-w-0">
                                <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 block tracking-tight truncate group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                                    Prabudda Perera
                                </span>
                                <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-mono block truncate">
                                    Full-Stack &amp; Support Eng.
                                </span>
                            </div>
                        </button>

                        <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-medium shrink-0">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Available for hire</span>
                        </div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href;
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                                        isActive
                                            ? "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 font-semibold"
                                            : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                                    }`}
                                >
                                    <item.icon
                                        className={`w-3.5 h-3.5 ${
                                            isActive ? "text-cyan-500" : "text-cyan-500/80"
                                        }`}
                                    />
                                    <span>{item.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activePill"
                                            className="absolute bottom-0 left-2 right-2 h-0.5 bg-cyan-500 rounded-full"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Action Icons & Resume CTA */}
                    <div className="flex items-center gap-2 shrink-0">
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
                            className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/70 border border-slate-200/80 dark:border-slate-800/80 md:hidden transition-all active:scale-95 flex items-center justify-center"
                            aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
                            aria-expanded={isOpen}
                            aria-controls="mobile-nav-menu"
                        >
                            {isOpen ? (
                                <X className="w-5 h-5 text-cyan-500" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Navigation Drawer & Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 md:hidden"
                            aria-hidden="true"
                        />

                        {/* Mobile Navigation Drawer */}
                        <motion.div
                            id="mobile-nav-menu"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile Navigation"
                            variants={drawerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed inset-x-3 top-20 z-50 md:hidden glass-panel rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-200/80 dark:border-slate-800/80 max-h-[calc(100vh-6rem)] overflow-y-auto space-y-4"
                        >
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800/80">
                                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">
                                    <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                                    <span>Navigation</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-medium">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>Available for hire</span>
                                </div>
                            </div>

                            {/* Nav Links Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {navItems.map((item) => {
                                    const isActive = activeSection === item.href;
                                    return (
                                        <motion.button
                                            key={item.name}
                                            variants={itemVariants}
                                            onClick={() => scrollToSection(item.href)}
                                            className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-medium transition-all text-left min-h-[44px] ${
                                                isActive
                                                    ? "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 font-semibold"
                                                    : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/70 border border-slate-200/40 dark:border-slate-800/40"
                                            }`}
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <div
                                                    className={`p-1.5 rounded-lg ${
                                                        isActive
                                                            ? "bg-cyan-500 text-white"
                                                            : "bg-slate-100 dark:bg-slate-800 text-cyan-500"
                                                    }`}
                                                >
                                                    <item.icon className="w-4 h-4" />
                                                </div>
                                                <span>{item.name}</span>
                                            </div>
                                            <ChevronRight
                                                className={`w-4 h-4 transition-transform ${
                                                    isActive
                                                        ? "text-cyan-500 translate-x-0.5"
                                                        : "text-slate-400"
                                                }`}
                                            />
                                        </motion.button>
                                    );
                                })}
                            </div>

                            {/* Resume Download CTA */}
                            <motion.div variants={itemVariants} className="pt-1">
                                <a
                                    href={personalInfo.resume}
                                    download="PrabuddaCV.pdf"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-[#2563EB] hover:bg-blue-600 text-white shadow-md shadow-blue-500/25 active:scale-[0.99] transition-all min-h-[44px]"
                                >
                                    <Download className="w-4 h-4" />
                                    <span>Download Resume (PDF)</span>
                                </a>
                            </motion.div>

                            {/* Social Quick Connect Strip */}
                            <motion.div
                                variants={itemVariants}
                                className="pt-2 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between"
                            >
                                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                                    Quick Connect
                                </span>
                                <div className="flex items-center gap-2">
                                    {socialLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
                                            aria-label={link.name}
                                        >
                                            <link.icon className="w-4 h-4" />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
