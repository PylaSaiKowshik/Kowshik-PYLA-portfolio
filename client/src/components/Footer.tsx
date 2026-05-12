import React from 'react';
import { motion } from 'framer-motion';

/**
 * Footer Component
 * Premium footer with branding and links
 * Design: Glassmorphic Gradient Dynamism
 */

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-background/50 backdrop-blur-md">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white shadow-lg">
                KP
              </div>

              <span className="font-display font-bold text-xl gradient-text">
                Kowshik Pyla
              </span>
            </div>

            <p className="text-foreground/60 text-sm leading-relaxed max-w-sm">
              AI/ML Engineer building intelligent systems, agentic AI workflows,
              RAG pipelines, and futuristic AI experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground text-lg">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-foreground/60">
              <li>
                <a
                  href="#home"
                  className="hover:text-accent transition-colors duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-accent transition-colors duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-accent transition-colors duration-300"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-accent transition-colors duration-300"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-accent transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground text-lg">
              Connect
            </h4>

            <div className="flex flex-wrap gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/PylaSaiKowshik"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-sm text-foreground/70 hover:text-accent hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300"
              >
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/YOUR-LINKEDIN-USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-sm text-foreground/70 hover:text-accent hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300"
              >
                LinkedIn
              </a>

              {/* Email */}
              <a
                href="mailto:kowshikpyla7@gmail.com"
                className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-sm text-foreground/70 hover:text-accent hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300"
              >
                Email
              </a>
            </div>

            <div className="pt-4 text-sm text-foreground/50">
              Bengaluru, India
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
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