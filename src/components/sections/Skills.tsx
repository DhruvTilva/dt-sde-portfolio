'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Server,
  Layout,
  Link,
  Cloud,
  Database,
  Brain,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { skillCategories } from '@/data/skills';

const iconMap: Record<string, React.ElementType> = {
  Server,
  Layout,
  Link,
  Cloud,
  Database,
  Brain,
};

function SkillBar({
  name,
  level,
  icon,
  delay,
}: {
  name: string;
  level: number;
  icon: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-medium text-slate-300">{name}</span>
        </div>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-light">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: delay + 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="relative w-full overflow-hidden py-16 lg:py-24">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/3 h-[600px] w-[600px] rounded-full bg-secondary/3 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title="Skills & Expertise" subtitle="// what I know" />

        <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => {
            const IconComponent = iconMap[category.icon] || Server;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: catIndex * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group rounded-2xl border border-border bg-surface/30 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-surface/50 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Category header */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary-light transition-colors group-hover:bg-primary/20">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                      delay={catIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
