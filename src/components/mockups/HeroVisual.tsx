import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, PhoneCall, Sparkles, Layers, Sliders, Globe } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'system' | 'campaign' | 'automation'>('system');

  return (
    <div className="relative w-full max-w-[620px] mx-auto select-none">
      {/* Ambient background blue glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/15 via-blue-900/10 to-indigo-600/10 rounded-3xl blur-2xl -z-10" />

      {/* Main Container / Browser Mockup */}
      <div className="bg-[#12141A] rounded-2xl border border-[#222632] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E2330] bg-[#0E1015]">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#2A3040]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#2A3040]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#2A3040]" />
          </div>

          <div className="flex items-center gap-2 px-3 py-1 bg-[#181B24] border border-[#2A3040] rounded-md text-[11px] text-neutral-300 font-mono tabular-nums">
            <Globe className="w-3 h-3 text-blue-400" />
            <span>northform.studio/preview/growth-system</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500">Preview</span>
          </div>
        </div>

        {/* Studio System Interactive Switcher */}
        <div className="flex border-b border-[#1E2330] bg-[#101218] text-xs">
          <button
            onClick={() => setActiveTab('system')}
            className={`flex-1 py-2.5 px-3 font-medium transition-colors border-b-2 text-center cursor-pointer ${
              activeTab === 'system'
                ? 'border-blue-500 text-white bg-[#141720]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Digital Presence
          </button>
          <button
            onClick={() => setActiveTab('campaign')}
            className={`flex-1 py-2.5 px-3 font-medium transition-colors border-b-2 text-center cursor-pointer ${
              activeTab === 'campaign'
                ? 'border-blue-500 text-white bg-[#141720]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Ad & Video Creative
          </button>
          <button
            onClick={() => setActiveTab('automation')}
            className={`flex-1 py-2.5 px-3 font-medium transition-colors border-b-2 text-center cursor-pointer ${
              activeTab === 'automation'
                ? 'border-blue-500 text-white bg-[#141720]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            AI Lead Workflow
          </button>
        </div>

        {/* Visual Canvas Area */}
        <div className="p-5 min-h-[340px] flex flex-col justify-between bg-gradient-to-b from-[#12141A] to-[#0E1015]">
          {activeTab === 'system' && (
            <div className="space-y-4">
              {/* Web Layout Preview Fragment */}
              <div className="flex items-center justify-between p-3.5 bg-[#181B24] rounded-xl border border-[#262B38]">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400">Architecture</span>
                  <h4 className="text-sm font-semibold text-white mt-0.5">Custom High-Conversion Store & Site</h4>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-neutral-300 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>99+ Performance</span>
                </div>
              </div>

              {/* Grid of wireframe components */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-[#161922] rounded-lg border border-[#252A38] shadow-xs">
                  <div className="h-16 rounded bg-[#202534] mb-2 flex items-center justify-center text-neutral-400">
                    <Layers className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="h-2 w-3/4 bg-[#2A3144] rounded mb-1" />
                  <div className="h-2 w-1/2 bg-[#202534] rounded" />
                </div>
                <div className="p-3 bg-[#161922] rounded-lg border border-[#252A38] shadow-xs">
                  <div className="h-16 rounded bg-[#202534] mb-2 flex items-center justify-center text-neutral-400">
                    <Sliders className="w-5 h-5 text-neutral-300" />
                  </div>
                  <div className="h-2 w-4/5 bg-[#2A3144] rounded mb-1" />
                  <div className="h-2 w-2/3 bg-[#202534] rounded" />
                </div>
                <div className="p-3 bg-[#161922] rounded-lg border border-[#252A38] shadow-xs">
                  <div className="h-16 rounded bg-blue-600 text-white mb-2 flex items-center justify-center font-bold">
                    <span className="text-[10px] font-mono">CTA</span>
                  </div>
                  <div className="h-2 w-2/3 bg-[#2A3144] rounded mb-1" />
                  <div className="h-2 w-1/3 bg-[#202534] rounded" />
                </div>
              </div>

              {/* Connected Outcome Metrics Row */}
              <div className="pt-2 border-t border-[#1E2330] flex items-center justify-between text-xs text-neutral-400">
                <span>Canadian Server Edge</span>
                <span>·</span>
                <span>Zero-Latency Forms</span>
                <span>·</span>
                <span>Mobile First</span>
              </div>
            </div>
          )}

          {activeTab === 'campaign' && (
            <div className="space-y-4">
              <div className="flex gap-4">
                {/* 9:16 Vertical Ad Creative Card */}
                <div className="w-36 h-52 bg-[#090A0D] rounded-xl p-3 flex flex-col justify-between text-white shadow-md relative overflow-hidden shrink-0 border border-[#252A38]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between text-[10px] text-neutral-300">
                    <span className="font-mono text-blue-400">Meta Reel</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[9px] font-mono">9:16</span>
                  </div>
                  <div className="relative z-10 space-y-1">
                    <div className="flex items-center gap-1 text-[10px] text-blue-300">
                      <Sparkles className="w-3 h-3" />
                      <span>AI-Assisted Hook</span>
                    </div>
                    <p className="text-[11px] font-semibold leading-tight text-white">Product Launch Creative #03</p>
                    <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden mt-1">
                      <div className="h-full w-2/3 bg-blue-500" />
                    </div>
                  </div>
                </div>

                {/* Campaign Structure Info */}
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">Ad Variant Testing</span>
                    <h4 className="text-sm font-semibold text-white mt-1">Continuous Creative Iteration</h4>
                    <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                      Testing 4 distinct visual hooks and headline angles against qualified Canadian audiences.
                    </p>
                  </div>

                  <div className="space-y-2 mt-3">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-[#161922] border border-[#252A38] text-xs">
                      <span className="font-medium text-white">Variant A: Problem-First</span>
                      <span className="text-emerald-400 font-mono text-[11px]">Primary Winner</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-[#161922] border border-[#252A38] text-xs">
                      <span className="font-medium text-neutral-300">Variant B: Product Texture</span>
                      <span className="text-neutral-500 font-mono text-[11px]">Secondary Test</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'automation' && (
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400">Response Speed</span>
                  <h4 className="text-sm font-semibold text-white mt-0.5">Instant Lead Follow-Up Pipeline</h4>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 text-xs font-mono border border-blue-500/20">
                  <PhoneCall className="w-3 h-3" />
                  <span>&lt; 60s Call</span>
                </div>
              </div>

              {/* Node Sequence Diagram */}
              <div className="space-y-2 relative">
                <div className="flex items-center gap-3 p-2.5 bg-[#161922] rounded-lg border border-[#252A38] text-xs">
                  <div className="w-6 h-6 rounded-full bg-[#202534] text-white flex items-center justify-center font-mono text-[10px] shrink-0">
                    01
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white">New Inbound Inquiry Captured</p>
                    <p className="text-[11px] text-neutral-400">Form submitted via website or Meta ad</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 bg-[#172033] rounded-lg border border-blue-500/30 text-xs">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-mono text-[10px] font-bold shrink-0">
                    02
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-blue-200">AI Voice Qualification Call</p>
                    <p className="text-[11px] text-neutral-300">Answers questions & checks timing and scope</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 bg-[#161922] rounded-lg border border-[#252A38] text-xs">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-neutral-950 font-bold flex items-center justify-center font-mono text-[10px] shrink-0">
                    03
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white">Appointment Booked to Calendar</p>
                    <p className="text-[11px] text-neutral-400">Direct sync with Google / Outlook & CRM update</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Lower Status Strip */}
          <div className="mt-4 pt-3 border-t border-[#1E2330] flex items-center justify-between text-[11px] text-neutral-400 font-mono">
            <span>STUDIO SYSTEM V2.4</span>
            <span className="flex items-center gap-1 text-blue-400 font-sans">
              Designed for Canadian Businesses <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>

      {/* Floating Accent Badge */}
      <div className="absolute -bottom-4 right-6 bg-[#161924] text-white px-3.5 py-2 rounded-xl border border-[#2A3040] shadow-xl flex items-center gap-2 text-xs">
        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
        <span className="font-medium">Integrated Growth Stack</span>
      </div>
    </div>
  );
};
