import React from 'react';
import { motion } from 'framer-motion';
import { FloatingCard, GradientDivider } from './AnimatedBackground';

/**
 * Skills Section Component
 * Futuristic animated skill modules with categories
 * Design: Glassmorphic Gradient Dynamism - glowing cards with hover effects
 */
export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: '⚙️',
      skills: ['Python', 'Java', 'SQL', 'JavaScript', 'HTML/CSS'],
    },
    {
      title: 'Frameworks & Backend',
      icon: '🔧',
      skills: ['FastAPI', 'Angular', 'Streamlit', 'REST APIs', 'PHP'],
    },
    {
      title: 'AI/ML & NLP',
      icon: '🧠',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'LangChain', 'FAISS', 'BART', 'Flan-T5'],
    },
    {
      title: 'Computer Vision',
      icon: '👁️',
      skills: ['OpenCV', 'CNNs', 'MobileNetV2', 'YOLOv8', 'TFLite', 'LIME', 'OCR'],
    },
    {
      title: 'Databases & DevOps',
      icon: '🗄️',
      skills: ['MySQL', 'Git/GitHub', 'CI/CD', 'Render', 'Google Colab', 'VS Code'],
    },
  ];

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
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      <GradientDivider direction="down" />

      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <FloatingCard key={index} delay={index * 0.1} className="h-full">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold gradient-text">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 rounded-full text-sm font-mono-code bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 hover:border-cyan-500/50 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FloatingCard>
          ))}
        </motion.div>

        {/* Proficiency Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 space-y-8"
        >
          <h3 className="text-3xl font-display font-bold">
            <span className="gradient-text">Proficiency Levels</span>
          </h3>

          {[
            { name: 'Python & AI/ML', level: 95 },
            { name: 'Deep Learning Frameworks', level: 90 },
            { name: 'LLM & RAG Systems', level: 88 },
            { name: 'Computer Vision', level: 85 },
            { name: 'Backend Development', level: 82 },
            { name: 'Full-Stack Development', level: 78 },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-foreground/90">{skill.name}</span>
                <span className="text-sm text-accent font-mono-code">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <GradientDivider direction="up" />
    </section>
  );
};
