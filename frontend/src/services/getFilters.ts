import { urlBase } from '@/lib/urlBase';
import qs from 'qs';

export async function getFilters(
  size: string,
  category: string,
  tags: string[],
  maxPrice: number
) {
  const path = '/api/products';

  const url = new URL(path, urlBase);

  url.search = qs.stringify({
    populate: '*',
    filters: {
      ...(size && {
        size: {
          $containsi: size,
        },
      }),
      ...(category && {
        category: {
          name: {
            $eq: category,
          },
        },
      }),
      ...(tags.length > 0 && {
        tags: {
          name: {
            $in: tags,
          },
        },
      }),
      ...(maxPrice && {
        price: {
          $lte: maxPrice,
        },
      }),
    },
  });

  const response = await fetch(url, {
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

  return data.data || [];
}

//?filters[size][$containsi]=${size}&populate=*
