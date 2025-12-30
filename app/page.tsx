'use client';

import { useEffect } from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
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
      <Pricing />
      <HowItWorks />
      <FAQ />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}