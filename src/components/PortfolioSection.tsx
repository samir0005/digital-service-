import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioItems } from '../data/portfolioData';
import { PortfolioMockupVisual } from './mockups/PortfolioMockups';

interface PortfolioSectionProps {
  onOpenDiscovery: (context?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenDiscovery }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = [
    'All',
    'Shopify',
    'Web Design',
    'Meta Ads',
    'AI Video',
    'Creative',
    'AI Automation'
  ];

  const filteredItems = selectedFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === selectedFilter);

  return (
    <section id="work" className="py-24 md:py-32 bg-[#0C0E13] border-t border-[#1C202B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-medium">
              SELECTED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Designed to look good. Built to do something.
            </h2>
            <p className="text-base text-neutral-400">
              A curated look at systems, store architectures, ad creative suites, and automated workflows.
            </p>
          </div>

          {/* Interactive filter control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#141720] border border-[#222632] rounded-xl max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#12141A] rounded-2xl border border-[#222632] overflow-hidden shadow-xl hover:border-blue-500/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Presentation Mockup Container */}
              <PortfolioMockupVisual item={item} />

              {/* Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="font-mono text-blue-400/90 uppercase">{item.industry}</span>
                    {item.isConcept && (
                      <span className="text-neutral-500 font-mono text-[10px]">Studio Concept</span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.outcome}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1E2330] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.servicesDelivered.map((srv, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-[#181B24] border border-[#252A38] text-neutral-300 text-[10px] font-mono"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenDiscovery(`Work Inquiry: ${item.title}`)}
                    className="w-full pt-2 flex items-center justify-between text-xs font-semibold text-neutral-300 group-hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <span>Request similar project scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Client Privacy & Custom Scopes */}
        <div className="text-center pt-6">
          <p className="text-xs text-neutral-500 font-mono">
            All work above is presented for capability and architecture demonstration · Client proprietary metrics protected under standard NDA.
          </p>
        </div>
      </div>
    </section>
  );
};
