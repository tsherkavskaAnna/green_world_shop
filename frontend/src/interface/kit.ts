import { Locale } from '@/config/i18n-config';
import { ImageProduct } from './product';

export interface Kit {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  image: ImageProduct[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: Locale;
}
