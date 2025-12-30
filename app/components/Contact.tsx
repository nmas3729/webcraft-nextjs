'use client';

import { useState, FormEvent } from 'react';
import type { FormData } from '../lib/types';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    business: '',
    email: '',
    phone: '',
    plan: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message
    const whatsappMessage = `Hi! I'm ${formData.name} from ${formData.business}. I'm interested in the ${formData.plan} plan. ${formData.message}`;
    const whatsappURL = `https://wa.me/27674877278?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Reset form
    setFormData({
      name: '',
      business: '',
      email: '',
      phone: '',
      plan: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Ready?</h2>
        <p>Get your free website preview in 5 days.</p>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="business"
              placeholder="Business Name *"
              required
              value={formData.business}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <select 
              name="plan" 
              required
              value={formData.plan}
              onChange={handleChange}
            >
              <option value="">Pick a plan *</option>
              <option value="Starter">Starter (R899/mo)</option>
              <option value="Business">Business (R1,799/mo)</option>
              <option value="Enterprise">Enterprise (R3,499/mo)</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              rows={3}
              placeholder="What do you need? *"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary btn-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Get Free Preview'}
          </button>
        </form>
      </div>
    </section>
  );
}