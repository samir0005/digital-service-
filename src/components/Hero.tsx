import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { HeroVisual } from './mockups/HeroVisual';

interface HeroProps {
  onOpenDiscovery: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiscovery, onExploreServices }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#090A0D]">
      {/* Subtle radial ambient blue light */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            {/* Small eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span>DIGITAL GROWTH STUDIO</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              Build a digital presence that{' '}
              <span className="relative inline-block text-white underline decoration-blue-500/80 decoration-[3px] underline-offset-6">
                works harder.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl font-normal">
              We design websites, create high-converting advertising, produce premium content, grow organic visibility, and build AI-powered lead systems for Canadian businesses.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenDiscovery}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-all cursor-pointer shadow-lg shadow-blue-900/30 active:scale-[0.99]"
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-neutral-200 bg-[#141720] border border-[#262B38] rounded-xl hover:bg-[#1C202C] hover:text-white transition-colors cursor-pointer"
              >
                <span>View Our Services</span>
              </button>
            </div>

            {/* Trust-oriented line under buttons */}
            <div className="pt-2 text-xs text-neutral-400 font-mono tracking-tight">
              <span className="text-neutral-300">Web</span>
              <span className="mx-2 text-neutral-600">•</span>
              <span className="text-neutral-300">E-commerce</span>
              <span className="mx-2 text-neutral-600">•</span>
              <span className="text-neutral-300">Advertising</span>
              <span className="mx-2 text-neutral-600">•</span>
              <span className="text-neutral-300">Creative</span>
              <span className="mx-2 text-neutral-600">•</span>
              <span className="text-neutral-300">SEO</span>
              <span className="mx-2 text-neutral-600">•</span>
              <span className="text-neutral-300">AI Automation</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Studio Composition */}
          <div className="lg:col-span-6 w-full">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
