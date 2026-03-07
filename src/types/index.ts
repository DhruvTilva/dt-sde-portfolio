export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface TechItem {
  name: string;
  icon: string;
  category: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  category: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  metric?: string;
  link?: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  initials: string;
  role: string;
  tagline: string;
  about: string[];
  email: string;
  location: string;
  github: string;
  linkedin: string;
  telegram?: string;
  resumeUrl: string;
  avatarUrl: string;
  roles: string[];
  stats: { label: string; value: number; suffix?: string }[];
}
