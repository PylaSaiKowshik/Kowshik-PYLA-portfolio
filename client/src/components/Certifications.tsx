import React from 'react';
import { motion } from 'framer-motion';
import { FloatingCard, GradientDivider } from './AnimatedBackground';
import { Award } from 'lucide-react';

/**
 * Certifications Section Component
 * Animated certification cards showcase
 * Design: Glassmorphic Gradient Dynamism - floating cards with hover effects
 */
export const Certifications: React.FC = () => {
  const certifications = [
    {
      id: 1,
      title: 'Oracle Cloud Infrastructure 2025',
      subtitle: 'Certified Generative AI Professional',
      issuer: 'Oracle',
      date: '2025',
      icon: '🏆',
    },
    {
      id: 2,
      title: 'Generative AI with Large Language Models',
      subtitle: 'Professional Certificate',
      issuer: 'DeepLearning.AI',
      date: '2024',
      icon: '🤖',
    },
    {
      id: 3,
      title: 'Advanced Deep Learning Methods for Healthcare',
      subtitle: 'Professional Certificate',
      issuer: 'University of Illinois Urbana-Champaign',
      date: '2024',
      icon: '🏥',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="certifications" className="relative py-20 md:py-32 overflow-hidden">
      <GradientDivider direction="down" />

      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-sora font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <FloatingCard key={cert.id} delay={index * 0.1}>
              <div className="space-y-4 h-full flex flex-col">
                <div className="text-5xl">{cert.icon}</div>

                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-sora font-bold gradient-text">{cert.title}</h3>
                  <p className="text-sm text-foreground/70">{cert.subtitle}</p>
                </div>

                <div className="space-y-2 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60">{cert.issuer}</span>
                    <span className="text-xs font-fira-code text-accent">{cert.date}</span>
                  </div>
                </div>
              </div>
            </FloatingCard>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 glass-card p-8"
        >
          <div className="flex gap-4">
            <Award className="text-accent flex-shrink-0" size={24} />
            <div>
              <h3 className="font-sora font-semibold mb-2">Continuous Learning</h3>
              <p className="text-foreground/70">
                Actively pursuing advanced certifications and staying updated with the latest developments in AI, machine learning, and generative AI technologies. Committed to professional growth and industry-recognized credentials.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <GradientDivider direction="up" />
    </section>
  );
};
