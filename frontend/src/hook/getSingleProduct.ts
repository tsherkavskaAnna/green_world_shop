import { urlBase } from '@/lib/urlBase';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
 
export function getSingleProduct (id: string) {
  const { data, error, isLoading } = useSWR(`${urlBase}/api/products/${id}`, fetcher);
  return {
    product: data?.data || [],
    error,
    isLoading,
  };
}


