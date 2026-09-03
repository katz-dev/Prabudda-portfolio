import {
    Github,
    Linkedin,
    Mail,
    Code,
    Database,
    Shield,
    Gamepad2,
    Server,
    Cpu,
    HardDrive
} from "lucide-react";

export const personalInfo = {
    name: "Prabudda Perera",
    badge: "Available for Full-Stack & Engineering Roles",
    title: "Associate Software Support Engineer | Full-Stack Developer",
    titles: [
        "Associate Software Support Engineer",
        "Full-Stack Web Developer",
        "Cybersecurity Enthusiast",
        "FiveM / Game Systems Developer",
        "Freelance Solutions Architect"
    ],
    shortBio: "Building secure, scalable digital experiences through full-stack engineering, automation, and problem solving.",
    email: "samadith30@gmail.com",
    phone: "+94 76 121 1546",
    location: "Nattandiya, North Western Province, Sri Lanka",
    country: "Sri Lanka",
    timezone: "GMT+5:30",
    linkedin: "https://www.linkedin.com/in/prabudda-perera",
    github: "https://github.com/katz-dev",
    fiverr: "https://www.fiverr.com",
    resume: "/PrabuddaCV.pdf"
};

export const aboutNarrative = {
    paragraphs: [
        "I am an Associate Software Support Engineer and Full-Stack Developer with 6+ years of hands-on experience across web development, software support, HRIS systems, biometric device integrations, and game server development.",
        "Currently, I work with VFT HOLDINGS (PVT) LTD, where I support Futura HRIS systems, troubleshoot software and hardware integration issues, manage biometric device connectivity with ADMS/HRIS platforms, and execute Python-based database migrations with MySQL and Postman API. My focus is simple: deliver reliable systems, reduce support friction, and turn messy technical issues into clean, working solutions.",
        "Alongside software support, I architect modern full-stack web applications utilizing Next.js Server Actions, NestJS, React, Node.js, Express, and cloud deployments. My academic background in BSc (Hons) Computer Security from Plymouth University reinforces every line of code I write: security is never an afterthought. Whether it is securing API endpoints, integrating OAuth2 and payment gateways, hardening Linux VPS servers, or optimizing game server logic, I build systems that are resilient, scalable, and secure."
    ],
    stats: [
        {
            value: "6+",
            label: "Years Experience",
            sublabel: "Software Support & Full-Stack"
        },
        {
            value: "Full Stack",
            label: "Development",
            sublabel: "Next.js, NestJS, MERN & APIs"
        },
        {
            value: "Secure",
            label: "Systems Mindset",
            sublabel: "Plymouth Cyber Security B.Sc."
        },
        {
            value: "100%",
            label: "Data Accuracy",
            sublabel: "HRIS Attendance & Migrations"
        }
    ]
};

