import React from 'react';
import { ArrowUpRight, Check, Video } from 'lucide-react';
import { bundlePackages, contentPackage } from '../data/packagesData';

interface PackagesSectionProps {
  onOpenDiscovery: (packageName?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenDiscovery }) => {
  return (
    <section className="py-24 md:py-32 bg-[#090A0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-medium">
            BUILT TO WORK TOGETHER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Combine the right services into one growth system.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Multi-disciplinary packages scoped around real business milestones rather than isolated tasks.
          </p>
        </div>

        {/* 4 Premium Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {bundlePackages.map((pkg) => {
            const isFeatured = pkg.featured;
            return (
              <div
                key={pkg.id}
                className={`bg-[#12141A] rounded-2xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'lg:col-span-6 border-blue-500/80 shadow-2xl ring-1 ring-blue-500/20'
                    : 'lg:col-span-6 border-[#222632] shadow-md hover:border-[#2F3547]'
                }`}
              >
                <div className="space-y-6">
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-blue-400 font-semibold">
                      PACKAGE {pkg.number}
                    </span>
                    {isFeatured && (
                      <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-medium bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                        End-to-End System
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-2 pb-4 border-b border-[#1E2330]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                        {pkg.price}
                      </span>
                    </div>
                    {pkg.secondaryPrice && (
                      <span className="text-xs text-blue-400 font-mono block mt-1">
                        {pkg.secondaryPrice}
                      </span>
                    )}
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-2.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                      Included Deliverables
                    </span>
                    {pkg.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-8 mt-6 border-t border-[#1E2330]">
                  <button
                    onClick={() => onOpenDiscovery(pkg.name)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isFeatured
                        ? 'bg-blue-600 text-white hover:bg-blue-500'
                        : 'bg-[#181B24] text-white border border-[#262B38] hover:bg-[#202534]'
                    }`}
                  >
                    <span>{pkg.ctaLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Horizontal Content Package Section */}
        <div className="bg-[#12141A] rounded-2xl p-8 sm:p-10 border border-[#222632] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider font-medium">
                <Video className="w-3.5 h-3.5 text-blue-400" />
                <span>{contentPackage.label}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {contentPackage.headline}
              </h3>
              <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                {contentPackage.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {contentPackage.breakdown.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#1E2330]">
              <div className="sm:text-right">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                  Monthly Retainer
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">
                  {contentPackage.price}
                </span>
                <span className="text-xs text-neutral-400 block mt-0.5">Recurring creative cadence</span>
              </div>

              <button
                onClick={() => onOpenDiscovery('Social Media Content Package')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors shadow-sm cursor-pointer"
              >
                <span>{contentPackage.ctaLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
