// Type definitions for NMAS WebCraft

export interface PricingTier {
  name: string;
  badge: string;
  price: number;
  setup: number;
  features: string[];
  featured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface FormData {
  name: string;
  business: string;
  email: string;
  phone: string;
  plan: string;
  message: string;
}