'use client';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <h1>
          Premium Websites from<br />
          <span className="highlight">R899/Month</span>
        </h1>
        <p>Pay nothing until it&apos;s live. No contracts.</p>
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
          <span>✓ Own in 18 Months</span>
        </div>
      </div>
    </section>
  );
}