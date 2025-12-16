export const Footer = () => {
    return (
        <footer className="py-8 text-center text-slate-500 text-sm relative z-10 bg-slate-950/50 border-t border-slate-900/50">
            <p>© {new Date().getFullYear()} Prabudda Perera. All rights reserved.</p>
            <p className="mt-2 text-xs opacity-60">Built with Next.js, Radix UI & Framer Motion</p>
        </footer>
    );
};
