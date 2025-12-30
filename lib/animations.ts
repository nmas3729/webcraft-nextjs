import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const initAnimations = () => {
  // Only run on client side
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Animate Hero Text (Fade Up)
    gsap.from(".hero-content", {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.2
    });

    // Animate Pricing Cards (Staggered Entry)
    gsap.utils.toArray('.price-card').forEach((card: any, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%", // Animation starts when top of card hits 85% of viewport
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2 // Stagger effect
      });
    });
  }
};