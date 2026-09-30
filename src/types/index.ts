export type PageTab = 'home' | 'services' | 'pricing' | 'work' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  shortDescription: string;
  startingPrice: string;
  details: string[];
  ctaLabel: string;
  secondaryOption?: {
    name: string;
    price: string;
    description: string;
  };
  packages?: {
    name: string;
    volume: string;
    price: string;
  }[];
  examples?: string[];
  note?: string;
  badge?: string;
}

export interface PackageItem {
  id: string;
  number: string;
  name: string;
  price: string;
  secondaryPrice?: string;
  description: string;
  includes: string[];
  ctaLabel: string;
  featured?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Web Design' | 'Shopify' | 'Meta Ads' | 'AI Video' | 'Creative' | 'SEO' | 'AI Automation';
  industry: string;
  servicesDelivered: string[];
  outcome: string;
  isConcept?: boolean;
  visualType: 'ecommerce' | 'corporate' | 'real-estate' | 'social-ad' | 'automation' | 'video-still';
}

export interface FaqItem {
  question: string;
  answer: string;
}
