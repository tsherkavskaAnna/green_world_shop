import { urlBase } from '@/lib/urlBase';

export async function getProductBySlug(slug: string) {
  try {
    const response = await fetch(`${urlBase}/api/products/${slug}?populate=*`, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data[0] || null;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    new Error('Error fetching product');
  }
}
