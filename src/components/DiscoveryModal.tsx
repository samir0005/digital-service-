import React, { useState } from 'react';
import { X, ArrowUpRight, CheckCircle2, Clock, Calendar } from 'lucide-react';
import { leadStorage } from '../services/leadStorage';

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceContext?: string;
}

export const DiscoveryModal: React.FC<DiscoveryModalProps> = ({
  isOpen,
  onClose,
  serviceContext
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    service: serviceContext || 'Website Design',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please provide your name and email address');
      return;
    }

    // Persistently save lead
    leadStorage.saveLead({
      name: formData.name,
      businessName: formData.businessName,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      notes: formData.notes,
      source: 'discovery_modal'
    });

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#12141A] text-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#222632] shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mx-auto border border-blue-500/30">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Discovery Request Logged</h3>
            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm mx-auto">
              Thanks {formData.name}. We will review your requirements for{' '}
              <strong className="text-blue-400">{formData.service}</strong> and email you booking options within 24 hours.
            </p>
            <div className="pt-2 flex justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-blue-400 uppercase font-medium">
                DISCOVERY CALL
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Book a 25-Minute Discovery Call
              </h3>
              <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                Direct consultation to discuss your Canadian business goals, review timeline, and scope exact deliverables.
              </p>
            </div>

            {error && <p className="text-xs text-red-400 bg-red-950/30 border border-red-800 p-2.5 rounded-lg">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Your Full Name <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#262B38] text-sm text-white bg-[#0E1015] focus:bg-[#141720] focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Work Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.ca"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#262B38] text-sm text-white bg-[#0E1015] focus:bg-[#141720] focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="(604) 555-0143"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#262B38] text-sm text-white bg-[#0E1015] focus:bg-[#141720] focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Business Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. West Coast Design Studio"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#262B38] text-sm text-white bg-[#0E1015] focus:bg-[#141720] focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Focus Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#262B38] text-sm text-white bg-[#0E1015] focus:bg-[#141720] focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                >
                  <option value="Website Design" className="bg-[#0E1015]">Website Design (From C$1,200)</option>
                  <option value="Shopify E-commerce" className="bg-[#0E1015]">Shopify E-commerce (From C$1,700)</option>
                  <option value="Video Editing" className="bg-[#0E1015]">Video Editing (From C$450/mo)</option>
                  <option value="AI Video Production" className="bg-[#0E1015]">AI Video Production (From C$300)</option>
                  <option value="Meta Advertising" className="bg-[#0E1015]">Meta Advertising (From C$600/mo)</option>
                  <option value="SEO" className="bg-[#0E1015]">SEO Strategy (From C$600/mo)</option>
                  <option value="AI Voice Systems" className="bg-[#0E1015]">AI Voice Systems (From C$1,800 setup)</option>
                  <option value="Full Digital System" className="bg-[#0E1015]">Connected Digital Growth System</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Notes or Primary Objective
                </label>
                <textarea
                  rows={2}
                  placeholder="What is the key problem you want to solve?"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#262B38] text-sm text-white bg-[#0E1015] focus:bg-[#141720] focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                >
                  <span>Request Discovery Slot</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-3 text-[11px] text-neutral-400 font-mono pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-blue-400" /> 25 min call
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-blue-400" /> Google Meet / Phone
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
