import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PageTab } from '../types';

interface NavbarProps {
  currentTab: PageTab;
  onNavigate: (tab: PageTab) => void;
  onOpenDiscovery: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  onOpenDiscovery
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; tab: PageTab }[] = [
    { label: 'Services', tab: 'services' },
    { label: 'Work', tab: 'work' },
    { label: 'Pricing', tab: 'pricing' },
    { label: 'About', tab: 'about' },
    { label: 'Contact', tab: 'contact' }
  ];

  const handleNavClick = (tab: PageTab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#090A0D]/90 backdrop-blur-md border-b border-[#1E2330] shadow-xl'
          : 'py-5 bg-[#090A0D] border-b border-[#1A1D27]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors text-left cursor-pointer flex items-center gap-2"
          >
            <span>Northform</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            {navLinks.map((link) => {
              const isActive = currentTab === link.tab;
              return (
                <button
                  key={link.tab}
                  onClick={() => handleNavClick(link.tab)}
                  className={`transition-colors relative py-1 cursor-pointer ${
                    isActive ? 'text-white font-semibold' : 'hover:text-blue-400'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA action ONLY */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDiscovery}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-all cursor-pointer shadow-sm active:scale-[0.98]"
            >
              <span>Book a Discovery Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center md:hidden gap-2">
            <button
              onClick={onOpenDiscovery}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Book Call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F1117] border-b border-[#1E2330] px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-1.5">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                currentTab === 'home' ? 'bg-[#181B24] text-white' : 'text-neutral-400'
              }`}
            >
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.tab}
                onClick={() => handleNavClick(link.tab)}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                  currentTab === link.tab ? 'bg-[#181B24] text-white' : 'text-neutral-400'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#1E2330]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiscovery();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500"
            >
              <span>Book a Discovery Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
