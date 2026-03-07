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
  { name: 'LLMs', category: 'AI/ML', color: '#FF6C37' },
];

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Split into two roughly equal rows for the marquee
  const row1 = techStack.slice(0, 7);
  const row2 = techStack.slice(7);

  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title="Tech Stack" subtitle="// tools I use" />

        <div ref={ref} className="relative overflow-hidden">
          {/* Infinite scroll marquee - Row 1 */}
          <div className="overflow-hidden py-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex gap-3"
              style={{
                width: 'max-content',
                animation: 'marquee 30s linear infinite',
              }}
            >
              {[...row1, ...row1, ...row1].map((tech, i) => (
                <div
                  key={`row1-${i}`}
                  className="group flex items-center gap-2 rounded-xl border border-border bg-surface/30 px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-surface/60"
                >
                  <div
                    className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                  <span className="whitespace-nowrap text-sm font-medium text-slate-300 group-hover:text-white">
                    {tech.name}
                  </span>
                  <span className="rounded-md bg-surface-light px-2 py-0.5 text-[10px] font-mono text-muted">
                    {tech.category}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Reverse direction */}
          <div className="overflow-hidden py-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-3"
              style={{
                width: 'max-content',
                animation: 'marquee-reverse 35s linear infinite',
              }}
            >
              {[...row2, ...row2, ...row2].map((tech, i) => (
                <div
                  key={`row2-${i}`}
                  className="group flex items-center gap-2 rounded-xl border border-border bg-surface/30 px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-surface/60"
                >
                  <div
                    className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                  <span className="whitespace-nowrap text-sm font-medium text-slate-300 group-hover:text-white">
                    {tech.name}
                  </span>
                  <span className="rounded-md bg-surface-light px-2 py-0.5 text-[10px] font-mono text-muted">
                    {tech.category}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent sm:w-20" />
        </div>
      </div>
    </section>
  );
}
