'use client';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              NMAS<span className="logo-accent">WebCraft</span>
            </div>
            <p>Premium Next.js websites for South African businesses. Pay nothing until it&apos;s live.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
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
          </div>
          <div>
            <h4>Plans</h4>
            <ul>
              <li>
                <a href="#pricing" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#pricing');
                }}>
                  Starter
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#pricing');
                }}>
                  Business
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#pricing');
                }}>
                  Enterprise
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}>
                  Send us a message
                </a>
              </li>
              <li>
                <a href="https://wa.me/27674877278" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </li>
              <li>+27 67 487 7278</li>
              <li>Johannesburg, SA</li>
              <li>
                <a href="https://www.webcraft.nmas.co.za" target="_blank" rel="noopener noreferrer">
                  www.webcraft.nmas.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 NMAS WebCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}