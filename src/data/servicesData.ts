import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-design',
    number: '01',
    name: 'Website Design',
    shortDescription:
      'Professional, conversion-focused websites built to make your business look credible, communicate clearly, and guide visitors toward action.',
    startingPrice: 'From C$1,200',
    ctaLabel: 'Discuss Website Design',
    details: [
      'Up to 5–6 pages',
      'Responsive design across all devices',
      'Mobile optimization',
      'Custom contact & inquiry forms',
      'Basic on-page SEO structure',
      'Modern micro-interactions',
      '2 revision rounds'
    ],
    examples: [
      'Corporate & Professional Services Sites',
      'Local Service Provider Platforms',
      'High-Converting Landing Pages'
    ]
  },
  {
    id: 'shopify-ecommerce',
    number: '02',
    name: 'Shopify E-commerce',
    shortDescription:
      'Conversion-focused Shopify stores designed to create a smoother customer journey and give your products the presentation they deserve.',
    startingPrice: 'From C$1,700',
    ctaLabel: 'Discuss Shopify Store',
    details: [
      'Shopify setup & store architecture',
      'Custom theme design & styling',
      'High-converting homepage layout',
      'Optimized product & collection pages',
      'Seamless desktop & mobile navigation',
      'Essential app & analytics integrations',
      'Payment & Canada Post/courier configuration',
      'Basic e-commerce SEO & schema markup',
      '2 revision rounds'
    ],
    secondaryOption: {
      name: 'Shopify Growth Store',
      price: 'From C$2,200',
      description:
        'A more conversion-focused Shopify build prepared for paid traffic, upsells, cross-sells, and aggressive ongoing scale.'
    }
  },
  {
    id: 'video-editing',
    number: '03',
    name: 'Video Editing',
    shortDescription:
      'Fast, polished short-form and long-form editing built for modern social platforms and digital marketing.',
    startingPrice: 'From C$60 / video',
    ctaLabel: 'Plan My Content',
    details: [
      'Professional video editing & cutting',
      'Dynamic on-screen captions & subtitles',
      'High-retention pacing & narrative hook',
      'Licensed music & audio balance',
      'Subtle sound design & SFX',
      'Clean motion graphics & lower thirds',
      'Platform-specific formatting (9:16, 16:9, 1:1)'
    ],
    packages: [
      { name: '8 Videos', volume: '8 edited videos / mo', price: 'C$450 / month' },
      { name: '12 Videos', volume: '12 edited videos / mo', price: 'C$650 / month' },
      { name: '20 Videos', volume: '20 edited videos / mo', price: 'C$950 / month' }
    ]
  },
  {
    id: 'ai-video-production',
    number: '04',
    name: 'AI Video Production',
    shortDescription:
      'Advertising creatives built with AI-assisted production. We create high-converting social ads, product videos, cinematic promotional videos, and campaign creatives using AI-assisted production workflows.',
    startingPrice: 'From C$300',
    ctaLabel: 'Create My Campaign',
    details: [
      'Creative direction & hook strategy',
      'AI-assisted visual production & composition',
      'High-end color grading & commercial polish',
      'Professional AI/studio voiceover integration',
      'Dynamic captions & kinetic text',
      'Multi-platform export (9:16 Reels/TikTok, 16:9 Ads)',
      'Designed specifically for paid social acquisition'
    ],
    packages: [
      { name: 'AI Social Starter', volume: '4 videos', price: 'C$300' },
      { name: 'AI Social Growth', volume: '8 videos', price: 'C$550' },
      { name: 'AI Social Pro', volume: '12 videos', price: 'C$750' },
      { name: 'AI Content Engine', volume: '20 videos', price: 'C$1,150' }
    ],
    examples: [
      'Product Ads',
      'Social Ads',
      'Launch Videos',
      'Promotional Reels',
      'Cinematic Brand Content',
      'Short-form Campaigns'
    ],
    note: 'Complex commercial productions with multiple scenes, custom characters, advanced compositing, extensive revisions, or specialised production requirements are quoted separately.'
  },
  {
    id: 'meta-advertising',
    number: '05',
    name: 'Meta Advertising',
    shortDescription:
      'Facebook and Instagram advertising management focused on reaching the right audience, testing creative, controlling spend, and improving campaign performance.',
    startingPrice: 'From C$600 / month',
    ctaLabel: 'Discuss Meta Ads',
    details: [
      'Complete campaign & ad account structure',
      'Canadian & local market audience research',
      'Systematic creative & copy testing',
      'Targeted budget allocation & bid optimization',
      'Continuous daily performance monitoring',
      'Meta Pixel, CAPI & conversion tracking setup',
      'Transparent, jargon-free monthly reporting'
    ],
    secondaryOption: {
      name: 'Meta Ads Initial Setup',
      price: 'C$300 one-time',
      description:
        'Audience building, pixel verification, business manager setup, and initial ad group structure.'
    },
    note: 'Advertising budget is paid directly to Meta by the client.'
  },
  {
    id: 'seo',
    number: '06',
    name: 'SEO',
    shortDescription:
      'Technical, local and on-page SEO designed to improve how your business is discovered organically through search.',
    startingPrice: 'From C$600 / month',
    ctaLabel: 'Improve My Visibility',
    details: [
      'High-intent keyword & competitor research',
      'On-page content & metadata optimization',
      'Technical SEO checks & Core Web Vitals audit',
      'Local search & Google Business Profile optimization',
      'Internal linking & site architecture refinement',
      'Actionable content recommendations',
      'Monthly organic search ranking & traffic reporting'
    ],
    packages: [
      { name: 'Local SEO', volume: 'Local Canadian market visibility', price: 'C$600 / month' },
      { name: 'SEO Growth', volume: 'Regional / multi-service scale', price: 'C$850 / month' }
    ],
    note: 'We focus on transparent strategy and continuous technical optimization rather than unsubstantiated ranking guarantees.'
  },
  {
    id: 'ai-voice-systems',
    number: '07',
    name: 'AI Voice Call Systems',
    shortDescription:
      'AI-powered voice systems designed to respond to leads within seconds, qualify prospects, answer common questions, collect details, and book qualified appointments directly into your calendar.',
    startingPrice: 'From C$1,800 setup',
    ctaLabel: 'Build My AI System',
    details: [
      'Custom conversational AI voice agent build',
      'Objective-driven prospect qualification scripts',
      'Custom inbound & outbound call workflows',
      'CRM integration (HubSpot, GoHighLevel, Salesforce, etc.)',
      'Real-time calendar booking (Google Calendar, Calendly)',
      'Smart lead routing & rep notifications',
      'Automated follow-up SMS/email dispatch'
    ],
    packages: [
      { name: 'AI Lead Qualification System', volume: 'Core workflow & CRM setup', price: 'C$1,800 setup' },
      { name: 'Advanced AI Lead System', volume: 'Multi-branch flow & complex routing', price: 'C$2,500 setup' }
    ],
    note: 'Phone numbers, telephony carrier minutes, and third-party software usage are billed separately.'
  }
];
