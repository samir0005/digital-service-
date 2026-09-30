import React from 'react';
import { ArrowUpRight, Info } from 'lucide-react';

interface PricingSectionProps {
  onOpenDiscovery: (serviceName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDiscovery }) => {
  const pricingCategories = [
    {
      category: 'Websites & Landing Pages',
      subtitle: 'Fast, responsive, conversion-focused digital surfaces',
      items: [
        { name: 'Landing Page', price: 'From C$700', note: 'Single focused conversion page with contact form' },
        { name: 'Business Website', price: 'From C$1,200', note: '5–6 responsive pages with SEO setup & forms' },
        { name: 'Website Redesign', price: 'From C$900', note: 'Visual overhaul and performance optimization' }
      ]
    },
    {
      category: 'Shopify E-commerce',
      subtitle: 'Stores engineered for checkout conversion and catalog browsing',
      items: [
        { name: 'Shopify Store', price: 'From C$1,700', note: 'Complete theme styling, collection setup, and payments' },
        { name: 'Shopify Growth Store', price: 'From C$2,200', note: 'Conversion-optimized for paid traffic and upsells' }
      ]
    },
    {
      category: 'Short-Form Video Editing',
      subtitle: 'Dynamic editing, pacing, kinetic subtitles, and platform framing',
      items: [
        { name: 'Single Video Cut', price: 'From C$60 / vid', note: 'Turnaround within 48–72 hours per reel' },
        { name: '8 Videos / Month', price: 'C$450 / month', note: 'Consistent weekly content schedule' },
        { name: '12 Videos / Month', price: 'C$650 / month', note: 'Three videos weekly across Reels, Shorts, TikTok' },
        { name: '20 Videos / Month', price: 'C$950 / month', note: 'High-volume production batch cadence' }
      ]
    },
    {
      category: 'AI Video Production',
      subtitle: 'Advertising creatives produced with AI-assisted workflows',
      items: [
        { name: 'AI Social Starter (4 vids)', price: 'C$300', note: 'Commercial hooks, creative testing variations' },
        { name: 'AI Social Growth (8 vids)', price: 'C$550', note: 'Diverse angles for ad sets & promotions' },
        { name: 'AI Social Pro (12 vids)', price: 'C$750', note: 'Multi-scene creative assets for scaling ad spend' },
        { name: 'AI Content Engine (20 vids)', price: 'C$1,150', note: 'Comprehensive monthly paid social creative library' }
      ]
    },
    {
      category: 'Meta Advertising',
      subtitle: 'Performance marketing on Instagram and Facebook',
      items: [
        { name: 'Meta Ads Account Setup', price: 'C$300 one-time', note: 'Pixel, CAPI, audiences, tracking pipeline' },
        { name: 'Monthly Campaign Management', price: 'From C$600 / mo', note: 'Ad creative testing, budget steering, monthly report' }
      ]
    },
    {
      category: 'Search Engine Optimization (SEO)',
      subtitle: 'Organic search discoverability and local map pack rankings',
      items: [
        { name: 'Local SEO', price: 'From C$600 / mo', note: 'Google Business Profile, local citations, on-page' },
        { name: 'SEO Growth', price: 'From C$850 / mo', note: 'Technical audits, competitor research, ranking expansion' }
      ]
    },
    {
      category: 'AI Voice Call Automation',
      subtitle: 'Conversational voice qualification and instant booking',
      items: [
        { name: 'AI Lead Qualification', price: 'From C$1,800 setup', note: 'Custom agent, qualification script, CRM webhook' },
        { name: 'Advanced AI Lead System', price: 'From C$2,500 setup', note: 'Multi-branch logic, live calendar sync, SMS follow-up' }
      ]
    }
  ];

  const pricingNotes = [
    'All prices are in CAD.',
    'Advertising spend is separate and paid directly to advertising platforms.',
    'Third-party software, domain names, and platform subscriptions are separate.',
    'Complex projects with custom software or extensive revision needs are quoted according to scope.',
    'Projects include 2 revision rounds unless otherwise stated in the agreement.',
    'Monthly services are billed at the beginning of each billing month.',
    'For projects above C$750, standard payment terms are 50% upfront and 50% before final delivery.'
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#0C0E13] border-t border-[#1C202B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-medium">
            TRANSPARENT PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Straightforward pricing. No unnecessary complexity.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Starting prices are shown upfront. Every project is scoped around your actual requirements before work begins.
          </p>
        </div>

        {/* Pricing Tables Grid */}
        <div className="space-y-8">
          {pricingCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#12141A] rounded-2xl border border-[#222632] shadow-xl overflow-hidden"
            >
              <div className="px-6 py-4 bg-[#0E1015] border-b border-[#1E2330] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-neutral-400">{cat.subtitle}</p>
                </div>
                <button
                  onClick={() => onOpenDiscovery(cat.category)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors self-start sm:self-center cursor-pointer"
                >
                  <span>Request Scope</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>

              <div className="divide-y divide-[#1D212D]">
                {cat.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="p-5 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#161922] transition-colors"
                  >
                    <div className="space-y-0.5">
                      <p className="text-sm font-semibold text-white">{item.name}</p>
                      <p className="text-xs text-neutral-400">{item.note}</p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                      <span className="font-mono text-sm sm:text-base font-bold text-blue-400 tabular-nums">
                        {item.price}
                      </span>
                      <button
                        onClick={() => onOpenDiscovery(`${cat.category}: ${item.name}`)}
                        className="px-3 py-1.5 rounded-lg border border-[#2B3040] bg-[#181B24] text-xs font-medium text-neutral-200 hover:text-white hover:border-blue-400 transition-colors cursor-pointer"
                      >
                        Select
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Important Pricing Notes Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#12141A] border border-[#222632] space-y-4">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-blue-400" />
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Standard Commercial Terms & Pricing Notes
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {pricingNotes.map((note, nIdx) => (
              <div key={nIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                <span className="leading-relaxed">{note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
