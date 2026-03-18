import type { Step } from '../lib/types';

const steps: Step[] = [
  {
    number: 1,
    title: 'Call Us',
    description: '15 minutes. Free.'
  },
  {
    number: 2,
    title: 'We Build',
    description: '5 days. No charge.'
  },
  {
    number: 3,
    title: 'You Review',
    description: 'Change what you want.'
  },
  {
    number: 4,
    title: 'Go Live',
    description: 'Love it? Pay. Live in 24hrs.'
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