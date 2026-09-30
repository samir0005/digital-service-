import React from 'react';
import { ArrowRight, UserPlus, PhoneIncoming, FileCheck, Database, CalendarCheck } from 'lucide-react';

export const AiWorkflowDiagram: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'NEW LEAD',
      subtitle: 'Form / Ad Submit',
      icon: UserPlus,
      time: 'Instant'
    },
    {
      num: '02',
      title: 'AI CALL',
      subtitle: 'Direct Voice Callback',
      icon: PhoneIncoming,
      time: '< 45s'
    },
    {
      num: '03',
      title: 'QUALIFICATION',
      subtitle: 'Budget & Timeline',
      icon: FileCheck,
      time: '2–3 min'
    },
    {
      num: '04',
      title: 'CRM SYNC',
      subtitle: 'Data Pipeline',
      icon: Database,
      time: 'Realtime'
    },
    {
      num: '05',
      title: 'APPOINTMENT',
      subtitle: 'Calendar Booked',
      icon: CalendarCheck,
      time: 'Confirmed'
    }
  ];

  return (
    <div className="bg-[#12141A] rounded-2xl p-6 border border-[#222632] shadow-xl text-white">
      <div className="flex items-center justify-between mb-5">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-medium">
            System Workflow
          </span>
          <h4 className="text-sm font-semibold text-white mt-0.5">
            Automated Inbound Lead Qualification Pipeline
          </h4>
        </div>
        <span className="text-xs text-neutral-400 font-mono">Response Time: &lt; 60 seconds</span>
      </div>

      {/* Horizontal Steps */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="relative group">
              <div className="p-3.5 rounded-xl border border-[#262B38] bg-[#0E1015] group-hover:border-blue-500/50 transition-all flex flex-col justify-between h-full">
                <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono mb-2">
                  <span>{step.num}</span>
                  <span className="text-blue-400 font-medium">{step.time}</span>
                </div>

                <div className="my-2 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#181B24] border border-[#2A3040] text-blue-400 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">{step.title}</p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">{step.subtitle}</p>
                  </div>
                </div>

                <div className="h-0.5 w-full bg-[#1F2432] rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-blue-500 w-full" />
                </div>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10 text-neutral-600">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-[#1E2330] flex flex-wrap items-center justify-between text-xs text-neutral-400 gap-2">
        <p className="text-neutral-300">
          Syncs with HubSpot, GoHighLevel, Salesforce, Google Calendar, Calendly, and custom webhooks.
        </p>
        <span className="font-mono text-[11px] text-neutral-500">Telephony & carrier minutes billed separately</span>
      </div>
    </div>
  );
};
