import { urlBase } from '@/lib/urlBase';
import useSWR from 'swr';

 
const fetcher = (url: string) => fetch(url).then((res) => res.json());

 
export function getAllProducts () {
  const { data, error, isLoading } = useSWR(`${urlBase}/api/products?populate=*`, fetcher);

  
  return {
    products: data?.data || [],
    error,
    isLoading,
  };
}