export const skillsData = {
    categories: [
        {
            id: "frontend",
            title: "Frontend Engineering",
            icon: Code,
            description: "Modern, dynamic, performant user interfaces built with modern reactive architectures.",
            skills: [
                { name: "React", level: "Expert", tags: ["Hooks", "Context", "Components"] },
                { name: "Next.js", level: "Expert", tags: ["App Router", "Server Actions", "SSR/SSG"] },
                { name: "TypeScript", level: "Advanced", tags: ["Type Safety", "Interfaces"] },
                { name: "JavaScript (ES6+)", level: "Expert", tags: ["Async/Await", "Event Loop"] },
                { name: "Tailwind CSS", level: "Expert", tags: ["Design Systems", "Glassmorphism"] },
                { name: "HTML5 / CSS3", level: "Expert", tags: ["Semantic Layouts", "Animations"] }
            ]
        },
        {
            id: "backend",
            title: "Backend & APIs",
            icon: Server,
            description: "Scalable backends, enterprise microservices, and asynchronous event architectures.",
            skills: [
                { name: "Node.js", level: "Expert", tags: ["Runtime", "Event-Driven"] },
                { name: "Express.js", level: "Expert", tags: ["REST APIs", "Middleware"] },
                { name: "NestJS", level: "Advanced", tags: ["Modular Architecture", "DI", "Guards"] },
                { name: "RESTful APIs", level: "Expert", tags: ["API Design", "Rate Limiting"] },
                { name: "Discord Webhooks", level: "Advanced", tags: ["Real-time Notifications"] },
                { name: "Payment Gateways", level: "Advanced", tags: ["PayPal", "Tebex Headless API"] }
            ]
        },
        {
            id: "database",
            title: "Databases & Migration",
            icon: Database,
            description: "Relational and document storage, complex indexing, data pipelines, and migration scripts.",
            skills: [
                { name: "MySQL", level: "Expert", tags: ["Complex Queries", "Stored Procedures", "Indexes"] },
                { name: "MongoDB", level: "Advanced", tags: ["Aggregation", "Mongoose", "NoSQL"] },
                { name: "Database Migrations", level: "Advanced", tags: ["Python Scripts", "Zero Data Loss"] },
                { name: "Database Security", level: "Advanced", tags: ["Role-Based Access", "Sanitization"] }
            ]
        },
        {
            id: "security",
            title: "Cybersecurity & Hardening",
            icon: Shield,
            description: "Security-first engineering grounded in BSc (Hons) Computer Security principles.",
            skills: [
                { name: "Secure API Design", level: "Advanced", tags: ["Validation", "JWT", "Sanitization"] },
                { name: "OAuth2 / Auth", level: "Advanced", tags: ["Discord OAuth2", "Session Handling"] },
                { name: "Cloudflare Defense", level: "Advanced", tags: ["DDoS Mitigation", "SSL/TLS Automation"] },
                { name: "Server Firewalls", level: "Advanced", tags: ["UFW", "Windows VPS Rules", "Hardening"] },
                { name: "Threat Analysis", level: "Advanced", tags: ["Penetration Concepts", "OWASP Top 10"] }
            ]
        },
        {
            id: "game-dev",
            title: "FiveM & Game Development",
            icon: Gamepad2,
            description: "High-performance multiplayer server architectures and immersive client-server logic.",
            skills: [
                { name: "Lua Scripting", level: "Expert", tags: ["Server-Side", "Client-Side", "NUI"] },
                { name: "FiveM Frameworks", level: "Expert", tags: ["QB Core", "QBOX", "ESX", "Standalone"] },
                { name: "VPS Administration", level: "Advanced", tags: ["Windows Server", "Ubuntu Linux VPS"] },
                { name: "Economy Systems", level: "Expert", tags: ["Custom Jobs", "Item Logic", "Vehicles"] }
            ]
        },
        {
            id: "tools",
            title: "DevOps, Support & Tools",
            icon: Cpu,
            description: "Testing suites, server orchestration, enterprise support, and AI-accelerated workflows.",
            skills: [
                { name: "Postman & Apidog", level: "Expert", tags: ["Automated API Testing", "Mocking"] },
                { name: "ADMS & Biometrics", level: "Expert", tags: ["Time Attendance", "Hardware Config"] },
                { name: "Git & GitHub", level: "Expert", tags: ["Branching", "CI/CD Workflows"] },
                { name: "Dokploy & Docker", level: "Advanced", tags: ["Self-Hosting", "Containerized Apps"] },
                { name: "Cursor AI", level: "Expert", tags: ["AI-Augmented Development", "Refactoring"] },
                { name: "Google Sheets Analytics", level: "Expert", tags: ["Support Metrics", "Data Modeling"] }
            ]
        }
    ]
};

