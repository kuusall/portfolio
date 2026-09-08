import { SiteConfig } from '@/core/entities/SiteConfig';

export const siteConfig: SiteConfig = {
  name: 'KUSHAL ADHIKARI',
  title: 'Kushal Adhikari',
  description: 'Computer Engineer, Software Developer and Product Builder working on AI/ML for adaptive learning and digital health innovations.',
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
    title: 'Crafting Intelligent & Purpose-Driven Products',
    bio: 'Computer Engineering graduate specializing in AI/ML and product development. Co-founded award-winning solutions including MindBridge, an inclusive learning platform for dyslexic children and MindGuard, a digital mental health platform. Winner of ICT Awards 2025 Rising Star Innovation and multiple national hackathons.',
    skills: [
      {
        name: 'Languages',
        skills: ['Python', 'Rust', 'Dart', 'JavaScript', 'C/C++', 'SQL'],
      },
      {
        name: 'ML / NLP',
        skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'Transformers', 'Language Modeling'],
      },
      {
        name: 'Development',
        skills: ['Flutter', 'Firebase', 'Supabase', 'PostgreSQL', 'REST APIs'],
      },
      {
        name: 'Tools & DevOps',
        skills: ['Docker', 'Git', 'Linux', 'GitHub Actions'],
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
    subtitle: 'Have a project in mind or interested in AI collaboration? My inbox is always open.',
    email: 'kushaladk18@gmail.com',
    phone: '+977-9748307735',
  },
  footer: {
    copyright: '© 2026 Kushal Adhikari. All rights reserved.',
    socials: [
      { platform: 'GitHub', url: 'https://github.com/kuusall' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/kuusall' },
    ],
  },
};
