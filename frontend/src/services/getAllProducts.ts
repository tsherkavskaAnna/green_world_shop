import { PaginationMeta, Product } from '@/interface/product';
import { urlBase } from '@/lib/urlBase';
import qs from 'qs';

export async function getAllProducts(
  page: number = 1,
  pageSize: number = 8,
  locale: string = 'en'
): Promise<{ data: Product[]; pagination: PaginationMeta }> {
  const path = '/api/products';

  const url = new URL(path, urlBase);

  url.search = qs.stringify(
    {
      populate: '*',
      sort: ['name:desc'],
      locale,
      pagination: {
        page,
        pageSize,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const response = await fetch(url, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  const data = await response.json();

  return {
    data: data.data,
    pagination: data.meta.pagination || {
      page: 1,
      pageSize: 0,
    },
  };
}
