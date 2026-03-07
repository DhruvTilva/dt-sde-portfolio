'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  GitPullRequest,
  GitCommit,
  Rocket,
  Shield,
  Heart,
  Trophy,
  ExternalLink,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { achievements } from '@/data/achievements';

const iconMap: Record<string, React.ElementType> = {
  GitPullRequest,
  GitCommit,
  Rocket,
  Shield,
  Heart,
  Trophy,
};

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="achievements" className="relative py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-secondary/3 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Achievements" subtitle="// milestones" />

        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon] || Trophy;

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : {}
                }
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface/30 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon and metric */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-light transition-colors group-hover:bg-primary/20">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    {achievement.metric && (
                      <span className="rounded-lg bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary-light">
                        {achievement.metric}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white">
                    {achievement.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {achievement.description}
                  </p>
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary-light transition-colors hover:text-accent"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      View
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
