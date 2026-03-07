'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, MapPin, Mail } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import MagneticButton from '@/components/ui/MagneticButton';
import { personalInfo } from '@/data/personal';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="relative py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="About Me" subtitle="// who I am" />

        <div ref={ref} className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Abstract avatar placeholder */}
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    {personalInfo.initials}
                  </span>
                </div>
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />
              </div>

              {/* Floating info cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 rounded-xl border border-border bg-surface/90 px-4 py-3 backdrop-blur-md"
              >
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted">{personalInfo.location}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-4 -left-4 rounded-xl border border-border bg-surface/90 px-4 py-3 backdrop-blur-md"
              >
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-muted">Available for work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="space-y-4">
              {personalInfo.about.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="text-base leading-relaxed text-muted sm:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Quick info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-4 py-2 text-sm text-muted transition-colors hover:border-primary/30 hover:text-primary-light"
              >
                <Mail className="h-4 w-4" />
                {personalInfo.email}
              </a>
            </motion.div>

            {/* Resume download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8"
            >
              <MagneticButton
                href={personalInfo.resumeUrl}
                variant="secondary"
                size="md"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-20 grid grid-cols-2 gap-8 rounded-2xl border border-border bg-surface/30 p-8 backdrop-blur-sm md:grid-cols-4"
        >
          {personalInfo.stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              target={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
