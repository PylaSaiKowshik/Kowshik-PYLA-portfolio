import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { RotatingText } from './AnimatedBackground';

/**
 * Hero Section Component
 * Stunning landing section with cinematic animations
 * Design: Glassmorphic Gradient Dynamism - animated gradients, floating elements
 */
export const Hero: React.FC = () => {
  const roles = [
    'AI/ML Engineer',
    'Generative AI Developer',
    'LLM Systems Builder',
    'Agentic AI Researcher',
    'Computer Vision Engineer',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028807219/9Hxt7JziFH2RwUChf27V8Z/hero-neural-network-MPSrNVYmHFcP5R7Gy86fS4.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />

      {/* Animated orb background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl"
      />

      <div className="container relative z-10 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
            >
              <span className="gradient-text">Kowshik Pyla</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl font-display font-semibold text-foreground/90"
            >
              <RotatingText texts={roles} interval={3000} />
            </motion.p>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed max-w-2xl mx-auto">
              Building intelligent systems that transform data into autonomous AI experiences.
            </p>
            <p className="text-sm md:text-base text-accent font-mono-code text-foreground/70">
              Production-grade AI systems • RAG pipelines • Agentic workflows • Explainable AI • LLM Applications
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-lg transition-all"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="px-8 py-4 rounded-lg border border-accent/50 text-foreground font-semibold hover:bg-accent/10 transition-all flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 rounded-lg border border-accent/50 text-foreground font-semibold hover:bg-accent/10 transition-all"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center pt-8"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-card hover:glow-cyan transition-all"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-card hover:glow-cyan transition-all"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="mailto:contact@example.com"
              className="p-3 rounded-lg glass-card hover:glow-cyan transition-all"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-12"
          >
            <ChevronDown size={32} className="mx-auto text-accent/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
