'use client'
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Target,
  FileText,
  Bot,
  BarChart3,
  PartyPopper
} from "lucide-react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
    const particleCount = 50;
    const canvasParticles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.5 + 0.2
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      canvasParticles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = 'hsl(var(--primary) / 0.3)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);



  useEffect(() => {
    setMounted(true);

    // Set target date (you can change this to your desired launch date)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);



  // Visibility animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Email validation function
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubscribing(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsSubscribing(false);
      setEmail("");
    }, 1500);
  };

  // Social media links with lucide icons
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/prabudda', color: 'hover:text-gray-300' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/prabudda', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/prabudda', color: 'hover:text-blue-300' },
    { name: 'Email', icon: Mail, url: 'mailto:prabudda@example.com', color: 'hover:text-red-400' }
  ];

  // Development milestones
  const milestones = [
    { title: 'Design System', progress: 85, status: 'completed', color: 'from-emerald-500 to-teal-600' },
    { title: 'Core Development', progress: 70, status: 'in-progress', color: 'from-blue-500 to-indigo-600' },
    { title: 'Content Creation', progress: 60, status: 'in-progress', color: 'from-purple-500 to-pink-600' },
    { title: 'Testing & Polish', progress: 40, status: 'upcoming', color: 'from-orange-500 to-red-600' }
  ];

  // Upcoming features with lucide icons
  const upcomingFeatures = [
    {
      title: 'Interactive Portfolio',
      description: 'Dynamic project showcases with live previews and interactive demos',
      icon: Target,
      category: 'Core Features'
    },
    {
      title: 'Tech Blog Platform',
      description: 'In-depth articles about development, tutorials, and industry insights',
      icon: FileText,
      category: 'Content'
    },
    {
      title: 'AI-Powered Contact',
      description: 'Smart contact forms with instant responses and project inquiries',
      icon: Bot,
      category: 'Automation'
    },
    {
      title: 'Performance Dashboard',
      description: 'Real-time analytics and insights into portfolio performance',
      icon: BarChart3,
      category: 'Analytics'
    }
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

      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Main Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-6xl mx-auto">
            {/* Logo/Brand */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="inline-block mb-8">
                <h1 className="text-6xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent mb-4 tracking-tight">
                  PRABUDDA
                </h1>
                <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-slate-300 mb-6 font-light">Full-Stack Developer & Designer</p>
            </div>

            {/* Main CTA */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Crafting Digital
                <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mt-2">
                  Experiences
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
                I&apos;m building something extraordinary. A portfolio that doesn&apos;t just showcase projects,
                but tells the story of innovation, creativity, and technical excellence.
              </p>
            </div>

            {/* Launch Date Badge */}
            <div
              className={`inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-slate-300 font-medium">Launching Soon</span>
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              The Journey Begins In
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6 text-center hover:bg-slate-800/40 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent mb-2">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-20 px-6 bg-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Development Progress
            </h3>
            <div className="grid gap-8 md:gap-6">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.title}
                  className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8 hover:bg-slate-800/30 transition-all duration-300 hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-4 h-4 rounded-full ${
                          milestone.status === 'completed'
                            ? 'bg-emerald-500'
                            : milestone.status === 'in-progress'
                            ? 'bg-blue-500 animate-pulse'
                            : 'bg-slate-500'
                        }`}></div>
                        <h4 className="text-xl font-semibold text-white">{milestone.title}</h4>
                        <span className="ml-auto text-sm text-slate-400">{milestone.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-3">
                        <div
                          className={`h-3 bg-gradient-to-r ${milestone.color} rounded-full transition-all duration-2000 ease-out`}
                          style={{ width: `${milestone.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              What&apos;s Coming
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="group bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-3xl p-8 hover:bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-10 h-10 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-slate-400 mb-3 leading-relaxed">
                          {feature.description}
                        </p>
                        <span className="inline-flex items-center px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                          {feature.category}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay in the Loop
            </h3>
            <p className="text-lg text-slate-400 mb-12">
              Be the first to know when the portfolio launches and get exclusive behind-the-scenes content.
            </p>

            {isSubscribed ? (
              <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-2xl p-8 animate-fade-in">
                <div className="flex justify-center mb-4">
                  <PartyPopper className="w-16 h-16 text-emerald-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Welcome aboard!</h4>
                <p className="text-slate-300">You&apos;ll be notified as soon as everything is ready.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  {isSubscribing ? 'Subscribing...' : 'Notify Me'}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Social Links */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Follow the Journey</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-white ${social.color} hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-110 group`}
                    title={social.name}
                  >
                    <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-400 text-sm">
              © 2024 Prabudda. Crafting digital experiences with passion and precision.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
