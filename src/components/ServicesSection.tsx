import React, { useState } from 'react';
import { ArrowUpRight, Check, Plus, Minus, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { AiVideoShowcase } from './mockups/AiVideoShowcase';
import { AiWorkflowDiagram } from './mockups/AiWorkflowDiagram';

interface ServicesSectionProps {
  onOpenDiscovery: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenDiscovery }) => {
  const [expandedService, setExpandedService] = useState<string | null>('web-design');

  const toggleExpand = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#0C0E13] border-t border-[#1C202B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-medium">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Everything you need to move your business forward online.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Choose a focused service or combine multiple capabilities into one connected growth system.
          </p>
        </div>

        {/* 7 Services Cards Grid */}
        <div className="space-y-4">
          {servicesData.map((service) => {
            const isExpanded = expandedService === service.id;
            return (
              <div
                key={service.id}
                className={`bg-[#12141A] rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-blue-500/80 shadow-2xl ring-1 ring-blue-500/20'
                    : 'border-[#222632] hover:border-[#2E3444] shadow-md'
                }`}
              >
                {/* Header row */}
                <div
                  onClick={() => toggleExpand(service.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span className="font-mono text-sm sm:text-base text-blue-400 font-semibold shrink-0">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {service.name}
                      </h3>
                      <p className="text-sm text-neutral-400 mt-1 max-w-2xl line-clamp-2">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#1E2330]">
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-mono text-neutral-500 block">Starting At</span>
                      <span className="text-sm sm:text-base font-bold text-white font-mono tabular-nums">
                        {service.startingPrice}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-[#2B3040] flex items-center justify-center text-neutral-300 hover:text-white hover:border-blue-400 transition-colors">
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 border-t border-[#1E2330] pt-6 bg-gradient-to-b from-[#141720] to-[#12141A] space-y-6 animate-in fade-in duration-200">
                    {/* Inclusions List */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-3 font-medium">
                        What Is Included
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {service.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Secondary option or Packages breakdown if present */}
                    {service.secondaryOption && (
                      <div className="p-4 rounded-xl bg-[#0E1015] border border-[#222632]">
                        <div className="flex items-center justify-between">
                          <h5 className="text-xs font-bold text-white uppercase font-mono">
                            {service.secondaryOption.name}
                          </h5>
                          <span className="font-mono text-xs font-bold text-blue-400">
                            {service.secondaryOption.price}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                          {service.secondaryOption.description}
                        </p>
                      </div>
                    )}

                    {service.packages && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-medium">
                          Package Options
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {service.packages.map((pkg, pIdx) => (
                            <div key={pIdx} className="p-3.5 rounded-xl border border-[#222632] bg-[#0E1015]">
                              <p className="font-bold text-xs text-white">{pkg.name}</p>
                              <p className="text-[11px] text-neutral-400 mt-0.5">{pkg.volume}</p>
                              <p className="text-sm font-bold text-blue-400 font-mono mt-2">{pkg.price}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Formats */}
                    {service.examples && (
                      <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-neutral-400">
                        <span className="font-mono text-[11px] text-neutral-500">Formats:</span>
                        {service.examples.map((ex, eIdx) => (
                          <span key={eIdx} className="px-2.5 py-1 rounded-md bg-[#1B1E29] text-neutral-300 text-xs border border-[#262B38]">
                            {ex}
                          </span>
                        ))}
                      </div>
                    )}

                    {service.note && (
                      <p className="text-xs text-neutral-400 italic pt-1">
                        Note: {service.note}
                      </p>
                    )}

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-[#1E2330] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <span className="text-xs text-neutral-400">
                        Ready to scope your project requirements?
                      </span>
                      <button
                        onClick={() => onOpenDiscovery(service.name)}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors shadow-sm cursor-pointer"
                      >
                        <span>{service.ctaLabel}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Featured Deep Dive 1: AI Video Production Showcase */}
        <div className="space-y-6 pt-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-medium">
                FEATURED CAPABILITY
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                AI Video Production in Motion
              </h3>
            </div>
            <span className="text-xs text-neutral-400 font-mono hidden sm:inline-block">
              Service 04 Spotlight
            </span>
          </div>

          <AiVideoShowcase onStartProject={() => onOpenDiscovery('AI Video Production')} />
        </div>

        {/* Featured Deep Dive 2: AI Voice System Workflow */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-medium">
                AUTOMATION ARCHITECTURE
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                AI Voice Qualification Systems
              </h3>
            </div>
            <span className="text-xs text-neutral-400 font-mono hidden sm:inline-block">
              Service 07 Spotlight
            </span>
          </div>

          <AiWorkflowDiagram />
        </div>

        {/* Services Closing Section */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#12141A] border border-[#222632] shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Need more than one piece?
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Businesses rarely have a single digital problem. We can combine services into a connected system built around your specific goal.
            </p>
          </div>
          <button
            onClick={() => onOpenDiscovery('Multiple Services')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-colors shrink-0 shadow-sm cursor-pointer"
          >
            <span>Tell Us What You’re Building</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
