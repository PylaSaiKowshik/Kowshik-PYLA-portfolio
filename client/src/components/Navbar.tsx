import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

/**
 * Navbar Component
 * Premium navigation with glassmorphic design
 * Design: Glassmorphic Gradient Dynamism - frosted glass navbar
 */
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 glass-card m-4 rounded-2xl"
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white">
            KP
          </div>
          <span className="font-sora font-bold text-lg gradient-text">Kowshik</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#contact"
          className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
        >
          Get in Touch
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-white/10 bg-background/50 backdrop-blur-md"
        >
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-sm text-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
