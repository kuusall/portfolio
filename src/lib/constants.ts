import { SiteConfig } from '@/core/entities/SiteConfig';

export const siteConfig: SiteConfig = {
  name: 'KUSHAL ADHIKARI',
  title: 'Kushal Adhikari',
  description: 'Computer Engineer from Nepal, learning AI/ML for adaptive learning and digital health, Building Mobile Applications and Tech Products.',
  ctaText: 'View work',
  ctaLink: '#work',
  secondaryCtaText: 'Get in touch',
  secondaryCtaLink: '#contact',
  navLinks: [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'BLOG', href: '#blog' },
    { label: 'LEADERSHIP', href: '#leadership' },
    { label: 'AWARDS', href: '#awards' },
    { label: 'CONTACT', href: '#contact' },
  ],
  about: {
    title: 'Working on AI, Purpose-Driven Products and Business Deveopment in Tech',
    bio: 'Hello 👋, I am Kushal Adhikari a Computer Engineering Graduate specializing in AI/ML and product development. I am currently working on developing a mobile application for sports mainly Futsal called Maidan. I love learing and creating applications and am trying to develop business around it. I have been part of an award-winning solution recognized as star innovation called MindBridge, it was an inclusive learning app for dyslexic children and another app MindGuard also awarded for open innovation in digital health, it was a mental health platform for PTSD patients. Proud winner of ICT Awards 2025 Rising Star Innovation alongside various wins on multiple national hackathons. I am working on my research papers on Meadical Image and AI applications on Medical fields. I am a open source advocate and love using linux and have a passion for Science and Maths. Thank you for visiting my website.',
    skills: [
      {
        name: 'Languages',
        skills: ['Python', 'Rust', 'JavaScript', 'TypeScript', 'TailwindCSS', 'C/C++', 'SQL'],
      },
      {
        name: 'ML / NLP',
        skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'Transformers', 'Language Modeling'],
      },
      {
        name: 'Development',
        skills: ['React Native', 'Firebase', 'Supabase', 'PostgreSQL', 'REST APIs'],
      },
      {
        name: 'Tools & DevOps',
        skills: ['Docker', 'Git', 'Linux', 'GitHub Actions','Nvim'],
      },
    ],
  },
  projects: [
    {
      id: '1',
      year: '2025',
      category: 'EdTech & AI / Adaptive Learning',
      title: 'MindBridge — Inclusive Learning Platform',
      description: 'AI-powered learning platform with adaptive techniques and accessibility-focused modules for dyslexic children. Winner of ICT Awards 2025 Rising Star Innovation.',
      link: 'https://github.com/kuusall',
    },
    {
      id: '2',
      year: '2024',
      category: 'Healthcare & AI / CBT & Monitoring',
      title: 'MindGuard — Digital Mental Health Platform',
      description: 'Digital platform for PTSD screening, longitudinal symptom monitoring, CBT-inspired therapeutic modules, and clinician-facing workflows.',
      link: 'https://github.com/kuusall',
    },
    {
      id: '3',
      year: '2024',
      category: 'NLP & Tooling',
      title: 'NepText — Nepali Language Assistance Extension',
      description: 'Browser extension providing Nepali spelling correction, contextual word prediction, and ML-assisted digital writing tools.',
      link: 'https://github.com/kuusall',
    },
  ],
  blogPosts:[],
  experience: [
    {
      id: '1',
      period: '2024 — 2025',
      role: 'Campus Director',
      company: 'Hult Prize IOEPC',
      description: 'Led campus-wide social entrepreneurship and innovation initiatives, steering strategic partnerships, multi-stakeholder sponsorships, and youth empowerment events.',
      isHighlighted: true,
    },
    {
      id: '2',
      period: '2023 — 2024',
      role: 'Technical Manager',
      company: 'Hult Prize IOEPC',
      description: 'Managed digital infrastructure, platform operations, event tech stacks, and automated communication workflows for campus competitions.',
      isHighlighted: false,
    },
    {
      id: '3',
      period: 'RESEARCH & APPLIED ML',
      role: 'AI/ML Research & Financial Security',
      company: 'Independent Research & Recognition',
      description: 'Engineered ML models for suspicious transaction detection (formally recognized by Global IME Bank) and conducted research in Transformer-based Nepali Natural Language Processing.',
      isHighlighted: false,
    },
  ],
  awards: [
    {
      id: '1',
      year: '2025',
      title: 'ICT Awards 2025',
      subtitle: 'Rising Star Innovation Winner',
    },
    {
      id: '2',
      year: '2025',
      title: 'DeerHack 2025',
      subtitle: 'Winner (Open Innovation Category)',
    },
    {
      id: '3',
      year: '2025',
      title: 'Hack-a-Week 2025',
      subtitle: 'Winner (EdTech Category)',
    },
    {
      id: '4',
      year: '2025',
      title: 'Hacks for Nepal 2025',
      subtitle: 'Winner (National Hackathon)',
    },
    {
      id: '5',
      year: '2026',
      title: 'Birat Trade Expo Idea Studio 2026',
      subtitle: 'Innovation Winner',
    },
  ],
  contact: {
    title: "LET'S TALK.",
    subtitle: 'Have a project in mind, interested in my previous work or want to work for an AI collaboration? My inbox is always open.',
    email: 'kushaladk18@gmail.com',
    phone: '+977-9748307735',
  },
  footer: {
    copyright: '© 2026 Kushal Adhikari. All rights reserved.',
    socials: [
      { platform: 'GitHub', url: 'https://github.com/kuusall' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/kuusall' },
      {platform: 'Youtube', url: 'https://www.youtube.com/@kushal.adhikari.0'},
      {platform: 'X', url:'https://x.com/___kushal'},
      {platform: 'Facebook', url:'https://www.facebook.com/kuusalll/'}
    ],
  },
};
