import type { Benefit } from '../lib/types';

const benefits: Benefit[] = [
  {
    icon: '💰',
    title: 'See It Before You Pay',
    description: 'We build your preview site completely risk-free. Only pay when you love the final design.'
  },
  {
    icon: '🔓',
    title: 'Zero Lock-In Contracts',
    description: 'Enjoy total flexibility. Our month-to-month subscriptions can be cancelled at any time without penalties.'
  },
  {
    icon: '⚡',
    title: 'Engineered for Speed',
    description: 'Built on lightning-fast Next.js architecture. Your site loads in under 2 seconds, maximizing Google rankings.'
  }
];

export default function Benefits() {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="benefits">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}