export const experienceData = [
    {
        company: "VFT HOLDINGS (PVT) LTD",
        role: "Associate Software Support Engineer",
        period: "November 2025 - Present",
        type: "Full-Time",
        location: "Maharagama, Western Province, Sri Lanka",
        badge: "Enterprise HRIS & Systems",
        color: "blue",
        highlights: [
            "Database Migration & Scripting: Collaborated closely with the engineering team to execute seamless database migrations to updated versions utilizing custom Python scripts, guaranteeing zero data loss.",
            "Device Integration & ADMS Management: Provisioned, configured, and managed ADMS server accounts; successfully linked, integrated, and troubleshot enterprise time attendance and biometric access control hardware.",
            "QA Testing & Bug Identification: Partnered with software developers to identify, reproduce, and isolate complex technical bugs across both web and mobile applications through rigorous QA protocols.",
            "Attendance Processing & Data Accuracy: Owned end-to-end QA validation of HRIS attendance processing algorithms, ensuring 100% data accuracy and mission-critical reliability.",
            "Client Enablement & Technical Training: Delivered comprehensive technical support, live product demonstrations, and technical training sessions for onboarding enterprise clients.",
            "Data Analysis & Tracking: Leveraged advanced Google Sheets data modeling for in-depth analytics, reporting, and tracking user support metrics for client organizations."
        ],
        technologies: ["Futura HRIS", "ADMS", "MySQL", "Python", "Biometric Devices", "Postman", "Google Sheets", "QA Automation"]
    },
    {
        company: "VFT HOLDINGS (PVT) LTD",
        role: "Trainee Software Support Engineer",
        period: "September 2025 - November 2025",
        type: "Full-Time",
        location: "Maharagama, Western Province, Sri Lanka",
        badge: "System Onboarding",
        color: "cyan",
        highlights: [
            "Customer Support & Technical Investigation: Combined front-facing client support with deep technical troubleshooting to isolate complex issues within the Futura HRIS platform.",
            "Biometric & System Integration: Managed the seamless integration of biometric attendance devices with the company's Automatic Data Management System (ADMS) and HRIS.",
            "Technical Troubleshooting & Testing: Utilized MySQL queries and Postman API collections to inspect payloads, diagnose anomalies, and resolve user-reported issues.",
            "Bug Tracking & QA Lifecycle: Actively participated in the quality assurance lifecycle by reproducing, documenting, and filing actionable bug reports to support core engineering."
        ],
        technologies: ["Futura HRIS", "ADMS", "MySQL", "Postman", "Hardware Integration", "Issue Tracking"]
    },
    {
        company: "XFaction",
        role: "Full Stack Web Developer",
        period: "July 2025 - Present",
        type: "Contract / Remote",
        location: "Kuwait (Remote)",
        badge: "Production SaaS & E-Commerce",
        color: "purple",
        highlights: [
            "Full-Stack Next.js Architecture: Architected and deployed a production web application utilizing Next.js App Router and Server Actions for a unified, ultra-fast full-stack architecture.",
            "E-Commerce Digital Marketplace: Developed a specialized digital asset storefront for FiveM assets (custom vehicles, MLOs, scripts, and in-game resources).",
            "Payment Gateways Integration: Integrated the Tebex Headless API and PayPal payment gateways to facilitate automated, secure, and instant digital asset fulfillment.",
            "Discord OAuth2 Authentication: Implemented Discord OAuth2 authentication flows to provide seamless user sign-ins and instantly verify community profile roles.",
            "Real-Time Discord Webhooks: Built automated webhook pipelines linked to Discord guilds to monitor payment confirmations and track financial transactions in real time.",
            "Custom Admin Dashboards: Created responsive admin consoles empowering server owners to manage merchandise, sales metrics, user bans, and layout controls.",
            "Infrastructure & Hardening: Self-hosted production servers using Dokploy on Ubuntu Linux VPS. Integrated Cloudflare for secure DNS proxying, SSL automation, and real-time DDoS mitigation."
        ],
        technologies: ["Next.js", "Server Actions", "TypeScript", "Tebex API", "PayPal SDK", "Discord OAuth2", "Dokploy", "Ubuntu Linux", "Cloudflare"]
    },
    {
        company: "XFaction",
        role: "FiveM Server Developer",
        period: "March 2025 - June 2025",
        type: "Contract / Remote",
        location: "Kuwait (Remote)",
        badge: "Game Server Infrastructure",
        color: "emerald",
        highlights: [
            "High-Performance Game Servers: Deployed and configured high-throughput FiveM game servers on Windows Server VPS environments, maintaining 24/7 uptime and low tick latency.",
            "QB-Core Architecture from Scratch: Architected server framework infrastructure from the ground up using QB-Core, including secure MySQL connection pooling and schema design.",
            "Network Security & Anti-DDoS: Configured optimized firewall rules, rate limits, and network routing to defend against malicious DDoS floods and exploit attempts.",
            "Interactive Scripting: Programmed, debugged, and customized interactive gameplay systems using Lua, JavaScript, HTML, and CSS for a seamless player experience."
        ],
        technologies: ["Lua", "QB-Core", "MySQL", "Windows Server VPS", "Firewall Rules", "Anti-DDoS", "JavaScript"]
    },
    {
        company: "Fiverr Freelance",
        role: "Full-Stack & FiveM Game Developer (Level 2 Seller / Fiverr's Choice)",
        period: "2019 - Present (6+ Years)",
        type: "Freelance",
        location: "Global Remote",
        badge: "Fiverr's Choice & Level 2",
        color: "amber",
        highlights: [
            "6+ years delivering custom software, web platforms, and FiveM game servers to an international client base across North America, Europe, and the Middle East.",
            "Earned Fiverr's Choice badge and Level Two Seller standing with consistently top-tier client ratings for technical excellence and communication.",
            "Developed bespoke web platforms utilizing Next.js, React, NestJS, and MongoDB, designing clean REST APIs and automated CI/CD deployment routines.",
            "Custom Lua script creation, framework migrations (ESX to QBCore/QBOX), database optimizations, and server security hardening for competitive FiveM communities."
        ],
        technologies: ["Next.js", "NestJS", "React", "MongoDB", "MySQL", "Lua", "QB-Core", "QBOX", "ESX", "Git"]
    }
];

