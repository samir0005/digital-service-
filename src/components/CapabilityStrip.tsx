import React from 'react';

const capabilities = [
  'Websites',
  'Shopify',
  'Meta Ads',
  'Video Creative',
  'AI Video',
  'SEO',
  'AI Voice Systems'
];

export const CapabilityStrip: React.FC<{ onSelectCapability?: (name: string) => void }> = ({
  onSelectCapability
}) => {
  return (
    <div className="border-y border-[#1E2330] bg-[#0E1015] py-4 overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 sm:gap-10 min-w-max text-xs sm:text-sm">
          <span className="font-mono text-[11px] uppercase tracking-widest text-blue-400 font-semibold shrink-0">
            WHAT WE BUILD
          </span>

          <div className="h-3 w-px bg-[#262B38] shrink-0" />

          <div className="flex items-center gap-6 sm:gap-8 font-medium text-neutral-300">
            {capabilities.map((cap, i) => (
              <React.Fragment key={cap}>
                <button
                  onClick={() => onSelectCapability?.(cap)}
                  className="hover:text-blue-400 transition-colors whitespace-nowrap cursor-pointer"
                >
                  {cap}
                </button>
                {i < capabilities.length - 1 && (
                  <span className="text-neutral-700 shrink-0" aria-hidden="true">
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
