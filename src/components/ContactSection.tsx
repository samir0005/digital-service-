import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Clock } from 'lucide-react';
import { leadStorage } from '../services/leadStorage';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    serviceNeeded: initialService || 'Website Design',
    budget: 'C$2,000–3,000',
    projectDescription: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const services = [
    'Website Design',
    'Shopify',
    'Video Editing',
    'AI Video Production',
    'Meta Ads',
    'SEO',
    'AI Voice System',
    'Multiple Services',
    'Not Sure Yet'
  ];

  const budgetOptions = [
    'Under C$1,000',
    'C$1,000–2,000',
    'C$2,000–3,000',
    'C$3,000–5,000',
    'C$5,000+',
    'Not Sure Yet'
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.projectDescription.trim()) {
      errs.projectDescription = 'Please briefly describe your project';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Save lead persistently to backend server storage
      leadStorage.saveLead({
        name: formData.name,
        businessName: formData.businessName,
        email: formData.email,
        phone: formData.phone,
        website: formData.website,
        service: formData.serviceNeeded,
        budget: formData.budget,
        notes: formData.projectDescription,
        source: 'contact_form'
      });

      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#090A0D] border-t border-[#1C202B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-medium">
            PROJECT DISCOVERY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Let’s talk about the project.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Whether you need a new website, better advertising creative, an e-commerce store, SEO support, or an AI-powered lead system, tell us what you’re working on.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & What Happens Next */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#12141A] rounded-2xl p-6 sm:p-8 border border-[#222632] shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white">
                What happens after you reach out
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-white block">Initial Review (24 Hours)</strong>
                    <span className="text-neutral-400">We review your website, offer, and objectives to confirm fit.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-white block">Discovery Call (25 Minutes)</strong>
                    <span className="text-neutral-400">Direct conversation focused on requirements, timelines, and options.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-white block">Clear Quotation & Scope</strong>
                    <span className="text-neutral-400">Fixed-price proposal in CAD with exact deliverables before any work starts.</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#1E2330] space-y-3 text-xs text-neutral-400 font-mono">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-neutral-300">direct@northform.digital</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Mon – Fri · Eastern & Pacific Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Serving businesses across Canada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#12141A] rounded-2xl p-6 sm:p-10 border border-[#222632] shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mx-auto border border-blue-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Project enquiry received.
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your discovery inquiry has been securely sent. We will review your project details and follow up via email within 24 hours.
                  </p>
                  <div className="pt-4 flex items-center justify-center">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          businessName: '',
                          email: '',
                          phone: '',
                          website: '',
                          serviceNeeded: 'Website Design',
                          budget: 'C$2,000–3,000',
                          projectDescription: ''
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl border border-[#2B3040] bg-[#181B24] text-xs font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-white bg-[#0E1015] focus:bg-[#12141A] focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all ${
                          errors.name ? 'border-red-400 bg-red-950/20' : 'border-[#262B38]'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Business Name
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Cascade Living Co."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#262B38] text-sm text-white bg-[#0E1015] focus:bg-[#12141A] focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Email Address <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@cascadeliving.ca"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-white bg-[#0E1015] focus:bg-[#12141A] focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all ${
                          errors.email ? 'border-red-400 bg-red-950/20' : 'border-[#262B38]'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(416) 555-0192"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#262B38] text-sm text-white bg-[#0E1015] focus:bg-[#12141A] focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Current Website (if applicable)
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://yoursite.ca"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#262B38] text-sm text-white bg-[#0E1015] focus:bg-[#12141A] focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  {/* Service Needed & Approximate Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#262B38] text-sm text-white bg-[#0E1015] focus:bg-[#12141A] focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer"
                      >
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-[#0E1015] text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Approximate Budget (CAD)
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#262B38] text-sm text-white bg-[#0E1015] focus:bg-[#12141A] focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer font-mono"
                      >
                        {budgetOptions.map((b) => (
                          <option key={b} value={b} className="bg-[#0E1015] text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Project Description <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder="Tell us what you're building, your target customer, timeline, and current bottlenecks..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-white bg-[#0E1015] focus:bg-[#12141A] focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all ${
                        errors.projectDescription ? 'border-red-400 bg-red-950/20' : 'border-[#262B38]'
                      }`}
                    />
                    {errors.projectDescription && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.projectDescription}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Send Project Enquiry</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <p className="text-center text-[11px] text-neutral-500 font-mono mt-3">
                      No spam · No aggressive follow-ups · Guaranteed response within 1 business day
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
