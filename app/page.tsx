'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import PortfolioSection from './components/Portfolio';

const Pricing = dynamic(() => import('./components/Pricing'));
const HowItWorks = dynamic(() => import('./components/HowItWorks'));
const FAQ = dynamic(() => import('./components/FAQ'));
const Contact = dynamic(() => import('./components/Contact'));
const WhatsAppButton = dynamic(() => import('./components/WhatsAppButton'), { ssr: false });
import { initAnimations, createParticleEffects } from './lib/animations';

export default function Home() {
  useEffect(() => {
    // Initialize GSAP animations after component mounts
    const timer = setTimeout(() => {
      initAnimations();
      createParticleEffects();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <Hero />
      <Benefits />
      <PortfolioSection />
      <Pricing />
      <HowItWorks />
      <FAQ />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}