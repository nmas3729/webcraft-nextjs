'use client';

import { useState } from 'react';
import type { FAQItem } from '../lib/types';

const faqs: FAQItem[] = [
  {
    question: 'Really pay nothing upfront?',
    answer: 'Yes. We build your site first. You only pay setup and subscription costs after approving the final design.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. Our subscriptions are month-to-month. Just give us 30 days\' notice.'
  },
  {
    question: 'Why not WordPress?',
    answer: 'Next.js loads in under 2 seconds. Faster load times mean better Google rankings and higher conversion rates.'
  },
  {
    question: 'Need changes after launch?',
    answer: 'It\'s included in your plan. Send us your updates and we\'ll implement them within 48 hours.'
  },
  {
    question: 'How long to build?',
    answer: '5 days for your initial preview, and 24 hours to launch after your approval.'
  },
  {
    question: 'Works on mobile?',
    answer: 'Absolutely. Every site we build is optimized for a flawless mobile experience.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="container">
        <h2 className="section-title">Quick Answers</h2>
        <div className="faq">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span>{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}