import type { Benefit } from '../lib/types';

const benefits: Benefit[] = [
  {
    icon: '💰',
    title: 'Pay After, Not Before',
    description: 'See your website first. Love it, then pay. No R30K upfront.'
  },
  {
    icon: '🔓',
    title: 'No Contracts',
    description: 'Cancel anytime. No penalties. No questions.'
  },
  {
    icon: '⚡',
    title: 'Built for Speed',
    description: 'Loads in 2 seconds. Google loves fast sites.'
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