export const projectsData = [
    {
        id: "xfaction-marketplace",
        title: "XFaction Digital Gaming Marketplace",
        category: "Full Stack Applications",
        categoryTag: "fullstack",
        subtitle: "Headless E-Commerce Platform with Automated Tebex & PayPal Fulfillment",
        description: "A production-grade e-commerce web platform engineered for FiveM community assets. Features Next.js Server Actions, headless payment processing, Discord OAuth2 identity verification, automated webhook notifications, and custom admin management.",
        image: "/projects/xfaction-preview.svg",
        technologies: ["Next.js 15", "TypeScript", "Server Actions", "Tebex Headless API", "PayPal", "Discord OAuth2", "Dokploy", "Ubuntu", "Cloudflare"],
        features: [
            "Unified full-stack architecture powered by Next.js Server Actions",
            "Headless payment automation via Tebex and PayPal REST APIs",
            "Discord OAuth2 single sign-on with automatic guild role verification",
            "Real-time Discord notification webhooks for live purchase alerts",
            "Custom administrative console for inventory, sales metrics, and layout configuration",
            "Cloudflare proxy protection with automated SSL and DDoS defense"
        ],
        challengesSolved: [
            "Eliminated checkout latency by migrating from traditional Express APIs to Next.js Server Actions with optimistic UI updates.",
            "Protected digital assets from unauthorized access through cryptographically verified Discord OAuth tokens and server-side webhook validation.",
            "Deployed zero-downtime containerized builds on an Ubuntu VPS using Dokploy behind Cloudflare edge caching."
        ],
        github: "https://github.com/katz-dev",
        demo: "https://github.com/katz-dev",
        featured: true,
        stats: { transactions: "1,000+", uptime: "99.9%", latency: "<120ms" }
    },
    {
        id: "fortisafe-cybersecurity",
        title: "FortiSafe Cybersecurity Platform",
        category: "Security Projects",
        categoryTag: "security",
        subtitle: "Three-Tier Password Vault & Active Threat Detection Engine",
        description: "An integrated three-tier cybersecurity solution encompassing a cross-browser extension for credential capture, a Next.js security portal for vault management, and a hardened NestJS backend API with cryptographic storage and breached password scanning.",
        image: "/projects/fortisafe-preview.svg",
        technologies: ["Next.js", "NestJS", "TypeScript", "MongoDB", "WebExtensions API", "AES-256-GCM", "Argon2", "REST API"],
        features: [
            "Browser Extension: Real-time autofill, breach detection, and password generator",
            "Web Application: Responsive management dashboard with security audit scores",
            "Hardened Backend: AES-256 client-side zero-knowledge encrypted vault storage",
            "Argon2id password hashing and automated breach checking against exposed credential databases",
            "Role-based access control with granular session token invalidation"
        ],
        challengesSolved: [
            "Implemented a zero-knowledge encryption architecture ensuring master passwords and cryptographic keys never reach server memory unencrypted.",
            "Designed efficient indexed database schemas in MongoDB to enable sub-second vault lookups across encrypted payloads."
        ],
        github: "https://github.com/katz-dev/fortisafe",
        demo: "https://github.com/katz-dev/fortisafe",
        featured: true,
        stats: { encryption: "AES-256-GCM", architecture: "Zero-Knowledge", tests: "100% Passed" }
    },
    {
        id: "futura-hris-adms",
        title: "Futura HRIS & Biometric ADMS Integration",
        category: "Software Support & Integration",
        categoryTag: "support",
        roleTag: "Associate Software Support Engineer (VFT Holdings)",
        subtitle: "Enterprise Technical Support, ADMS Device Connectivity & Python Migrations",
        description: "An enterprise software support case study at VFT HOLDINGS (PVT) LTD. As an Associate Software Support Engineer, I supported the Futura HRIS platform by managing biometric terminal integration with ADMS, executing Python database migration scripts, performing API testing with Postman, and verifying attendance algorithms for client companies.",
        image: "/projects/hris-preview.svg",
        technologies: ["Futura HRIS", "ADMS Protocol", "MySQL", "Python", "Postman", "Hardware Terminals", "Google Sheets"],
        features: [
            "Provisioned, configured, and managed ADMS server accounts for enterprise client branches",
            "Executed smooth MySQL database migrations across HRIS versions using custom Python scripts",
            "Owned end-to-end QA validation of HRIS attendance processing algorithms to ensure 100% accuracy",
            "Utilized Postman API collections to inspect payloads, diagnose anomalies, and isolate software bugs",
            "Managed Google Sheets models for advanced data analysis and user support metrics"
        ],
        challengesSolved: [
            "Eliminated calculation drift across complex night-shift attendance logs, attaining 100% algorithmic data accuracy.",
            "Diagnosed and resolved hardware-to-cloud connectivity dropouts across remote branch biometric devices."
        ],
        github: "https://github.com/katz-dev",
        demo: "#experience",
        featured: true,
        isSupportCaseStudy: true,
        stats: { role: "Support Eng.", dataAccuracy: "100%", devices: "Multi-Branch" }
    },
    {
        id: "qbcore-server-infrastructure",
        title: "Enterprise FiveM QB-Core Server Ecosystem",
        category: "FiveM Development",
        categoryTag: "fivem",
        subtitle: "Custom Lua Server Architecture, Economy Engine & Anti-DDoS VPS",
        description: "A complete multiplayer roleplay server architecture built from scratch utilizing the QB-Core framework. Includes custom Lua scripts, interactive web-based NUI interfaces, optimized MySQL database pools, and fortified Windows VPS firewall rules.",
        image: "/projects/fivem-preview.svg",
        technologies: ["Lua", "QB-Core", "JavaScript", "HTML/CSS", "MySQL", "Windows Server VPS", "Anti-DDoS Firewall"],
        features: [
            "Tailored server economy balancing legal/illegal occupations, custom inventory, and property deeds",
            "Custom Lua gameplay scripts with event throttling to prevent server thread starvation",
            "Interactive HTML/JS NUI menus communicating bi-directionally with client-side Lua",
            "Optimized MySQL connection pooling reducing resource query bottlenecks by 65%",
            "Custom Windows Firewall and network packet filtering rules neutralizing UDP DDoS floods"
        ],
        challengesSolved: [
            "Optimized server tick rates from 45ms to constant 0.04ms resmon averages by refactoring nested Lua loops and caching volatile state.",
            "Prevented in-game currency exploits by implementing server-side transactional validation on all economy events."
        ],
        github: "https://github.com/katz-dev",
        demo: "https://github.com/katz-dev",
        featured: true,
        stats: { resmon: "0.04 ms", concurrent: "128 Players", uptime: "99.8%" }
    },
    {
        id: "book-boulevard-library",
        title: "Book Boulevard Literary Commerce Platform",
        category: "Full Stack Applications",
        categoryTag: "fullstack",
        subtitle: "Dynamic Book Discovery & Independent Author Publishing System",
        description: "A modern web application designed for bibliophiles and authors to discover books, preview chapters, publish original manuscripts, and engage with community reviews.",
        image: "/projects/book-preview.svg",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Tailwind CSS"],
        features: [
            "Rich faceted book discovery with search across genres, authors, and ratings",
            "Author publishing portal with WYSIWYG chapter editor and cover image uploads",
            "Secure user authentication with JWT, refresh tokens, and password reset flows",
            "Interactive review and star rating system with sentiment aggregation"
        ],
        challengesSolved: [
            "Implemented MongoDB text indexes and compound sorting to deliver instantaneous search results across large literary catalogs.",
            "Built responsive reading view with light/dark reader modes and accessible typography."
        ],
        github: "https://github.com/katz-dev/Online-Library-Book-Store-Book-Boulevard",
        demo: "https://github.com/katz-dev/Online-Library-Book-Store-Book-Boulevard",
        featured: false,
        stats: { catalog: "Dynamic", auth: "JWT / Refresh", responsive: "100%" }
    }
];

