'use client';

import { useState } from 'react';
import type { FAQItem } from '../lib/types';

const faqs: FAQItem[] = [
  {
    question: 'Really pay nothing upfront?',
    answer: 'Yes. We build first. You pay after approval.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. 30 days notice. Cancel before 18 months, we keep the site. After 18 months, it\'s yours.'
  },
  {
    question: 'Why not WordPress?',
    answer: 'Next.js loads in 2 seconds. WordPress takes 5-8. Faster = better Google ranking.'
  },
  {
    question: 'Need changes after launch?',
    answer: 'Included. We fix within 48 hours.'
  },
  {
    question: 'How long to build?',
    answer: '5 days to preview. 24 hours to go live.'
  },
  {
    question: 'Works on mobile?',
    answer: 'Yes. Mobile-first design.'
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