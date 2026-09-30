import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  serviceDelivered: string;
  timeframe: string;
  headline: string;
  quote: string;
  keyMetric: string;
  metricContext: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'nordic-timber',
    name: 'Marcus Tremblay',
    role: 'Founder & CEO',
    company: 'Nordic Timber & Living',
    location: 'Vancouver, BC',
    serviceDelivered: 'Shopify Store Replatform & Paid Video Creatives',
    timeframe: '90-Day Engagement',
    headline: 'Our checkout completion increased by 34% with zero agency fluff.',
    quote:
      'We had a fragmented store that wasn’t turning paid traffic into orders. Northform rebuilt our catalog navigation, tuned mobile performance to sub-second load times, and produced weekly batches of high-retention video ad creative. Their transparent CAD pricing and swift communication make them feel like an in-house partner rather than a detached agency.',
    keyMetric: '+34%',
    metricContext: 'Checkout completion rate on mobile'
  },
  {
    id: 'apex-mortgages',
    name: 'Elena Vasquez',
    role: 'Managing Partner',
    company: 'Apex Mortgages Ontario',
    location: 'Toronto, ON',
    serviceDelivered: 'AI Voice Lead System & Meta Ads Architecture',
    timeframe: 'System Implementation',
    headline: 'Eliminated our telephone tag and doubled calendar appointment bookings.',
    quote:
      'In mortgage lending, speed to lead is the entire game. Northform configured an AI voice qualification system that calls incoming prospects within 45 seconds, verifies their purchase timeline and down payment readiness, and directly books qualified buyers onto our advisors’ calendars. It saved our team 15+ hours of manual follow-up every single week.',
    keyMetric: '< 45s',
    metricContext: 'Inbound speed-to-lead response time'
  },
  {
    id: 'prairie-dental',
    name: 'Dr. Julian Campbell',
    role: 'Clinical Director',
    company: 'Prairie Specialty Dental Care',
    location: 'Calgary, AB',
    serviceDelivered: 'Local SEO Strategy & High-Conversion Web Redesign',
    timeframe: '6-Month Campaign',
    headline: 'Consistently ranking in top local search results across Calgary.',
    quote:
      'Most SEO agencies sell vague retainer promises with zero accountability. Northform conducted an exhaustive technical audit, optimized our Google Business Profile, and restructured our treatment landing pages. Our consultation inquiries for cosmetic and surgical procedures have doubled organically without spending extra on paid search.',
    keyMetric: '2.1x',
    metricContext: 'High-intent organic consultation inquiries'
  },
  {
    id: 'mont-royal-botanical',
    name: 'Chloe Desjardins',
    role: 'Head of Brand & Growth',
    company: 'Mont-Royal Botanical Goods',
    location: 'Montreal, QC',
    serviceDelivered: 'Short-Form Video Production & Meta Campaign Management',
    timeframe: 'Ongoing Retainer',
    headline: 'Weekly commercial video batches with true editorial polish.',
    quote:
      'Finding a studio that understands minimalist luxury aesthetics and performance marketing simultaneously is exceptionally difficult. Northform produces short-form video creative that highlights our botanical ingredients with cinematic lighting. They handle the technical ad structure while keeping creative standards uncompromisingly high.',
    keyMetric: '12 vids/mo',
    metricContext: 'Consistent high-retention social content'
  }
];

export const TestimonialsSection: React.FC<{ onOpenDiscovery: (context?: string) => void }> = ({
  onOpenDiscovery
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 7000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-[#0C0E13] text-[#F5F6F8] border-t border-[#1C202B] relative overflow-hidden">
      {/* Subtle blue ambient glow behind card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-medium">
              CLIENT SUCCESS STORIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Proven systems for Canadian businesses.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              Real outcomes from Canadian founders, operators, and professional practices using our digital systems.
            </p>
          </div>

          {/* Carousel Arrows & Indicator */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="text-xs font-mono text-neutral-400 mr-2 tabular-nums">
              0{currentIndex + 1} / 0{testimonials.length}
            </div>
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-xl bg-[#141720] border border-[#262B38] text-neutral-300 hover:text-white hover:border-blue-500/50 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous client success story"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-xl bg-[#141720] border border-[#262B38] text-neutral-300 hover:text-white hover:border-blue-500/50 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next client success story"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="bg-[#12141A] rounded-2xl border border-[#222632] p-8 sm:p-12 shadow-2xl transition-all duration-500 relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-6">
              {/* Metadata strip (zero pill discipline) */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 font-mono">
                <span className="text-blue-400 font-semibold">{current.company}</span>
                <span aria-hidden="true">·</span>
                <span>{current.location}</span>
                <span aria-hidden="true">·</span>
                <span className="text-neutral-300">{current.serviceDelivered}</span>
              </div>

              {/* Headline */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                “{current.headline}”
              </h3>

              {/* Body Quote */}
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                {current.quote}
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#1E2330] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{current.name}</h4>
                  <p className="text-xs text-neutral-400 font-mono mt-0.5">
                    {current.role} · {current.company}
                  </p>
                </div>

                <button
                  onClick={() => onOpenDiscovery(`Story: ${current.company}`)}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <span>Scope a similar project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Metric Spotlight Column */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-xl bg-[#0E1015] border border-[#1E2330] text-center flex flex-col justify-center space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                Validated Outcome
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-blue-400 font-mono tracking-tight tabular-nums">
                {current.keyMetric}
              </div>
              <p className="text-xs text-neutral-400 font-medium">
                {current.metricContext}
              </p>
              <div className="pt-3 border-t border-[#1C202B] text-[10px] font-mono text-neutral-500">
                {current.timeframe}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Slide Indicators */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-blue-500' : 'w-2 bg-[#2B3040] hover:bg-neutral-600'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
