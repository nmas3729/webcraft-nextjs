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
        <div className="pricing-grid">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`price-card ${tier.featured ? "featured" : ""}`}
            >
              <span className="badge">{tier.badge}</span>
              <h3>{tier.name}</h3>
              <div className="price">
                R{tier.price}
                <span> per month</span>
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
        <div style={{ textAlign: "center", marginTop: "3rem", fontSize: "1.1rem", opacity: 0.9 }}>
          <p>Every plan includes secure hosting, ongoing maintenance, regular updates, and dedicated support.</p>
          <p>Simple monthly billing. Cancel anytime.</p>
        </div>
      </div>
    </section>
  );
}
