import React, { useState, useEffect } from 'react';
import {
  Download,
  Mail,
  Phone,
  Calendar,
  CheckCircle2,
  Clock,
  Trash2,
  Globe,
  Search,
  Lock,
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Plus
} from 'lucide-react';
import { leadStorage, LeadItem } from '../services/leadStorage';

interface AdminPortalProps {
  onBackToSite: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ onBackToSite }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('nf_admin_auth') === 'admin2026';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState(false);

  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLead, setSelectedLead] = useState<LeadItem | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      setLeads(leadStorage.getLeads());
      const unsubscribe = leadStorage.onLeadsUpdated(() => {
        setLeads(leadStorage.getLeads());
      });
      return unsubscribe;
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === 'admin2026') {
      sessionStorage.setItem('nf_admin_auth', 'admin2026');
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('nf_admin_auth');
    setIsAuthenticated(false);
    setPasscode('');
  };

  const handleStatusChange = (id: string, status: LeadItem['status']) => {
    leadStorage.updateLeadStatus(id, status);
    setLeads(leadStorage.getLeads());
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead({ ...selectedLead, status });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this inquiry record?')) {
      leadStorage.deleteLead(id);
      setLeads(leadStorage.getLeads());
      if (selectedLead?.id === id) setSelectedLead(null);
    }
  };

  const handleAddSampleLead = () => {
    const sample = leadStorage.saveLead({
      name: 'Michael Chen',
      businessName: 'Apex Mountain Goods',
      email: 'm.chen@apexmountain.ca',
      phone: '(403) 555-0189',
      website: 'https://apexmountain.ca',
      service: 'Shopify E-commerce',
      budget: 'C$3,000–5,000',
      notes: 'Need a complete rebuild of our Canadian outdoor equipment store before winter. Looking for fast checkout and mobile optimization.',
      source: 'discovery_modal'
    });
    setLeads(leadStorage.getLeads());
    setSelectedLead(sample);
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
        return <span className="text-blue-400 font-mono text-[11px] font-semibold">● New</span>;
      case 'contacted':
        return <span className="text-sky-300 font-mono text-[11px]">● Contacted</span>;
      case 'call_scheduled':
        return <span className="text-emerald-400 font-mono text-[11px] font-semibold">● Scheduled</span>;
      case 'closed':
        return <span className="text-neutral-500 font-mono text-[11px]">● Archived</span>;
    }
  };

  // Password Lock Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#090A0D] text-[#F5F6F8] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
        {/* Subtle radial ambient blue light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-md bg-[#12141A] rounded-2xl border border-[#222632] p-8 shadow-2xl relative z-10 space-y-6 text-center">
          <div className="w-12 h-12 bg-blue-600/15 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto text-blue-400">
            <Lock className="w-5 h-5" />
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-medium">
              Private Backend Access
            </span>
            <h1 className="text-2xl font-bold text-white mt-1">Owner Verification</h1>
            <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
              Enter your Studio Passcode to access your discovery call inquiries.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                Admin Passcode
              </label>
              <input
                type="password"
                required
                autoFocus
                placeholder="Enter passcode (admin2026)"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setAuthError(false);
                }}
                className="w-full px-3.5 py-3 rounded-xl border border-[#2B3040] bg-[#090A0D] text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              {authError && (
                <p className="text-xs text-red-400 mt-1.5">Invalid passcode. Please try again.</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors cursor-pointer shadow-md shadow-blue-900/30"
            >
              Unlock Leads Dashboard
            </button>
          </form>

          <div className="pt-2 border-t border-[#1E2330] flex items-center justify-between text-xs text-neutral-500 font-mono">
            <button
              onClick={onBackToSite}
              className="hover:text-neutral-300 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Website</span>
            </button>
            <span>Northform Studio</span>
          </div>
        </div>
      </div>
    );
  }

  // Fullscreen Authenticated Backend Admin Dashboard
  return (
    <div className="min-h-screen bg-[#090A0D] text-[#F5F6F8] flex flex-col">
      {/* Top Navbar */}
      <header className="border-b border-[#1E2330] bg-[#0E1015] sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToSite}
              className="p-2 rounded-lg bg-[#141720] border border-[#242A38] text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors cursor-pointer"
              title="Return to website"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-medium">
                  Studio Private Backend · Vercel Ready
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Discovery Call Leads Hub
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleAddSampleLead}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#262B38] bg-[#141720] text-xs font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer"
              title="Generate a sample lead to test"
            >
              <Plus className="w-3.5 h-3.5 text-blue-400" />
              <span>Add Test Lead</span>
            </button>

            <button
              onClick={() => leadStorage.exportCSV()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-lg border border-[#262B38] bg-[#141720] text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Lock
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full space-y-4 flex flex-col">
        {/* Search & Filter Toolbar */}
        <div className="bg-[#12141A] rounded-xl border border-[#222632] p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
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
                    : 'text-neutral-400 hover:text-white hover:bg-[#1A1D27]'
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
              placeholder="Search by client, email, service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-2 rounded-lg bg-[#090A0D] border border-[#2B3040] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 w-full sm:w-64"
            />
          </div>
        </div>

        {/* Master-Detail Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 items-start">
          {/* Left Column: Leads List */}
          <div className="lg:col-span-5 bg-[#12141A] rounded-2xl border border-[#222632] overflow-hidden divide-y divide-[#1D212B] max-h-[75vh] overflow-y-auto">
            {filteredLeads.length === 0 ? (
              <div className="p-12 text-center text-neutral-500 text-xs space-y-2">
                <Clock className="w-8 h-8 text-neutral-600 mx-auto" />
                <p className="font-semibold text-neutral-400">No discovery inquiries found</p>
                <p>New inquiries submitted from your live website will appear here instantly.</p>
              </div>
            ) : (
              filteredLeads.map((lead) => {
                const isSelected = selectedLead?.id === lead.id;
                return (
                  <div
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className={`p-4 transition-colors cursor-pointer text-left ${
                      isSelected
                        ? 'bg-[#181D29] border-l-3 border-blue-500'
                        : 'hover:bg-[#141720]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <h4 className="font-semibold text-sm text-white">{lead.name}</h4>
                        <p className="text-xs text-neutral-400 truncate max-w-[200px]">
                          {lead.businessName || 'Independent'}
                        </p>
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

          {/* Right Column: Lead Detail Card */}
          <div className="lg:col-span-7 bg-[#12141A] rounded-2xl border border-[#222632] p-6 lg:p-8 space-y-6">
            {selectedLead ? (
              <div className="space-y-6">
                <div className="flex items-start justify-between pb-4 border-b border-[#222632]">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 block">
                      Lead Dossier · ID {selectedLead.id}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-0.5">{selectedLead.name}</h3>
                    {selectedLead.businessName && (
                      <p className="text-sm text-neutral-400">{selectedLead.businessName}</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleDelete(selectedLead.id)}
                    className="p-2 text-neutral-500 hover:text-red-400 transition-colors rounded-lg hover:bg-neutral-800"
                    title="Delete lead record"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Status Selector */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-neutral-400 uppercase">
                    Update Pipeline Status
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(['new', 'contacted', 'call_scheduled', 'closed'] as const).map((st) => (
                      <button
                        key={st}
                        onClick={() => handleStatusChange(selectedLead.id, st)}
                        className={`py-2 px-3 rounded-lg text-xs font-mono transition-colors capitalize ${
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

                {/* Direct Contact Information Box */}
                <div className="p-4 rounded-xl bg-[#0E1015] border border-[#222632] space-y-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <a
                      href={`mailto:${selectedLead.email}?subject=Northform Studio Discovery Call`}
                      className="text-white hover:underline truncate font-medium"
                    >
                      {selectedLead.email}
                    </a>
                  </div>

                  {selectedLead.phone && (
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                      <a href={`tel:${selectedLead.phone}`} className="text-white hover:underline">
                        {selectedLead.phone}
                      </a>
                    </div>
                  )}

                  {selectedLead.website && (
                    <div className="flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                      <a
                        href={selectedLead.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-300 hover:text-white truncate flex items-center gap-1"
                      >
                        <span>{selectedLead.website}</span>
                        <ExternalLink className="w-3 h-3 text-neutral-500" />
                      </a>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-neutral-500 pt-1 font-mono text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Inquiry logged on {new Date(selectedLead.createdAt).toLocaleString()}</span>
                  </div>
                </div>

                {/* Requested Scope & Budget */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-4 rounded-xl bg-[#0E1015] border border-[#222632]">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                      Target Service
                    </span>
                    <p className="font-semibold text-white mt-1 text-sm">{selectedLead.service}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0E1015] border border-[#222632]">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                      Stated Budget (CAD)
                    </span>
                    <p className="font-bold text-blue-400 mt-1 font-mono text-sm">
                      {selectedLead.budget || 'Custom Scope'}
                    </p>
                  </div>
                </div>

                {/* Project Brief */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-neutral-400 uppercase">
                    Client's Project Requirements & Notes
                  </label>
                  <div className="p-4 rounded-xl bg-[#0E1015] border border-[#222632] text-xs text-neutral-300 leading-relaxed whitespace-pre-wrap font-sans">
                    {selectedLead.notes || 'No extra notes entered.'}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`mailto:${selectedLead.email}?subject=Northform Digital Studio — Discovery Call Follow-up`}
                    className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs text-center hover:bg-blue-500 transition-colors shadow-md shadow-blue-900/30 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Discovery Response Email</span>
                  </a>

                  {selectedLead.phone && (
                    <a
                      href={`tel:${selectedLead.phone}`}
                      className="px-6 py-3 rounded-xl bg-[#181B24] text-white border border-[#262B38] font-semibold text-xs text-center hover:bg-[#202534] transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-blue-400" />
                      <span>Call Client</span>
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="py-24 text-center space-y-3">
                <Clock className="w-10 h-10 text-neutral-600 mx-auto" />
                <h4 className="text-base font-semibold text-neutral-200">Select an inquiry to view details</h4>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                  Click on any client record from the list on the left to review their brief, update their status, or reply directly.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
