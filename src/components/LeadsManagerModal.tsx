import React, { useState, useEffect } from 'react';
import { X, Download, Mail, Phone, Calendar, CheckCircle2, Clock, Trash2, Globe, Search, RefreshCw } from 'lucide-react';
import { leadStorage, LeadItem } from '../services/leadStorage';

interface LeadsManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadsManagerModal: React.FC<LeadsManagerModalProps> = ({ isOpen, onClose }) => {
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLead, setSelectedLead] = useState<LeadItem | null>(null);

  useEffect(() => {
    if (isOpen) {
      setLeads(leadStorage.getLeads());
    }
    const unsubscribe = leadStorage.onLeadsUpdated(() => {
      setLeads(leadStorage.getLeads());
    });
    return unsubscribe;
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStatusChange = (id: string, status: LeadItem['status']) => {
    const updated = leadStorage.updateLeadStatus(id, status);
    setLeads(leadStorage.getLeads());
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead({ ...selectedLead, status });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this lead record?')) {
      leadStorage.deleteLead(id);
      setLeads(leadStorage.getLeads());
      if (selectedLead?.id === id) setSelectedLead(null);
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesFilter = filter === 'all' || lead.status === filter;
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.businessName && lead.businessName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.service.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status: LeadItem['status']) => {
    switch (status) {
      case 'new':
        return <span className="text-blue-400 font-mono text-[11px] font-semibold">● New Lead</span>;
      case 'contacted':
        return <span className="text-sky-300 font-mono text-[11px]">● Contacted</span>;
      case 'call_scheduled':
        return <span className="text-emerald-400 font-mono text-[11px] font-semibold">● Call Scheduled</span>;
      case 'closed':
        return <span className="text-neutral-500 font-mono text-[11px]">● Archived</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#12141A] text-[#F5F6F8] rounded-2xl max-w-4xl w-full border border-[#222632] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 border-b border-[#222632] flex items-center justify-between bg-[#0E1015]">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-medium">
                Private Owner Lead Hub
              </span>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Discovery Call Inquiries ({leads.length})
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => leadStorage.exportCSV()}
              className="px-3 py-1.5 rounded-lg border border-[#2B3040] bg-[#181B24] text-xs font-medium text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close leads modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 border-b border-[#222632] bg-[#141720] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: `All (${leads.length})` },
              { id: 'new', label: `New (${leads.filter((l) => l.status === 'new').length})` },
              { id: 'contacted', label: 'Contacted' },
              { id: 'call_scheduled', label: 'Scheduled' },
              { id: 'closed', label: 'Archived' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  filter === tab.id
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-[#1C202B]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 rounded-lg bg-[#0E1015] border border-[#2B3040] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 w-full sm:w-56"
            />
          </div>
        </div>

        {/* Leads Table & Detail View Split */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#222632]">
          {/* List column */}
          <div className={`lg:col-span-6 overflow-y-auto divide-y divide-[#1D212B] ${selectedLead ? 'hidden sm:block' : ''}`}>
            {filteredLeads.length === 0 ? (
              <div className="p-8 text-center text-neutral-500 text-xs">
                No inquiries match your current filter.
              </div>
            ) : (
              filteredLeads.map((lead) => {
                const isSelected = selectedLead?.id === lead.id;
                return (
                  <div
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className={`p-4 transition-colors cursor-pointer text-left ${
                      isSelected ? 'bg-[#1C202D] border-l-2 border-blue-500' : 'hover:bg-[#161822]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <h4 className="font-semibold text-sm text-white">{lead.name}</h4>
                        {lead.businessName && (
                          <p className="text-xs text-neutral-400">{lead.businessName}</p>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        {getStatusBadge(lead.status)}
                        <span className="block text-[10px] text-neutral-500 font-mono mt-0.5">
                          {new Date(lead.createdAt).toLocaleDateString('en-CA', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-neutral-400 mt-2 font-mono">
                      <span className="text-blue-300">{lead.service}</span>
                      <span>{lead.budget || 'Custom Scope'}</span>
                    </div>

                    <p className="text-xs text-neutral-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {lead.notes}
                    </p>
                  </div>
                );
              })
            )}
          </div>

          {/* Details column */}
          <div className="lg:col-span-6 p-6 overflow-y-auto bg-[#0E1015]">
            {selectedLead ? (
              <div className="space-y-6">
                <div className="flex items-start justify-between pb-4 border-b border-[#222632]">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 block">
                      Lead Details · ID {selectedLead.id}
                    </span>
                    <h4 className="text-xl font-bold text-white mt-0.5">{selectedLead.name}</h4>
                    {selectedLead.businessName && (
                      <p className="text-sm text-neutral-400">{selectedLead.businessName}</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleDelete(selectedLead.id)}
                    className="p-1.5 text-neutral-500 hover:text-red-400 transition-colors"
                    title="Delete lead record"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Status Switcher */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-neutral-400 uppercase">Lead Status</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {(['new', 'contacted', 'call_scheduled', 'closed'] as const).map((st) => (
                      <button
                        key={st}
                        onClick={() => handleStatusChange(selectedLead.id, st)}
                        className={`py-1.5 px-2 rounded-lg text-xs font-mono transition-colors capitalize ${
                          selectedLead.status === st
                            ? 'bg-blue-600 text-white font-bold'
                            : 'bg-[#181B24] text-neutral-400 border border-[#262B38] hover:text-white'
                        }`}
                      >
                        {st.replace('_', ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-3 p-4 rounded-xl bg-[#14161F] border border-[#222632] text-xs">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <a
                      href={`mailto:${selectedLead.email}`}
                      className="text-white hover:underline truncate"
                    >
                      {selectedLead.email}
                    </a>
                  </div>

                  {selectedLead.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                      <a href={`tel:${selectedLead.phone}`} className="text-white hover:underline">
                        {selectedLead.phone}
                      </a>
                    </div>
                  )}

                  {selectedLead.website && (
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                      <a
                        href={selectedLead.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-300 hover:text-white truncate"
                      >
                        {selectedLead.website}
                      </a>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-neutral-400">
                    <Clock className="w-4 h-4 text-neutral-500 shrink-0" />
                    <span>
                      Received: {new Date(selectedLead.createdAt).toLocaleString('en-CA')}
                    </span>
                  </div>
                </div>

                {/* Scope & Budget Details */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#14161F] border border-[#222632]">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">Requested Service</span>
                    <p className="font-semibold text-white mt-1">{selectedLead.service}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#14161F] border border-[#222632]">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">Estimated Budget</span>
                    <p className="font-semibold text-blue-400 mt-1 font-mono">{selectedLead.budget || 'Scope Required'}</p>
                  </div>
                </div>

                {/* Project Brief / Notes */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-neutral-400 uppercase">
                    Project Requirements / Notes
                  </label>
                  <div className="p-4 rounded-xl bg-[#14161F] border border-[#222632] text-xs text-neutral-300 leading-relaxed whitespace-pre-wrap">
                    {selectedLead.notes}
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <a
                    href={`mailto:${selectedLead.email}?subject=Northform Digital Studio — Discovery Call Follow-up`}
                    className="flex-1 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs text-center hover:bg-blue-500 transition-colors shadow-sm"
                  >
                    Reply via Email
                  </a>
                  {selectedLead.phone && (
                    <a
                      href={`tel:${selectedLead.phone}`}
                      className="px-4 py-2.5 rounded-xl bg-[#1D212D] text-white border border-[#2E3344] font-medium text-xs text-center hover:bg-neutral-800 transition-colors"
                    >
                      Call Lead
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center text-neutral-500 text-xs p-6">
                <Clock className="w-8 h-8 text-neutral-600 mb-2" />
                <p className="font-medium text-neutral-300">Select an inquiry to view details</p>
                <p className="mt-1 max-w-xs">
                  All discovery call requests submitted through the website appear here automatically in real time.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer Note */}
        <div className="p-4 border-t border-[#222632] bg-[#0E1015] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-400 font-mono">
          <span>Storage: Browser Local Data (Persistent)</span>
          <span className="text-neutral-500">Every submission saves directly to your device storage</span>
        </div>
      </div>
    </div>
  );
};
