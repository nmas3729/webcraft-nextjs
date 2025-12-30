'use client';

import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
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
