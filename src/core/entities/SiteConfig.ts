export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Project {
  id: string;
  year: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  isHighlighted: boolean;
}

export interface Award {
  id: string;
  year: string;
  title: string;
  subtitle: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  published_at: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  navLinks: {
    label: string;
    href: string;
  }[];
  about: {
    title: string;
    bio: string;
    skills: SkillCategory[];
  };
  projects: Project[];
  experience: ExperienceItem[];
  awards: Award[];
  blogPosts: BlogPost[];
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
  };
  footer: {
    copyright: string;
    socials: {
      platform: string;
      url: string;
    }[];
  };
}
