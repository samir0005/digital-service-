import React from 'react';
import { MessageSquareCode, Target, Zap, Globe2 } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      title: 'CLEAR COMMUNICATION',
      desc: 'You know what is being built, why it is being built, and what happens next. No hidden jargon or opaque updates.',
      icon: MessageSquareCode
    },
    {
      title: 'BUSINESS-FIRST THINKING',
      desc: 'We focus on the customer journey and business objective, not technology for its own sake. Every component must earn its place.',
      icon: Target
    },
    {
      title: 'MODERN PRODUCTION',
      desc: 'From AI-assisted creative production to automation, we use modern tools where they create practical value and faster delivery.',
      icon: Zap
    },
    {
      title: 'LEANER DELIVERY',
      desc: 'An India-based delivery model allows us to offer competitive Canadian pricing without building the overhead of a traditional agency.',
      icon: Globe2
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0C0E13] border-t border-[#1C202B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-medium">
            WHY WORK WITH US
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Less noise. More useful digital work.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            How we approach client partnerships, production efficiency, and measurable digital growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 sm:p-8 rounded-2xl bg-[#12141A] border border-[#222632] shadow-xl hover:border-blue-500/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#181B24] border border-[#262B38] flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm font-bold text-white tracking-wider font-mono">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1E2330] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>Core Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
