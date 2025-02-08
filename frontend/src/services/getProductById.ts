import { urlBase } from '@/lib/urlBase';

export async function getProductById(id: string) {
  try {
    const response = await fetch(`${urlBase}/api/products/${id}`, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    return data.data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    new Error('Error fetching product');
  }
}
