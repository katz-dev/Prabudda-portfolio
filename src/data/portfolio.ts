import {
    Github,
    Linkedin,
    Mail,
    Code,
    Database,
    Globe,
    Award,
    Users,
    Zap,
    TrendingUp,
    BookOpen,
} from "lucide-react";

export const personalInfo = {
    name: "Prabudda Perera",
    title: "Full Stack Developer",
    email: "prabudda30@outlook.com",
    phone: "+94 761211546",
    location: "Sri Lanka",
    linkedin: "https://www.linkedin.com/in/prabudda-perera/",
    github: "https://github.com/katz-dev",
    portfolio: "https://github.com/katz-dev" // Using github as portfolio for now
};

export const summary = "I am a dedicated Full-Stack Developer with over a year of experience, including significant work in developing and administering FiveM servers. I possess a strong foundation in MERN stack technologies (MongoDB, Express.js, React, Node.js), particularly JavaScript, and extensive experience with frameworks like NestJS for robust backend development and Next.js for modern, high-performance frontends. I have a solid understanding of database systems like MySQL and MongoDB. My knowledge of Lua programming further enhances my ability to create immersive gaming experiences. I am passionate about crafting innovative solutions and delivering high-quality work.";

export const education = {
    degree: "BSc (Hons) Computer Security",
    institution: "Plymouth University",
    location: "Homagama, Sri Lanka",
    period: "2021 - Present"
};

export const experience = [
    {
        title: "Full Stack Developer",
        company: "Fiver",
        location: "Remote",
        period: "January 2021 - Present",
        description: [
            "Developed full-stack applications using Next.js (frontend) and NestJS (backend), leveraging MongoDB for data management",
            "Designed and implemented robust RESTful APIs to power application features",
            "Contributed to the design and maintenance of CI/CD pipelines for automated testing and deployment",
            "Collaborated with teams and utilized Git for efficient project delivery"
        ]
    },
    {
        title: "FiveM Game Developer",
        company: "Fiver",
        location: "Remote",
        period: "2021 - Present",
        description: [
            "Developed and administered immersive FiveM experiences utilizing frameworks such as QBCore, QBOX, ESX, and Standalone",
            "Proficient in Lua, HTML, JavaScript, TypeScript, and MySQL for full-stack FiveM development",
            "Collaborated with teams and leveraged Git for version control to deliver project milestones"
        ]
    }
];

export const projects = [
    {
        title: "Fortisafe",
        description: "A comprehensive cybersecurity platform that addresses modern digital security challenges through an integrated three-tier architecture",
        technologies: ["Next.js", "NestJS", "JavaScript", "MongoDB"],
        github: "https://github.com/katz-dev/fortisafe",
        features: [
            "Browser Extension: Real-time protection and password management",
            "Web Application: Comprehensive password management dashboard",
            "Backend API: Secure authentication, password storage, and security scanning"
        ]
    },
    {
        title: "Online-Library-Book-Store-Book-Boulevard",
        description: "A dynamic platform designed for avid readers and aspiring authors to discover books and share literary creations",
        technologies: ["MongoDB", "React.js", "Node.js"],
        github: "https://github.com/katz-dev/Online-Library-Book-Store-Book-Boulevard",
        features: [
            "Book discovery and search functionality",
            "Author platform for sharing literary works",
            "User-friendly interface for reading and purchasing"
        ]
    }
];

export const skills = {
    frontend: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 92 },
        { name: "Next.js", level: 85 }
    ],
    backend: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 88 },
        { name: "NestJS", level: 82 }
    ],
    databases: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Firebase", level: 75 }
    ],
    other: [
        { name: "Git", level: 90 },
        { name: "Lua", level: 80 }
    ]
};

export const services = [
    {
        icon: Code,
        title: "Full-Stack Development",
        description: "End-to-end web application development using modern MERN stack technologies",
        features: ["Custom Web Applications", "API Development", "Database Design", "Performance Optimization"]
    },
    {
        icon: Globe,
        title: "FiveM Game Development",
        description: "Immersive gaming experiences using FiveM framework with Lua scripting",
        features: ["Custom Game Modes", "Server Administration", "Multiplayer Features", "Performance Tuning"]
    },
    {
        icon: Database,
        title: "Database Architecture",
        description: "Robust database design and management for scalable applications",
        features: ["Schema Design", "Data Migration", "Query Optimization", "Security Implementation"]
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        description: "Enhancing application speed and user experience through optimization techniques",
        features: ["Code Optimization", "Load Balancing", "Caching Strategies", "Monitoring"]
    }
];

export const achievements = [
    {
        icon: Award,
        title: "Completed Multiple Full-Stack Projects",
        description: "Successfully delivered end-to-end web applications using modern technologies",
        date: "2023-2024"
    },
    {
        icon: Users,
        title: "FiveM Server Administration",
        description: "Managed and optimized FiveM gaming servers for enhanced player experience",
        date: "2021-2024"
    },
    {
        icon: BookOpen,
        title: "Computer Security Degree",
        description: "Graduated with BSc (Hons) in Computer Security from Plymouth University",
        date: "2021-2024"
    },
    {
        icon: TrendingUp,
        title: "Continuous Learning",
        description: "Regularly updating skills with latest technologies and frameworks",
        date: "Ongoing"
    }
];

export const socialLinks = [
    { name: 'GitHub', icon: Github, url: personalInfo.github, color: 'hover:text-gray-300' },
    { name: 'LinkedIn', icon: Linkedin, url: personalInfo.linkedin, color: 'hover:text-blue-400' },
    { name: 'Email', icon: Mail, url: `mailto:${personalInfo.email}`, color: 'hover:text-red-400' }
];
