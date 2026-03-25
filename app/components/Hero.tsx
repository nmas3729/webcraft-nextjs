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
      </div>
    </section>
  );
}