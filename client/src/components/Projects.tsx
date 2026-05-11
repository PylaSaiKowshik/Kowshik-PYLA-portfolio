import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingCard, GradientDivider } from './AnimatedBackground';
import { ChevronRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'DocQA-Pro',
      subtitle: 'Hybrid RAG Q&A System with Evaluation Pipeline',
      description: 'Built a production-grade RAG system combining FAISS dense retrieval and BM25 sparse search with reciprocal rank fusion for context-aware question answering.',
      tech: ['LangChain', 'FAISS', 'ChromaDB', 'Flan-T5', 'FastAPI', 'Streamlit'],
      metrics: [
        { label: 'Recall Improvement', value: '31%' },
        { label: 'Faithfulness Score', value: '0.84' },
        { label: 'Hallucination', value: 'Reduced' },
      ],
      features: [
        'Hybrid retrieval architecture',
        'Semantic chunking',
        'LCEL orchestration',
        'RAGAS evaluation',
        'Multi-format support',
      ],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028807219/9Hxt7JziFH2RwUChf27V8Z/code-terminal-glow-nknfwbFDgzDmthccumDeY3.webp',
    },
    {
      id: 2,
      title: 'AutoResearch Agent',
      subtitle: 'Stateful Multi-Tool AI Research Agent',
      description: 'Designed a stateful multi-tool AI agent capable of autonomous planning, web research, and structured report generation.',
      tech: ['LangChain', 'LangGraph', 'BART', 'FastAPI', 'Tavily API'],
      metrics: [
        { label: 'Multi-hop Tasks', value: '88%' },
        { label: 'Research Time', value: '6 min' },
        { label: 'Time Saved', value: '134 min' },
      ],
      features: [
        'ReAct reasoning loop',
        'Tool routing',
        'Memory persistence',
        'Autonomous workflow',
        'Streaming responses',
      ],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028807219/9Hxt7JziFH2RwUChf27V8Z/ai-orb-background-5ztS4KkphCRXdtckbvrinj.webp',
    },
    {
      id: 3,
      title: 'SentimentLens',
      subtitle: 'Fine-Tuned BERT for Sentiment Classification',
      description: 'Fine-tuned BERT for sentiment and purchase-intent classification using optimized training and ONNX quantization.',
      tech: ['PyTorch', 'Hugging Face', 'BERT', 'ONNX', 'FastAPI'],
      metrics: [
        { label: 'F1 Score', value: '0.91' },
        { label: 'Speedup', value: '2.4x' },
        { label: 'Latency', value: '38ms' },
      ],
      features: [
        'Mixed precision training',
        'Hugging Face Trainer',
        'INT8 quantization',
        'FastAPI serving',
        'HF deployment',
      ],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028807219/9Hxt7JziFH2RwUChf27V8Z/gradient-mesh-abstract-2QARrcjTRYCxWdrAWTUXsL.webp',
    },
    {
      id: 4,
      title: 'VisionXAI',
      subtitle: 'Real-Time Explainable Image Classifier',
      description: 'Built a real-time explainable computer vision system with object localization and saliency-map explanations.',
      tech: ['TensorFlow', 'MobileNetV2', 'YOLOv8', 'TFLite', 'Angular'],
      metrics: [
        { label: 'Compression', value: '4.1x' },
        { label: 'Latency', value: '180ms' },
        { label: 'Accuracy Loss', value: '<2%' },
      ],
      features: [
        'MobileNetV2 transfer learning',
        'YOLOv8 localization',
        'LIME overlays',
        'TFLite optimization',
        'Angular frontend',
      ],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028807219/9Hxt7JziFH2RwUChf27V8Z/hero-neural-network-MPSrNVYmHFcP5R7Gy86fS4.webp',
    },
  ];

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      <GradientDivider direction="down" />

      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                className="glass-card p-6 md:p-8 cursor-pointer hover:bg-white/15 transition-all"
                whileHover={{ y: -4 }}
              >
                <div className="grid md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-1 order-2 md:order-1">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                  </div>

                  <div className="md:col-span-2 order-1 md:order-2 space-y-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-accent font-mono-code text-sm mb-2">{project.subtitle}</p>
                      <p className="text-foreground/80 line-clamp-2">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-full text-xs font-mono-code bg-purple-500/20 border border-purple-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 text-sm">
                      {project.metrics.slice(0, 2).map((metric, i) => (
                        <div key={i}>
                          <span className="text-accent font-semibold">{metric.value}</span>
                          <p className="text-foreground/60 text-xs">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      className="flex items-center gap-2 text-accent hover:text-cyan-400 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {expandedId === project.id ? 'Show Less' : 'View Details'}
                      <ChevronRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card p-6 md:p-8 border-t border-white/10 space-y-6"
                  >
                    <div>
                      <h4 className="font-semibold mb-4 text-accent">Performance Metrics</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
                            <div className="text-2xl font-bold gradient-text mb-1">{metric.value}</div>
                            <p className="text-sm text-foreground/70">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4 text-accent">Key Features</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-foreground/80">
                            <span className="text-cyan-400 mt-1">→</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <GradientDivider direction="up" />
    </section>
  );
};
