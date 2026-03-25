"use client";

import Image from "next/image";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-container">
              <Image
                src="/logo.jpg"
                alt="NMAS Logo"
                width={50}
                height={50}
                className="logo-image"
              />
              <div className="logo-text-group">
                <div className="logo">
                  NMAS<span className="logo-accent">WebCraft</span>
                </div>
                <div className="logo-subtext">An NMAS Innovations Company</div>
              </div>
            </div>
            <p>
              High-performance web architecture for South African businesses. Subscriptions start only when you love the final design.
            </p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#pricing");
                  }}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#how"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#how");
                  }}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#faq");
                  }}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Plans</h3>
            <ul>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#pricing");
                  }}
                >
                  Starter Website
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#pricing");
                  }}
                >
                  Business Growth Plan
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#pricing");
                  }}
                >
                  Enterprise Website
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a
                  href="https://wa.me/27674877278"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </li>
              <li>+27 67 487 7278</li>
              <li>Johannesburg, SA</li>
              <li>
                <a
                  href="https://www.webcraft.nmas.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.webcraft.nmas.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 NMAS WebCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
