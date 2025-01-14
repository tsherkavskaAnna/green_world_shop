/* eslint-disable @typescript-eslint/no-unused-vars */
import { urlBase } from '@/lib/urlBase';



export async function getCategories() {
  try {
    const response = await fetch(`${urlBase}/api/categories?populate=*`, {
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
    new Error('Failed to fetch products:');
  }
}
