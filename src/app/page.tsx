import { IntroAnimation } from "@/components/IntroAnimation";
import { Navbar } from "@/components/Navbar";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] dark:bg-[#07111F] text-[#0F172A] dark:text-[#F1F5F9] relative overflow-x-hidden transition-colors duration-300">
      {/* High-Tech Intro Loading Animation on Initial Load */}
      <IntroAnimation />

      {/* Subtle Dynamic Ambient Particle Background */}
      <ParticleBackground />

      {/* Modern Floating Dock Navigation */}
      <Navbar />

      {/* Main Sections Stream */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>

      {/* Subtle Ambient Glow Blobs (Non-distracting, pure premium depth) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] bg-blue-600/10 dark:bg-blue-600/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] bg-cyan-500/10 dark:bg-cyan-500/8 rounded-full blur-[140px]" />
      </div>
    </main>
  );
}
