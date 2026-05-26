'use client';

import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { saveLead } from '../lib/leadUtils';
import { sendWeb3FormsEmail } from '../lib/web3forms';

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ email: '', whatsapp: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    const alreadyShown = localStorage.getItem('nmas_exit_modal_shown');
    if (alreadyShown) return;

    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) {
        setVisible(true);
        localStorage.setItem('nmas_exit_modal_shown', 'true');
      }
    };

    window.addEventListener('mouseout', handleMouseLeave);
    return () => window.removeEventListener('mouseout', handleMouseLeave);
  }, []);

  const closeModal = () => {
    setVisible(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await sendWeb3FormsEmail({
        subject: 'Exit-Intent Lead',
        message: `Email: ${formData.email}\nWhatsApp: ${formData.whatsapp || 'N/A'}`,
        name: 'Exit Intent Lead',
        email: formData.email,
        reply_to: formData.email,
      });

      saveLead({
        type: 'exit_intent_preview',
        email: formData.email,
        whatsapp: formData.whatsapp,
        source: 'exit_intent',
      });
      setStatus("Preview requested! We'll contact you within 24 hours.");
      setFormData({ email: '', whatsapp: '' });
    } catch (error) {
      console.error(error);
      setStatus('Sorry, we could not send your request. Please try again shortly.');
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10">
      <div className="w-full max-w-xl rounded-3xl bg-slate-950 p-8 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">Wait – Get Your Free Preview Before You Go</h2>
            <p className="mt-3 text-slate-300">We'll build your site in 5 days. Pay nothing until you approve.</p>
          </div>
          <button
            type="button"
            className="rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20"
            onClick={closeModal}
            aria-label="Close exit intent popup"
          >
            ×
          </button>
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-200" htmlFor="exitEmail">
              Email
            </label>
            <input
              id="exitEmail"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-200" htmlFor="exitWhatsapp">
              WhatsApp number
            </label>
            <input
              id="exitWhatsapp"
              name="whatsapp"
              type="tel"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-500"
              placeholder="+27 67 487 7278"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-2xl bg-[#f97316] px-5 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
          >
            Send My Free Preview →
          </button>
          {status ? <p className="text-sm text-lime-300">{status}</p> : null}
        </form>
      </div>
    </div>
  );
}