export const educationData = [
    {
        institution: "University of Plymouth",
        degree: "BSc (Hons) Computer Security",
        field: "Computer Science & Cybersecurity",
        period: "2022 - December 2025",
        location: "United Kingdom / Sri Lanka",
        grade: "Honours Degree",
        description: "Rigorous academic study centered on cryptographic foundations, secure software development lifecycles, network forensics, threat modeling, ethical hacking, and enterprise security governance.",
        highlights: [
            "Applied Cryptography, Public Key Infrastructure & Symmetric Ciphers",
            "Network Defense, Packet Analysis & Intrusion Detection Systems (IDS/IPS)",
            "Secure Web Architecture, OWASP Top 10 Mitigation & Penetration Testing",
            "Digital Forensics, Incident Response & Secure Database Administration"
        ],
        badge: "Degree in Computer Security",
        icon: Shield
    },
    {
        institution: "NSBM Green University",
        degree: "Foundation Degree in Computer Science",
        field: "Computer Science & Software Foundations",
        period: "2021 - 2022",
        location: "Homagama, Sri Lanka",
        grade: "Distinction Track",
        description: "Comprehensive groundwork in software algorithms, object-oriented programming, data structures, relational database design, and systems engineering.",
        highlights: [
            "Object-Oriented Programming (Java, C++) & Algorithmic Complexity",
            "Relational Database Systems (SQL, Normalization, Transactions)",
            "Web Development Fundamentals & System Networking"
        ],
        badge: "Higher Education Foundation",
        icon: HardDrive
    },
    {
        institution: "Dhammissara National School",
        degree: "G.C.E. Ordinary Level (O/L)",
        field: "Information & Communication Technology Focus",
        period: "Completed December 2019",
        location: "Nattandiya, Sri Lanka",
        grade: "Excellence in ICT",
        description: "Early academic foundation establishing programming logic, computer hardware concepts, mathematics, and science principles.",
        highlights: [
            "Early programming principles & algorithmic logic",
            "Hardware architecture, basic operating systems & networking"
        ],
        badge: "Academic Foundations",
        icon: Cpu
    }
];

