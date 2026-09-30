import React, { useState, useEffect } from 'react';
import { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CapabilityStrip } from './components/CapabilityStrip';
import { IntroSection } from './components/IntroSection';
import { ServicesSection } from './components/ServicesSection';
import { PackagesSection } from './components/PackagesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyUsSection } from './components/WhyUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DiscoveryModal } from './components/DiscoveryModal';
import { LeadsManagerModal } from './components/LeadsManagerModal';
import { AdminPortal } from './components/AdminPortal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('home');
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [isPrivateAdminOpen, setIsPrivateAdminOpen] = useState(false);
  const [discoveryContext, setDiscoveryContext] = useState<string | undefined>();
  const [isAdminRoute, setIsAdminRoute] = useState<boolean>(() => {
    return window.location.pathname === '/admin' || window.location.hash === '#admin';
  });

  // Pathname & Hash-based client routing & secret owner shortcut detection
  useEffect(() => {
    const checkRoute = () => {
      const pathname = window.location.pathname;
      const hash = window.location.hash.replace('#', '');

      if (pathname === '/admin' || hash === 'admin' || hash === 'leads') {
        setIsAdminRoute(true);
      } else {
        setIsAdminRoute(false);
        if (['home', 'services', 'pricing', 'work', 'about', 'contact'].includes(hash)) {
          setCurrentTab(hash as PageTab);
        }
      }
    };

    checkRoute();

    // Secret keyboard shortcut for owner only: Ctrl + Shift + L
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'l') {
        e.preventDefault();
        setIsPrivateAdminOpen((prev) => !prev);
      }
    };

    window.addEventListener('hashchange', checkRoute);
    window.addEventListener('popstate', checkRoute);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('hashchange', checkRoute);
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavigate = (tab: PageTab) => {
    setIsAdminRoute(false);
    setCurrentTab(tab);
    window.location.hash = tab === 'home' ? '' : tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToSite = () => {
    setIsAdminRoute(false);
    if (window.location.pathname === '/admin') {
      window.history.pushState({}, '', '/');
    }
    window.location.hash = '';
    setCurrentTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDiscovery = (context?: string) => {
    setDiscoveryContext(context);
    setIsDiscoveryOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleNavigate('services');
    }
  };

  if (isAdminRoute) {
    return <AdminPortal onBackToSite={handleBackToSite} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#090A0D] text-[#F5F6F8] selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Bar (Clean, no public leads buttons) */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenDiscovery={() => handleOpenDiscovery()}
      />

      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            {/* 1. Hero Section (with "Scroll to explore" removed) */}
            <Hero
              onOpenDiscovery={() => handleOpenDiscovery()}
              onExploreServices={() => scrollToSection('services')}
            />

            {/* 2. Capability Strip */}
            <CapabilityStrip
              onSelectCapability={(name) => {
                scrollToSection('services');
              }}
            />

            {/* 3. The Digital Foundation */}
            <IntroSection onOpenDiscovery={() => handleOpenDiscovery('The Digital Foundation')} />

            {/* 4. What We Do: 7 Services + AI Video Player + AI Workflow */}
            <ServicesSection onOpenDiscovery={handleOpenDiscovery} />

            {/* 5. Built to Work Together: Packages + Social Media Content */}
            <PackagesSection onOpenDiscovery={handleOpenDiscovery} />

            {/* 6. Selected Work / Portfolio */}
            <PortfolioSection onOpenDiscovery={handleOpenDiscovery} />

            {/* 7. How We Work / Process */}
            <ProcessSection />

            {/* 8. Why Work With Us */}
            <WhyUsSection />

            {/* 9. Rotating Client Success Stories (Directly after WhyUsSection) */}
            <TestimonialsSection onOpenDiscovery={handleOpenDiscovery} />

            {/* 10. About the Studio */}
            <AboutSection onOpenDiscovery={() => handleOpenDiscovery('About Conversation')} />

            {/* 11. Frequently Asked Questions */}
            <FaqSection />

            {/* 12. Final High-Contrast Closing CTA */}
            <FinalCta
              onOpenDiscovery={() => handleOpenDiscovery()}
              onExploreServices={() => scrollToSection('services')}
            />

            {/* 13. Project Discovery Contact Form (Saves directly to backend) */}
            <ContactSection initialService={discoveryContext} />
          </>
        )}

        {currentTab === 'services' && (
          <div className="pt-16">
            <ServicesSection onOpenDiscovery={handleOpenDiscovery} />
            <PackagesSection onOpenDiscovery={handleOpenDiscovery} />
            <TestimonialsSection onOpenDiscovery={handleOpenDiscovery} />
            <FinalCta
              onOpenDiscovery={() => handleOpenDiscovery('Services Inquiry')}
              onExploreServices={() => handleNavigate('pricing')}
            />
          </div>
        )}

        {currentTab === 'pricing' && (
          <div className="pt-16">
            <PricingSection onOpenDiscovery={handleOpenDiscovery} />
            <PackagesSection onOpenDiscovery={handleOpenDiscovery} />
            <FaqSection />
            <FinalCta
              onOpenDiscovery={() => handleOpenDiscovery('Pricing Scope Inquiry')}
              onExploreServices={() => handleNavigate('contact')}
            />
          </div>
        )}

        {currentTab === 'work' && (
          <div className="pt-16">
            <PortfolioSection onOpenDiscovery={handleOpenDiscovery} />
            <ProcessSection />
            <TestimonialsSection onOpenDiscovery={handleOpenDiscovery} />
            <FinalCta
              onOpenDiscovery={() => handleOpenDiscovery('Portfolio Inquiry')}
              onExploreServices={() => handleNavigate('services')}
            />
          </div>
        )}

        {currentTab === 'about' && (
          <div className="pt-16">
            <AboutSection onOpenDiscovery={() => handleOpenDiscovery('About the Studio')} />
            <WhyUsSection />
            <TestimonialsSection onOpenDiscovery={handleOpenDiscovery} />
            <ProcessSection />
            <FinalCta
              onOpenDiscovery={() => handleOpenDiscovery('About Discussion')}
              onExploreServices={() => handleNavigate('services')}
            />
          </div>
        )}

        {currentTab === 'contact' && (
          <div className="pt-16">
            <ContactSection initialService={discoveryContext} />
            <FaqSection />
          </div>
        )}
      </main>

      {/* Footer (No public leads buttons) */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDiscovery={handleOpenDiscovery}
      />

      {/* Interactive Discovery Modal */}
      <DiscoveryModal
        isOpen={isDiscoveryOpen}
        onClose={() => setIsDiscoveryOpen(false)}
        serviceContext={discoveryContext}
      />

      {/* Owner-Only Private Leads Hub (Only opens if owner triggers secret shortcut or visits #admin) */}
      <LeadsManagerModal
        isOpen={isPrivateAdminOpen}
        onClose={() => setIsPrivateAdminOpen(false)}
      />
    </div>
  );
}
