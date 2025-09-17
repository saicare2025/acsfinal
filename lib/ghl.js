// lib/ghl.js
const API_BASE_URL = 'https://rest.gohighlevel.com/v1';

export async function ghlFetch(endpoint, options = {}) {
  const apiKey = process.env.GHL_API_KEY;

  if (!apiKey) {
    throw new Error('GHL API key is missing. Set NEXT_PUBLIC_GHL_API_KEY in your environment.');
  }

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    Version: '2021-07-28',
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const normalizedEndpoint = endpoint.replace(/^\/|\/$/g, '');
  const url = `${API_BASE_URL}/${normalizedEndpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMsg = data.message || response.statusText || 'Unknown GHL error';
      throw new Error(`GHL API Error: ${errorMsg}`);
    }

    return data;
  } catch (error) {
    console.error(`GHL request failed [${endpoint}]:`, error.message);
    throw new Error(`GHL fetch failed: ${error.message}`);
  }
}

export async function createContact(contactData) {
  const locationId = process.env.GHL_LOCATION_ID;

  if (!contactData?.email && !contactData?.phone) {
    throw new Error('Contact must have at least an email or phone number.');
  }

  const endpoint = locationId
    ? `contacts/?locationId=${locationId}`
    : 'contacts';

  return ghlFetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(contactData),
  });
}