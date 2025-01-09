import { urlBase } from '@/lib/urlBase';

export async function getTags() {
  try {
    const response = await fetch(`${urlBase}/api/tags?populate=*`, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
}
