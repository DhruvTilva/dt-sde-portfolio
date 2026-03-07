'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects } from '@/data/projects';

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="group"
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-surface/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
        {/* Image area */}
        <div className="relative h-48 overflow-hidden bg-surface-light">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-heading text-4xl font-bold text-white/20">
              {project.title
                .split(' ')
                .map((w) => w[0])
                .join('')}
            </span>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
          {/* Category badge */}
          <div className="absolute top-3 right-3">
            <span className="rounded-md bg-background/60 px-2.5 py-1 font-mono text-[10px] text-primary-light backdrop-blur-sm">
              {project.category}
            </span>
          </div>
          {project.featured && (
            <div className="absolute top-3 left-3">
              <span className="rounded-md bg-primary/80 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-heading text-lg font-bold text-white group-hover:text-primary-light transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
            {project.longDescription}
          </p>

          {/* Tech stack */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-surface-light px-2 py-0.5 font-mono text-[10px] text-muted"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="rounded-md bg-surface-light px-2 py-0.5 font-mono text-[10px] text-muted">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Link */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-light transition-colors hover:text-accent"
            >
              View Project
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-primary/3 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Projects" subtitle="// what I've built" />

        {/* Filter buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-lg px-4 py-2 font-mono text-xs transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'border border-border bg-surface/30 text-muted hover:border-primary/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
