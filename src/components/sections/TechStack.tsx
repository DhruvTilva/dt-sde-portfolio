'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const techStack = [
  { name: 'Python', category: 'Backend', color: '#3776AB' },
  { name: 'JAVA', category: 'Backend', color: '#ffffff' },
  { name: 'PHP', category: 'Backend', color: '#777BB4' },
  { name: 'JavaScript', category: 'Frontend', color: '#F7DF1E' },
  { name: 'HTML5', category: 'Frontend', color: '#E34F26' },
  { name: 'CSS3', category: 'Frontend', color: '#1572B6' },
  { name: 'MySQL', category: 'Database', color: '#4479A1' },
  { name: 'Postgres', category: 'Database', color: '#47A248' },
  { name: 'Docker', category: 'DevOps', color: '#2496ED' },
  { name: 'Git', category: 'DevOps', color: '#F05032' },
  { name: 'Linux', category: 'DevOps', color: '#FCC624' },
  { name: 'Pandas', category: 'AI/ML', color: '#FF6F00' },
  { name: 'LLM,S', category: 'Tools', color: '#FF6C37' },
];

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Tech Stack" subtitle="// tools I use" />

        <div ref={ref} className="relative">
          {/* Infinite scroll marquee - Row 1 */}
          <div className="overflow-hidden py-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex gap-4 animate-marquee"
              style={{
                width: 'max-content',
                animation: 'marquee 30s linear infinite',
              }}
            >
              {[...techStack.slice(0, 11), ...techStack.slice(0, 11)].map(
                (tech, i) => (
                  <div
                    key={`row1-${i}`}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-surface/30 px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-surface/60 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div
                      className="h-3 w-3 rounded-full transition-shadow group-hover:shadow-lg"
                      style={{
                        backgroundColor: tech.color,
                        boxShadow: `0 0 0 0 ${tech.color}00`,
                      }}
                    />
                    <span className="whitespace-nowrap text-sm font-medium text-slate-300 group-hover:text-white">
                      {tech.name}
                    </span>
                    <span className="rounded-md bg-surface-light px-2 py-0.5 text-[10px] font-mono text-muted">
                      {tech.category}
                    </span>
                  </div>
                )
              )}
            </motion.div>
          </div>

          {/* Row 2 - Reverse direction */}
          <div className="overflow-hidden py-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-4"
              style={{
                width: 'max-content',
                animation: 'marquee-reverse 35s linear infinite',
              }}
            >
              {[...techStack.slice(11), ...techStack.slice(11)].map(
                (tech, i) => (
                  <div
                    key={`row2-${i}`}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-surface/30 px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-surface/60 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                    <span className="whitespace-nowrap text-sm font-medium text-slate-300 group-hover:text-white">
                      {tech.name}
                    </span>
                    <span className="rounded-md bg-surface-light px-2 py-0.5 text-[10px] font-mono text-muted">
                      {tech.category}
                    </span>
                  </div>
                )
              )}
            </motion.div>
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
