import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GradientDivider } from './AnimatedBackground';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

/**
 * Contact Section Component
 * Premium contact form with social links
 * Design: Glassmorphic Gradient Dynamism - glowing form, animated send button
 */
export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      <GradientDivider direction="down" />

      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Let's Build the <span className="gradient-text">Future</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            With intelligent systems and cutting-edge AI solutions.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground/80">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-lg glass-card bg-white/5 border border-white/20 text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground/80">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg glass-card bg-white/5 border border-white/20 text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground/80">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg glass-card bg-white/5 border border-white/20 text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {submitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <div className="glass-card p-6 hover:bg-white/15 transition-all">
                <h3 className="text-lg font-semibold mb-2 gradient-text">Email</h3>
                <a href="mailto:kowshik@example.com" className="text-foreground/80 hover:text-accent transition-colors">
                  kowshik@example.com
                </a>
              </div>

              <div className="glass-card p-6 hover:bg-white/15 transition-all">
                <h3 className="text-lg font-semibold mb-2 gradient-text">Location</h3>
                <p className="text-foreground/80">Bengaluru, India</p>
              </div>

              <div className="glass-card p-6 hover:bg-white/15 transition-all">
                <h3 className="text-lg font-semibold mb-4 gradient-text">Connect</h3>
                <div className="flex gap-4">
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
                    href="mailto:kowshik@example.com"
                    className="p-3 rounded-lg glass-card hover:glow-cyan transition-all"
                  >
                    <Mail size={24} />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center md:text-left"
            >
              <p className="text-lg font-display font-semibold gradient-text">
                "Building the future, one AI system at a time."
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <GradientDivider direction="up" />
    </section>
  );
};
