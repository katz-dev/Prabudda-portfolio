import React from "react";

interface TechLogoProps {
    name: string;
    className?: string;
    size?: number;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = "", size = 18 }) => {
    const n = name.toLowerCase();

    // 1. React
    if (n.includes("react")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#00D8FF" strokeWidth="1.5" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#00D8FF" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="2" fill="#00D8FF" />
            </svg>
        );
    }

    // 2. Next.js
    if (n.includes("next")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <circle cx="12" cy="12" r="10.5" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" />
                <path d="M8 8v8M16 8v8M8.5 8.5l7 7.5" stroke="#FFFFFF" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
        );
    }

    // 3. TypeScript
    if (n.includes("typescript")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <rect width="24" height="24" rx="4" fill="#3178C6" />
                <path d="M4 8h8M8 8v10M13.5 15.5c.8.8 2 1.3 3.3 1.3 1.6 0 2.4-.7 2.4-1.7 0-2.3-5.2-1.4-5.2-4.5 0-1.7 1.3-3 3.4-3 1.2 0 2.2.4 2.9 1l-.7 1.4c-.6-.5-1.4-.8-2.2-.8-1 0-1.8.6-1.8 1.4 0 2.1 5.2 1.3 5.2 4.5 0 1.9-1.5 3.2-3.8 3.2-1.5 0-2.8-.5-3.6-1.4l.7-1.4z" fill="#FFFFFF" />
            </svg>
        );
    }

    // 4. JavaScript
    if (n.includes("javascript")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <rect width="24" height="24" rx="4" fill="#F7DF1E" />
                <path d="M7 11.5v5c0 1.5.8 2.2 2 2.2 1 0 1.6-.4 2-1l-.7-1.1c-.3.4-.7.6-1.2.6-.5 0-.8-.3-.8-.9v-4.8H7zm7.5 3.7c.6.6 1.4 1 2.3 1 1 0 1.6-.5 1.6-1.2 0-1.7-3.6-1.1-3.6-3.4 0-1.3 1-2.3 2.5-2.3.9 0 1.6.3 2.1.8l-.6 1.1c-.4-.4-1-.6-1.5-.6-.7 0-1.2.4-1.2 1 0 1.6 3.6 1 3.6 3.4 0 1.4-1.1 2.4-2.7 2.4-1.1 0-2.1-.4-2.7-1.1l.7-1.1z" fill="#000000" />
            </svg>
        );
    }

    // 5. Tailwind CSS
    if (n.includes("tailwind")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#38BDF8" />
            </svg>
        );
    }

    // 6. HTML / CSS
    if (n.includes("html") || n.includes("css")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <path d="M4 3l1.6 18 6.4 2 6.4-2L20 3H4z" fill="#E44D26" />
                <path d="M12 4.8v16.4l5.1-1.6 1.3-14.8H12z" fill="#F16529" />
                <path d="M7.8 7.5h8.4l-.2 2.2H10l.2 2.2h5.6l-.4 5.3-3.4 1-3.4-1-.2-2.7h2.2l.1 1.4 1.3.4 1.3-.4.2-2.1H7.5l.3-6.3z" fill="#FFFFFF" />
            </svg>
        );
    }

    // 7. Node.js
    if (n.includes("node")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2z" fill="#339933" />
                <path d="M12 4.2l7.2 4.2v8.3L12 20.8l-7.2-4.2V8.4L12 4.2z" fill="#215732" />
                <circle cx="12" cy="12" r="3" fill="#68A063" />
            </svg>
        );
    }

    // 8. Express.js
    if (n.includes("express")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <circle cx="12" cy="12" r="11" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
                <text x="5" y="16" fill="#F8FAFC" fontFamily="sans-serif" fontSize="11" fontWeight="bold">ex</text>
            </svg>
        );
    }

    // 9. NestJS
    if (n.includes("nest")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <path d="M12 2C6.5 2 2 6.5 2 12c0 2.8 1.2 5.4 3.1 7.2L12 14l-3-4 7-2-2 4 4 1-6 8.5C18.2 20.2 22 16.5 22 12c0-5.5-4.5-10-10-10z" fill="#E0234E" />
            </svg>
        );
    }

    // 10. RESTful APIs
    if (n.includes("rest") || n.includes("api")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${className}`}>
                <rect x="2" y="5" width="20" height="14" rx="3" />
                <path d="M7 12h10M12 7v10" />
            </svg>
        );
    }

    // 11. Discord
    if (n.includes("discord")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <circle cx="12" cy="12" r="11" fill="#5865F2" />
                <path d="M16.5 8s-1-.6-2.1-.7c0 0-.1.2-.2.5 1.2.3 1.8.8 2.3 1.4-1.2-.6-2.4-1-3.6-1s-2.4.4-3.6 1c.5-.6 1.1-1.1 2.3-1.4 0-.3-.1-.5-.2-.5-1.1.1-2.1.7-2.1.7-1.3 2-1.7 4-1.5 5.9 1.4 1 2.8 1.1 3.8 1.1.3-.4.6-.9.8-1.4-.5-.2-1-.4-1.4-.8.1.1.2.2.3.2 1 .5 2.1.7 3.2.7s2.2-.2 3.2-.7c.1-.1.2-.1.3-.2-.4.4-.9.6-1.4.8.2.5.5 1 .8 1.4 1 0 2.4-.1 3.8-1.1.3-2.1-.3-4.1-1.6-5.9zM9.5 13.3c-.6 0-1.1-.6-1.1-1.2s.5-1.2 1.1-1.2 1.1.6 1.1 1.2c0 .7-.5 1.2-1.1 1.2zm5 0c-.6 0-1.1-.6-1.1-1.2s.5-1.2 1.1-1.2 1.1.6 1.1 1.2c0 .7-.5 1.2-1.1 1.2z" fill="#FFFFFF" />
            </svg>
        );
    }

    // 12. Payment Gateways (PayPal, Tebex)
    if (n.includes("payment") || n.includes("paypal") || n.includes("tebex")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${className}`}>
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
                <circle cx="7" cy="15" r="1" fill="#10B981" />
            </svg>
        );
    }

    // 13. MySQL
    if (n.includes("mysql")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <circle cx="12" cy="12" r="11" fill="#00758F" />
                <path d="M6 14.5c2.5-3 6.5-4 10-2.5-1-2-3-3-6-2.5-2.5.4-3.5 2-4 5z" fill="#F29111" />
                <path d="M12 16.5c-3 0-5-1.5-6-3.5 1.5 2 4 2.5 6 2 2.5-.6 4-2 5-4-.5 3-2.5 5.5-5 5.5z" fill="#FFFFFF" />
            </svg>
        );
    }

    // 14. MongoDB
    if (n.includes("mongo")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <path d="M12 2C11.6 3 8 7.5 8 12.5c0 3.5 2 6.5 4 8.5 2-2 4-5 4-8.5 0-5-3.6-9.5-4-10.5z" fill="#47A248" />
                <path d="M12 2v19c.3-.3 4-4.5 4-8.5 0-5-3.6-9.5-4-10.5z" fill="#499D4A" />
                <line x1="12" y1="2" x2="12" y2="22" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.4" />
            </svg>
        );
    }

    // 15. Database / Migrations
    if (n.includes("database") || n.includes("migration")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${className}`}>
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
        );
    }

    // 16. Security / Hardening / Threat
    if (n.includes("security") || n.includes("threat") || n.includes("hardening")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <path d="M12 2L4 5v6.5c0 5 3.4 9.7 8 10.5 4.6-.8 8-5.5 8-10.5V5l-8-3z" fill="#0EA5E9" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="1.8" />
                <path d="M9.5 12l2 2 3.5-3.5" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }

    // 17. OAuth2 / Auth
    if (n.includes("oauth") || n.includes("auth")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${className}`}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                <circle cx="12" cy="16" r="1.5" fill="#F59E0B" />
            </svg>
        );
    }

    // 18. Cloudflare Defense
    if (n.includes("cloudflare")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <path d="M19.4 12.5a4.2 4.2 0 0 0-3.9-3 4.4 4.4 0 0 0-4.3 3.4 3.7 3.7 0 0 0-2.2-.7 3.8 3.8 0 0 0-3.8 3.8c0 .2 0 .4.1.6A3.4 3.4 0 0 0 4 19.5h15.2a3.8 3.8 0 0 0 .2-7z" fill="#F38020" />
                <path d="M16 19.5h3.4a3.8 3.8 0 0 0 .2-7 4.2 4.2 0 0 0-3.9-3 4.4 4.4 0 0 0-4.3 3.4c.5 1.5 1.8 2.6 3.4 2.6h1.2v4z" fill="#FAAE40" />
            </svg>
        );
    }

    // 19. Server Firewalls / VPS
    if (n.includes("firewall") || n.includes("vps")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${className}`}>
                <rect x="2" y="3" width="20" height="8" rx="2" />
                <rect x="2" y="13" width="20" height="8" rx="2" />
                <line x1="6" y1="7" x2="6.01" y2="7" />
                <line x1="6" y1="17" x2="6.01" y2="17" />
            </svg>
        );
    }

    // 20. Lua Scripting
    if (n.includes("lua")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <circle cx="12" cy="12" r="9" fill="#000080" />
                <circle cx="7" cy="8" r="3.5" fill="#FFFFFF" />
                <circle cx="17" cy="6" r="1.5" fill="#FFFFFF" />
            </svg>
        );
    }

    // 21. FiveM
    if (n.includes("fivem")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <rect width="24" height="24" rx="5" fill="#F56038" />
                <path d="M7 6h10l-4 6 4 6H7l4-6-4-6z" fill="#FFFFFF" />
            </svg>
        );
    }

    // 22. Postman & Apidog
    if (n.includes("postman") || n.includes("apidog")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <circle cx="12" cy="12" r="11" fill="#FF6C37" />
                <path d="M6.5 13l4-4 4 4-1.5 1.5-2.5-2.5-2.5 2.5zM12 9V5h-2v4h2z" fill="#FFFFFF" />
            </svg>
        );
    }

    // 23. ADMS & Biometrics
    if (n.includes("adms") || n.includes("biometric")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${className}`}>
                <path d="M12 2a10 10 0 0 0-10 10c0 3.5 1.8 6.6 4.6 8.4" />
                <path d="M12 6a6 6 0 0 0-6 6c0 2.2 1.2 4.1 3 5.2" />
                <path d="M12 10a2 2 0 0 0-2 2c0 .9.5 1.7 1.3 2" />
                <circle cx="17" cy="17" r="4" fill="#06B6D4" fillOpacity="0.2" stroke="#06B6D4" strokeWidth="1.5" />
            </svg>
        );
    }

    // 24. Git & GitHub
    if (n.includes("git")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <path d="M21.6 10.7l-8.3-8.3a1.8 1.8 0 0 0-2.6 0L8.4 4.8l3.3 3.3c.8-.3 1.7-.1 2.3.5.6.6.8 1.5.5 2.3l3.2 3.2c.8-.3 1.7-.1 2.3.5 1 .9 1 2.5 0 3.4-.9 1-2.5 1-3.4 0-.8-.7-1-1.8-.5-2.7l-3-3v4.7c.3.2.5.6.5 1 0 1-.9 1.8-1.9 1.8-1 0-1.8-.8-1.8-1.8 0-.5.2-.9.5-1.2V9.8a1.8 1.8 0 0 1-.5-1.2c0-.5.2-.9.5-1.2L5 4.1 2.4 6.7a1.8 1.8 0 0 0 0 2.6l8.3 8.3c.7.7 1.9.7 2.6 0l8.3-8.3c.7-.7.7-1.9 0-2.6z" fill="#F05032" />
            </svg>
        );
    }

    // 25. Dokploy & Docker
    if (n.includes("docker") || n.includes("dokploy")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <path d="M22.5 12.3c-.6-.4-1.5-.5-2.2-.2-.2-.6-.6-1.2-1.2-1.5l-.6-.3-.3.6c-.3.7-.3 1.4-.1 2.1-.8.5-2.2.5-3.3.4H3c-.5 0-.9.2-1.2.6-.4.5-.4 1.2-.2 1.8 1.3 3.2 4.4 5.4 7.9 5.4 5.3 0 9.8-3.4 10.8-8.2.8-.2 1.6-.4 2.2-.9l.5-.4-.5-.3z" fill="#2496ED" />
                <rect x="7" y="9" width="2" height="2" fill="#2496ED" rx="0.3" />
                <rect x="10" y="9" width="2" height="2" fill="#2496ED" rx="0.3" />
                <rect x="13" y="9" width="2" height="2" fill="#2496ED" rx="0.3" />
                <rect x="10" y="6" width="2" height="2" fill="#2496ED" rx="0.3" />
                <rect x="7" y="6" width="2" height="2" fill="#2496ED" rx="0.3" />
            </svg>
        );
    }

    // 26. Cursor AI
    if (n.includes("cursor") || n.includes("ai")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <circle cx="12" cy="12" r="11" fill="#07111F" stroke="#38BDF8" strokeWidth="1" />
                <path d="M9 6l7 6-4 1-2 5-1-12z" fill="#38BDF8" />
            </svg>
        );
    }

    // 27. Google Sheets Analytics
    if (n.includes("sheet") || n.includes("google") || n.includes("analytic")) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
                <rect width="24" height="24" rx="4" fill="#0F9D58" />
                <path d="M6 8h12M6 12h12M6 16h12M10 6v12M14 6v12" stroke="#FFFFFF" strokeWidth="1.2" />
            </svg>
        );
    }

    // Default Tech generic icon
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${className}`}>
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    );
};
