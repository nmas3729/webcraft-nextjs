import type { Step } from '../lib/types';

const steps: Step[] = [
  {
    number: 1,
    title: 'Free Strategy Call',
    description: 'A quick 15-minute consultation to understand your business goals.'
  },
  {
    number: 2,
    title: 'We Build Your Preview',
    description: 'We design and develop your fully functional site in just 5 days.'
  },
  {
    number: 3,
    title: 'You Review & Refine',
    description: 'We make unlimited revisions until you are completely satisfied.'
  },
  {
    number: 4,
    title: 'Subscribe & Go Live',
    description: 'Approve the design, start your subscription, and launch within 24 hours.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.number} className="step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}