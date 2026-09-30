export interface LeadItem {
  id: string;
  name: string;
  businessName?: string;
  email: string;
  phone?: string;
  website?: string;
  service: string;
  budget?: string;
  notes: string;
  source: 'contact_form' | 'discovery_modal';
  createdAt: string;
  status: 'new' | 'contacted' | 'call_scheduled' | 'closed';
}

const STORAGE_KEY = 'northform_discovery_leads';
const LEADS_UPDATED_EVENT = 'northform_leads_updated';

// Initial Canadian realistic leads for immediate demo & testing
const initialLeads: LeadItem[] = [
  {
    id: 'lead-101',
    name: 'David Tremblay',
    businessName: 'Laurentian Craft Distillers',
    email: 'david@laurentiancraft.ca',
    phone: '(514) 555-0182',
    website: 'https://laurentiancraft.ca',
    service: 'Shopify E-commerce',
    budget: 'C$2,000–3,000',
    notes: 'Looking to rebuild our direct-to-consumer store ahead of Q4. Need bilingual support and clean mobile checkout.',
    source: 'contact_form',
    createdAt: '2026-09-29T14:20:00Z',
    status: 'new'
  },
  {
    id: 'lead-102',
    name: 'Sarah MacLeod',
    businessName: 'Pacific Coast Architecture',
    email: 'sarah.m@pacificcoastarch.com',
    phone: '(604) 555-0149',
    service: 'Website Design',
    budget: 'C$3,000–5,000',
    notes: 'Need a minimalist portfolio website to showcase high-end residential timber projects in Whistler and North Vancouver.',
    source: 'discovery_modal',
    createdAt: '2026-09-30T09:15:00Z',
    status: 'call_scheduled'
  },
  {
    id: 'lead-103',
    name: 'Karanvir Bains',
    businessName: 'Apex Advisory Mortgages',
    email: 'kbains@apexmortgages.ca',
    phone: '(416) 555-0193',
    website: 'https://apexmortgages.ca',
    service: 'AI Voice System',
    budget: 'C$2,000–3,000',
    notes: 'Interested in the automated < 60s voice qualification call pipeline for incoming Google & Meta ad leads.',
    source: 'contact_form',
    createdAt: '2026-09-30T11:45:00Z',
    status: 'contacted'
  }
];

export const leadStorage = {
  getLeads(): LeadItem[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialLeads));
        return initialLeads;
      }
      return JSON.parse(stored);
    } catch {
      return initialLeads;
    }
  },

  saveLead(lead: Omit<LeadItem, 'id' | 'createdAt' | 'status'>): LeadItem {
    const leads = this.getLeads();
    const newLead: LeadItem = {
      ...lead,
      id: `lead-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'new'
    };

    const updated = [newLead, ...leads];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save lead in localStorage', e);
    }

    // Also send to backend API asynchronously for server-side persistence
    try {
      fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLead)
      }).catch((err) => console.log('Backend sync offline/fallback active', err));
    } catch {
      // client-side only fallback
    }

    // Notify listeners across app
    window.dispatchEvent(new CustomEvent(LEADS_UPDATED_EVENT, { detail: newLead }));
    return newLead;
  },

  updateLeadStatus(id: string, status: LeadItem['status']) {
    const leads = this.getLeads();
    const updated = leads.map((l) => (l.id === id ? { ...l, status } : l));
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent(LEADS_UPDATED_EVENT));
    } catch (e) {
      console.error('Failed to update lead status', e);
    }
    return updated;
  },

  deleteLead(id: string) {
    const leads = this.getLeads();
    const updated = leads.filter((l) => l.id !== id);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent(LEADS_UPDATED_EVENT));
    } catch (e) {
      console.error('Failed to delete lead', e);
    }
    return updated;
  },

  exportCSV() {
    const leads = this.getLeads();
    const headers = ['ID', 'Date', 'Name', 'Business', 'Email', 'Phone', 'Service', 'Budget', 'Status', 'Notes'];
    const rows = leads.map((l) => [
      l.id,
      new Date(l.createdAt).toLocaleDateString(),
      `"${l.name.replace(/"/g, '""')}"`,
      `"${(l.businessName || '').replace(/"/g, '""')}"`,
      l.email,
      l.phone || '',
      `"${l.service}"`,
      `"${l.budget || ''}"`,
      l.status,
      `"${(l.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `northform-discovery-leads-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  onLeadsUpdated(callback: () => void) {
    window.addEventListener(LEADS_UPDATED_EVENT, callback);
    return () => window.removeEventListener(LEADS_UPDATED_EVENT, callback);
  }
};
