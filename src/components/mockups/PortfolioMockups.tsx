import React from 'react';
import { ShoppingBag, ArrowUpRight, Check, MapPin, Play, Building, PhoneCall } from 'lucide-react';
import { PortfolioItem } from '../../types';

export const PortfolioMockupVisual: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  switch (item.visualType) {
    case 'ecommerce':
      return (
        <div className="h-64 sm:h-72 w-full bg-[#141720] p-4 flex flex-col justify-between border-b border-[#222632] relative overflow-hidden group-hover:bg-[#181B26] transition-colors">
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
            <span className="flex items-center gap-1.5 text-neutral-200">
              <ShoppingBag className="w-3.5 h-3.5 text-blue-400" />
              <span>NORTH & CO. STORE</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-[#1C202C] text-blue-300 text-[10px] border border-[#2B3040]">
              Shopify OS 2.0
            </span>
          </div>

          {/* Product Showcase preview */}
          <div className="my-auto grid grid-cols-2 gap-3 items-center">
            <div className="p-3 bg-[#0E1015] rounded-xl border border-[#262B38] shadow-xs">
              <div className="h-24 bg-[#181B24] rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="w-12 h-16 bg-[#2B3042] rounded-t-full shadow-inner" />
                <span className="absolute bottom-1 right-2 text-[9px] font-mono text-blue-400">C$48</span>
              </div>
              <p className="text-[11px] font-semibold text-white mt-2 truncate">Raw Stoneware Vessel</p>
              <p className="text-[10px] text-neutral-400">Crafted in British Columbia</p>
            </div>

            <div className="p-3 bg-[#0E1015] rounded-xl border border-[#262B38] shadow-xs">
              <div className="h-24 bg-[#181B24] rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="w-14 h-14 bg-[#2B3042] rounded-full shadow-inner" />
                <span className="absolute bottom-1 right-2 text-[9px] font-mono text-blue-400">C$62</span>
              </div>
              <p className="text-[11px] font-semibold text-white mt-2 truncate">Cedar Charcoal Diffuser</p>
              <p className="text-[10px] text-neutral-400">Natural Botanical Extract</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-neutral-400 border-t border-[#222632] pt-2">
            <span>Checkout Conversion Optimized</span>
            <span className="font-mono text-blue-400">0.8s LCP</span>
          </div>
        </div>
      );

    case 'real-estate':
      return (
        <div className="h-64 sm:h-72 w-full bg-[#101217] text-white p-5 flex flex-col justify-between border-b border-[#222632] relative overflow-hidden group-hover:bg-[#141720] transition-colors">
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
            <span className="flex items-center gap-1.5 text-neutral-200">
              <Building className="w-3.5 h-3.5 text-blue-400" />
              <span>THE LAURENTIAN RESIDENCES</span>
            </span>
            <span className="flex items-center gap-1 text-[10px] text-neutral-400">
              <MapPin className="w-3 h-3 text-blue-400" /> Mont-Tremblant, QC
            </span>
          </div>

          <div className="my-auto p-4 bg-[#181B24] rounded-xl border border-[#282E3E] backdrop-blur-sm">
            <span className="text-[10px] font-mono uppercase text-blue-400 font-medium">Estate Collection</span>
            <h5 className="text-base font-medium tracking-tight text-white mt-0.5">Pavilion Villa 04</h5>
            <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-[#242A38] text-center font-mono">
              <div>
                <p className="text-[10px] text-neutral-400">AREA</p>
                <p className="text-xs font-semibold text-neutral-200">4,200 SQ FT</p>
              </div>
              <div>
                <p className="text-[10px] text-neutral-400">SUITES</p>
                <p className="text-xs font-semibold text-neutral-200">4 BED · 5 BATH</p>
              </div>
              <div>
                <p className="text-[10px] text-neutral-400">COMPLETION</p>
                <p className="text-xs font-semibold text-neutral-200">Q4 2026</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-neutral-400">
            <span>Private Showing Inquiry Funnel</span>
            <span className="flex items-center gap-1 text-blue-400 text-xs font-medium">
              View Blueprint <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      );

    case 'video-still':
      return (
        <div className="h-64 sm:h-72 w-full bg-gradient-to-br from-[#12141A] via-[#090A0D] to-[#12192A] text-white p-5 flex flex-col justify-between border-b border-[#222632] relative overflow-hidden">
          <div className="flex items-center justify-between text-xs">
            <span className="px-2 py-0.5 rounded bg-blue-500/15 text-blue-400 font-mono text-[10px] border border-blue-500/25 font-medium">
              AI-Assisted Production
            </span>
            <span className="font-mono text-[11px] text-neutral-400">4K 60FPS · 9:16</span>
          </div>

          <div className="my-auto text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-blue-400">
              <Play className="w-4 h-4 fill-blue-400 ml-0.5" />
            </div>
            <p className="text-xs font-medium text-neutral-200 max-w-xs mx-auto leading-relaxed">
              Batch of 8 short-form paid social creatives testing hook retention.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono">
              <span>Scene 03 / Commercial Ad Hook</span>
              <span>0:15 Cut</span>
            </div>
            <div className="h-1 bg-[#202534] rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-2/3" />
            </div>
          </div>
        </div>
      );

    case 'corporate':
      return (
        <div className="h-64 sm:h-72 w-full bg-[#12141A] p-5 flex flex-col justify-between border-b border-[#222632]">
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
            <span className="text-blue-400">LOCAL AD ACQUISITION</span>
            <span className="text-emerald-400 font-medium">Meta Verified CAPI</span>
          </div>

          <div className="my-auto space-y-2">
            <div className="p-3 bg-[#181B24] rounded-xl border border-[#282E3E] shadow-xs flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white">Custom Home Contractor Funnel</p>
                <p className="text-[11px] text-neutral-400">Calgary & Edmonton Market</p>
              </div>
              <div className="px-2 py-1 rounded bg-[#1E283C] text-blue-300 font-mono text-xs">
                Active Funnel
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-[#181B24] border border-[#282E3E]">
                <span className="text-[10px] text-neutral-400 font-mono">QUALIFIED LEADS</span>
                <p className="text-sm font-semibold text-white mt-0.5">High Intent</p>
              </div>
              <div className="p-2.5 rounded-lg bg-[#181B24] border border-[#282E3E]">
                <span className="text-[10px] text-neutral-400 font-mono">ROAS STABILITY</span>
                <p className="text-sm font-semibold text-white mt-0.5">Optimized</p>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-neutral-400 flex items-center justify-between">
            <span>Integrated CRM Webhook</span>
            <span className="text-blue-400 font-mono">Direct to Phone</span>
          </div>
        </div>
      );

    case 'automation':
      return (
        <div className="h-64 sm:h-72 w-full bg-[#101217] text-white p-5 flex flex-col justify-between border-b border-[#222632]">
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
            <span className="flex items-center gap-1.5 text-blue-400">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>VOICE AI PIPELINE</span>
            </span>
            <span className="text-emerald-400 font-mono text-[10px]">Real-time</span>
          </div>

          <div className="my-auto space-y-2 p-3 bg-[#0E1015] rounded-xl border border-[#242938] font-mono text-xs">
            <div className="flex items-start gap-2 text-neutral-400">
              <span className="text-blue-400 shrink-0">Agent:</span>
              <p className="text-neutral-300">"Hi Jordan, calling from Northview Advisory regarding your pre-approval inquiry."</p>
            </div>
            <div className="flex items-start gap-2 text-neutral-400">
              <span className="text-emerald-400 shrink-0">Lead:</span>
              <p className="text-neutral-300">"Yes, looking to purchase in Ontario within the next 60 days."</p>
            </div>
            <div className="pt-2 border-t border-[#1F2432] flex items-center justify-between text-[11px] text-neutral-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <Check className="w-3 h-3" /> Criteria Met
              </span>
              <span>Routing to Calendar</span>
            </div>
          </div>

          <div className="text-[11px] text-neutral-400 flex items-center justify-between">
            <span>HubSpot & Cal.com Synced</span>
            <span className="font-mono text-blue-400">0s Manual Entry</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="h-64 sm:h-72 w-full bg-[#12141A] p-5 flex items-center justify-center border-b border-[#222632]">
          <div className="text-center">
            <p className="text-xs font-mono uppercase tracking-wider text-blue-400">Creative Production</p>
            <p className="text-sm font-semibold text-white mt-1">{item.title}</p>
          </div>
        </div>
      );
  }
};
