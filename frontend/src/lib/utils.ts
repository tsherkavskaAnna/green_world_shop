import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStrapiURL() {
  return process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:1337';
}

export function getStrapiMedia(url: string | null) {
  if (!url) return null; // Gestione dei valori null o non definiti
  if (url.startsWith('data:')) return url; // Ritorna direttamente per i dati inline
  if (url.startsWith('http')) return url; // Ritorna direttamente per URL assoluti
  if (url.startsWith('/')) return `${getStrapiURL()}${url}`; // Aggiunge il dominio base a URL relativi
  return `${getStrapiURL()}/${url}`; // Aggiunge dominio base per percorsi relativi non ben formattati
}

