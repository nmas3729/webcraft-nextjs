'use client';

import type { PricingTier } from '../lib/types';

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    badge: 'Most Popular',
    price: 899,
    setup: 725,
    features: [
      '5 pages',
      'Mobile-ready',
      '2 emails',
      'Hosting included',
      'Free domain',
      'Own in 18 months'
    ],
    featured: false
  },
  {
    name: 'Business',
    badge: 'Best Value',
    price: 1799,
    setup: 725,
    features: [
      '10 pages',
      '3 emails',
      'Analytics',
      'WhatsApp chat',
      'Blog ready',
      'Priority support'
    ],
    featured: true
  },
  {
    name: 'Enterprise',
    badge: 'Premium',
    price: 3499,
    setup: 950,
    features: [
      'Unlimited pages',
      'Online store OR bookings',
      'Payment gateway',
      '5 emails',
      '24hr support',
      'Everything included'
    ],
    featured: false
  }
];

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="section-title">Simple Pricing</h2>
        <div className="pricing-grid">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`price-card ${tier.featured ? 'featured' : ''}`}
            >
              <span className="badge">{tier.badge}</span>
              <h3>{tier.name}</h3>
              <div className="price">
                R{tier.price}<span>/mo</span>
              </div>
              <div className="setup-fee">R{tier.setup} setup</div>
              <ul className="features">
                {tier.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button 
                className="btn btn-primary btn-full"
                onClick={scrollToContact}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}