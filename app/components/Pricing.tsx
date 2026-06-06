"use client";

import type { PricingTier } from "../lib/types";

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter Website',
    badge: '',
    price: 6500,
    setup: 0,
    features: [
      '5–6 page business website',
      'Mobile responsive design',
      'WhatsApp integration',
      'Contact / quote form',
      'Basic SEO setup',
      'Hosting setup assistance',
      '3 business email accounts'
    ],
    featured: false
  },
  {
    name: 'Business Growth Website',
    badge: 'Most Popular',
    price: 9500,
    setup: 0,
    features: [
      'Everything in Starter',
      'Extra pages (Projects / Testimonials)',
      'Improved UI/UX layout for conversions',
      'Lead-focused design improvements',
      'Optional calculator or lead tool'
    ],
    featured: true
  },
  {
    name: 'Premium Website',
    badge: 'Premium',
    price: 12500,
    setup: 0,
    features: [
      'Everything in Business Growth',
      'Advanced UI design',
      'Booking system or payment integration',
      'Higher conversion optimization',
      'Priority delivery'
    ],
    featured: false
  }
];

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="section-title">Simple Pricing</h2>
        <div className="pricing-grid grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`price-card rounded-[28px] border border-slate-700 bg-slate-950 p-8 shadow-2xl shadow-black/20 ${tier.featured ? 'ring-1 ring-orange-500/30' : ''}`}
            >
              {tier.badge ? (
                <span className="mb-4 inline-flex rounded-full bg-[#f97316]/10 px-3 py-1 text-sm font-semibold text-[#f97316]">
                  {tier.badge}
                </span>
              ) : null}
              <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
              <div className="mt-4 text-4xl font-semibold text-white">
                R{tier.price.toLocaleString()}{tier.price === 12500 ? '+' : ''}
                <span className="text-base font-medium text-slate-400"> (Once-off)</span>
              </div>
              <div className="mt-4 inline-flex rounded-full bg-[#f97316]/15 px-4 py-2 text-sm font-semibold text-[#f97316]">
                🚀 Setup fee waived – limited spots
              </div>
              <ul className="features mt-8 space-y-3 text-slate-300">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#f97316]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="btn btn-primary btn-full mt-8 rounded-2xl bg-[#f97316] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/20"
                style={{ backgroundColor: '#f97316' }}
                onClick={scrollToContact}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-lg text-slate-300 opacity-90">
          <p>Every plan includes secure hosting, ongoing maintenance, regular updates, and dedicated support.</p>
          <p>Simple once-off billing. No monthly fees.</p>
        </div>
      </div>
    </section>
  );
}
