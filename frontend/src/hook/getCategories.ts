import { urlBase } from '@/lib/urlBase';
import useSWR from 'swr';

 
const fetcher = (url: string) => fetch(url).then((res) => res.json());
 
export function getCategories () {
  const { data, error, isLoading } = useSWR(`${urlBase}/api/categories`, fetcher);
  return {
    categories: data?.data || [],
    error,
    isLoading,
  };
}

