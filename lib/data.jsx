import { headers } from 'next/headers';
import axios from 'axios';
let DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;

export function getDomain() {
  const headersList = headers();
  const referrer = headersList.get('host');
  const domainName = referrer.includes('localhost') ? DOMAIN : referrer.replace('www.', '');
  return domainName;
}

export function getDomainReferrer() {
  const headersList = headers();
  const referrer = headersList.get('host');
  return referrer;
}

export async function getData() {
  const domain = getDomain();
  const url = process.env.CONTRIB_API1 + `domains/getdomainconfig?domain=${domain}&key=${process.env.CONTRIB_API_KEY}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await res.json(); // Parse the JSON response
  return data;
}

export async function getTopsites() {
  const domain = getDomain();
  const url = process.env.CONTRIB_API1 + `domains/getTopsites?domain=${domain}&key=${process.env.CONTRIB_API_KEY}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await res.json(); // Parse the JSON response
  return data;
}
