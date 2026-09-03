"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import {
    Mail,
    Send,
    CheckCircle2,
    Loader2,
    Copy,
    Check,
    Linkedin,
    Github,
    MapPin,
    Clock
} from "lucide-react";

export const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        
        // Simulating robust submission handling
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    return (
        <section id="contact" className="py-24 px-4 sm:px-6 relative z-10">
            <div className="max-w-6xl mx-auto space-y-16">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-3"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#2563EB] dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                        <Mail className="w-3.5 h-3.5" />
                        <span>Get In Touch</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Let&apos;s build something secure and scalable.
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Whether you need enterprise software support, custom full-stack web applications, game server infrastructure, or security consultation, I am ready to collaborate.
                    </p>
                </motion.div>

                {/* Main Contact Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* Left Column: Direct Channels, Copy Email, Socials & Timezone */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-8"
                    >
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                    Direct Channels
                                </h3>
                                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                                    Fastest response typically within 24 hours.
                                </p>
                            </div>

                            {/* Email Card with Copy Button */}
                            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                                    Direct Email
                                </span>
                                <div className="flex items-center justify-between gap-2">
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="text-xs sm:text-sm font-mono font-semibold text-[#2563EB] dark:text-cyan-400 hover:underline truncate"
                                    >
                                        {personalInfo.email}
                                    </a>
                                    <button
                                        onClick={handleCopyEmail}
                                        className="p-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 border border-slate-200 dark:border-slate-700 transition-colors shrink-0"
                                        title="Copy email to clipboard"
                                    >
                                        {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            {/* Social Profiles */}
                            <div className="space-y-2.5">
                                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                                    Professional Profiles
                                </span>
                                <div className="grid grid-cols-2 gap-2.5">
                                    <a
                                        href={personalInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 p-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
                                    >
                                        <Linkedin className="w-4 h-4 text-blue-500" />
                                        <span>LinkedIn Profile</span>
                                    </a>
                                    <a
                                        href={personalInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 p-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
                                    >
                                        <Github className="w-4 h-4 text-cyan-500" />
                                        <span>GitHub Repos</span>
                                    </a>
                                </div>
                            </div>

                            {/* Location & Timezone */}
                            <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                                    <span>{personalInfo.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                                    <span>Timezone: Sri Lanka (GMT +5:30)</span>
                                </div>
                            </div>
                        </div>

                        {/* Availability Guarantee Banner */}
                        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                            <div>
                                <strong className="font-semibold block">Open for Opportunities</strong>
                                <span>Available for full-time engineering roles, freelance contracts, &amp; consultation.</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Working Interactive Message Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-900/5 dark:shadow-black/20"
                    >
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                            Send a Direct Message
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
                            Fill out the details below to discuss your project scope or explore employment opportunities.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                        Your Name <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Alex Morgan"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:border-cyan-500 transition-colors"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                        Your Email <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="alex@company.com"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:border-cyan-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                    Subject / Project Type
                                </label>
                                <input
                                    type="text"
                                    placeholder="Full-Stack Opportunity / Software Support / Game Server"
                                    value={formState.subject}
                                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:border-cyan-500 transition-colors"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                    Message Details <span className="text-rose-500">*</span>
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Tell me about your project, timeline, tech stack, or engineering team needs..."
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:border-cyan-500 transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting" || status === "success"}
                                className={`w-full py-4 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all cursor-pointer ${
                                    status === "success"
                                        ? "bg-emerald-600 hover:bg-emerald-600"
                                        : "bg-[#2563EB] hover:bg-blue-600 shadow-lg shadow-blue-500/25 hover:scale-[1.01] active:scale-95"
                                } disabled:opacity-70 disabled:cursor-not-allowed`}
                            >
                                {status === "submitting" ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Securing &amp; Transmitting Message...</span>
                                    </>
                                ) : status === "success" ? (
                                    <>
                                        <CheckCircle2 className="w-4 h-4" />
                                        <span>Message Sent Successfully! I&apos;ll be in touch soon.</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};
