'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { experiences } from '@/data/experience';

function TimelineItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex w-full ${
        isEven ? 'lg:justify-start' : 'lg:justify-end'
      }`}
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background lg:left-1/2 lg:-translate-x-1/2"
      >
        <Briefcase className="h-5 w-5 text-primary-light" />
      </motion.div>

      {/* Content card */}
      <motion.div
        initial={{
          opacity: 0,
          x: isEven ? -40 : 40,
        }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`ml-16 w-full rounded-2xl border border-border bg-surface/30 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 lg:ml-0 lg:w-[calc(50%-3rem)] ${
          isEven ? '' : 'lg:ml-auto'
        }`}
      >
        {/* Header */}
        <div className="mb-4">
          <h3 className="font-heading text-lg font-bold text-white">
            {experience.role}
          </h3>
          <p className="mt-1 text-sm font-medium text-primary-light">
            {experience.company}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {experience.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-2">
          {experience.description.map((item, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm leading-relaxed text-muted"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
              {item}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary-light"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative w-full overflow-hidden py-16 lg:py-24">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/3 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title="Experience" subtitle="// where I've worked" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/40 via-secondary/30 to-transparent lg:left-1/2 lg:-translate-x-[0.5px]" />

          {/* Timeline items */}
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
