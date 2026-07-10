export interface Service {
  id: string;
  title: string;
  description: string;
  tagline: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
}

export interface NavItem {
  label: string;
  href: string;
}
