import React from 'react';
import { PageTab } from '../types';

interface FooterProps {
  onNavigate: (tab: PageTab) => void;
  onOpenDiscovery: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDiscovery }) => {
  const handleNav = (tab: PageTab) => {
    onNavigate(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090A0D] border-t border-[#1C202B] pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white block">
                Northform
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            </div>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Digital systems built to help businesses grow. Websites, advertising, creative content, SEO, and AI automation for Canadian businesses.
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-500">
              <span className="text-blue-400">All contracts scoped in CAD</span>
              <span className="mx-2">·</span>
              <span>Eastern & Pacific Time Zone Friendly</span>
            </div>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block font-semibold">
              Services
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'Website Design', tab: 'services' },
                { name: 'Shopify E-commerce', tab: 'services' },
                { name: 'Video Editing', tab: 'services' },
                { name: 'AI Video Production', tab: 'services' },
                { name: 'Meta Advertising', tab: 'services' },
                { name: 'Search Engine Optimization (SEO)', tab: 'services' },
                { name: 'AI Voice Systems', tab: 'services' }
              ].map((s) => (
                <li key={s.name}>
                  <button
                    onClick={() => {
                      handleNav('services');
                      onOpenDiscovery(s.name);
                    }}
                    className="hover:text-blue-400 transition-colors cursor-pointer text-left text-neutral-400"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Col */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block font-semibold">
              Studio
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-neutral-400"
                >
                  About the Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('work')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-neutral-400"
                >
                  Selected Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pricing')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-neutral-400"
                >
                  Pricing & Scopes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-neutral-400"
                >
                  Project Discovery & Contact
                </button>
              </li>
            </ul>

            <div className="pt-4">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block font-semibold mb-2">
                Connect
              </span>
              <div className="flex items-center gap-3 text-xs text-neutral-500 font-mono">
                <a href="#contact" onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  LinkedIn
                </a>
                <span>·</span>
                <a href="#contact" onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  X / Twitter
                </a>
                <span>·</span>
                <a href="#contact" onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 border-t border-[#1C202B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Northform Digital. All rights reserved.</p>
          <p className="font-mono text-[11px] text-neutral-500">
            Canada-focused digital services. Delivery from India.
          </p>
        </div>
      </div>
    </footer>
  );
};
