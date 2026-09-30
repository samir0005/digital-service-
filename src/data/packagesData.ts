import { PackageItem } from '../types';

export const bundlePackages: PackageItem[] = [
  {
    id: 'pkg-local-starter',
    number: '01',
    name: 'Local Business Starter',
    price: 'From C$1,800',
    description:
      'For small businesses that need a stronger digital foundation and a professional launch into online marketing.',
    includes: [
      'Custom 5-page business website',
      'Meta Ads account & campaign setup',
      '4 high-converting social/AI video creatives',
      'Mobile-first responsive UX and contact forms',
      'Google Business Profile integration'
    ],
    ctaLabel: 'Discuss This Package'
  },
  {
    id: 'pkg-local-lead-gen',
    number: '02',
    name: 'Local Lead Generation',
    price: 'From C$2,100 setup',
    secondaryPrice: '+ C$600 / month management',
    description:
      'For businesses focused on generating consistent qualified enquiries through paid advertising and focused landing pages.',
    includes: [
      'High-converting dedicated landing page',
      'Meta Ads full infrastructure setup',
      '4 custom AI ad creatives with copy variations',
      'CAPI, Pixel & conversion tracking pipeline',
      'Ongoing monthly Meta campaign management & optimization'
    ],
    ctaLabel: 'Discuss Lead Generation'
  },
  {
    id: 'pkg-shopify-launch',
    number: '03',
    name: 'Shopify Launch',
    price: 'From C$2,150',
    description:
      'For Canadian e-commerce brands preparing to launch or rebuild their online store for higher average order value and scale.',
    includes: [
      'Full custom Shopify store architecture',
      'Conversion-focused theme styling & checkout polish',
      'Payment & Canadian carrier shipping configuration',
      '4 promotional social/AI product videos',
      'Analytics, GA4 & e-commerce event tracking'
    ],
    ctaLabel: 'Discuss Shopify Launch'
  },
  {
    id: 'pkg-ai-lead-system',
    number: '04',
    name: 'AI Lead Generation System',
    price: 'From C$3,000 setup',
    featured: true, // Visually larger card as requested, but NEVER labeled "Best" or ranked
    description:
      'For businesses that want marketing, paid advertising, and instant lead qualification connected into one seamless system.',
    includes: [
      'High-converting acquisition landing page',
      'Meta Ads campaign architecture & launch',
      'Suite of AI advertising video creatives',
      'Instant lead capture & webhook pipeline',
      'Conversational AI voice qualification call flow',
      'Direct calendar booking & CRM integration'
    ],
    ctaLabel: 'Build My Lead System'
  }
];

export const contentPackage = {
  label: 'SOCIAL MEDIA CONTENT',
  headline: 'Stay visible without slowing down.',
  price: 'C$850 / month',
  description:
    'A recurring creative package for businesses that need consistent, high-retention content across social channels without hiring full-time editors.',
  breakdown: [
    '12 edited short-form videos (Reels, TikTok, Shorts)',
    '8 AI-assisted promotional/social video creatives',
    'Custom hooks, captions, licensed audio & branding',
    'Delivered in weekly production batches'
  ],
  ctaLabel: 'Plan My Content'
};
