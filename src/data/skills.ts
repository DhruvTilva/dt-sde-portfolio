import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend Development',
    icon: 'Server',
    skills: [
      { name: 'Python', icon: '🐍', level: 85 },
      { name: 'Java SpringBoot', icon: '⚡', level: 60 },
      { name: 'PHP', icon: '🐘', level: 75 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: 'Brain',
    skills: [
      { name: 'Pandas', icon: '🧠', level: 65 },
      { name: 'NumPy', icon: '🔥', level: 60 },
      { name: 'PyTorch', icon: '💬', level: 30 },
    ],
  },
  {
    title: 'Tools',
    icon: 'Link',
    skills: [
      { name: 'VS Code', icon: '💎', level: 78 },
      { name: 'Antigravity', icon: '⟠', level: 80 },
      { name: 'JIRA', icon: '🌐', level: 76 },
      { name: 'Teams', icon: '📝', level: 78 },
      { name: 'Claude,OpenAi,Gemini', icon: '🔧', level: 80 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: 'Cloud',
    skills: [
      { name: 'Git/GitHub', icon: '📦', level: 90 },
      { name: 'Docker', icon: '🐳', level: 70 },
      { name: 'Linux', icon: '🐧', level: 75 },
      { name: 'Kubernetes', icon: '☁️', level: 50 },
      { name: 'CI/CD', icon: '🔄', level: 10 },
    ],
  },
  {
    title: 'Database & Storage',
    icon: 'Database',
    skills: [
      { name: 'MySQL', icon: '🐬', level: 85 },
      { name: 'PostgreSQL', icon: '🐘', level: 60 },
      { name: 'Redis', icon: '🔴', level: 40 },
    ],
  },
];
