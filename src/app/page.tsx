'use client'
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Phone,
  GraduationCap,
  Briefcase,
  Code,
  Database,
  Globe,
  ChevronRight,
  Star,
  Award,
  Users,
  Zap,
  TrendingUp,
  BookOpen,
  Send,
  CheckCircle
} from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Particle animation with canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const particleCount = 60;
    const canvasParticles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 0.5,
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.5 ? 'hsl(var(--primary) / 0.3)' : 'hsl(220, 100%, 70% / 0.3)',
      pulse: Math.random() * 0.02 + 0.01
    }));

    let time = 0;
    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      canvasParticles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Mouse interaction
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          particle.x -= dx * 0.02;
          particle.y -= dy * 0.02;
        }

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Pulsing effect
        const pulse = Math.sin(time * particle.pulse) * 0.5 + 0.5;
        const currentOpacity = particle.opacity * (0.5 + pulse * 0.5);

        // Draw particle
        ctx.save();
        ctx.globalAlpha = currentOpacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.size * 2;
        ctx.fill();
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePosition.x, mousePosition.y]);



  useEffect(() => {
    setMounted(true);
  }, []);

  // Typing animation
  useEffect(() => {
    const text = "Full Stack Developer";
    let index = 0;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
        timeoutId = setTimeout(type, 100);
      } else {
        setIsTyping(false);
      }
    };

    if (isVisible) {
      setTimeout(() => type(), 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [isVisible]);

  // Contact form handlers
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setContactForm({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 3000);
    }, 2000);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };



  // Visibility animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Portfolio data
  const personalInfo = {
    name: "Prabudda Perera",
    title: "Full Stack Developer",
    email: "prabudda30@outlook.com",
    phone: "+94 761211546",
    location: "Sri Lanka",
    linkedin: "https://www.linkedin.com/in/prabudda-perera/",
    github: "https://github.com/katz-dev",
    portfolio: "https://github.com/katz-dev"
  };

  const summary = "I am a dedicated Full-Stack Developer with over a year of experience, including significant work in developing and administering FiveM servers. I possess a strong foundation in MERN stack technologies (MongoDB, Express.js, React, Node.js), particularly JavaScript, and extensive experience with frameworks like NestJS for robust backend development and Next.js for modern, high-performance frontends. I have a solid understanding of database systems like MySQL and MongoDB. My knowledge of Lua programming further enhances my ability to create immersive gaming experiences. I am passionate about crafting innovative solutions and delivering high-quality work.";

  const education = {
    degree: "BSc (Hons) Computer Security",
    institution: "Plymouth University",
    location: "Homagama, Sri Lanka",
    period: "2021 - Present"
  };

  const experience = [
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

  const projects = [
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

  const skills = {
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

  const services = [
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

  const achievements = [
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

  // Social media links
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: personalInfo.github, color: 'hover:text-gray-300' },
    { name: 'LinkedIn', icon: Linkedin, url: personalInfo.linkedin, color: 'hover:text-blue-400' },
    { name: 'Email', icon: Mail, url: `mailto:${personalInfo.email}`, color: 'hover:text-red-400' }
  ];

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

    return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-x-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            animationDelay: '1s',
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`,
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

            {/* Enhanced Theme Toggle */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
        <div className="relative group">
          <ThemeToggle />
          <div className="absolute right-full mr-2 sm:mr-3 top-1/2 -translate-y-1/2 bg-slate-900/90 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Toggle Theme
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800/50 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
        <div className="relative group">
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 group-hover:animate-pulse"
            title="Quick Contact"
          >
            <Send className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <div className="absolute right-14 sm:right-16 top-1/2 -translate-y-1/2 bg-slate-900/90 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Quick Contact
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-6xl mx-auto w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent mb-4 tracking-tight">
              {personalInfo.name}
            </h1>
            <div className="h-1 w-16 sm:w-20 md:w-24 mx-auto bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full mb-6"></div>
            <div className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 font-light min-h-[2rem]">
              {typedText}
              {isTyping && <span className="animate-pulse text-emerald-400">|</span>}
            </div>

            {/* Contact Info */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6 mb-8 text-slate-400">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base break-all sm:break-normal">{personalInfo.email}</span>
              </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div
              className={`flex justify-center gap-4 sm:gap-6 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-white ${social.color} hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-110 group`}
                    title={social.name}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* About/Summary Section */}
        <section className="py-20 px-6 bg-slate-900/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              About Me
            </h2>
            <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-3xl p-8">
              <p className="text-lg text-slate-300 leading-relaxed">
                {summary}
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Education
            </h2>
            <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-3xl p-8 hover:bg-slate-800/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
                  <p className="text-lg text-blue-400 mb-2">{education.institution}</p>
                  <div className="flex items-center gap-4 text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {education.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      {education.period}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 bg-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Career Journey
            </h2>
            <p className="text-base sm:text-lg text-slate-400 text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
              My professional path in full-stack development and gaming technology
            </p>

            <div className="relative">
              {/* Timeline Line - Hidden on mobile, visible on larger screens */}
              <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500"></div>

              <div className="space-y-8 sm:space-y-12">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative flex items-start gap-4 sm:gap-8"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Node */}
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-slate-700 rounded-full flex items-center justify-center z-10">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full animate-pulse"></div>
                    </div>

                    {/* Experience Card */}
                    <div className="flex-1 max-w-2xl">
                      <div className="group bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="p-2 sm:p-3 bg-emerald-500/20 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-emerald-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                              <div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                                  {exp.title}
            </h3>
                                <p className="text-base sm:text-lg text-emerald-400 mb-2">{exp.company}</p>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-400">
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                                  <span className="text-sm">{exp.location}</span>
                                </span>
                                <span className="text-xs sm:text-sm bg-slate-700/50 px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                                  {exp.period}
                                </span>
                              </div>
                            </div>
                            <ul className="space-y-2 sm:space-y-3">
                              {exp.description.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 sm:gap-3 text-slate-300">
                                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm sm:text-base">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-3xl p-8 hover:bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-purple-500/20 rounded-xl">
                      <Code className="w-8 h-8 text-purple-400" />
                  </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-300 group-hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-white" />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                          <Star className="w-4 h-4 text-yellow-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="py-12 sm:py-20 px-4 sm:px-6 bg-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Skills & Technologies
            </h2>
            <p className="text-base sm:text-lg text-slate-400 text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
              My technical expertise across various technologies and tools
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {/* Frontend Skills */}
              <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="p-2 sm:p-3 bg-blue-500/20 rounded-lg sm:rounded-xl">
                    <Code className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Frontend Development</h3>
                    <p className="text-slate-400 text-xs sm:text-sm">Modern web technologies</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.frontend.map((skill, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 hover:border-blue-400/40 hover:from-blue-500/20 hover:to-blue-600/20 transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-blue-300 font-medium text-sm sm:text-base group-hover:text-blue-200 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="p-2 sm:p-3 bg-green-500/20 rounded-lg sm:rounded-xl">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Backend Development</h3>
                    <p className="text-slate-400 text-xs sm:text-sm">Server-side technologies</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.backend.map((skill, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 hover:border-green-400/40 hover:from-green-500/20 hover:to-green-600/20 transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-green-300 font-medium text-sm sm:text-base group-hover:text-green-200 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Database Skills */}
              <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="p-2 sm:p-3 bg-purple-500/20 rounded-lg sm:rounded-xl">
                    <Database className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Database Technologies</h3>
                    <p className="text-slate-400 text-xs sm:text-sm">Data storage & management</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.databases.map((skill, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 hover:border-purple-400/40 hover:from-purple-500/20 hover:to-purple-600/20 transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-purple-300 font-medium text-sm sm:text-base group-hover:text-purple-200 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Skills */}
              <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="p-2 sm:p-3 bg-yellow-500/20 rounded-lg sm:rounded-xl">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Tools & Technologies</h3>
                    <p className="text-slate-400 text-xs sm:text-sm">Development tools & more</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.other.map((skill, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 hover:border-yellow-400/40 hover:from-yellow-500/20 hover:to-orange-500/20 transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-yellow-300 font-medium text-sm sm:text-base group-hover:text-yellow-200 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 bg-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              What I Offer
            </h2>
            <p className="text-lg text-slate-400 text-center mb-16 max-w-3xl mx-auto">
              Comprehensive development services tailored to bring your vision to life
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-3xl p-8 hover:bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-blue-400" />
                      </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Achievements & Milestones
            </h2>
            <p className="text-lg text-slate-400 text-center mb-16 max-w-3xl mx-auto">
              Key accomplishments that showcase my dedication and expertise
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-3xl p-8 hover:bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                            {achievement.title}
                          </h3>
                          <span className="text-sm text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full">
                            {achievement.date}
                        </span>
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

                {/* Contact Section */}
        <section className="py-12 sm:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Let&apos;s Work Together
              </h2>
              <p className="text-base sm:text-lg text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
                I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Form */}
              <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send a Message</h3>

                {isSubmitted ? (
                  <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center animate-fade-in">
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-400" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Message Sent!</h4>
                    <p className="text-emerald-300 text-sm sm:text-base">Thank you for reaching out. I&apos;ll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={contactForm.name}
                          onChange={handleContactChange}
                          required
                          className="w-full px-3 sm:px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg sm:rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={contactForm.email}
                          onChange={handleContactChange}
                          required
                          className="w-full px-3 sm:px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg sm:rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleContactChange}
                        required
                        className="w-full px-3 sm:px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg sm:rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                        placeholder="Project discussion"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={contactForm.message}
                        onChange={handleContactChange}
                        required
                        rows={4}
                        className="w-full px-3 sm:px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg sm:rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg sm:rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info & Quick Actions */}
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Get In Touch</h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 bg-blue-500/20 rounded-lg sm:rounded-xl">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-slate-300 font-medium text-sm sm:text-base">Email</p>
                        <a href={`mailto:${personalInfo.email}`} className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base break-all sm:break-normal">
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 bg-green-500/20 rounded-lg sm:rounded-xl">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                      </div>
                      <div>
                        <p className="text-slate-300 font-medium text-sm sm:text-base">Phone</p>
                        <a href={`tel:${personalInfo.phone}`} className="text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base">
                          {personalInfo.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 bg-purple-500/20 rounded-lg sm:rounded-xl">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-slate-300 font-medium text-sm sm:text-base">Location</p>
                        <p className="text-purple-400 text-sm sm:text-base">{personalInfo.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Quick Actions</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-slate-800/50 border border-slate-700/50 text-white rounded-lg sm:rounded-xl font-semibold hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                    >
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                      Connect on LinkedIn
                    </a>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-slate-800/50 border border-slate-700/50 text-white rounded-lg sm:rounded-xl font-semibold hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                      View GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-400 text-sm">
              © 2024 {personalInfo.name}. Built with passion and modern technologies.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
