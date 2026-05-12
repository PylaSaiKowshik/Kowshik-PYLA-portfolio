import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  AnimatedBackground,
  ScrollProgressBar,
  ParticleEffect,
} from "@/components/AnimatedBackground";

/**
 * Home Page Component
 * Complete portfolio website with all sections
 * Design: Glassmorphic Gradient Dynamism
 */

export default function Home() {
  return (
    <AnimatedBackground>
      <ScrollProgressBar />
      <ParticleEffect />

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </AnimatedBackground>
  );
}