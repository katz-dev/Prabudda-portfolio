"use client";

import React, { useState, useRef, useEffect } from "react";
import { terminalCommands, personalInfo } from "@/data/portfolio";
import { Terminal, ShieldCheck, Activity, Copy, Check, CornerDownLeft, Sparkles } from "lucide-react";

interface CommandHistory {
    command: string;
    output: string;
    timestamp: string;
}

export const InteractiveTerminal: React.FC = () => {
    const [history, setHistory] = useState<CommandHistory[]>([
        {
            command: "whoami",
            output: terminalCommands.whoami,
            timestamp: "14:00:10"
        },
        {
            command: "status",
            output: terminalCommands.status,
            timestamp: "14:00:12"
        }
    ]);
    const [inputVal, setInputVal] = useState("");
    const [copied, setCopied] = useState(false);
    const terminalBodyRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const availableCommands = ["whoami", "skills", "status", "experience", "projects", "education", "contact", "resume", "help", "clear"];

    useEffect(() => {
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [history]);

    const executeCommand = (rawCmd: string) => {
        const cmd = rawCmd.trim().toLowerCase();
        const timestamp = new Date().toLocaleTimeString("en-US", { hour12: false });

        if (!cmd) return;

        if (cmd === "clear") {
            setHistory([]);
            setInputVal("");
            return;
        }

        if (cmd === "resume") {
            window.open(personalInfo.resume, "_blank");
            setHistory(prev => [
                ...prev,
                {
                    command: rawCmd,
                    output: `Downloading ${personalInfo.resume} in a new tab...`,
                    timestamp
                }
            ]);
            setInputVal("");
            return;
        }

        const output = terminalCommands[cmd as keyof typeof terminalCommands] ||
            `bash: command not found: ${cmd}\nType 'help' to see list of valid commands.`;

        setHistory(prev => [
            ...prev,
            {
                command: rawCmd,
                output,
                timestamp
            }
        ]);
        setInputVal("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            executeCommand(inputVal);
        }
    };

    const handleCopyAll = () => {
        const text = history.map(h => `$ ${h.command}\n${h.output}`).join("\n\n");
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden terminal-window text-slate-200 font-mono text-xs sm:text-sm shadow-2xl transition-all duration-300">
            {/* Terminal Window Header */}
            <div className="bg-[#0A1628] px-4 py-3 border-b border-cyan-500/20 flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100 transition-opacity" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 transition-opacity" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 transition-opacity" />
                    <span className="ml-2 text-xs text-slate-400 font-medium flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        prabudda@dev-vps:~
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        <Activity className="w-3 h-3 animate-pulse" />
                        <span>24ms</span>
                    </div>

                    <div className="hidden sm:flex items-center gap-1 text-[11px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                        <ShieldCheck className="w-3 h-3" />
                        <span>AES-256</span>
                    </div>

                    <button
                        onClick={handleCopyAll}
                        className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        title="Copy terminal session"
                    >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                </div>
            </div>

            {/* Quick Command Action Chips */}
            <div className="bg-[#091322] px-4 py-2 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
                <span className="text-slate-500 flex items-center gap-1 mr-1 shrink-0">
                    <Sparkles className="w-3 h-3 text-cyan-400" /> Quick:
                </span>
                {availableCommands.slice(0, 7).map(cmd => (
                    <button
                        key={cmd}
                        onClick={() => executeCommand(cmd)}
                        className="shrink-0 px-2.5 py-1 rounded-md bg-slate-800/60 hover:bg-cyan-950/60 hover:text-cyan-300 hover:border-cyan-500/40 text-slate-400 border border-slate-700/40 transition-all active:scale-95 cursor-pointer"
                    >
                        {cmd}
                    </button>
                ))}
            </div>

            {/* Terminal Body */}
            <div
                ref={terminalBodyRef}
                className="p-4 sm:p-5 h-[280px] sm:h-[320px] overflow-y-auto micro-scrollbar space-y-3.5 bg-[#07111F]/95"
                onClick={() => inputRef.current?.focus()}
            >
                <div className="text-slate-400 text-xs border-b border-slate-800/80 pb-3 leading-relaxed">
                    <p className="text-cyan-400 font-semibold">PRABUDDA PERERA — SYSTEM ARCHITECTURE TERMINAL v2.6.4</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                        Type <span className="text-amber-400">help</span> for commands, or click any quick pill above.
                    </p>
                </div>

                {history.map((item, index) => (
                    <div key={index} className="space-y-1.5 leading-relaxed">
                        <div className="flex items-center gap-2 text-slate-300">
                            <span className="text-cyan-400 font-bold">prabudda@sys:~$</span>
                            <span className="text-emerald-300 font-semibold">{item.command}</span>
                            <span className="text-[10px] text-slate-400 ml-auto">{item.timestamp}</span>
                        </div>
                        <pre className="text-slate-300 whitespace-pre-wrap pl-3 sm:pl-4 border-l-2 border-cyan-500/30 text-xs sm:text-[13px] leading-relaxed font-mono">
                            {item.output}
                        </pre>
                    </div>
                ))}

                {/* Live Input Line */}
                <div className="flex items-center gap-2 text-slate-300 pt-1">
                    <span className="text-cyan-400 font-bold shrink-0">prabudda@sys:~$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type 'help' or command..."
                        className="bg-transparent border-none outline-none text-emerald-300 font-mono w-full text-xs sm:text-sm placeholder:text-slate-500"
                        autoComplete="off"
                        spellCheck="false"
                    />
                    <button
                        onClick={() => executeCommand(inputVal)}
                        className="text-slate-400 hover:text-cyan-400 transition-colors p-1 cursor-pointer"
                        title="Run command"
                    >
                        <CornerDownLeft className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>

            {/* Bottom Footer Info */}
            <div className="bg-[#0A1628] px-4 py-1.5 border-t border-slate-800 text-[11px] text-slate-400 flex justify-between items-center select-none">
                <span>Shell: ZSH / Node v22.12 / Next.js 15</span>
                <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Ready for input
                </span>
            </div>
        </div>
    );
};
