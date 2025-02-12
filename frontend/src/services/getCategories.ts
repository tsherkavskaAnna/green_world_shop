import { urlBase } from '@/lib/urlBase';

export async function getCategories() {
  try {
    const response = await fetch(`${urlBase}/api/categories`, {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
      },
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data || [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    new Error('Error fetching');
    return null;
  }
}
