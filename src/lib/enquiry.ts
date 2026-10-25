// Enquiry form: validation + submission. No enquiry backend exists yet (Strapi/CRM phase), so delivery is opt-in:
// set NEXT_PUBLIC_ENQUIRY_ENDPOINT to a URL that accepts a JSON POST. Without it, submissions are NOT sent
// and the UI says so instead of pretending the enquiry was delivered.

export type EnquiryValues = { name: string; email: string; phone: string; programme: string; message: string };
export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;
export type SubmitResult = { status: 'sent' } | { status: 'unconfigured' } | { status: 'error'; message: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Digits only; for India a leading +91 / 91 / 0 typed by mistake is dropped. */
export const normalisePhone = (v: string, iso = 'in') => {
  const d = v.replace(/[\s\-().]/g, '');
  return iso === 'in' ? d.replace(/^(\+?91|0)(?=\d{10}$)/, '') : d.replace(/^\+/, '').replace(/^0+/, '');
};

export function validate(v: EnquiryValues, iso = 'in'): EnquiryErrors {
  const e: EnquiryErrors = {};
  const name = v.name.trim();
  if (!name) e.name = 'Enter your full name.';
  else if (name.length < 2) e.name = 'Name looks too short.';
  else if (!/\p{L}/u.test(name)) e.name = 'Name must contain letters.';
  if (!v.email.trim()) e.email = 'Enter your email address.';
  else if (!EMAIL.test(v.email.trim())) e.email = 'Enter a valid email, like name@example.com.';
  if (!v.phone.trim()) e.phone = 'Enter your mobile number.';
  else if (iso === 'in' ? !/^[6-9]\d{9}$/.test(normalisePhone(v.phone, iso)) : !/^\d{6,14}$/.test(normalisePhone(v.phone, iso)))
    e.phone = iso === 'in' ? 'Enter a valid 10-digit Indian mobile number.' : 'Enter a valid phone number (6-14 digits).';
  if (!v.programme) e.programme = 'Choose the programme you are interested in.';
  if (v.message.length > 500) e.message = 'Keep the message under 500 characters.';
  return e;
}

export async function submitEnquiry(v: EnquiryValues, signal?: AbortSignal): Promise<SubmitResult> {
  const endpoint = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;
  if (!endpoint) return { status: 'unconfigured' };
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...v, name: v.name.trim(), email: v.email.trim(), phone: v.phone, source: location.pathname }),
      signal,
    });
    if (!res.ok) return { status: 'error', message: 'The enquiry service did not accept your request. Please try again in a moment.' };
    return { status: 'sent' };
  } catch (err) {
    if ((err as Error).name === 'AbortError') return { status: 'error', message: 'Request cancelled.' };
    return { status: 'error', message: 'Could not reach the server. Check your connection and try again.' };
  }
}
