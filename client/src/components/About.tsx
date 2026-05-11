import React from 'react';
import { motion } from 'framer-motion';
import { FloatingCard, GradientDivider } from './AnimatedBackground';

/**
 * About Section Component
 * Story-driven modern about section with metrics
 * Design: Glassmorphic Gradient Dynamism - floating cards with animations
 */
export const About: React.FC = () => {
  const metrics = [
    { label: 'Production AI Systems', value: '8+' },
    { label: 'AI Models Trained', value: '15+' },
    { label: 'Research Experiments', value: '30+' },
    { label: 'Deployment Projects', value: '12+' },
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
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <GradientDivider direction="down" />

      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-foreground/80 leading-relaxed">
              I'm an AI/ML Engineer passionate about building production-grade AI systems that solve real-world problems. My journey into Generative AI started with curiosity about how language models work, and it evolved into a deep interest in autonomous agents and agentic AI workflows.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-foreground/80 leading-relaxed">
              What drives me is the challenge of architecting end-to-end AI systems—from data ingestion and model training to deployment and optimization. I'm particularly interested in explainable AI, efficient model deployment, and building systems that are both intelligent and interpretable.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-foreground/80 leading-relaxed">
              Currently, I'm focused on RAG pipelines, LLM applications, and multi-tool agentic workflows. I believe in writing clean, production-ready code and creating systems that can be deployed at scale.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-sm text-accent font-mono-code mb-2">Education:</p>
              <p className="text-foreground/80">
                B.Tech in Computer Science & Engineering (AI & ML)<br />
                Alliance University, Bengaluru<br />
                CGPA: 8.8/10 | Graduating: May 2026
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - Metrics */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 gap-4"
          >
            {metrics.map((metric, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <div className="text-center space-y-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="text-4xl font-bold gradient-text"
                  >
                    {metric.value}
                  </motion.div>
                  <p className="text-sm text-foreground/70">{metric.label}</p>
                </div>
              </FloatingCard>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-display font-bold mb-8">
            <span className="gradient-text">Journey & Expertise</span>
          </h3>

          <div className="space-y-6">
            {[
              {
                title: 'AI System Architecture',
                description: 'Designing end-to-end AI pipelines with data ingestion, model training, and deployment',
              },
              {
                title: 'RAG & Retrieval Systems',
                description: 'Building hybrid retrieval systems combining dense and sparse search with re-ranking',
              },
              {
                title: 'Agentic AI Workflows',
                description: 'Developing autonomous agents with multi-tool reasoning and memory persistence',
              },
              {
                title: 'Model Optimization',
                description: 'Quantization, pruning, and deployment optimization for production systems',
              },
              {
                title: 'Explainable AI',
                description: 'Creating interpretable models with LIME, SHAP, and attention visualizations',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 hover:bg-white/15 transition-all"
              >
                <h4 className="text-xl font-semibold mb-2 gradient-text">{item.title}</h4>
                <p className="text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <GradientDivider direction="up" />
    </section>
  );
};