export const terminalCommands = {
    help: `Available commands:
  whoami       - Display my core identity & background
  skills       - List key technical specializations
  status       - Check current availability & work status
  experience   - View career timeline & key companies
  projects     - View featured production projects
  education    - View academic degrees & security focus
  contact      - Get direct communication channels
  resume       - Download official PDF resume
  clear        - Clear terminal console`,

    whoami: `Prabudda Perera
--------------------------------------------------
Title      : Associate Software Support Engineer | Full-Stack Developer
Mindset    : Security-First, Scalable, Production-Ready
Experience : 6+ Years (Enterprise HRIS, SaaS, FiveM & Freelance)
Location   : Nattandiya, North Western Province, Sri Lanka
Degree     : BSc (Hons) Computer Security - University of Plymouth
Mission    : "Building secure, scalable digital experiences through full-stack engineering, automation, and problem solving."`,

    skills: `CORE TECHNICAL ARSENAL:
--------------------------------------------------
[Frontend] : React, Next.js 15 (Server Actions), TypeScript, Tailwind CSS
[Backend]  : Node.js, Express.js, NestJS, REST APIs, Discord Webhooks
[Database] : MySQL (Procedures, Migrations), MongoDB (Aggregations)
[Security] : Secure API Design, OAuth2, Cloudflare, VPS Hardening, DDoS Defense
[Game Dev] : Lua, FiveM (QB Core, QBOX, ESX), Game Economy, NUI
[Tools]    : Postman, Apidog, Cursor AI, Dokploy, Linux VPS, Google Sheets`,

    status: `STATUS: ONLINE & ACTIVE
--------------------------------------------------
Availability : Open for Full-Time Roles & High-Impact Freelance Projects
Current Role : Associate Software Support Engineer @ VFT HOLDINGS (PVT) LTD
Freelance    : Level 2 Seller & Fiverr's Choice Game/Web Developer
Security     : Zero-Downtime mindset, verified credentials`,

    experience: `CAREER HIGHLIGHTS:
--------------------------------------------------
* VFT HOLDINGS (PVT) LTD (2025 - Present)
  Associate Software Support Engineer (HRIS, ADMS, Python DB Migrations)
* XFaction (2025 - Present)
  Full Stack Web Developer (Next.js, Tebex, PayPal, Discord OAuth, Dokploy)
* FiveM Server Development (2025)
  Server Architect (QB-Core, DDoS Defense, Lua Scripting)
* Fiverr (2019 - Present | 6+ Years)
  Full-Stack & Game Developer (Level 2 Seller, Fiverr's Choice)`,

    projects: `FEATURED PRODUCTION PROJECTS:
--------------------------------------------------
1. XFaction Marketplace  -> Next.js 15, Tebex Headless, PayPal, Discord OAuth
2. FortiSafe Security    -> Three-tier zero-knowledge password vault & NestJS API
3. Futura HRIS & ADMS    -> [Software Support] Biometric ADMS Sync & Python DB Migrations @ VFT
4. FiveM QB-Core Server  -> Multiplayer server infrastructure, DDoS mitigation, Lua
5. Book Boulevard        -> Full-stack literary discovery platform (MERN)`,

    education: `ACADEMIC CREDENTIALS:
--------------------------------------------------
* University of Plymouth (2022 - 2025)
  BSc (Hons) Computer Security (Computer Science)
* NSBM Green University (2021 - 2022)
  Foundation Degree in Computer Science
* Dhammissara National School (2019)
  G.C.E. O/L with focus on Information Technology`,

    contact: `CONNECT WITH ME:
--------------------------------------------------
Email    : samadith30@gmail.com
LinkedIn : linkedin.com/in/prabudda-perera
GitHub   : github.com/katz-dev
Resume   : /PrabuddaCV.pdf`,

    resume: `Initiating download of PrabuddaCV.pdf...`
};

export const socialLinks = [
    { name: 'GitHub', icon: Github, url: personalInfo.github, color: 'hover:text-cyan-400' },
    { name: 'LinkedIn', icon: Linkedin, url: personalInfo.linkedin, color: 'hover:text-blue-400' },
    { name: 'Email', icon: Mail, url: `mailto:${personalInfo.email}`, color: 'hover:text-emerald-400' }
];
