"use client";

import type { PricingTier } from "../lib/types";

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter Website',
    badge: '',
    price: 899,
    setup: 725,
    features: [
      '5-page responsive website',
      'Mobile-friendly design',
      '3 professional email accounts (10GB each)',
      'Hosting included',
      'Free .co.za domain'
    ],
    featured: false
  },
  {
    name: 'Business Growth Plan',
    badge: 'Best Value',
    price: 1499,
    setup: 725,
    features: [
      '5-page professional website',
      '3 professional email accounts',
      'WhatsApp chat integration',
      'Basic website analytics setup',
      'Basic social media posting (up to 8 posts/month on Facebook & TikTok)',
      'Google Business Profile setup'
    ],
    featured: true
  },
  {
    name: 'Enterprise Website',
    badge: 'Premium',
    price: 3499,
    setup: 950,
    features: [
      'Up to 10–15 page professional website',
      'Online store OR booking system',
      'Payment gateway integration',
      '5 professional email accounts',
      'WhatsApp chat integration',
      'Priority support (business hours)',
      'Basic SEO & Google setup'
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
                R{tier.price}
                <span className="text-base font-medium text-slate-400"> per month</span>
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
          <p>Simple monthly billing. Cancel anytime.</p>
        </div>
      </div>
    </section>
  );
}
