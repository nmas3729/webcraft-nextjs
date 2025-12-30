'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="logo">
          NMAS<span className="logo-accent">WebCraft</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#pricing" onClick={(e) => {
              e.preventDefault();
              scrollToSection('#pricing');
            }}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#how" onClick={(e) => {
              e.preventDefault();
              scrollToSection('#how');
            }}>
              How It Works
            </a>
          </li>
          <li>
            <a href="#faq" onClick={(e) => {
              e.preventDefault();
              scrollToSection('#faq');
            }}>
              FAQ
            </a>
          </li>
        </ul>
        <a href="#contact" onClick={(e) => {
          e.preventDefault();
          scrollToSection('#contact');
        }}>
          <button className="btn btn-primary">Get Started</button>
        </a>
      </div>
    </nav>
  );
}