import { Project } from '@/types';

export const projects: Project[] = [
  
  {
  id: 'proj-6',
  title: 'Swing Trade Finder',
  description:
    '',
  longDescription:
    'AI tool that analyzes stock data to identify swing trade opportunities.',
  image: '/images/projects/ai-analyzer.jpg',
  technologies: ['Python', 'Pandas', 'yfinance', 'Random Forest', 'Time Series Analysis'],
  github: 'https://github.com/DhruvTilva/swing_trade_finder',
  featured: true,
  category: 'AI/ML Work',
},
{
  id: 'proj-1',
  title: 'GENCORE AI (Ongoing Team Project)',
  description:
    'inspired by tools like Lovable, Team project focused on building a generative AI platform with chat, code generation, and project management features.',
  longDescription:
    'Lovable-inspired AI workspace for chat, code generation, and development',
  image: '',
  technologies: ['Java', 'Spring Boot', 'LLM', 'RAG', 'Vector Database', 'Kafka', 'Docker', 'Kubernetes'],
  featured: true,
  category: 'AI/ML Work',
},
 {
  id: 'proj-5',
  title: 'Decentralized Document Drive',
  description:
    'Web3 application that allows users to upload and store images in a decentralized way with controlled access.',
  longDescription:
    'Decentralized app for secure image storage and access sharing.',
  image: '/images/projects/defi-dashboard.jpg',
  technologies: ['React', 'Solidity', 'IPFS', 'Ether.js', 'MetaMask'],
  github: 'https://github.com/DhruvTilva/Decentralized-Document-Drive-Web-3.0',
  featured: true,
  category: 'Web3',
},
    {
    id: 'proj-2',
    title: 'Car Maintenance & Reselling',
    description:
      'Service platform for automotive maintenance scheduling and vehicle reselling marketplace.',
    longDescription:
      'A web platform connecting car owners with mechanic shops for maintenance services. Includes booking system, service history tracking, vehicle listings for resale, and real-time status updates. Designed with a focus on user experience and mobile responsiveness.',
    image: '/images/projects/car-maintenance.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MySQL'],
    github: 'https://dhruvtilva.github.io/Car-Maintenance-Reselling-Services-SPA-Website.github.io/',
    featured: false,
    category: 'Full Stack',
  },
  {
    id: 'proj-1',
    title: 'Hive of Books',
    description:
      'Full-featured e-commerce platform for book trading with Stripe payment integration.',
    longDescription:
      'A comprehensive e-commerce platform built for book enthusiasts. Features include user authentication, shopping cart, wishlist management, order tracking, and secure Stripe payment processing. Built with PHP and MySQL with a responsive frontend.',
    image: '/images/projects/hive-of-books.jpg',
    technologies: ['PHP', 'MySQL', 'Stripe', 'JavaScript', 'Bootstrap', 'CSS3'],
    github: 'https://github.com/DhruvTilva/Hive-Of-Books',
    featured: false,
    category: 'Full Stack',
  },
];
