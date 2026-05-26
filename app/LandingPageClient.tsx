'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FaStar, FaWhatsapp, FaTimes } from 'react-icons/fa'

// helper function to save lead locally
function saveLeadLocally(leadData: Record<string, any>) {
  try {
    const existing = JSON.parse(localStorage.getItem('nmas_leads') || '[]')
    const enriched = {
      ...leadData,
      timestamp: new Date().toISOString(),
    }
    existing.push(enriched)
    localStorage.setItem('nmas_leads', JSON.stringify(existing))
    console.log('Lead successfully captured locally:', enriched)
  } catch (err) {
    console.error('Failed to save lead in localStorage:', err)
  }
}

export default function LandingPageClient() {
  // Hero Form states
  const [heroEmail, setHeroEmail] = useState('')
  const [heroSubmitted, setHeroSubmitted] = useState(false)
  const [heroLoading, setHeroLoading] = useState(false)

  // Spots remaining state
  const [spotsLeft, setSpotsLeft] = useState(5)

  // Urgency Banner state
  const [showBanner, setShowBanner] = useState(true)

  // Lead Form Section states
  const [leadName, setLeadName] = useState('')
  const [leadEmail, setLeadEmail] = useState('')
  const [leadPhone, setLeadPhone] = useState('')
  const [leadPlan, setLeadPlan] = useState('Starter')
  const [leadSubmitted, setLeadSubmitted] = useState(false)
  const [leadLoading, setLeadLoading] = useState(false)

  // Exit intent popup states
  const [showExitModal, setShowExitModal] = useState(false)
  const [exitEmail, setExitEmail] = useState('')
  const [exitWhatsApp, setExitWhatsApp] = useState('')
  const [exitSubmitted, setExitSubmitted] = useState(false)
  const [exitLoading, setExitLoading] = useState(false)

  // Scroll Triggered Popup state (kept from previous requirements)
  const [showScrollPopup, setShowScrollPopup] = useState(false)
  const [popupEmail, setPopupEmail] = useState('')
  const [popupWhatsApp, setPopupWhatsApp] = useState('')
  const [popupSubmitted, setPopupSubmitted] = useState(false)
  const [popupLoading, setPopupLoading] = useState(false)

  useEffect(() => {
    // Check banner hidden status
    if (localStorage.getItem('nmas_banner_hidden') === 'true') {
      setShowBanner(false)
    }

    // Listen for exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves outside top edge
      if (e.clientY < 20) {
        const alreadyShown = localStorage.getItem('nmas_exit_modal_shown')
        if (!alreadyShown) {
          setTimeout(() => {
            setShowExitModal(true)
            localStorage.setItem('nmas_exit_modal_shown', 'true')
          }, 2000)
        }
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [])

  // Scroll percent trigger (50%)
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight > 0) {
        const percentScrolled = window.scrollY / scrollHeight
        if (percentScrolled >= 0.5) {
          const alreadyShown = localStorage.getItem('nmas_scroll_popup_shown')
          if (!alreadyShown) {
            setShowScrollPopup(true)
            localStorage.setItem('nmas_scroll_popup_shown', 'true')
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 1. Hero Submit handler
  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!heroEmail) return
    setHeroLoading(true)

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Save lead
    saveLeadLocally({
      source: 'hero_cta',
      email: heroEmail,
    })

    setHeroSubmitted(true)
    setHeroLoading(false)
    setHeroEmail('')
    setSpotsLeft((prev) => Math.max(1, prev - 1))
  }

  // 2. Lead Form Section Submit handler
  const handleLeadFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!leadName || !leadEmail) return
    setLeadLoading(true)

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Save lead
    saveLeadLocally({
      source: 'lead_form_section',
      name: leadName,
      email: leadEmail,
      phone: leadPhone,
      plan: leadPlan,
    })

    setLeadSubmitted(true)
    setLeadLoading(false)
    setLeadName('')
    setLeadEmail('')
    setLeadPhone('')
    setLeadPlan('Starter')
  }

  // 3. Exit Intent Form Submit handler
  const handleExitSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!exitEmail) return
    setExitLoading(true)

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Save lead
    saveLeadLocally({
      source: 'exit_intent_popup',
      email: exitEmail,
      whatsapp: exitWhatsApp,
    })

    setExitSubmitted(true)
    setExitLoading(false)
    setExitEmail('')
    setExitWhatsApp('')
    setTimeout(() => setShowExitModal(false), 2000)
  }

  // 4. Scroll Popup Form Submit handler
  const handlePopupSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!popupEmail) return
    setPopupLoading(true)

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Save lead
    saveLeadLocally({
      source: 'scroll_popup',
      email: popupEmail,
      whatsapp: popupWhatsApp,
    })

    setPopupSubmitted(true)
    setPopupLoading(false)
    setPopupEmail('')
    setPopupWhatsApp('')
    setTimeout(() => setShowScrollPopup(false), 2000)
  }

  const closeBanner = () => {
    setShowBanner(false)
    localStorage.setItem('nmas_banner_hidden', 'true')
  }

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-950">
      {/* URGENCY BANNER */}
      {showBanner && (
        <div className="bg-amber-400 text-slate-950 px-4 py-3 relative transition-all duration-300 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between text-center gap-4">
            <p className="w-full text-sm md:text-base font-semibold tracking-wide">
              🔥 Limited offer: Only {spotsLeft} spots left at R899/month for June. Lock in your price today.
            </p>
            <button
              onClick={closeBanner}
              className="text-slate-950 hover:text-slate-800 transition p-1 hover:bg-amber-500 rounded-full"
              aria-label="Close banner"
            >
              <FaTimes className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:py-5">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-950">NMAS WebCraft</h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
              division of NMAS Innovations
            </p>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#portfolio" className="text-sm font-semibold text-slate-600 hover:text-slate-950 transition">
              Portfolio
            </Link>
            <Link href="#pricing" className="text-sm font-semibold text-slate-600 hover:text-slate-950 transition">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-semibold text-slate-600 hover:text-slate-950 transition">
              Reviews
            </Link>
            <Link href="#how-it-works" className="text-sm font-semibold text-slate-600 hover:text-slate-950 transition">
              How It Works
            </Link>
            <Link href="#faq" className="text-sm font-semibold text-slate-600 hover:text-slate-950 transition">
              FAQ
            </Link>
            <Link
              href="#lead-form-section"
              className="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-600 transition shadow-md shadow-orange-500/20"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative px-4 py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50/20 via-white to-white" />
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-sm text-orange-700 font-semibold border border-orange-100">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            Premium Custom Web Design Agency
          </div>

          <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
            Professional Websites <br />
            <span className="text-orange-500">from R899/month</span>
          </h1>

          <p className="mx-auto mb-6 max-w-2xl text-lg text-slate-600 md:text-xl font-medium leading-relaxed">
            Zero upfront setup costs. Cancel anytime. Lightning fast delivery. <br />
            Increase conversions with Next.js architecture built for South African businesses.
          </p>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 font-semibold">
            <span>✓ Zero Upfront</span>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
            <span>✓ Cancel Anytime</span>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
            <span>✓ Lightning Fast</span>
          </div>

          {/* HERO CTA FORM */}
          <div className="mx-auto max-w-md bg-white rounded-2xl border border-slate-100 p-6 shadow-xl shadow-slate-100/50">
            {heroSubmitted ? (
              <div className="text-center py-4">
                <span className="text-4xl">🎉</span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">Preview Request Sent!</h3>
                <p className="mt-2 text-slate-600 text-sm">
                  Check your email. We will reach out shortly to begin building your preview site.
                </p>
              </div>
            ) : (
              <form onSubmit={handleHeroSubmit} className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    value={heroEmail}
                    onChange={(e) => setHeroEmail(e.target.value)}
                    placeholder="Your business email"
                    required
                    className="flex-1 rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                  />
                  <button
                    type="submit"
                    disabled={heroLoading}
                    className="rounded-lg bg-orange-500 py-3 px-6 font-bold text-white hover:bg-orange-600 active:scale-[0.99] transition disabled:opacity-50 text-sm shadow-md shadow-orange-500/20 whitespace-nowrap"
                  >
                    {heroLoading ? 'Sending...' : 'Get Free Preview →'}
                  </button>
                </div>
                <p className="text-xs text-slate-400 font-medium text-left sm:text-center">
                  No credit card. We&apos;ll build your site in 5 days.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* PORTFOLIO / CLIENT LOGOS SECTION */}
      <section id="portfolio" className="border-y border-slate-100 bg-slate-50/50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-2 text-slate-500 font-medium">
              High-performance web applications built for South African pioneers
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
              >
                <div className="h-10 flex items-center justify-center text-lg font-bold text-slate-900 mb-4">
                  {project.name}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center justify-center rounded-lg bg-slate-100 hover:bg-orange-500 hover:text-white px-4 py-2 text-xs font-bold text-slate-600 transition w-full"
                >
                  View Live Site ↗
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Trusted by South African Brands
            </h2>
            <p className="mt-4 text-slate-500 font-medium text-lg">
              Here is what South African industry leaders say about working with NMAS WebCraft.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-100 p-8 shadow-lg shadow-slate-100/30 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic font-medium leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <h4 className="font-bold text-slate-900">{t.author}</h4>
                  <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mt-0.5">
                    {t.business}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="bg-slate-50/50 border-y border-slate-100 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold text-orange-700 uppercase tracking-widest">
              Pricing Plans
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              Honest Plans. Professional Quality.
            </h2>
            <p className="mt-4 text-slate-500 font-medium text-lg">
              No setup fees. Free .co.za domain registration and reliable high-speed hosting included.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border bg-white p-8 transition hover:shadow-xl ${
                  index === 1 ? 'border-orange-400 shadow-md shadow-orange-100/50' : 'border-slate-200'
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-3.5 left-8 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-white uppercase tracking-widest shadow-md">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-sm text-slate-400 mt-1 font-medium">{plan.tagline}</p>

                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900">R{plan.price}</span>
                  <span className="text-slate-500 font-semibold text-sm">/month</span>
                </div>
                {plan.oldPrice && (
                  <p className="text-sm text-slate-400 line-through mt-0.5">Was R{plan.oldPrice}</p>
                )}

                {/* SETUP FEE WAIVED BADGE */}
                <div className="mt-3">
                  <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                    Setup fee waived for first 5 clients
                  </span>
                </div>

                <ul className="mt-8 space-y-4 border-t border-slate-100 pt-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-600 font-semibold">
                      <span className="text-orange-500 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#lead-form-section"
                  className={`mt-8 block rounded-lg py-3 text-center font-bold transition ${
                    index === 1
                      ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md shadow-orange-600/10'
                      : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Choose {plan.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM SECTION */}
      <section id="lead-form-section" className="bg-slate-50 px-4 py-20 border-b border-slate-100">
        <div className="mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xl shadow-slate-100/50">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Request Your Free Website Preview in 5 Days
            </h2>
            <p className="mt-2 text-slate-500 font-medium">
              Enter your details and our team will build your custom website design preview options.
            </p>
          </div>

          {leadSubmitted ? (
            <div className="bg-green-50 border border-green-200 text-green-950 p-6 rounded-xl text-center">
              <span className="text-4xl">🎉</span>
              <h3 className="mt-3 text-lg font-bold">Preview Request Sent!</h3>
              <p className="mt-1 font-medium">
                Check your inbox shortly. We have received your layout options request.
              </p>
            </div>
          ) : (
            <form onSubmit={handleLeadFormSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Business Email *</label>
                  <input
                    type="email"
                    required
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    placeholder="john@example.co.za"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    placeholder="+27 (0) 67 487 7278"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Plan Dropdown</label>
                  <select
                    value={leadPlan}
                    onChange={(e) => setLeadPlan(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition font-medium"
                  >
                    <option value="Starter">Starter Website (R899/month)</option>
                    <option value="Business Growth">Business Growth Plan (R1,499/month)</option>
                    <option value="Enterprise">Enterprise Website (R3,499/month)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={leadLoading}
                className="w-full rounded-lg bg-orange-500 py-3.5 px-6 font-bold text-white hover:bg-orange-600 transition disabled:opacity-50 text-base shadow-md shadow-orange-500/20"
              >
                {leadLoading ? 'Sending Request...' : 'Send Preview Request →'}
              </button>

              <p className="text-xs text-slate-400 font-medium text-center">
                No payment needed. Cancel anytime.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="px-4 py-20 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">How It Works</h2>
            <p className="mt-2 text-slate-500 font-medium">
              We take the risk so you can start growing.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {steps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-2xl font-bold text-orange-500 border border-orange-100">
                  {i + 1}
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK ANSWERS - FAQ */}
      <section id="faq" className="bg-slate-50 px-4 py-20 border-t border-slate-100">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-slate-900">
            Quick Answers
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300">
                <summary className="cursor-pointer text-lg font-bold text-slate-950 flex items-center justify-between">
                  <span>{faq.q}</span>
                  <span className="text-orange-500 transition group-open:rotate-180">+</span>
                </summary>
                <p className="mt-3 text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 bg-slate-955 text-slate-400 px-4 py-16 bg-slate-950">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">NMAS WebCraft</h3>
              <p className="text-[10px] tracking-widest text-slate-500 uppercase font-black">
                CO-OPERATIVE MINING SERVICES
              </p>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed font-semibold">
                High-performance web architecture for South African businesses. Subscription starts only when you approve the design.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3 text-sm font-semibold">
                <li><Link href="#" className="hover:text-white transition">Home</Link></li>
                <li><Link href="#" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition">Services</Link></li>
                <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition">News</Link></li>
                <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold text-white uppercase tracking-wider">Plans</h4>
              <ul className="space-y-3 text-sm font-semibold">
                <li>Starter Plan (R899/m)</li>
                <li>Pro Plan (R2500/m)</li>
                <li>Enterprise Website</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
              <ul className="space-y-3 text-sm font-semibold">
                <li>Email: <a href="mailto:hello@nmaswebcraft.co.za" className="hover:text-white transition">hello@nmaswebcraft.co.za</a></li>
                <li>Tel: <a href="tel:+27123456789" className="hover:text-white transition">+27 (0) 12 345 6789</a></li>
                <li>Location: Pretoria & Johannesburg, ZA</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500 font-bold">
            © 2023 NMAS WebCraft. All rights reserved.
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/27674877278?text=Hi%20NMAS%20WebCraft%2C%20I%27m%20interested%20in%20a%20free%20website%20preview"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-45 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-110 hover:shadow-2xl transition duration-300 group"
        aria-label="WhatsApp Us"
      >
        <FaWhatsapp className="h-8 w-8" />
        <span className="absolute right-16 scale-0 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg shadow font-bold group-hover:scale-100 transition whitespace-nowrap">
          Chat with Us
        </span>
      </a>

      {/* EXIT INTENT MODAL */}
      <AnimatePresence>
        {showExitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowExitModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm z-40"
            />
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-md bg-white rounded-2xl p-8 border border-slate-100 shadow-2xl text-center z-50"
            >
              <button
                onClick={() => setShowExitModal(false)}
                className="absolute top-4 right-4 p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition"
              >
                <FaTimes className="h-5 w-5" />
              </button>

              <span className="text-5xl">🎁</span>
              <h3 className="mt-4 text-2xl font-black text-slate-900">
                Wait – Get Your Free Preview Before You Go!
              </h3>
              <p className="mt-2 text-slate-500 font-medium text-sm leading-relaxed">
                We&apos;ll build your complete website preview in 5 days. Pay only when you love it.
              </p>

              {exitSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl mt-6 text-sm font-bold">
                  ✓ Preview request sent! Check your email.
                </div>
              ) : (
                <form onSubmit={handleExitSubmit} className="mt-6 space-y-3 text-left">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">Email Address *</label>
                    <input
                      type="email"
                      value={exitEmail}
                      onChange={(e) => setExitEmail(e.target.value)}
                      placeholder="Enter your business email"
                      required
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">WhatsApp Number</label>
                    <input
                      type="tel"
                      value={exitWhatsApp}
                      onChange={(e) => setExitWhatsApp(e.target.value)}
                      placeholder="+27 (0) 67 487 7278"
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={exitLoading}
                    className="w-full rounded-lg bg-orange-500 py-3 px-6 font-bold text-white hover:bg-orange-600 transition disabled:opacity-50 shadow-md shadow-orange-500/10 text-sm mt-2"
                  >
                    {exitLoading ? 'Sending...' : 'Send My Free Preview →'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SCROLL TRIGGERED POPUP (from previous requirements) */}
      <AnimatePresence>
        {showScrollPopup && (
          <div className="fixed bottom-6 left-6 z-40 max-w-sm w-full p-4">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative bg-white rounded-2xl border border-slate-200 p-6 shadow-2xl shadow-slate-200/80"
            >
              <button
                onClick={() => setShowScrollPopup(false)}
                className="absolute top-3 right-3 p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition"
              >
                <FaTimes className="h-4 w-4" />
              </button>

              <h4 className="text-lg font-bold text-slate-900 pr-4">
                Get Your Free Website Preview
              </h4>
              <p className="mt-1 text-xs text-slate-500 font-semibold leading-relaxed">
                Enter your details. We&apos;ll send your custom preview design options in 5 days.
              </p>

              {popupSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-3 rounded-lg mt-4 text-xs font-bold text-center">
                  ✓ Preview request sent! Check your inbox.
                </div>
              ) : (
                <form onSubmit={handlePopupSubmit} className="mt-4 space-y-2.5">
                  <input
                    type="email"
                    value={popupEmail}
                    onChange={(e) => setPopupEmail(e.target.value)}
                    placeholder="Enter your business email"
                    required
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                  />
                  <input
                    type="tel"
                    value={popupWhatsApp}
                    onChange={(e) => setPopupWhatsApp(e.target.value)}
                    placeholder="Your WhatsApp Number (optional)"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                  />
                  <button
                    type="submit"
                    disabled={popupLoading}
                    className="w-full rounded-lg bg-orange-500 py-2.5 px-4 text-xs font-bold text-white hover:bg-orange-600 transition disabled:opacity-50 shadow-md shadow-orange-500/10"
                  >
                    {popupLoading ? 'Sending...' : 'Send Preview Request →'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Static Data
const projects = [
  { name: 'Amakhuma Mining', link: '#' },
  { name: 'Siko Mining Services', link: '#' },
  { name: 'NMAS Innovations', link: '#' },
  { name: 'Mpumul Studio', link: '#' },
  { name: 'ECALVIN Electrician', link: '#' },
]

const testimonials = [
  {
    quote: 'NMAS built our mining site in 4 days. Leads up 200%.',
    author: 'Chief Executive',
    business: 'Amakhuma Mining',
  },
  {
    quote: 'R899 is insane value. Support is fast and local.',
    author: 'Principal Electrician',
    business: 'ECALVIN Electrician',
  },
  {
    quote: 'Zero upfront changed our business. Highly recommend.',
    author: 'Operations Director',
    business: 'Siko Mining Services',
  },
]

const pricingPlans = [
  {
    name: 'Starter Website',
    tagline: 'Perfect for small local businesses',
    price: '899',
    oldPrice: null,
    features: [
      '5-page highly optimized website',
      'Mobile responsive design layout',
      '3 professional email accounts (10GB each)',
      'High-speed local SSD hosting included',
      'Free .co.za domain registration',
    ],
  },
  {
    name: 'Business Growth Plan',
    tagline: 'Perfect for growing businesses',
    price: '1,499',
    oldPrice: '2,998',
    features: [
      '5-page professional website',
      '3 professional email accounts',
      'WhatsApp chat integration',
      'Basic website analytics setup',
      'Basic social media posting (8 posts/month)',
      'Google Business Profile optimization',
    ],
  },
  {
    name: 'Enterprise Website',
    tagline: 'Custom tailor-made ecommerce',
    price: '3,499',
    oldPrice: null,
    features: [
      'Up to 15 custom designed layout pages',
      'Full online store / booking platform',
      'Integrated payment gateways (PayFast/etc.)',
      'Dedicated 24/7 priority support manager',
      'Premium SEO & Google analytics console',
    ],
  },
]

const steps = [
  {
    title: 'Free Strategy Call',
    description: 'A quick 15-minute call to understand your business objectives and targets.',
  },
  {
    title: 'We Build Your Preview',
    description: 'We design and configure your complete functional mockup website in 5 days.',
  },
  {
    title: 'You Review & Tweak',
    description: 'We perform detailed modifications until the design is absolutely perfect.',
  },
  {
    title: 'Launch & Go Live',
    description: 'Approve the final design, start month-to-month plan, and launch within 24 hours.',
  },
]

const faqs = [
  {
    q: 'Do I really pay nothing upfront?',
    a: 'Yes. We construct your preview layout completely for free. You only start subscribing after approving the preview design.',
  },
  {
    q: 'Can I cancel my plan anytime?',
    a: 'Absolutely. All our subscriptions are month-to-month with a basic 30 days notice to cancel, with no hidden lock-ins.',
  },
  {
    q: 'Why Next.js instead of WordPress?',
    a: 'WordPress is slow. Next.js loads under 2 seconds, which yields much better Google search rankings and 3x higher conversion rates.',
  },
  {
    q: 'Are updates and maintenance included?',
    a: 'Yes! Small modifications, monthly backups, hosting configurations, and security audits are fully handled on all plans.',
  },
]
