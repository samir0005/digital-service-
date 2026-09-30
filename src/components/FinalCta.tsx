import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FinalCtaProps {
  onOpenDiscovery: () => void;
  onExploreServices: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenDiscovery, onExploreServices }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#0E1015] text-white relative overflow-hidden border-t border-[#1C202B]">
      {/* Subtle ambient lighting blue gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span>START WITH A DISCOVERY CALL</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-[1.1]">
          Have a digital problem worth solving?
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Tell us what you’re building, what isn’t working, or where you want to go next. We’ll help turn it into a clear digital plan.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDiscovery}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 active:scale-[0.98] cursor-pointer"
          >
            <span>Book a Discovery Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl text-neutral-300 hover:text-white text-sm font-medium transition-colors cursor-pointer border border-[#2B3040] bg-[#141720]"
          >
            <span>View Services</span>
          </button>
        </div>

        <div className="pt-8 flex items-center justify-center gap-6 text-xs text-neutral-400 font-mono">
          <span>Zero Obligation</span>
          <span>·</span>
          <span>Transparent Scoping</span>
          <span>·</span>
          <span>Direct Response Within 24h</span>
        </div>
      </div>
    </section>
  );
};
