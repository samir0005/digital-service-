import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const IntroSection: React.FC<{ onOpenDiscovery: () => void }> = ({ onOpenDiscovery }) => {
  return (
    <section className="py-20 md:py-28 bg-[#090A0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large typography and copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-medium">
              THE DIGITAL FOUNDATION
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Your website should do more than exist.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              <p>
                Your website is often the first interaction someone has with your business. Your advertising is what gets attention. Your content is what keeps people interested. And your follow-up is what helps turn interest into action.
              </p>
              <p className="text-white font-medium">
                We bring those pieces together into practical digital systems designed around your business goals.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDiscovery}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 group cursor-pointer"
              >
                <span>Discuss your digital foundation</span>
                <ArrowUpRight className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </button>
            </div>
          </div>

          {/* Right: Stacked composition */}
          <div className="lg:col-span-6">
            <div className="relative space-y-4">
              {/* Stack 1: Website & Store Surface */}
              <div className="p-5 bg-[#12141A] rounded-2xl border border-[#222632] shadow-xl hover:border-blue-500/40 transition-all">
                <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-2">
                  <span>01 · WEB & STORE ARCHITECTURE</span>
                  <span className="text-blue-400 font-medium">Conversion UX</span>
                </div>
                <h4 className="text-sm font-semibold text-white">
                  Custom high-performance design engineered for Canadian buyers
                </h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Clean typographic hierarchy, responsive speed, and intentional calls-to-action that convey instant credibility.
                </p>
              </div>

              {/* Stack 2: High-converting Advertising & Video */}
              <div className="p-5 bg-[#141720] rounded-2xl border border-[#262B38] shadow-xl hover:border-blue-500/40 transition-all sm:ml-6">
                <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-2">
                  <span>02 · ADVERTISING & VIDEO CREATIVE</span>
                  <span className="text-blue-300 font-medium">Meta & Short-Form</span>
                </div>
                <h4 className="text-sm font-semibold text-white">
                  Creative tested systematically against qualified audiences
                </h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  High-retention hooks and AI-assisted creative production designed to lower customer acquisition costs.
                </p>
              </div>

              {/* Stack 3: Automated Follow-Up & Voice */}
              <div className="p-5 bg-[#12141A] rounded-2xl border border-[#222632] shadow-xl hover:border-blue-500/40 transition-all sm:ml-12">
                <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-2">
                  <span>03 · RAPID LEAD QUALIFICATION</span>
                  <span className="text-emerald-400 font-medium">&lt; 60s Speed to Lead</span>
                </div>
                <h4 className="text-sm font-semibold text-white">
                  Automated voice qualification and instant calendar booking
                </h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Ensuring zero inbound leads slip through cracks while freeing your team from manual phone tag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
