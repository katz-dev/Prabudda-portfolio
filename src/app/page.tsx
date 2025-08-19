'use client'
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useEffect } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [mounted, setMounted] = useState(false);

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

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center relative overflow-hidden">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        {/* Logo/Name */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
            Prabudda
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
        </div>

        {/* Coming Soon Text */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground/90 mb-4">
            Something Amazing is Coming Soon
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I&apos;m crafting a beautiful portfolio experience to showcase my work and journey. 
            Stay tuned for the grand reveal!
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item) => (
              <div key={item.label} className="bg-card border border-border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email Subscription */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-3 text-foreground">Get Notified</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Be the first to know when my portfolio goes live!
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm font-medium">
                Notify Me
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <p className="text-muted-foreground mb-4">Follow my journey</p>
          <div className="flex justify-center gap-4">
            {[
              { name: 'GitHub', icon: '⚡' },
              { name: 'LinkedIn', icon: '💼' },
              { name: 'Twitter', icon: '🐦' },
              { name: 'Email', icon: '✉️' }
            ].map((social) => (
              <button
                key={social.name}
                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                title={social.name}
              >
                <span className="text-lg">{social.icon}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
