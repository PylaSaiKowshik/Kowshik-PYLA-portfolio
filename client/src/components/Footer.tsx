import React from 'react';
import { motion } from 'framer-motion';

/**
 * Footer Component
 * Premium futuristic footer
 * Design: Glassmorphic Gradient Dynamism
 */

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-background/50 backdrop-blur-md overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
      </div>

      <div className="container relative z-10 py-12 md:py-16">

        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/20">
                KP
              </div>

              <div>
                <h3 className="text-xl font-bold gradient-text">
                  Kowshik Pyla
                </h3>

                <p className="text-sm text-foreground/50">
                  AI/ML Engineer
                </p>
              </div>
            </div>

            <p className="text-sm text-foreground/60 leading-relaxed max-w-sm">
              Building intelligent systems, RAG pipelines, agentic AI workflows,
              and futuristic AI-powered experiences with modern technologies.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <h4 className="text-lg font-semibold text-foreground">
              Navigation
            </h4>

            <ul className="space-y-3 text-sm text-foreground/60">
              <li>
                <a
                  href="#home"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <h4 className="text-lg font-semibold text-foreground">
              Connect
            </h4>

            <div className="flex flex-wrap gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/PylaSaiKowshik"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-sm text-foreground/70 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300"
              >
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kowshik-pyla/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-sm text-foreground/70 hover:text-purple-400 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300"
              >
                LinkedIn
              </a>

              {/* Email */}
              <a
                href="mailto:kowshikpyla7@gmail.com"
                className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-sm text-foreground/70 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300"
              >
                Email
              </a>
            </div>

            <div className="pt-3 text-sm text-foreground/50">
              Bengaluru, India
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-sm text-foreground/50">
            © {currentYear} Kowshik Pyla. All rights reserved.
          </p>

          <p className="mt-2 text-xs text-foreground/40">
            Built with React, TypeScript, TailwindCSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;