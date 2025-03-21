import { Product } from '@/interface/product';

import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*pagination[pageSize]=100`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await res.json();

  const singleProduct: MetadataRoute.Sitemap = data.data.map(
    (product: Product) => ({
      url: `${process.env.NEXTAUTH_URL}/products/${product.slug}?pagination[pageSize]=100`,
    })
  );
  return [
    {
      url: `${process.env.NEXTAUTH_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: `${process.env.NEXTAUTH_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${process.env.NEXTAUTH_URL}/gifts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...singleProduct,
  ];
}
