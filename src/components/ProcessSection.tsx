import React from 'react';
import { Compass, FileCode2, Cpu, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      icon: Compass,
      desc: 'We start by understanding your business, audience, offer, current digital setup, and the result you’re trying to achieve.'
    },
    {
      num: '02',
      title: 'PLAN',
      icon: FileCode2,
      desc: 'We turn the problem into a clear scope, creative direction, technical plan, timeline, and deliverables.'
    },
    {
      num: '03',
      title: 'BUILD',
      icon: Cpu,
      desc: 'We design, produce, implement, test, and refine the system.'
    },
    {
      num: '04',
      title: 'LAUNCH & IMPROVE',
      icon: Rocket,
      desc: 'We deliver the final work and, where applicable, continue optimising campaigns, content, SEO, or automation.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#090A0D] border-t border-[#1C202B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-medium">
            HOW WE WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Simple process. Serious execution.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Every engagement follows a structured sequence designed to eliminate surprises, keep timelines predictable, and maintain clear milestones.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-4xl font-extrabold text-blue-500 font-mono tracking-tighter">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#141720] border border-[#262B38] flex items-center justify-center text-blue-400 shadow-md">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide font-mono">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1E2330] text-[11px] text-neutral-500 font-mono">
                  <span>Milestone {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
