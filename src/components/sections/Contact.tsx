'use client';

import { useRef, useState, FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionHeading from '@/components/ui/SectionHeading';
import MagneticButton from '@/components/ui/MagneticButton';
import { personalInfo } from '@/data/personal';

// ─── EmailJS Config ───────────────────────────────────────────────
// Replace these three values after setting up EmailJS (see instructions below)
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

// ──────────────────────────────────────────────────────────────────

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'DhruvTilva',
    href: personalInfo.github,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Dhruv Tilva',
    href: personalInfo.linkedin,
  },
];

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden py-16 lg:py-24">
      {/* Background */}
      <div className="absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/3 blur-[150px]" />
      <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent/3 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title="Get in Touch" subtitle="// let's connect" />

        <div ref={ref} className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
              Have an idea or project?
              <span className="ml-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Let&apos;s connect
              </span>{' '}
              and bring it to life.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted">
              
            </p>

            {/* Contact methods */}
            <div className="mt-8 space-y-4">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-surface/30 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-surface/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary-light transition-colors group-hover:bg-primary/20">
                    <method.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted">{method.label}</div>
                    <div className="text-sm font-medium text-white">{method.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-6 flex items-center gap-2 text-sm text-muted"
            >
              <MapPin className="h-4 w-4 text-primary" />
              {personalInfo.location}
            </motion.div>
          </motion.div>

          {/* Right - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={status === 'sending'}
                  className="w-full rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm text-white outline-none backdrop-blur-sm transition-all placeholder:text-muted/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={status === 'sending'}
                  className="w-full rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm text-white outline-none backdrop-blur-sm transition-all placeholder:text-muted/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  disabled={status === 'sending'}
                  className="w-full resize-none rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm text-white outline-none backdrop-blur-sm transition-all placeholder:text-muted/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 disabled:opacity-50"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400"
                >
                  <CheckCircle className="h-4 w-4 flex-shrink-0" />
                  Message sent! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                >
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  Something went wrong. Please try again or email me directly.
                </motion.div>
              )}

              <MagneticButton
                variant="primary"
                size="lg"
                onClick={() => {}}
              >
                {status === 'sending' ? (
                  <>
                    <Loader className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
