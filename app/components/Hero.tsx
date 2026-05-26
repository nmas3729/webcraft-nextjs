'use client';

import { FormEvent, useState } from 'react';
import { saveLead } from '../lib/leadUtils';
import { sendWeb3FormsEmail } from '../lib/web3forms';

export default function Hero() {
  const [heroEmail, setHeroEmail] = useState('');
  const [heroStatus, setHeroStatus] = useState('');
  const [isHeroSubmitting, setIsHeroSubmitting] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsHeroSubmitting(true);

    try {
      await sendWeb3FormsEmail({
        subject: 'New Free Preview Request',
        message: `Email: ${heroEmail}`,
        email: heroEmail,
        reply_to: heroEmail,
        name: 'Free Preview Lead',
      });

      saveLead({
        type: 'hero_preview_signup',
        email: heroEmail,
        source: 'hero_banner',
      });

      setHeroStatus("Preview request sent! We'll email you within 24 hours.");
      setHeroEmail('');
    } catch (error) {
      console.error(error);
      setHeroStatus('Sorry, we could not send your request. Please try again shortly.');
    } finally {
      setIsHeroSubmitting(false);
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <h1>
          Professional Websites from<br />
          <span className="highlight">R899/month</span>
        </h1>
        <p>All-inclusive website subscriptions. Zero upfront costs. Cancel anytime.</p>
        <div className="hero-ctas">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('#contact')}
          >
            Get Your Free Preview
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => scrollToSection('#pricing')}
          >
            View Pricing
          </button>
        </div>
        <div className="trust-line">
          <span>✓ Zero Upfront</span>
          <span>✓ Cancel Anytime</span>
          <span>✓ Lightning Fast</span>
        </div>

        <form
          onSubmit={handleHeroSubmit}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="Your business email"
            value={heroEmail}
            onChange={(e) => setHeroEmail(e.target.value)}
            className="w-full max-w-md rounded-full border border-white/20 bg-white/10 px-5 py-4 text-white outline-none transition focus:border-orange-500"
          />
          <button
            type="submit"
            className="btn btn-primary rounded-full px-6 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/20"
            style={{ backgroundColor: '#f97316' }}
            disabled={isHeroSubmitting}
          >
            {isHeroSubmitting ? 'Sending...' : 'Get Free Preview →'}
          </button>
        </form>
        <p className="mt-3 text-sm text-slate-300">No credit card. Preview in 5 days.</p>
        {heroStatus ? <p className="mt-3 text-sm text-lime-300">{heroStatus}</p> : null}
      </div>
    </section>
  );
}