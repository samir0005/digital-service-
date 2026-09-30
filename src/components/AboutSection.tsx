import React from 'react';
import { ShieldCheck, MapPin, Globe } from 'lucide-react';

export const AboutSection: React.FC<{ onOpenDiscovery: () => void }> = ({ onOpenDiscovery }) => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#090A0D] border-t border-[#1C202B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: About Copy */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-medium">
              ABOUT
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Digital execution without the agency bloat.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              <p>
                We are a digital growth studio helping Canadian businesses improve how they present themselves online, attract attention, generate enquiries, and follow up with potential customers.
              </p>
              <p>
                Our work combines design, marketing, creative production, SEO, e-commerce, and AI-powered automation into practical systems that businesses can actually use.
              </p>
              <p className="text-white font-medium">
                We believe good digital work should be clear, useful, measurable where possible, and built around the customer — not around the latest technology trend.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-neutral-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141720] border border-[#262B38]">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Canadian Business Alignment</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141720] border border-[#262B38]">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Lean Global Production</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141720] border border-[#262B38]">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Transparent CAD Pricing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Card & Operating Model */}
          <div className="lg:col-span-5">
            <div className="bg-[#12141A] rounded-2xl p-6 sm:p-8 border border-[#222632] shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-[#1E2330] pb-4">
                <div>
                  <h3 className="text-base font-bold text-white">Operating Philosophy</h3>
                  <p className="text-xs text-neutral-400 font-mono">The Northform Model</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-mono text-xs font-bold">
                  NF
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                <div className="p-3.5 rounded-xl bg-[#0E1015] border border-[#1E2330]">
                  <h4 className="font-semibold text-white text-xs uppercase font-mono">
                    Strategy & Client Service
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    Direct communication structured around Canadian business context, timelines, and market dynamics.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0E1015] border border-[#1E2330]">
                  <h4 className="font-semibold text-white text-xs uppercase font-mono">
                    Delivery Architecture
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    Specialized engineering, creative video editing, and AI pipeline production delivered with high turnaround velocity and lean rates.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1E2330] flex items-center justify-between">
                <span className="text-xs text-neutral-400 font-mono">
                  All contracts denominated in CAD
                </span>
                <button
                  onClick={onOpenDiscovery}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                >
                  Start a conversation →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
