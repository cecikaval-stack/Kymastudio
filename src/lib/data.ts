import type { Insight, NavItem, ProcessStep, Project, Service } from "@/types";
import { images } from "@/lib/images";

export const siteConfig = {
  name: "Kyma Studio",
  tagline:
    "Branding, websites and digital marketing that help businesses grow.",
  heroSubheading:
    "Kyma Studio helps startups and established businesses create memorable brands through strategy, brand identity, website design, development and digital marketing.",
  description:
    "Kyma Studio is an independent creative and branding studio helping startups and established businesses grow through brand strategy, identity design, website design, development and digital marketing.",
  url: "https://kymastudio.gr",
  email: "cecikaval@gmail.com",
  phone: "+30 697 197 0062",
  location: "Working with clients worldwide",
  social: {
    instagram: "https://www.instagram.com/kymastudiogr",
  },
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    tagline: "",
    description:
      "We define your positioning, audience and messaging so every decision moves your business forward with clarity.",
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    tagline: "",
    description:
      "Logos, typography and visual systems crafted with the restraint and timelessness of Mediterranean design.",
  },
  {
    id: "website-design",
    title: "Website Design",
    tagline: "",
    description:
      "Editorial, image-led websites that feel calm, distinctive and unmistakably yours.",
  },
  {
    id: "website-development",
    title: "Website Development",
    tagline: "",
    description:
      "Fast, accessible and performance-optimised builds engineered with the same care we bring to every design detail.",
  },
  {
    id: "social-media",
    title: "Social Media Management",
    tagline: "",
    description:
      "Content and visual systems that build genuine connection — organic in tone, strategic in purpose.",
  },
  {
    id: "campaign-strategy",
    title: "Campaign Strategy",
    tagline: "",
    description:
      "Integrated campaigns designed to build momentum — one thoughtful touchpoint at a time.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    description:
      "We immerse ourselves in your world — listening, researching, and understanding the currents beneath your brand.",
  },
  {
    id: "define",
    number: "02",
    title: "Define",
    description:
      "We build a clear campaign plan — outlining exactly what will happen, what we will deliver, and how we will work together once you agree to move forward.",
  },
  {
    id: "design",
    number: "03",
    title: "Design",
    description:
      "Ideas become tangible. Every detail — from typography to texture — is considered, refined, and purposeful.",
  },
  {
    id: "launch",
    number: "04",
    title: "Launch",
    description:
      "Your brand enters the world with intention. We ensure every touchpoint feels cohesive and confident.",
  },
  {
    id: "grow",
    number: "05",
    title: "Grow",
    description:
      "Brands are living things. We partner beyond launch, nurturing momentum and adapting as you evolve.",
  },
];

export const projects: Project[] = [
  {
    slug: "aegean-collective",
    title: "Aegean Collective",
    category: "Brand Identity",
    year: "2025",
    description:
      "A boutique hotel group rooted in Cycladic heritage. We crafted an identity that honours whitewashed architecture and the quiet luxury of island living.",
    image: images.projects.aegeanCollective,
    imageAlt: "White Cycladic architecture against the deep blue Aegean Sea",
    featured: true,
  },
  {
    slug: "maris-ceramics",
    title: "Maris Ceramics",
    category: "Identity & Web",
    year: "2025",
    description:
      "Hand-thrown ceramics from a coastal atelier. A brand system inspired by clay, stone, and the rhythm of the tides.",
    image: images.projects.marisCeramics,
    imageAlt: "Hand-thrown ceramic vessels in natural terracotta and stone tones",
    featured: true,
  },
  {
    slug: "hora-restaurant",
    title: "Hōra Restaurant",
    category: "Brand & Campaign",
    year: "2024",
    description:
      "Farm-to-table dining overlooking the caldera. An identity as warm and generous as the Mediterranean sun at golden hour.",
    image: images.projects.horaRestaurant,
    imageAlt: "Coastal Greek village with whitewashed buildings and terracotta rooftops",
    featured: true,
  },
  {
    slug: "lumen-skincare",
    title: "Lumen Skincare",
    category: "Packaging & Digital",
    year: "2024",
    description:
      "Botanical skincare born from Greek flora. Minimal packaging and a digital presence that feels like morning light on water.",
    image: images.projects.lumenSkincare,
    imageAlt: "Ancient olive trees bathed in warm Mediterranean sunlight",
    featured: false,
  },
  {
    slug: "navis-yacht-charter",
    title: "Navis Yacht Charter",
    category: "Brand Strategy",
    year: "2024",
    description:
      "Luxury sailing experiences across the Aegean. A brand that captures the freedom of open water and bespoke hospitality.",
    image: images.projects.navisYacht,
    imageAlt: "Sailing boat on calm turquoise Aegean waters",
    featured: false,
  },
  {
    slug: "atelier-forma",
    title: "Atelier Forma",
    category: "Web Design",
    year: "2023",
    description:
      "An architecture studio specialising in sustainable island homes. A website as spacious and intentional as their buildings.",
    image: images.projects.atelierForma,
    imageAlt: "Cycladic island architecture with limestone cliffs and blue sea",
    featured: false,
  },
];

export const insights: Insight[] = [
  {
    slug: "the-ripple-effect",
    title: "The Ripple Effect: Why Small Brand Moments Matter",
    excerpt:
      "A single wave creates movement across an entire shoreline. The same is true for branding — every touchpoint sends ripples through perception.",
    category: "Brand Philosophy",
    date: "June 2025",
    readTime: "6 min",
    image: images.insights.milos.src,
    imageAlt: images.insights.milos.alt,
  },
  {
    slug: "mediterranean-minimalism",
    title: "Mediterranean Minimalism in Modern Branding",
    excerpt:
      "Less isn't empty — it's breathing room. How Cycladic design principles inform contemporary brand identities.",
    category: "Design",
    date: "May 2025",
    readTime: "8 min",
    image: images.insights.paros.src,
    imageAlt: images.insights.paros.alt,
  },
  {
    slug: "slow-branding",
    title: "The Case for Slow Branding",
    excerpt:
      "In a world of rapid pivots, the brands that endure are built with patience, intention, and deep roots.",
    category: "Strategy",
    date: "April 2025",
    readTime: "5 min",
    image: images.insights.mykonos.src,
    imageAlt: images.insights.mykonos.alt,
  },
];

export const philosophyContent = {
  heading: "Brands that move people — gently, and with purpose.",
  paragraphs: [
    "In Greek, kyma means wave — not noise, but the steady movement that reshapes shorelines over time.",
    "We help startups and established businesses build brands the same way: with clarity, craftsmanship and patience. One thoughtful decision creates momentum. One authentic story builds trust.",
    "Our inspiration comes from the Mediterranean — simplicity, timeless design, and the calm confidence of places shaped by light and sea. That is the feeling we bring to every project.",
  ],
};
