import { urlBase } from '@/lib/urlBase';

export async function getKits() {
  try {
    const response = await fetch(`${urlBase}/api/kits?populate=*`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    new Error('Error fetching');
    return null;
  }
}
