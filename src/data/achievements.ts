import { Achievement } from '@/types';

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Pull Shark x2',
    description:
      'Recognized by GitHub for consistent and impactful pull request contributions to open source projects.',
    icon: 'GitPullRequest',
    metric: '2x Badge',
  },
  {
  id: 'ach-5',
  title: 'Open Source Contributor',
  description:
    'Active contributor to open source projects. Recently had a PR merged in the Anthropic Claude Cookbook repository.',
  icon: 'Heart',
  metric: 'Active',
  link: 'https://github.com/anthropics/claude-cookbooks/graphs/contributors'
  },
  {
    id: 'ach-6',
    title: 'Competitive Programmer',
    description:
      'Active on LeetCode, HackerRank, and GeeksforGeeks solving algorithmic challenges and improving DSA skills.',
    icon: 'Trophy',
    metric: 'Multi-platform',
  },
];
