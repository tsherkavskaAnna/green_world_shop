import { PaginationMeta, Product } from '@/interface/product';
import { urlBase } from '@/lib/urlBase';
import qs from 'qs';

export async function getFilters(
  size: string,
  category: string,
  tags: string[],
  maxPrice: number,
  locale: string = 'en',
  page: number = 1,
  pageSize: number = 8
): Promise<{ data: Product[]; pagination: PaginationMeta }> {
  const path = '/api/products';

  const url = new URL(path, urlBase);

  url.search = qs.stringify(
    {
      populate: '*',
      sort: ['name:desc'],
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
      locale,
      pagination: {
        page,
        pageSize,
      },
    },
    { encodeValuesOnly: true }
  );

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

  return {
    data: data.data,
    pagination: data.meta.pagination || {
      page: 1,
      pageSize: 0,
    },
  };
}

//?filters[size][$containsi]=${size}&populate=*
