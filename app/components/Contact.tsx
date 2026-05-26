"use client";

import { FormEvent, ChangeEvent, useState } from "react";
import { saveLead } from "../lib/leadUtils";
import { sendWeb3FormsEmail } from "../lib/web3forms";
import type { FormData } from "../lib/types";

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    business: "",
    email: "",
    phone: "",
    plan: "",
    message: "",
  });

  const [contactStatus, setContactStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [planData, setPlanData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
  });
  const [planStatus, setPlanStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendWeb3FormsEmail({
        subject: 'New Contact Form Lead',
        message: `Name: ${formData.name}\nBusiness: ${formData.business}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPlan: ${formData.plan}\nMessage: ${formData.message}`,
        name: formData.name || 'Contact Form Lead',
        email: formData.email,
        reply_to: formData.email,
      });

      saveLead({
        type: "contact_form",
        name: formData.name,
        business: formData.business,
        email: formData.email,
        phone: formData.phone,
        plan: formData.plan,
        message: formData.message,
        source: "contact_section",
      });

      setContactStatus("Preview requested! We'll contact you within 24 hours.");
      setFormData({
        name: "",
        business: "",
        email: "",
        phone: "",
        plan: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setContactStatus('Sorry, we could not send your request. Please try again shortly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlanChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setPlanData({
      ...planData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlanSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await sendWeb3FormsEmail({
        subject: 'New Lead from Pick a Plan',
        message: `Name: ${planData.name}\nEmail: ${planData.email}\nPhone: ${planData.phone || 'N/A'}\nPlan: ${planData.plan}`,
        name: planData.name || 'Pick a Plan Lead',
        email: planData.email,
        reply_to: planData.email,
      });

      saveLead({
        type: "plan_modal_request",
        name: planData.name,
        email: planData.email,
        phone: planData.phone,
        plan: planData.plan,
        source: "pick_a_plan_modal",
      });

      setPlanStatus("Thank you! We'll be in touch shortly.");
      setPlanData({ name: "", email: "", phone: "", plan: "" });
    } catch (error) {
      console.error(error);
      setPlanStatus('Sorry, we could not send your request. Please try again shortly.');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Ready to elevate your business?</h2>
        <p>
          <a
            href="mailto:webcraft@nmas.co.za"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Get your free, no-obligation website preview in 5 days.
          </a>
        </p>

        <div className="mb-8 text-center">
          <button
            type="button"
            className="btn btn-primary rounded-full bg-[#f97316] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/20"
            style={{ backgroundColor: '#f97316' }}
            onClick={() => setShowPlanModal(true)}
          >
            Pick a plan
          </button>
        </div>

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
            <label htmlFor="plan" className="sr-only">
              Pick a plan
            </label>
            <select
              id="plan"
              name="plan"
              required
              value={formData.plan}
              onChange={handleChange}
            >
              <option value="">Pick a plan *</option>
              <option value="Starter Website">Starter Website (R899 per month)</option>
              <option value="Business Growth Plan">
                Business Growth Plan (R1,499 per month)
              </option>
              <option value="Enterprise Website">Enterprise Website (R3,499 per month)</option>
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
            {isSubmitting ? "Sending..." : "Get Free Preview"}
          </button>
          {contactStatus ? (
            <p className="mt-4 text-center text-lime-300">{contactStatus}</p>
          ) : null}
        </form>

        {showPlanModal ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8">
            <div className="w-full max-w-2xl rounded-[32px] bg-slate-950 p-8 shadow-2xl ring-1 ring-white/10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">Start Your Free Preview</h2>
                  <p className="mt-2 text-slate-400">Choose your plan and submit your request.</p>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20"
                  onClick={() => {
                    setShowPlanModal(false);
                    setPlanStatus("");
                  }}
                  aria-label="Close plan modal"
                >
                  ×
                </button>
              </div>
              <form className="mt-8 space-y-4" onSubmit={handlePlanSubmit}>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200" htmlFor="modalName">
                    Full Name
                  </label>
                  <input
                    id="modalName"
                    name="name"
                    type="text"
                    required
                    value={planData.name}
                    onChange={handlePlanChange}
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-500"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200" htmlFor="modalEmail">
                    Business Email
                  </label>
                  <input
                    id="modalEmail"
                    name="email"
                    type="email"
                    required
                    value={planData.email}
                    onChange={handlePlanChange}
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-500"
                    placeholder="Business Email"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200" htmlFor="modalPhone">
                    Phone Number (optional)
                  </label>
                  <input
                    id="modalPhone"
                    name="phone"
                    type="tel"
                    value={planData.phone}
                    onChange={handlePlanChange}
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-500"
                    placeholder="Phone Number (optional)"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200" htmlFor="modalPlan">
                    Plan
                  </label>
                  <select
                    id="modalPlan"
                    name="plan"
                    required
                    value={planData.plan}
                    onChange={handlePlanChange}
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-500"
                  >
                    <option value="">Select plan *</option>
                    <option value="Starter Website">Starter Website</option>
                    <option value="Business Growth Plan">Business Growth Plan</option>
                    <option value="Enterprise Website">Enterprise Website</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[#f97316] px-5 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/20"
                  style={{ backgroundColor: '#f97316' }}
                >
                  Request Free Preview
                </button>
                {planStatus ? <p className="text-center text-lime-300">{planStatus}</p> : null}
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
