'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-10 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="mb-3 inline-block font-mono text-sm tracking-wider text-primary-light"
      >
        {subtitle}
      </motion.span>
      <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`mt-4 h-1 w-20 origin-left rounded-full bg-gradient-to-r from-primary via-secondary to-accent ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
}
