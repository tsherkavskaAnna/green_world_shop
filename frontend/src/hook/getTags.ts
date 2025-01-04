import { urlBase } from '@/lib/urlBase';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function getTags() {
  const { data, error, isLoading } = useSWR(`${urlBase}/api/tags`, fetcher);
  return {
    tags: data?.data || [],
    error,
    isLoading,
  };
}
