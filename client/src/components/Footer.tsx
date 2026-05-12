import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-background/50 backdrop-blur-md overflow-hidden">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
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
              and futuristic AI-powered experiences.
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
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Social */}
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
              <a
                href="https://github.com/PylaSaiKowshik"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-foreground/70 hover:text-cyan-400 transition-all"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/kowshik-pyla/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-foreground/70 hover:text-purple-400 transition-all"
              >
                LinkedIn
              </a>

              <a
                href="mailto:kowshikpyla7@gmail.com"
                className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-foreground/70 hover:text-cyan-400 transition-all"
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
          transition={{ duration: 0.6 }}
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