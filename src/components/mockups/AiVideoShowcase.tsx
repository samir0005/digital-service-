import React, { useState } from 'react';
import { Play, Pause, Film, Sparkles, VolumeX } from 'lucide-react';

interface CreativeSample {
  id: string;
  title: string;
  aspect: '9:16' | '16:9';
  tag: string;
  duration: string;
  description: string;
  accentGradient: string;
  hook: string;
}

const samples: CreativeSample[] = [
  {
    id: 'sample-1',
    title: 'Minimalist D2C Botanical Launch',
    aspect: '9:16',
    tag: 'Product Ad',
    duration: '0:18',
    description: 'Macro textural visuals paired with rapid benefit-driven text overlays.',
    accentGradient: 'from-stone-950 via-neutral-900 to-blue-950/40',
    hook: '"The clean formula Canadian homes have been waiting for."'
  },
  {
    id: 'sample-2',
    title: 'Architectural Timber Concept',
    aspect: '16:9',
    tag: 'Cinematic Reel',
    duration: '0:30',
    description: 'Atmospheric light framing modern residential construction.',
    accentGradient: 'from-slate-950 via-zinc-900 to-blue-950/20',
    hook: '"Modern space engineered for four Canadian seasons."'
  },
  {
    id: 'sample-3',
    title: 'B2B Logistics Software Ad',
    aspect: '9:16',
    tag: 'Social Ad',
    duration: '0:15',
    description: 'High-contrast kinetic typography with real platform UI transitions.',
    accentGradient: 'from-neutral-900 via-zinc-900 to-indigo-950',
    hook: '"Cut 4 hours of dispatch calls every morning."'
  }
];

export const AiVideoShowcase: React.FC<{ onStartProject: () => void }> = ({ onStartProject }) => {
  const [selectedSample, setSelectedSample] = useState<CreativeSample>(samples[0]);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="bg-[#12141A] text-white rounded-2xl p-6 sm:p-8 border border-[#222632] relative overflow-hidden shadow-2xl">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column: Video player mockup */}
        <div className="lg:col-span-6 flex justify-center">
          <div
            className={`relative rounded-xl overflow-hidden border border-[#2B3040] shadow-2xl transition-all duration-300 bg-[#090A0D] ${
              selectedSample.aspect === '9:16' ? 'w-full max-w-[280px] aspect-[9/16]' : 'w-full max-w-[480px] aspect-[16/9]'
            }`}
          >
            {/* Simulated cinematic frame */}
            <div className={`absolute inset-0 bg-gradient-to-b ${selectedSample.accentGradient} flex flex-col justify-between p-5`}>
              {/* Top player header */}
              <div className="flex items-center justify-between z-10 text-xs">
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-medium">
                  {selectedSample.tag}
                </span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-black/50 text-[10px] font-mono text-neutral-300 backdrop-blur-sm border border-white/10">
                    {selectedSample.aspect}
                  </span>
                  <div className="p-1 rounded bg-black/50 text-neutral-300 border border-white/10">
                    <VolumeX className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Center cinematic graphics */}
              <div className="text-center my-auto px-2 relative z-10">
                <div
                  className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-blue-400 fill-blue-400" />
                  ) : (
                    <Play className="w-5 h-5 text-blue-400 fill-blue-400 ml-0.5" />
                  )}
                </div>
                <p className="text-sm font-medium text-neutral-200 italic leading-relaxed">
                  {selectedSample.hook}
                </p>
                <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] text-blue-400 font-mono">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>AI-Assisted Visual Polish</span>
                </div>
              </div>

              {/* Bottom scrubber & metadata */}
              <div className="z-10 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                  <span>{selectedSample.title}</span>
                  <span>{selectedSample.duration}</span>
                </div>
                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-blue-500 rounded-full transition-all duration-1000 ${
                      isPlaying ? 'w-3/4' : 'w-1/4'
                    }`}
                  />
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-repeat bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40" />
          </div>
        </div>

        {/* Right column: Positioning & Package Selector */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2 font-medium">
              <Film className="w-3.5 h-3.5" />
              <span>Commercial Production</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Advertising creatives built with AI-assisted production.
            </h3>
            <p className="text-sm text-neutral-300 mt-3 leading-relaxed">
              We create high-converting social ads, product videos, cinematic promotional videos, and campaign creatives using AI-assisted production workflows.
            </p>
            <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
              The technology stays behind the scenes. The goal is the creative: stronger hooks, better storytelling, faster production, and content designed for social media and advertising.
            </p>
          </div>

          {/* Sample Selectors */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
              Select Output Style
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {samples.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSample(s)}
                  className={`p-3 rounded-xl border text-left transition-all text-xs cursor-pointer ${
                    selectedSample.id === s.id
                      ? 'border-blue-500 bg-blue-500/15 text-white'
                      : 'border-[#262B38] bg-[#0E1015] text-neutral-400 hover:border-neutral-600 hover:text-neutral-200'
                  }`}
                >
                  <p className="font-semibold truncate">{s.tag}</p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">{s.aspect} format</p>
                </button>
              ))}
            </div>
          </div>

          {/* Package Pricing Tiers Row */}
          <div className="pt-4 border-t border-[#222632]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="p-2.5 rounded-lg bg-[#0E1015] border border-[#222632] text-center">
                <span className="text-[11px] text-neutral-400">Starter · 4 vids</span>
                <p className="text-sm font-semibold text-blue-400 font-mono mt-0.5">C$300</p>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0E1015] border border-[#222632] text-center">
                <span className="text-[11px] text-neutral-400">Growth · 8 vids</span>
                <p className="text-sm font-semibold text-blue-400 font-mono mt-0.5">C$550</p>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0E1015] border border-[#222632] text-center">
                <span className="text-[11px] text-neutral-400">Pro · 12 vids</span>
                <p className="text-sm font-semibold text-blue-400 font-mono mt-0.5">C$750</p>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0E1015] border border-[#222632] text-center">
                <span className="text-[11px] text-neutral-400">Engine · 20 vids</span>
                <p className="text-sm font-semibold text-blue-400 font-mono mt-0.5">C$1,150</p>
              </div>
            </div>

            <p className="text-[11px] text-neutral-400 mt-3 italic">
              Note: Complex commercial productions with multiple scenes, custom characters, advanced compositing, or specialised requirements are quoted separately.
            </p>
          </div>

          <div>
            <button
              onClick={onStartProject}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors shadow-sm cursor-pointer"
            >
              Create My Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
