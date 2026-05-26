'use client';

export type LeadRecord = Record<string, unknown>;

export function saveLead(lead: LeadRecord) {
  try {
    const existing = JSON.parse(localStorage.getItem('nmas_leads') || '[]');
    const next = Array.isArray(existing) ? [...existing, { ...lead, timestamp: new Date().toISOString() }] : [{ ...lead, timestamp: new Date().toISOString() }];
    localStorage.setItem('nmas_leads', JSON.stringify(next));
    console.log('nmas_leads saved', { ...lead, timestamp: next[next.length - 1].timestamp });
  } catch (err) {
    console.error('Failed to save lead in localStorage:', err);
  }
}
