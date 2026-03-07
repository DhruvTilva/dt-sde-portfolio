'use client';

import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { personalInfo } from '@/data/personal';

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="font-heading text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              DT.
            </span>
            <span className="text-sm text-muted">
              &copy; {new Date().getFullYear()} {personalInfo.name}
            </span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface/50 text-muted transition-all hover:border-primary/30 hover:text-primary-light hover:shadow-lg hover:shadow-primary/10"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Tech credit */}
          <p className="text-xs text-muted/60">
            
          </p>
        </div>
      </div>
    </footer>
  );
}
