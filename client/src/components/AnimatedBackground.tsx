import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedBackground Component
 * Creates a dynamic gradient background with floating particles
 * Design: Glassmorphic Gradient Dynamism - animated gradients create sense of dynamism
 */
export const AnimatedBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 50;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;

      constructor() {
        this.x = canvas ? Math.random() * canvas.width : Math.random() * 1000;
        this.y = canvas ? Math.random() * canvas.height : Math.random() * 1000;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (!canvas) return;
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(6, 182, 212, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

/**
 * GradientDivider Component
 * Creates smooth curved SVG dividers between sections
 * Design: Glassmorphic Gradient Dynamism - curved dividers add visual flow
 */
export const GradientDivider: React.FC<{ direction?: 'down' | 'up' }> = ({ direction = 'down' }) => {
  return (
    <div className="w-full h-32 relative overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ transform: direction === 'up' ? 'scaleY(-1)' : 'scaleY(1)' }}
      >
        <defs>
          <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(124, 58, 237, 0.3)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.3)" />
          </linearGradient>
        </defs>
        <path
          d="M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="url(#dividerGradient)"
        />
      </svg>
    </div>
  );
};

/**
 * FloatingCard Component
 * Glassmorphic card with hover effects and floating animation
 * Design: Glassmorphic Gradient Dynamism - frosted glass with elevation
 */
export const FloatingCard: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{
        duration: 0.6,
        delay,
        type: 'spring',
        stiffness: 100,
      }}
      className={`glass-card p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

/**
 * GlowingBorder Component
 * Creates animated glowing border effect
 * Design: Glassmorphic Gradient Dynamism - glow adds premium feel
 */
export const GlowingBorder: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
      <div className="relative bg-background rounded-2xl border border-white/20">
        {children}
      </div>
    </div>
  );
};

/**
 * RotatingText Component
 * Rotates through multiple text values with smooth transitions
 * Design: Interactive element for dynamic role titles
 */
export const RotatingText: React.FC<{
  texts: string[];
  interval?: number;
}> = ({ texts, interval = 3000 }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="inline-block gradient-text"
    >
      {texts[index]}
    </motion.span>
  );
};

/**
 * ScrollProgressBar Component
 * Shows scroll progress at the top of the page
 * Design: Subtle indicator of page progress
 */
export const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 z-50" style={{ width: `${progress}%` }} />
  );
};

/**
 * ParticleEffect Component
 * Creates floating particle effect on mouse move
 * Design: Interactive element that responds to user input
 */
export const ParticleEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = e.clientX + 'px';
      particle.style.top = e.clientY + 'px';

      container.appendChild(particle);

      setTimeout(() => particle.remove(), 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{
        overflow: 'hidden',
      }}
    >
      <style>{`
        .particle {
          position: fixed;
          pointer-events: none;
          width: 8px;
          height: 8px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.8), rgba(6, 182, 212, 0));
          border-radius: 50%;
          animation: particleFloat 1s ease-out forwards;
        }

        @keyframes particleFloat {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0);
          }
        }
      `}</style>
    </div>
  );
};
