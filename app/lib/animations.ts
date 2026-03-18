// GSAP Animation utilities for NMAS WebCraft
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export const initAnimations = () => {
  // Hero animations
  gsap.from('.hero h1', {
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: 'expo.out',
    delay: 0.2
  });

  gsap.from('.hero p', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    delay: 0.4
  });

  gsap.from('.hero-ctas .btn', {
    opacity: 0,
    y: 40,
    scale: 0.9,
    duration: 0.8,
    ease: 'back.out(1.7)',
    stagger: 0.2,
    delay: 0.6
  });

  gsap.from('.trust-line span', {
    opacity: 0,
    x: -20,
    duration: 0.6,
    ease: 'power2.out',
    stagger: 0.1,
    delay: 0.8
  });

  // Section title animations
  gsap.utils.toArray('.section-title').forEach((title: any) => {
    gsap.from(title, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Benefits animation
  gsap.utils.toArray('.benefit').forEach((benefit: any, index: number) => {
    gsap.from(benefit, {
      opacity: 0,
      y: 60,
      scale: 0.9,
      duration: 0.8,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: benefit,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      delay: index * 0.1
    });
  });

  // Pricing cards animation
  gsap.utils.toArray('.price-card').forEach((card: any, index: number) => {
    gsap.from(card, {
      opacity: 0,
      y: 80,
      scale: 0.8,
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      delay: index * 0.15
    });
  });

  // Steps animation
  gsap.utils.toArray('.step').forEach((step: any, index: number) => {
    const stepNumber = step.querySelector('.step-number');
    
    if (stepNumber) {
      gsap.from(stepNumber, {
        opacity: 0,
        scale: 0,
        rotation: -180,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: step,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        delay: index * 0.1
      });
    }

    gsap.from(step.querySelectorAll('h3, p'), {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: step,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      delay: index * 0.1 + 0.2,
      stagger: 0.1
    });
  });

  // FAQ items animation
  gsap.utils.toArray('.faq-item').forEach((item: any, index: number) => {
    gsap.from(item, {
      opacity: 0,
      x: -30,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      delay: index * 0.05
    });
  });

  // Contact form animation
  const contactForm = document.querySelector('.contact form');
  if (contactForm) {
    gsap.from(contactForm, {
      opacity: 0,
      y: 80,
      scale: 0.9,
      duration: 1.2,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: contactForm,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // WhatsApp button animation
  const whatsappBtn = document.querySelector('.whatsapp-float');
  if (whatsappBtn) {
    gsap.from(whatsappBtn, {
      opacity: 0,
      scale: 0,
      rotation: -180,
      duration: 0.8,
      ease: 'back.out(1.7)',
      delay: 1.5
    });
  }

  // Refresh ScrollTrigger
  ScrollTrigger.refresh();
};

export const createParticleEffects = () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const particleContainer = document.createElement('div');
  particleContainer.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 1;
  `;
  hero.appendChild(particleContainer);

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(0, 212, 255, 0.6);
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(0, 212, 255, 0.8);
    `;

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 10 + Math.random() * 20;
    const delay = Math.random() * 5;

    particle.style.left = x + '%';
    particle.style.top = y + '%';

    particleContainer.appendChild(particle);

    gsap.to(particle, {
      y: '+=200',
      x: `+=${(Math.random() - 0.5) * 100}`,
      opacity: 0,
      duration: duration,
      delay: delay,
      repeat: -1,
      ease: 'none'
    });

    gsap.to(particle, {
      scale: 0.5 + Math.random() * 0.5,
      duration: 2 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }
};

export const smoothScrollTo = (target: string) => {
  gsap.to(window, {
    duration: 1.2,
    scrollTo: { y: target, autoKill: false },
    ease: 'expo.out'
  });
};