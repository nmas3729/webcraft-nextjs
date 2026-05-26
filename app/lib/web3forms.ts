'use client';

export interface Web3FormsPayload {
  subject: string;
  message: string;
  name?: string;
  email?: string;
  reply_to?: string;
}

// Replace YOUR_ACCESS_KEY with your Web3Forms access key.
// Sign up for free at https://web3forms.com and get your access key.
const WEB3FORMS_ACCESS_KEY = 'f4b971f0-473c-4068-8bbe-cd06e13e17d2';
const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

export async function sendWeb3FormsEmail(payload: Web3FormsPayload) {
  const body = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: payload.subject,
    message: payload.message,
    from_name: payload.name || 'NMAS WebCraft Lead',
    email: payload.email || 'noreply@webcraft.nmas.co.za',
    replyto: payload.reply_to || payload.email || 'noreply@webcraft.nmas.co.za',
    botcheck: false,
  };

  const response = await fetch(WEB3FORMS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Web3Forms request failed: ${response.status}`);
  }

  return response.json();
}
