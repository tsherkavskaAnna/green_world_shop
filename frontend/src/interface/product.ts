import { Locale } from '@/config/i18n-config';

export interface ImageProduct {
  id: number;
  alternativeText?: string;
  name: string;
  width: string;
  height: string;
  formats: ImageFormats;
  url: string;
}

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface ImageFormats {
  large?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  thumbnail?: ImageFormat;
}

export interface Review {
  id: string;
  documentId: string;
  comment: string;
  rating: number;
  author: string;
}

export interface Product {
  id: number;
  name: string;
  nickname: string;
  description: string;
  price: number;
  slug: string;
  image: ImageProduct[];
  size: string;
  category: string;
  reviews: Review[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  categories: string[];
  tags: string[];
  locale: Locale;
  localizations: Product[];
}
